const $=s=>document.querySelector(s),app=$('#app');
const COL=['#ffb86b','#f6e05e','#7ee2b8','#b79bff','#ff7aa8','#ff9f80','#9be15d','#f78fb3','#ffd1dc','#8ad4c0','#ffc46b','#c3a6ff'];
const TILT=45,KY=1/Math.cos(TILT*Math.PI/180),CHEER=['Nice move!','Smart!','Keep going!','Clear the path!','Think ahead…','Good one!'];
let LV=[],CFG={},P=[],pos=[],moves=[],lv=0,hints=0,secs=0,paused=false,over=false,timer,C=64,drag=null;
let SAVE=JSON.parse(localStorage.getItem('orbescape')||'{"unlocked":1,"best":{}}');
const save=()=>localStorage.setItem('orbescape',JSON.stringify(SAVE));
const api=(u,b)=>fetch(u,b?{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)}:{}).then(r=>r.json());
const total=ex=>Object.entries(SAVE.best).reduce((a,[k,v])=>a+(+k-1==ex?0:v.score),0);
const pot=()=>Math.max(50,CFG.base*LV[lv].id+CFG.per*(LV[lv].limit-moves.length)-CFG.pen*hints);
const say=t=>$('#say').textContent=t,blk=i=>document.querySelector(`.blk[data-i="${i}"]`);
const modal=h=>{$('#card').innerHTML=h;$('#modal').classList.add('on')},closeModal=()=>$('#modal').classList.remove('on');
// ---- moving creatures ----
[['🦋',22,.18,0],['🦋',28,.45,-9],['🦋',19,.7,-4],['🐦',34,.1,-6],['🐦',40,.3,-20],['🐠',30,.86,-5],['🐟',36,.93,-14],['🐝',24,.55,-11],['🦜',46,.22,-30]].forEach(([e,d,t,dl],k)=>{
 const c=document.createElement('div');c.className='cr';c.style.cssText=`top:${t*100}%;animation-duration:${d}s;animation-delay:${dl}s;z-index:${k%3?1:5}`;c.innerHTML=`<span><i>${e}</i></span>`;document.body.appendChild(c)});
for(let i=0;i<16;i++){const f=document.createElement('div');f.className='ff';f.style.cssText=`left:${Math.random()*100}%;top:${20+Math.random()*75}%;animation-delay:-${Math.random()*6}s;animation-duration:${4+Math.random()*5}s`;document.body.appendChild(f)}
// ---- screens ----
function home(){document.body.className='home';app.innerHTML=`<section class="hero"><div class="cube3"><div></div><div></div><div></div><div></div><div></div><div></div><b></b></div><h1>ORB<span>ESCAPE</span></h1><p>Slide the 3D blocks and free the glowing blue orb before your moves run out.</p><button class="btn" data-a="play">▶ Play</button><button class="btn ghost" data-a="levels">Levels</button><button class="btn ghost" data-a="how">How to play</button></section>`;say('Hoot! Free the orb!')}
function levels(){document.body.className='home';app.innerHTML='<h2 class="ttl">Choose a level</h2><div class="lv">'+LV.map((l,i)=>{const u=i<SAVE.unlocked,b=SAVE.best[l.id]||{};return `<button class="lc${u?'':' lock'}" data-i="${i}"><small>Level ${l.id}</small><h3>${l.name}</h3><div class="st">${'★'.repeat(b.stars||0)}${'☆'.repeat(3-(b.stars||0))}</div><p>Par ${l.par} · Limit ${l.limit} moves</p><p>${u?(b.score?'Best '+b.score:l.tip):'🔒 Locked'}</p></button>`}).join('')+'</div>';
 document.querySelectorAll('.lc').forEach(b=>b.onclick=()=>{if(!b.classList.contains('lock'))play(+b.dataset.i)})}
