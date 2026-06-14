/* Main JS extracted from inline script - keeps behavior identical */
// HEADER
window.addEventListener('scroll',()=>document.getElementById('hdr').classList.toggle('scrolled',scrollY>50),{passive:true});

// REVEAL
(function(){
  const ro=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');ro.unobserve(e.target);}});},{threshold:.1});
  document.querySelectorAll('.rev,.rev-l,.rev-r').forEach(el=>ro.observe(el));
})();

// BA DATA
const PAIRS=[
  {b:'assets/ACIER-FONTE/ACIER 1 BEFOR.webp',a:'assets/ACIER-FONTE/ACIER 1 AFTER.webp',l:'Acier — Structure',cat:'Acier/Fonte'},
  {b:'assets/ACIER-FONTE/ACIER 2 BEFOR.webp',a:'assets/ACIER-FONTE/ACIER 2 AFTER.webp',l:'Acier — Portail',cat:'Acier/Fonte'},
  {b:'assets/ACIER-FONTE/ACIER 3 BEFOR.webp',a:'assets/ACIER-FONTE/ACIER 4 AFTER.webp',l:'Acier — Métal',cat:'Acier/Fonte'},
  {b:'assets/ACIER-FONTE/ACIER 6 BEFOR.webp',a:'assets/ACIER-FONTE/ACIER 6 AFTER.webp',l:'Acier — Surface',cat:'Acier/Fonte'},
  {b:'assets/INOX/INOX 1 BEFOR.webp',a:'assets/INOX/INOX 1 AFTER.webp',l:'Inox — Évier',cat:'Inox'},
  {b:'assets/INOX/INOX 2 BEFOR .webp',a:'assets/INOX/INOX 2 AFTER.webp',l:'Inox — Surface',cat:'Inox'},
  {b:'assets/PEINTURE/PEINTURE 2 BEFOR .webp',a:'assets/PEINTURE/PEINTURE 2 AFTER.webp',l:'Peinture — Surface',cat:'Peinture'},
  {b:'assets/REVETEMENT/REVETEMENT 1 BEFOR.webp',a:'assets/REVETEMENT/REVETEMENT 1 AFTER .webp',l:'Revêtement — Carrelage',cat:'Revêtement'},
  {b:'assets/SANITAIRE/SANITAIRE 5  BEFOR.webp',a:'assets/SANITAIRE/SANITAIRE 5 AFTER.webp',l:'Sanitaire — Carrelage',cat:'Sanitaire'},
  {b:'assets/INOX/INOX 6 BEFOR.webp',a:'assets/INOX/INOX 6 AFTER.webp',l:'Inox — Structure',cat:'Inox'},
  {b:'assets/INOX/INOX 7 BEFOR.webp',a:'assets/INOX/INOX 7 AFTER.webp',l:'Inox — Pièce',cat:'Inox'},
  {b:'assets/INOX/INOX 8 BEFOR.webp',a:'assets/INOX/INOX 8 AFTER.webp',l:'Inox — Récipient',cat:'Inox'},
  {b:'assets/PEINTURE/PEINTURE 1 BEFOR.webp',a:'assets/PEINTURE/PEINTURE 1 AFTER.webp',l:'Peinture — Métal peint',cat:'Peinture'},
  {b:'assets/REVETEMENT/REVETEMENT 2 BEFOR.webp',a:'assets/REVETEMENT/REVETEMENT 2 AFTER.webp',l:'Revêtement — Sol',cat:'Revêtement'},
  {b:'assets/REVETEMENT/REVETEMENT 3 BEFOR.webp',a:'assets/REVETEMENT/REVETEMENT 3 AFTER.webp',l:'Revêtement — Dalle',cat:'Revêtement'},
  {b:'assets/REVETEMENT/REVETEMENT 5 BEFOR.webp',a:'assets/REVETEMENT/REVETEMENT 5 AFTER.webp',l:'Revêtement — Terrasse',cat:'Revêtement'},
  {b:'assets/SANITAIRE/SANITAIRE 1 BEFOR.webp',a:'assets/SANITAIRE/SANITAIRE 1 AFTER.webp',l:'Sanitaire — WC',cat:'Sanitaire'},
  {b:'assets/SANITAIRE/SANITAIRE 2 BEFOR.webp',a:'assets/SANITAIRE/SANITAIRE 2 AFTER.webp',l:'Sanitaire — Lavabo',cat:'Sanitaire'},
  {b:'assets/SANITAIRE/SANITAIRE 3 BEFOR.webp',a:'assets/SANITAIRE/SANITAIRE 3 AFTER.webp',l:'Sanitaire — Baignoire',cat:'Sanitaire'},
  {b:'assets/SANITAIRE/SANITAIRE 4 BEFOR.webp',a:'assets/SANITAIRE/SANITAIRE 4 AFTER.webp',l:'Sanitaire — Surface',cat:'Sanitaire'},
  {b:'assets/TEXTILE/TEXTILE 1 BEFOR.webp',a:'assets/TEXTILE/TEXTILE 1 AFTER.webp',l:'Textile — Tissu',cat:'Textile'},
  {b:'assets/INOX/INOX 2 BEFOR.webp',a:'assets/INOX/INOX 2 AFTER.webp',l:'Inox — Surface',cat:'Inox'},
  {b:'assets/PEINTURE/PEINTURE 2 BEFOR.webp',a:'assets/PEINTURE/PEINTURE 2 AFTER.webp',l:'Peinture — Surface',cat:'Peinture'},
  {b:'assets/REVETEMENT/REVETEMENT 1 BEFOR.webp',a:'assets/REVETEMENT/REVETEMENT 1 AFTER.webp',l:'Revêtement — Carrelage',cat:'Revêtement'},
  {b:'assets/SANITAIRE/SANITAIRE 5 BEFOR.webp',a:'assets/SANITAIRE/SANITAIRE 5 AFTER.webp',l:'Sanitaire — Carrelage',cat:'Sanitaire'},
  ...[1,4,5,6,7,8,10,13,14,15,16,18,21,22,23,24,25,26,27,29,30,31,34,36,37,38,39].map(n=>({
    b:`assets/${n}-1.jpg`,
    a:`assets/${n}-2.jpg`,
    l:`Démonstration #${n}`,cat:'extra'
  }))
];

