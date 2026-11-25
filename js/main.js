{
const progs=[
 ["Victim Support Fund","Sponsors corrective surgery, antibiotics, dressings and hospital stays for victims who cannot afford modern care.","Photo: patient after surgery"],
 ["Awareness & Advocacy","Church talks, market outreaches, radio jingles and school visits on why fractures belong in the hospital.","Photo: church awareness session"],
 ["Hospital Liaison & Referral","Builds partnerships with orthopaedic hospitals for fast, discounted referral — and urges bonesetters to refer early.","Photo: partner hospital visit"],
 ["Rehabilitation & Mobility","Physiotherapy, prosthetics and mobility aids, and a peer network of survivors who walked off their crutches.","Video: a survivor’s recovery"]];
const $=id=>document.getElementById(id)||{};
$('progMini').innerHTML=progs.map(p=>`<div class="card"><h3>${p[0]}</h3><p>${p[1]}</p></div>`).join('');
$('progFull').innerHTML=progs.map(p=>`<div class="card"><div class="ph${p[2].startsWith('Video')?' v':''}">${p[2]}</div><h3>${p[0]}</h3><p>${p[1]}</p></div>`).join('');

const team=[["LO","Bro. Linus Ochube","Founder & Convener","A survivor of bonesetter complications and chronic osteomyelitis who walked free after four orthopaedic surgeries. A Christian book merchant inspired by the Good Samaritan."],
 ["—","Board Chair","Position open","To be appointed. Ideally a respected community or church leader."],
 ["—","Medical Adviser","Position open","To be appointed. An orthopaedic surgeon to guide referrals and case reviews."],
 ["—","Trustee, Finance","Position open","To be appointed. A chartered accountant to oversee audits and donor reporting."]];
$('team').innerHTML=team.map(t=>`<div class="card"><div class="avatar">${t[0]}</div><h3>${t[1]}</h3><span class="tag">${t[2]}</span><p>${t[3]}</p></div>`).join('');

const posts=[["Story","Why I started No More Crutches","Our founder shares the long road from bonesetter homes to the operating theatre at Igbobi."],
 ["Research","What Nigerian doctors say about bonesetter complications","A plain-language summary of published studies on non-union, mal-union and limb gangrene."],
 ["Guide","Broken bone? Five things to do in the first 24 hours","Simple, safe first steps for families before reaching a hospital."]];
$('posts').innerHTML=posts.map(p=>`<article class="card" style="margin-bottom:14px"><span class="tag">${p[0]}</span><h3>${p[1]}</h3><p>${p[2]}</p></article>`).join('');
const evs=[["JAN","17","Foundation launch & thanksgiving","Lagos · venue to be confirmed"],["FEB","21","Church awareness Sunday","Partner churches, Lagos"],["MAR","23","Walk Free Day — founder’s anniversary","Community walk & free bone-health talks"]];
$('events').innerHTML=evs.map(e=>`<div class="ev"><div class="date"><b>${e[1]}</b>${e[0]}</div><div><h3 style="margin:0 0 4px">${e[2]}</h3><span class="note">${e[3]}</span></div></div>`).join('');

const states="Abia Adamawa Akwa-Ibom Anambra Bauchi Bayelsa Benue Borno Cross-River Delta Ebonyi Edo Ekiti Enugu FCT-Abuja Gombe Imo Jigawa Kaduna Kano Katsina Kebbi Kogi Kwara Lagos Nasarawa Niger Ogun Ondo Osun Oyo Plateau Rivers Sokoto Taraba Yobe Zamfara".split(' ');
$('states').innerHTML='<option value="">Select state</option>'+states.map(s=>`<option>${s.replace('-',' ')}</option>`).join('');

const amts=[[5000,"could buy wound dressings and antibiotics for a week"],[20000,"could cover an X-ray and specialist consultation"],[50000,"could fund a month of physiotherapy"],[250000,"could go a long way toward one corrective surgery"]];
if(document.getElementById('amts')){
const amtBox=document.getElementById('amts'),amt=document.getElementById('amt'),impact=document.getElementById('impact'),give=document.getElementById('giveBtn');
let freq='once';
const fmt=n=>'₦'+Number(n).toLocaleString('en-NG');
amtBox.innerHTML=amts.map(a=>`<button type="button" data-a="${a[0]}" aria-pressed="false">${fmt(a[0])}</button>`).join('');
const pick=v=>{amt.value=v;amtBox.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.a==v));const m=amts.find(a=>a[0]==v);impact.textContent=v?`${fmt(v)}${freq==='monthly'?' a month':''} ${m?m[1]:'helps a victim walk again'}.`:'';give.textContent=v?`Donate ${fmt(v)}${freq==='monthly'?' monthly':''}`:'Donate'};
amtBox.onclick=e=>{const b=e.target.closest('button');if(b)pick(b.dataset.a)};
amt.oninput=()=>pick(amt.value);
document.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{freq=b.dataset.f;document.querySelectorAll('[data-f]').forEach(x=>x.setAttribute('aria-pressed',x===b));pick(amt.value)});
pick(20000);
}

document.querySelectorAll('form[data-form]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const ok=f.querySelector('.ok');ok.classList.add('show');ok.scrollIntoView({block:'nearest'})}));

const nav=document.getElementById('nav'),menu=document.getElementById('menu');
menu.onclick=()=>{const o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',o)};
}
