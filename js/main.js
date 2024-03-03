/* SHOW MENU */
const navmenu = document.getElementById('nav-menu')
const navtoggle = document.getElementById('nav-toggle')
const navclose = document.getElementById('nav-close')

if(navtoggle){
    navtoggle.addEventListener('click', () => {
        navmenu.classList.add('show-menu')
    })
}
/*Menu Hidden*/
if(navclose){
    navclose.addEventListener('click', () => {
        navmenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navlink = document.querySelectorAll('.nav_link')
const linkAction = () =>{
    const navmenu = document.getElementById('nav-menu') //When we click on each nav_link,we remove the show menu class//
    navmenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click', linkAction))

/*ADD BLUR HEADER*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add the blur-header class to header tag//
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       :header.classList.remove('blur-header') 
}
window.addEventListener('scroll', blurHeader)

/* SHOW SCROLL UP */ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class//
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')//ection[id] mean html code er sb selection and id mean "<section class="home section" id="home">"//

const scrollActive = () => {
    const scrollDown = window.scrollY
    
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')//.nav__menu a[href mean html code er sb "<div class="nav_menu" and <a href="#home" "//
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    opacity: 1,
    scale: 1.1,
    duration: 2500,
    delay: 300,
    // reset: true, // Animations repeat
    })
    
    sr.reveal('.home_data, .about_img, .about_data, .visit_data' )
    //home & about rotated//
    sr.reveal('.home_image, .footer_img-1, .footer_img-2', {rotate: {z: -15} })
    sr.reveal('.home_bread, .about_bread', {rotate: {z: 15} })
    sr.reveal('.home_footer', {scale: 1, origin: 'bottom' })
    //new rotated//
    sr.reveal('.new_card:nth-child(1) img', {rotate: {z: -30}, distance:0 })
    sr.reveal('.new_card:nth-child(2) img', {rotate: {z: 15}, distance:0, delay: 600 })
    sr.reveal('.new_card:nth-child(3) img', {rotate: {z: -30}, distance:0, delay: 900 })
    //favourite rotated//
    sr.reveal('.favorite_card img', { interval: 100, rotate: {z: 15}, distance:0 })
    //footer rotated//
    sr.reveal('.footer_container', { scale: 1 })