// BA CARD FACTORY
function makeBA(p,opts={}){
  const wrap=document.createElement('div');
  if(opts.big) wrap.className='ba-big-card';
  else wrap.className='ba-card';
  wrap.innerHTML=`
    <div class="ba-inner"${opts.big?' style="aspect-ratio:16/7"':''}>
      <div class="ba-bef"><img src="${p.b}" alt="Avant" draggable="false" loading="${opts.eager?'eager':'lazy'}"></div>
      <div class="ba-aft"><img src="${p.a}" alt="Après" draggable="false" loading="${opts.eager?'eager':'lazy'}"></div>
      <div class="ba-div"></div><div class="ba-hdl">↔</div>
      <div class="ba-lb">AVANT</div><div class="ba-la">APRÈS</div>
    </div>
    ${opts.big?'':'<div class="ba-lbl">'+p.l+'</div>'}`;
  const inner=wrap.querySelector('.ba-inner');
  const aft=wrap.querySelector('.ba-aft');
  const div=wrap.querySelector('.ba-div');
  const hdl=wrap.querySelector('.ba-hdl');
  let drag=false;
  function setP(cx){
    const r=inner.getBoundingClientRect();
    const pct=Math.max(5,Math.min(95,(cx-r.left)/r.width*100));
    aft.style.clipPath=`inset(0 ${100-pct}% 0 0)`;
    div.style.left=pct+'%';hdl.style.left=pct+'%';
  }
  requestAnimationFrame(()=>{const r=inner.getBoundingClientRect();if(r.width)setP(r.left+r.width*.5);});
  inner.addEventListener('mousedown',e=>{drag=true;setP(e.clientX);e.preventDefault();});
  window.addEventListener('mousemove',e=>{if(drag)setP(e.clientX);});
  window.addEventListener('mouseup',()=>drag=false);
  inner.addEventListener('touchstart',e=>{drag=true;setP(e.touches[0].clientX);},{passive:true});
  window.addEventListener('touchmove',e=>{if(drag)setP(e.touches[0].clientX);},{passive:true});
  window.addEventListener('touchend',()=>drag=false);
  return wrap;
}

// hero BA - VIDEO INSTEAD OF SLIDER
(function(){
  const heroBig=document.getElementById('hero-ba-big');
  if(heroBig) {
    const vidWrap=document.createElement('div');
    vidWrap.className='ba-big-card';
    vidWrap.innerHTML=`
      <div class="ba-inner" style="aspect-ratio:16/7;background:#1a0800;display:flex;align-items:center;justify-content:center;">
        <video src="assets/oxi-demo-1.mp4" style="height:100%;display:block;" controls muted playsinline preload="metadata"></video>
      </div>`;
    heroBig.appendChild(vidWrap);
  }
  const heroSmall=document.getElementById('hero-ba-wrap');
  if(heroSmall){
    const c=makeBA(PAIRS[4],{eager:true});
    c.style.borderRadius='8px';
    heroSmall.appendChild(c);
  }
})();

