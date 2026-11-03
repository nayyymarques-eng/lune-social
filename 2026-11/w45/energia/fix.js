const {chromium}=require('playwright');const {execSync}=require('child_process');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1350}});
for(let i=1;i<=6;i++){let dy=0;for(let it=0;it<3;it++){await p.goto('file://'+process.cwd()+`/car.html?d=B&p=${i}&dy=${dy}`);await p.waitForTimeout(250);await p.screenshot({path:`cB${i}.png`});
 const out=execSync(`python3 -c "from PIL import Image
im=Image.open('cB${i}.png').convert('L');ym=${i==1?470:500}
ys=[y for y in range(125,ym-4) if max(im.getpixel((x,y)) for x in range(110,540,2))>90]
print(ys[0]-120,ym-ys[-1])"`).toString().trim().split(' ').map(Number);
 const corr=(out[1]-out[0])/2; console.log(i,it,dy,out); if(Math.abs(corr)<2)break; dy+=corr;}}
await b.close()})();
