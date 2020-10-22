//Start Make Li NavBar Sections
var sections = document.querySelectorAll('[data-nav]');
var uls = document.querySelector('ul');
const fragment = document.createDocumentFragment();

sections.forEach((sections, i) => {
    const lis = document.createElement('li');
    const anchs = document.createElement('a');
    var links = document.createTextNode('Section' + (i + 1));
    anchs.appendChild(links);
    anchs.title = "Section" + (i + 1);
    anchs.href = "#section" + (i + 1);
    uls.appendChild(lis);
    lis.appendChild(anchs);
});

//End Make Li NavBar Sections
// activate navBar
var active_li = uls.querySelectorAll('li');
const li_array = Array.from(active_li);
li_array.forEach((active_li, i) => {
    li_array[0].classList.add("active"); //Initial Activate li1
    var active = document.getElementsByClassName('landing__container');
    active[0].classList.add("active"); //Initial Activate section 1

//Start Activate Navbar And Sections When Select It
    li_array[i].addEventListener("click", function (e) {
        e.preventDefault();
        const current = document.getElementsByClassName('active');
        current[0].classList.remove('active');
        li_array[i].classList.add('active');
        //Activate LI Navbar
        var active_sect = document.getElementsByClassName('landing__container active');
        active_sect[0].classList.remove('active');
        active[i].classList.add('active');
        //Activate section
        active[i].scrollIntoView({});
    });
//END Activate Navbar And Sections When Select It
});
//Start Activate Sections And NavBar While Scrolling on it 
var active_croll_sect = document.getElementsByClassName('landing__container active');
window.addEventListener('scroll', function () { 
    var active_croll_sect = document.querySelectorAll('section');
    const active_scroll = Array.from(active_croll_sect);
    active_scroll.forEach((scroll_sect, i) => {
        var active_scrolls = document.querySelector('#section' + (i + 1));
        var bounding = active_scrolls.getBoundingClientRect();//Get Dimensions To Every Section
        if (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {

            var active_sect = document.querySelector('.landing__container.active');
            active_sect.classList.remove('active');
            var x = active_scrolls.querySelector('.landing__container');
            x.classList.add('active');//Activate section
            const current = document.querySelector('.active');
            current.classList.remove('active');
            li_array[i].classList.add('active');//Activate LI Navbar
        }
    });
});
//End Activate Sections And NavBar While Scrolling on it 