// gallery
(function(){
  const PAGE=12;let curF='all',curP=0;
  function filtered(){return curF==='all'?PAIRS:PAIRS.filter(p=>p.cat===curF);} 
  function renderGallery(reset){
    const grid=document.getElementById('ba-grid');
    if(reset){grid.innerHTML='';curP=0;}
    filtered().slice(curP*PAGE,(curP+1)*PAGE).forEach(p=>grid.appendChild(makeBA(p)));
    curP++;
    const btn=document.getElementById('lmbtn');
    const more=curP*PAGE<filtered().length;
    btn.disabled=!more;
    btn.textContent=more?'Voir plus de résultats ↓':'Tous les résultats ✓';
  }
  renderGallery(true);
  document.getElementById('lmbtn').addEventListener('click',()=>renderGallery(false));
  document.querySelectorAll('.ftab').forEach(tab=>{
    tab.addEventListener('click',()=>{
      document.querySelectorAll('.ftab').forEach(t=>t.classList.remove('on'));
      tab.classList.add('on');curF=tab.dataset.f;renderGallery(true);
    });
  });
})();

// Legacy FAQ (fqq/fqi) removed — site uses faq2 handlers instead

// ORDER
(function(){
  let selP=49,selS=7;
  function upd(){
    const tp=document.getElementById('totp');
    if(tp) tp.textContent=selP+selS;
    const sn=document.getElementById('snote');
    if(sn) sn.textContent=selS===0?'✓ Livraison offerte':`+ ${selS} DT livraison`;
    const sbar=document.querySelector('#sbar .sp');
    if(sbar) sbar.textContent=`${selP+selS} DT`;
  }
  document.querySelectorAll('.qopt').forEach(opt=>{
    opt.addEventListener('click',()=>{
      document.querySelectorAll('.qopt').forEach(o=>o.classList.remove('sel'));
      opt.classList.add('sel');selP=+opt.dataset.p;selS=+opt.dataset.s;upd();
    });
  });
  const orderbtn=document.getElementById('orderbtn');
  if(orderbtn){
    orderbtn.addEventListener('click',async ()=>{
      const n=document.getElementById('f-name').value.trim();
      const p=document.getElementById('f-phone').value.trim();
      const g=document.getElementById('f-gov').value;
      const a=document.getElementById('f-addr').value.trim();
      if(!n||!p||!g||!a){alert('Veuillez remplir tous les champs obligatoires.');return;}
      document.getElementById('h-name').value=n;
      document.getElementById('h-phone').value=p;
      document.getElementById('h-gov').value=g;
      document.getElementById('h-addr').value=a;
      const qtyEl=document.querySelector('.qopt.sel')||document.querySelector('.qopt');
      const qtyNumber = qtyEl? (qtyEl.textContent.match(/(\d+) Bouteille/)? RegExp.$1 : '1') : '1';
      document.getElementById('h-qty').value=qtyNumber;
      document.getElementById('h-total').value=(selP+selS);

      const btn=orderbtn;
      btn.disabled=true;btn.innerHTML='Envoi en cours...';

      try{
        const formData=new FormData();
        formData.append('form-name','order');
        formData.append('name',n);
        formData.append('phone',p);
        formData.append('gov',g);
        formData.append('addr',a);
        formData.append('quantity',document.getElementById('h-qty').value);
        formData.append('total',document.getElementById('h-total').value);

        let success=false;
        try{
          const res=await fetch('/',{method:'POST',body:formData});
          if(res.ok) success=true;
        }catch(_e){}

        const FORMSPREE_EMAIL='energie.ingenierie@gmail.com';
        try{
          if(!success && FORMSPREE_EMAIL){
            const ep='https://formspree.io/'+encodeURIComponent(FORMSPREE_EMAIL);
            const fres=await fetch(ep,{method:'POST',headers:{'Accept':'application/json'},body:formData});
            if(fres.ok) success=true;
          }
        }catch(_e){}

        if(success){
          btn.innerHTML='✅ Commande confirmée — Tunitek vous contacte sous peu';
          btn.style.background='#2e7d32';btn.style.borderColor='#1b5e20';
        }else{
          throw new Error('Erreur envoi');
        }
      }catch(e){
        btn.disabled=false;btn.innerHTML='Commander maintenant';
        alert('Erreur lors de l\'envoi. Veuillez réessayer ou contacter +216 53 016 888');
      }
    });
  }
})();

// LIVE
(function tick(){
  const el=document.getElementById('lcount');
  if(el) el.textContent=Math.floor(Math.random()*14)+18;
  setTimeout(tick,Math.random()*7000+4000);
})();

// expose helper used by inline handlers
function scrollToOrder(){
  const el=document.getElementById('order');
  if(el) el.scrollIntoView({behavior:'smooth'});
}
window.scrollToOrder = scrollToOrder;

// FAQ 2-COL
(function(){
  document.querySelectorAll('.faq2').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const ans=btn.nextElementSibling;
      const isOpen=btn.classList.contains('open');
      document.querySelectorAll('.faq2').forEach(b=>{b.classList.remove('open');b.nextElementSibling.classList.remove('open');});
      if(!isOpen){btn.classList.add('open');ans.classList.add('open');}
    });
  });
})();
