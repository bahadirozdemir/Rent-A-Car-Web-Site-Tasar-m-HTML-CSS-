document.getElementById("baslik").style.marginTop = "700px";
document.getElementById("baslik").style.marginTop = "500px";
var nesne = 700;
var saydamnesne=1;
var myVar = setInterval(kaydir, 1);
var saydamlas;
var x = 0;
var yavasgstr;
var yavas=0;
var kontrol=0;
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
function kaydir()
{ 
  if(nesne!=40)
	{
	nesne=nesne -2;
    document.getElementById("baslik").style.marginTop  = nesne;
    document.getElementById("resim").style.marginTop  = nesne-48;
    }
    else
    {
    
    	clearInterval(myVar);
       setTimeout(bekle,3000);
      
    }
}
function bekle()
{
   saydamlas = setInterval(saydam,10);
}
function saydam()
{
    if(saydamnesne > 0)
    {
    saydamnesne=saydamnesne-(0.1);
    document.getElementById("resim").style.opacity = saydamnesne;
    console.log(nesne);
    }
    else
    {
      if(x==0)
      {
      clearInterval(saydamlas);
      document.getElementById("resim").style.opacity = 1;
      document.getElementById("resim").style.backgroundImage = "url('../resimlerim/2.webp')";
      document.getElementById("resim").style.backgroundPosition = "center";
      document.getElementById("resim").style.backgroundSize = "100% 700px";
      document.getElementById("1").innerHTML="Yeni Clio 2022 Model";
      document.getElementById("2").innerHTML=" 300 ₺ / Günlük";
      document.getElementById("0").innerHTML=" Yeni Clio İle Zamansız Bir Yolculuk";
      x++;
      saydamnesne=1;
     setTimeout(bekle,3000);
     }
     else if(x==1)
     {
      clearInterval(saydamlas);
      document.getElementById("resim").style.opacity = 1;
      document.getElementById("resim").style.backgroundImage = "url('../resimlerim/ford-mondeo-hibrit.jpg')";
      document.getElementById("resim").style.backgroundPosition = "center";
      document.getElementById("resim").style.backgroundSize = "100% 850px";
      document.getElementById("1").innerHTML="Yeni Hybrid Mondeo";
      document.getElementById("2").innerHTML=" 600 ₺ / Günlük";
      document.getElementById("0").innerHTML="Yeni Hybrid Ford Mondeo İle Bir Gün Geçirin.";
      x++;
         saydamnesne=1;
      setTimeout(bekle,3000);
     }
     else if(x==2)
     {
        x = 0;
      clearInterval(saydamlas);
      document.getElementById("resim").style.opacity = 1;
      document.getElementById("resim").style.backgroundImage = "url('../resimlerim/polo-r-line-po4934-v1.jpg')";
      document.getElementById("resim").style.backgroundPosition = "center";
      document.getElementById("1").innerHTML="Yeni Polo 2022 Model";
      document.getElementById("2").innerHTML=" 400 ₺ / Günlük";
      document.getElementById("0").innerHTML="Yeni Polo İle Keyifli Bir Sürüşe Çıkın.";
      saydamnesne=1;
      setTimeout(bekle,7000);
        
     }
 }

}


function fonksiyon()
{
  document.getElementById("kutu1").style.opacity="0";
  document.getElementById("kutu2").style.opacity="0";
  document.getElementById("kutu3").style.opacity="0";
  document.getElementById("q").innerHTML="BODRUM / MUĞLA";
  document.getElementById("w").innerHTML="ERBAA / TOKAT";
  document.getElementById("e").innerHTML="İZMİT / KOCAELİ";
  document.getElementById("resim1").src = "../resimlerim/70084.jpg";
  document.getElementById("resim2").src="../resimlerim/23947911.jpg";
  document.getElementById("resim3").src="../resimlerim/1200px-İZMİT_CLOCK_TOWER_3_20200916.jpg";
  yavas=0;
  kontrol=0;
  yavasgstr = setInterval(yavasgoster,70);
}
function fonksiyon2()
{

  document.getElementById("kutu1").style.opacity="0";
  document.getElementById("kutu2").style.opacity="0";
  document.getElementById("kutu3").style.opacity="0";
  document.getElementById("q").innerHTML="4.LEVENT / İSTANBUL";
  document.getElementById("w").innerHTML="ÇEŞME / İZMİR";
  document.getElementById("e").innerHTML="KEPEZ / ANTALYA";
  document.getElementById("resim1").src = "../resimlerim/4-levent-mi-dorduncu-levent-mi-sorunsali_200043.jpg";
  document.getElementById("resim2").src="../resimlerim/IZMIR.png";
  document.getElementById("resim3").src="../resimlerim/611baec05cf3b019acee1e69.jpg";
  yavas=0;
  kontrol=0;
  yavasgstr = setInterval(yavasgoster,70);
}



function yavasgoster()
{
  if(yavas < 1 && kontrol==0)
  {
    yavas=yavas+0.1;
    document.getElementById("kutu1").style.opacity=yavas;
  }
  else 
  {
    if(kontrol==0)
    {
    yavas=0;
    kontrol++;
    }
    if(yavas < 1 && kontrol==1)
    {
    yavas=yavas+0.1;
    document.getElementById("kutu2").style.opacity=yavas;
    }
    else
    {
      if(kontrol==1)
      {
        yavas=0;
        kontrol++;
      }
    yavas=yavas+0.1;
    console.log(yavas);
    document.getElementById("kutu3").style.opacity=yavas;
    if(yavas > 1)
    {
      clearInterval(yavasgstr);
    }
    
    }
  }

}
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
   araclarsay=setInterval(menugosterr,10);
   }
   else
   {
       araclarsay=setInterval(menugosterr,10);
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
   araclarsay2=setInterval(menugosterr2,10);
   }
   else
   {
       araclarsay2=setInterval(menugosterr2,10);
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
      document.getElementById("-7").style.opacity=sonopakk;
      document.getElementById("-8").style.opacity=sonopakk;
    }
    else
    {
      
      clearInterval(sonopak);
      
    }
}
/*function fonksiyon3()
{
  araclarsay=setInterval(fonksiyon4,10);
}
function fonksiyon4()
{
    if(araclarsayy < 1.1)
   {
      araclarsayy=araclarsayy+0.1;
      document.getElementById("araclaraltmenu").style.opacity=araclarsayy;
   }
   else
   {
      clearInterval(araclarsay);
     
   }
}
*/



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