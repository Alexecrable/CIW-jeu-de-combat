

function idem() {
  let but=document.getElementById('idemmm');
  let adresse1 =document.getElementById('fact_adr');
  let adresse2 =document.getElementById('livr_adr');


  let code1 =document.getElementById('fact_cod');
  let code2 =document.getElementById('livr_cod');


  let ville1 =document.getElementById('fact_vil');
  let ville2 =document.getElementById('livr_vil');

  if (but.checked==true){
    adresse2.value= adresse1.value;
    code2.value= code1.value;
    ville2.value= ville1.value;

  }
  else{
    adresse2.value= "";
    code2.value= ""
    ville2.value= "";

  }










}
