var arttir=0;
var opak=0;
var opakk=0;
var menuxx;
var araclarsay=0;
var araclarsayy=0;
var dondur=0;
var tik=0;
var dondur2=0;
var araclarsayy2=0;
var tik2=0;
var araclarsay2=0;
var sonopak=0;
var sonopakk=0;
var fiyatdegis=0;
function menusayfaa()
{
  document.getElementById("menux").style.display="block";
   document.getElementById("menux").style.zIndex="1";
   document.getElementById("resim").style.zIndex="0";
  if(arttir==1920)
  {
   menuxx=setInterval(menusayfakapat,1);
  }
  else
  {
    menuxx=setInterval(menusayfa,1);
  }
}
function menusayfa()
{
 if(arttir < 1920)
 {
  arttir=arttir+10;
  document.getElementById("menux").style.width=arttir;
 }
 else
 {
    clearInterval(menuxx); 
    opaklikk();

 }

}

function menusayfakapat() 
{

  if(opakk > 0)
  {
    opakk=opakk-0.1;
    document.getElementById("altlogo").style.opacity=opakk;
    document.getElementById("cikin").style.opacity=opakk;
    document.getElementById("ar").style.opacity=opakk;
    document.getElementById("ka").style.opacity=opakk;
    document.getElementById("mv").style.opacity=opakk;
    document.getElementById("hk").style.opacity=opakk;
    document.getElementById("il").style.opacity=opakk;
    document.getElementById("-1").style.opacity=opakk;
    document.getElementById("-2").style.opacity=opakk;
    document.getElementById("-3").style.opacity=opakk;
    document.getElementById("-4").style.opacity=opakk;
    document.getElementById("-5").style.opacity=opakk;
    document.getElementById("-6").style.opacity=opakk;


  }
  else
  {
   if (arttir > 0) 
   {
      arttir=arttir-10;
      document.getElementById("menux").style.width=arttir;

   }
   else
   {

     document.getElementById("menux").style.zIndex="0";
     document.getElementById("resim").style.zIndex="1";
     clearInterval(menuxx);

    

   }
 }
}
function opaklikk()
{
   opak=setInterval(opaklik,70);
}
function opaklik()
{
   if(opakk < 1)
   {
     opakk=opakk+0.1;
     document.getElementById("altlogo").style.opacity=opakk;
     document.getElementById("cikin").style.opacity=opakk;
     document.getElementById("ar").style.opacity=opakk;
     document.getElementById("ka").style.opacity=opakk;
     document.getElementById("mv").style.opacity=opakk;
     document.getElementById("hk").style.opacity=opakk;
     document.getElementById("il").style.opacity=opakk;

   }
   else
   {

     clearInterval(opak);
   }
}

function menugoster()
{
   if(tik==0)
   {
   document.getElementById("araclaraltmenu").style.display="block";
   araclarsay=setInterval(menugosterr,1);
   }
   else
   {
       araclarsay=setInterval(menugosterr,1);
   }
}
function menugosterr()
{
  if(tik==0)
  {
   if(araclarsayy < 30)
   {
      araclarsayy=araclarsayy+1;
      document.getElementById("araclaraltmenu").style.height=araclarsayy;
   }
   if(dondur < 270)
   {
      dondur = dondur+10;
      document.getElementById("sekil1").style.transform='rotate('+dondur+'deg)';
   }
   else
   {
      dondur=0;
      araclarsayy=30;
      tik=1;
      clearInterval(araclarsay);
      document.getElementById("-1").style.display="block";
      document.getElementById("-2").style.display="block";
      document.getElementById("-3").style.display="block";
      document.getElementById("-4").style.display="block";
      altmenuopak();
   }
 }
   else
  {
    
  
     if(dondur < 180)
     {
         dondur = dondur+10;
         document.getElementById("sekil1").style.transform='rotate('+dondur+'deg)';
     }
      if(araclarsayy > 0)
     {
      araclarsayy=araclarsayy-1;
      document.getElementById("araclaraltmenu").style.height=araclarsayy;
     }
     else
     {
        
      clearInterval(araclarsay);
      document.getElementById("-1").style.display="none";
      document.getElementById("-2").style.display="none";
      document.getElementById("-3").style.display="none";
      document.getElementById("-4").style.display="none";
       document.getElementById("-1").style.opacity="0";
     document.getElementById("-2").style.opacity="0";
     document.getElementById("-3").style.opacity="0";
     document.getElementById("-4").style.opacity="0";
      document.getElementById("araclaraltmenu").style.display="none";
      tik=0;

     }
   
   
   
  }
}









