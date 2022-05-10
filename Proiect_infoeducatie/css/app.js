const navslide = () => {
    const linii = document.querySelector('.linii');
    const nav = document.querySelector('.nav-liste');
    const navliste = document.querySelectorAll('.nav-liste li');


    linii.addEventListener('click' , () =>  {
        //Toggle Nav
        nav.classList.toggle('nav-active');

         //animatie linkuri
        navliste.forEach   ((link, meniu) => {
            if (link.style.animation) {
                link.style.animation = '';
             } else {
                link.style.animation = `navlinksfade 0.5s ease forwards  ${meniu / 7 + 0.3}s`;
            }
        });   
        //animatie burger
        linii.classList.toggle('toggle');

    });
}
    
   
navslide();
 