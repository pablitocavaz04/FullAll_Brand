/***********************************************************************/
/*     Web del Romanticismo - funciones js para la web                  */
/*     Autor: Pablo Camino Vázquez                               */
/*     versión 1.0  -  15/01/2023                                       */
/***********************************************************************/

/********** js de responsive navbar de w3schools  */

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle('down', window.scrollY > 0);

      //change logo
      var logo = document.querySelector(".brand img");
      if (window.scrollY>0) {
          logo.setAttribute('src', './images/logotransparente1.png');
      }else{
          logo.setAttribute('src', './images/logotransparente1.png');
      }

  });

  //javascript for responsive navigation sidebar menu
  var menu = document.querySelector('.menu');
  var menuBtn = document.querySelector('.menu-btn');
  var closeBtn = document.querySelector('.close-btn');

  menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
  });