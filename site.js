

function tcno_kontrol()
{
    var tek = 0,
      cift = 0,
      sonuc = 0,
      tcToplam = 0,
      i = 0;
    var tcno= document.getElementById("tc_no").value;

    if (tcno.substring(0, 1)==='0') 
    {
        alert("TC No '0' ile başlayamaz!");
        return false;
    }

    if (tcno.length !== 11) 
    {
        alert("11 rakamlı TC Numaranızı giriniz!");
        return false;
    }

    "use strict";

     tek = parseInt(tcno[0]) + parseInt(tcno[2]) + parseInt(tcno[4]) + parseInt(tcno[6]) + parseInt(tcno[8]);
     cift = parseInt(tcno[1]) + parseInt(tcno[3]) + parseInt(tcno[5]) + parseInt(tcno[7]);

    tek = tek * 7;
    sonuc = Math.abs(tek - cift);
    if (sonuc % 10 != tcno[9]) 
    {
        alert ("Geçerli bir TC Numarası Giriniz.(HATA KODU 26)");
        return false;
    }

    for (var i = 0; i < 10; i++) {
      tcToplam += parseInt(tcno[i]);
    }

    if (tcToplam % 10 != tcno[10]) 
    {
        alert ("Geçerli bir TC Numarası Giriniz.(HATA KODU 27)");
        return false;
    }
    alert ("TC NO GEÇERLİ");
 

}