function menugoster2()
{
   if(tik2==0)
   {
   document.getElementById("araclaraltmenu2").style.display="block";
   araclarsay2=setInterval(menugosterr2,1);
   }
   else
   {
       araclarsay2=setInterval(menugosterr2,1);
   }
}
function menugosterr2()
{
  if(tik2==0)
  {
   if(araclarsayy2 < 30)
   {
      araclarsayy2=araclarsayy2+1;
      document.getElementById("araclaraltmenu2").style.height=araclarsayy;
   }
   if(dondur2 < 270)
   {
      dondur2 = dondur2+10;
      document.getElementById("sekil2").style.transform='rotate('+dondur2+'deg)';
   }
   else
   {
      dondur2=0;
      tik2=1;
      clearInterval(araclarsay2);
      document.getElementById("-5").style.display="block";
      document.getElementById("-6").style.display="block";
       altmenuopak2();
   }
 }
   else
  {
    
    if(araclarsayy2 > 0)
     {
      araclarsayy2=araclarsayy2-1;
      document.getElementById("araclaraltmenu2").style.height=araclarsayy;
     }
     if(dondur2 < 180)
     {
         dondur2 = dondur2+10;
         document.getElementById("sekil2").style.transform='rotate('+dondur2+'deg)';
     }
     else
     {
        
      clearInterval(araclarsay2);

      document.getElementById("-5").style.display="none";
      document.getElementById("-6").style.display="none";
      document.getElementById("-5").style.opacity="0";
     document.getElementById("-6").style.opacity="0";
      document.getElementById("araclaraltmenu2").style.display="none";
      tik2=0;

     }
   
   
   
  }
}


function altmenuopak()
{
   sonopak=setInterval(altmenuopakk,50)
   sonopakk=0;
}
function altmenuopakk()
{
    if(sonopakk < 1)
    {
      sonopakk=sonopakk+0.1;
      document.getElementById("-1").style.opacity=sonopakk;
      document.getElementById("-2").style.opacity=sonopakk;
      document.getElementById("-3").style.opacity=sonopakk;
      document.getElementById("-4").style.opacity=sonopakk;
    }
    else
    {
      
      clearInterval(sonopak);
      
    }
}
function altmenuopak2()
{
   sonopak=setInterval(altmenuopakk2,50)
   sonopakk=0;
}
function altmenuopakk2()
{
    if(sonopakk < 1)
    {
      sonopakk=sonopakk+0.1;
      document.getElementById("-5").style.opacity=sonopakk;
      document.getElementById("-6").style.opacity=sonopakk;
    }
    else
    {
      
      clearInterval(sonopak);
      
    }
}













var modal=document.querySelector("dialog");





document.querySelector(".konum").onclick=function()
{
  fiyatdegis=127;
     document.getElementById("fiyat").innerHTML="Bu Paketin Tutar?? : 127 TL";
   document.getElementById("guvence").innerHTML="S??per Mini G??vence Paketi";
  document.getElementById("modaliciyazi").innerHTML = "Rapor d??zenlenmesi veya tutanak tutulmas?? m??mk??n olmayan, tek tarafl?? hasar durumlar?? i??in m????teriye 2.500 TL'ye kadar beyanla onar??m hakk?? sunan hasar g??vencesidir. Cam - far - ayna g??vencesini de kapsamaktad??r.";
   modal.showModal();
   document.getElementById("modal").style.transform = "scale(1.1)";

}
document.querySelector(".carpi").onclick=function()
{
  document.getElementById("modal").style.transform = "scale(0.1)";
  setTimeout(function(){ modal.close();return false; }, 400);

}












document.querySelector(".alis").onclick=function()
{
  fiyatdegis=150;
   document.getElementById("fiyat").innerHTML="Bu Paketin Tutar?? : 150 TL";
  document.getElementById("guvence").innerHTML="Orta G??vence Paketi";
  document.getElementById("modaliciyazi").innerHTML = "S??per Mini G??vence Paketine ek olarak Trafik sigortas?? kapsam??nda 3. ??ah??slara ili??kin hasar limitini bu g??vence ile 1 milyon TL'ye kadar art??rabilirisiniz.";
   modal.showModal();
   document.getElementById("modal").style.transform = "scale(1.1)";

}
document.querySelector(".carpi").onclick=function()
{
  document.getElementById("modal").style.transform = "scale(0.1)";
  setTimeout(function(){ modal.close();return false; }, 400);

}











document.querySelector(".iade").onclick=function()
{
  fiyatdegis=191;
   document.getElementById("fiyat").innerHTML="Bu Paketin Tutar?? : 191 TL";
  document.getElementById("guvence").innerHTML="Tam G??vence Paketi";
  document.getElementById("modaliciyazi").innerHTML = "S??per Mini G??vence Paketi ve Orta G??vence Paketine Ek olarak Ara?? i??erisindeki koltuk say??s??na ba??l?? olarak, s??r??c?? ve ara?? i??erisindeki ki??ileri kapsayan g??vencedir.";

   modal.showModal();
   document.getElementById("modal").style.transform = "scale(1.1)";

}
document.querySelector(".carpi").onclick=function()
{
  document.getElementById("modal").style.transform = "scale(0.1)";
  setTimeout(function(){ modal.close();return false; }, 400);

}





function verileriguncelle()
{
   var fiyt=sessionStorage.getItem("aracfiyat");
   var ft=Number(fiyt);
   ft=ft+fiyatdegis;
   sessionStorage.setItem("aracfiyat",ft);
   window.location.href="kullanicibilgileri.html";
}




















function iletisim()
{
  window.location.href="iletisim.html";
}
function hakkimizda()
{
  window.location.href="hakkimizda.html";
}
function vizyon()
{
  window.location.href="misyonvizyon.html";
}