function play(i){lv=i;const l=LV[i];P=l.pieces;pos=P.map(p=>p.x);moves=[];hints=0;secs=0;paused=false;over=false;closeModal();document.body.className='ingame';
 app.innerHTML=`<div class="stage"><div class="board" id="board"><div class="exit">➜</div></div></div><p class="tip">${l.tip}</p>`;
 C=Math.min(64,Math.floor((innerWidth-90)/6.6));$('#board').style.setProperty('--c',C+'px');
 P.forEach((p,k)=>{const e=document.createElement('div');e.className='blk '+(p.h?'hz':'vt')+(k?'':' hero-blk');e.dataset.i=k;e.style.setProperty('--col',COL[(k*5)%COL.length]);e.innerHTML='<i class="t"></i><i class="s"></i><i class="e"></i>'+(k?'':'<b class="orb"></b>');$('#board').appendChild(e);place(k,pos[k])});
 $('#spar').textContent=l.par;$('#slim').textContent=l.limit;hud();clearInterval(timer);timer=setInterval(()=>{if(!paused&&!over){secs++;hud()}},1000);say(l.say)}
function place(i,v){const p=P[i],e=blk(i);e.style.width=(p.h?p.l:1)*C-8+'px';e.style.height=(p.h?1:p.l)*C-8+'px';e.style.left=(p.h?v:p.f)*C+4+'px';e.style.top=(p.h?p.f:v)*C+4+'px'}
function hud(){const l=LV[lv];$('#sl').textContent=l.id;$('#sm').textContent=moves.length;$('#stime').textContent=Math.floor(secs/60)+':'+String(secs%60).padStart(2,'0');$('#ss').textContent=total(lv)+pot();$('#sm').parentElement.classList.toggle('warn',l.limit-moves.length<=3)}
// ---- gameplay ----
function grid(skip){const g=Array.from({length:6},()=>Array(6).fill(-1));P.forEach((p,i)=>{if(i==skip)return;for(let k=0;k<p.l;k++)g[p.h?p.f:pos[i]+k][p.h?pos[i]+k:p.f]=i});return g}
function reach(i){const p=P[i],g=grid(i),at=y=>p.h?g[p.f][y]:g[y][p.f];let lo=pos[i],hi=lo;while(lo>0&&at(lo-1)<0)lo--;while(hi+p.l<6&&at(hi+p.l)<0)hi++;return[lo,hi]}
document.addEventListener('pointerdown',e=>{const b=e.target.closest('.blk');if(!b||paused||over)return;const i=+b.dataset.i;drag={i,b,sx:e.clientX,sy:e.clientY,x0:pos[i],r:reach(i),v:pos[i]};b.classList.add('drag');b.setPointerCapture(e.pointerId)});
document.addEventListener('pointermove',e=>{if(!drag)return;const p=P[drag.i],d=p.h?(e.clientX-drag.sx)/C:(e.clientY-drag.sy)*KY/C;drag.v=Math.max(drag.r[0],Math.min(drag.r[1],drag.x0+d));place(drag.i,drag.v)});
document.addEventListener('pointerup',()=>{if(!drag)return;const{i,b,x0}=drag,y=Math.round(drag.v);b.classList.remove('drag');drag=null;pos[i]=y;place(i,y);if(y!=x0)commit(i,x0,y)});
function commit(i,x0,y){moves.push([i,y,x0]);hud();say(CHEER[Math.random()*CHEER.length|0]);if(i==0&&y==4)return win();if(moves.length>=LV[lv].limit)lose()}
function sparks(){const s=$('.stage');for(let k=0;k<12;k++){const e=document.createElement('span'),a=k/12*6.28;e.className='sp';e.textContent='✨';e.style.cssText=`--dx:${Math.cos(a)*150}px;--dy:${Math.sin(a)*150-60}px`;s.appendChild(e)}}
function win(){over=true;blk(0).classList.add('freed');sparks();say('Hooray! 🎉');const l=LV[lv];
 api('/api/verify',{level:l.id,moves:moves.map(m=>[m[0],m[1]]),hints,time:secs}).then(r=>setTimeout(()=>{
  if(!r.ok)return modal('<h2>Could not verify the run</h2><button class="btn" data-a="retry">Retry</button>');
  const b=SAVE.best[l.id];if(!b||r.score>b.score)SAVE.best[l.id]={score:r.score,stars:Math.max(r.stars,b?b.stars:0)};SAVE.unlocked=Math.max(SAVE.unlocked,Math.min(3,l.id+1));save();
  modal(`<h2>Orb freed! 🎉</h2><div class="stars">${'★'.repeat(r.stars)}${'☆'.repeat(3-r.stars)}</div><p>Moves ${moves.length} · Par ${l.par}</p><div class="big">+${r.score}</div><p>Total score ${total(-1)}</p>${lv<2?'<button class="btn" data-a="next">Next level ▶</button>':'<button class="btn" data-a="fin">Finish 🏆</button>'}<button class="btn ghost" data-a="retry">Replay</button><button class="btn ghost" data-a="levels">Levels</button>`)},1900))}
