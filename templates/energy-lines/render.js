const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1350}});
p.on('pageerror',e=>console.log('ERR',e.message));
for(let i=1;i<=7;i++){await p.goto('file://'+process.cwd()+`/carousel.html?d=B&p=${i}`);await p.waitForFunction(()=>window.READY===1);await p.waitForTimeout(150);
 const of=await p.evaluate(()=>[...document.querySelectorAll('.eb > div')].map(d=>{const c=d.parentElement;return [d.scrollWidth,c.clientWidth]}).filter(([a,b])=>a>b+1));
 if(of.length)console.log('overflow p',i,JSON.stringify(of));
 await p.screenshot({path:`out-${i}.png`})}
await b.close()})();
