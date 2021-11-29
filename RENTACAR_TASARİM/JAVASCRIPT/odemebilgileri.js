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






function dene1()
{

  var sayi=0;
  var kontrolet;
  kontrolet=document.getElementById("u").value;
  if(kontrolet!="")
  {
  for (var i=0; i < kontrolet.length; i++) 
  {
    sayi=sayi+1;
    
  }
   if(sayi==4 || sayi==9 || sayi==14)
   { 

   document.getElementById("m").innerHTML="";
   document.getElementById("u").value=document.getElementById("u").value+" ";
   document.getElementById("m").innerHTML=document.getElementById("u").value;

   }
   else
   {
   document.getElementById("m").innerHTML=document.getElementById("u").value;
   }
 }

}

function kartsahibi()
{
  document.getElementById("kartsahibi").innerHTML=document.getElementById("kartsahibiadi").value;
}




function sonkullanma()
{
  var sayii=0;
   var kontrolson;
   kontrolson=document.getElementById("sonkullanmatarih").value;
  for (var i=0; i < kontrolson.length; i++) 
  {
    sayii=sayii+1;
    
  }
  if(sayii==2)
  {
   document.getElementById("sonkullanmatarih").value=document.getElementById("sonkullanmatarih").value+"/";
   document.getElementById("kartno").innerHTML=document.getElementById("sonkullanmatarih").value;
  }
  else
  {
    document.getElementById("kartno").innerHTML=document.getElementById("sonkullanmatarih").value;
  }
  
}







function arkayuz()
{
    document.getElementById("arkakartno").innerHTML=document.getElementById("arkayuznumara").value;
}






function verilerial()
{
  var kartnum=document.getElementById("u").value;
  var kartisim=document.getElementById("kartsahibiadi").value;
  var tarih=document.getElementById("sonkullanmatarih").value;
  var cvv=document.getElementById("arkayuznumara").value;
  if(kartnum=="" || kartisim =="" || tarih=="" || cvv=="")
  {
    alert("Lütfen Bilgilerin Doğruluğundan Emin Olun.");
  }
  else
  {
    window.location.href="odeme_tamam.html";
  }
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