function lose(){over=true;say('Oh no! 😿');setTimeout(()=>modal('<h2>Out of moves 😿</h2><p>The orb is still trapped. Try a smarter route!</p><button class="btn" data-a="retry">Retry</button><button class="btn ghost" data-a="levels">Levels</button>'),600)}
$('#undo').onclick=()=>{if(!moves.length||over||paused)return;const[i,,x]=moves.pop();pos[i]=x;place(i,x);hud()};
$('#reset').onclick=()=>{if(document.body.classList.contains('ingame'))play(lv)};
$('#pause').onclick=()=>{if(over)return;paused=true;modal('<h2>⏸ Paused</h2><button class="btn" data-a="resume">▶ Resume</button><button class="btn ghost" data-a="retry">⟲ Restart</button><button class="btn ghost" data-a="levels">Levels</button>')};
$('#hint').onclick=()=>{if(over||paused)return;api('/api/hint',{level:LV[lv].id,state:pos}).then(r=>{if(!r.move)return say('No hint available');hints++;hud();const[i,y]=r.move,p=P[i],n=Math.abs(y-pos[i]),d=p.h?(y>pos[i]?'right':'left'):(y>pos[i]?'down':'up');
 const b=blk(i);b.classList.add('hintglow');setTimeout(()=>b.classList.remove('hintglow'),2600);say(`Slide the glowing block ${d} by ${n} (−${CFG.pen} pts)`)})};
$('#menu').onclick=()=>{paused=true;modal(`<h2>Menu</h2>${document.body.classList.contains('ingame')?'<button class="btn" data-a="resume">▶ Resume</button>':''}<button class="btn ghost" data-a="home">🏠 Home</button><button class="btn ghost" data-a="levels">Levels</button><button class="btn ghost" data-a="how">How to play</button><button class="btn ghost" data-a="board">Leaderboard</button>`)};
// ---- actions ----
const lb=b=>'<table>'+b.map((r,i)=>`<tr><td>${i+1}</td><td>${r.name}</td><td>${r.score}</td></tr>`).join('')+'</table>';
const act={resume(){paused=false;closeModal()},retry(){play(lv)},next(){play(lv+1)},play(){levels()},levels(){paused=false;closeModal();levels()},home(){paused=false;closeModal();clearInterval(timer);home()},
 how(){modal(`<h2>How to play</h2><p>Drag each block along its groove.<br>Slide the <b>glass block holding the blue orb</b> to the glowing exit.<br>Finish within the move limit — fewer moves, more stars.<br>💡 Hints show the best next move (−${CFG.pen} pts). ↶ Undo gives a move back.</p><button class="btn" data-a="resume">Got it</button>`)},
 board(){api('/api/leaderboard').then(b=>modal('<h2>🏆 Leaderboard</h2>'+(b.length?lb(b):'<p>No scores yet.</p>')+'<button class="btn" data-a="resume">Close</button>'))},
 fin(){modal(`<h2>🏆 All levels cleared!</h2><div class="big">${total(-1)}</div><input id="nm" placeholder="Your name" maxlength="20"><br><button class="btn" data-a="save">Save score</button><div id="lb"></div><button class="btn ghost" data-a="levels">Levels</button>`)},
 save(){api('/api/score',{name:$('#nm').value||'Player',score:total(-1)}).then(b=>$('#lb').innerHTML=lb(b))}};
document.addEventListener('click',e=>{const a=e.target.closest('[data-a]');if(a&&act[a.dataset.a])act[a.dataset.a]()});
api('/api/levels').then(d=>{LV=d.levels;CFG=d.cfg;home()}).catch(()=>app.innerHTML='<section class="hero"><h2>Start the Python server</h2><p>Run <b>python server.py</b> and open http://localhost:8000</p></section>');
