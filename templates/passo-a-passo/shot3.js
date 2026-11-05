const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1350}});
await p.goto('file://'+__dirname+'/book.html');await p.waitForTimeout(500);const n=await p.evaluate(()=>P.length);
for(let i=0;i<n;i++){await p.evaluate(i=>render(i),i);await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(200);await p.screenshot({path:__dirname+`/K-${i+1}.jpg`,type:'jpeg',quality:90});}
await b.close()})()
