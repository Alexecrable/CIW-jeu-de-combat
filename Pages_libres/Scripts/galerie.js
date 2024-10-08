
function changeImageM1(url, nom) {

  imgTag.src=url;
  bTag.innerHTML=nom;
  console.log("DEBUG : changeImageM1 : url = "+url+", nom = "+nom);

}

function changeImageM2(id_url, id_nom, url, nom) {



  let test =document.getElementById('id_image');
  let nomm = document.getElementById('id_quoi');
  test.src=url;

  nomm.textContent=nom;

  console.log("DEBUG : changeImageM2 : id_url = " + id_url + ", id_nom = " + id_nom
              +", url = " + url + ", nom = " + nom);



}

function changeImageM3(url,nom) {



  console.log(mtd3a);
  mtd3a[1].src=url;
  console.log(mtd3a[1])
  mtd3a[0].innerHTML=nom;


  console.log("DEBUG : changeImageM3 : url = "+url+", nom = "+nom);

}

function rainbow(){



  arc_en_ciel.style.backgroundColor = "rgb("+Math.floor((Math.random())*255)+","+Math.floor((Math.random())*255)+","+Math.floor((Math.random())*255)+")";
  console.log(arc_en_ciel.style.backgroundColor)
  return false;
}
