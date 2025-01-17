const images = [
    '/Images/Img-1.jpg',
    '/Images/Img-2.jpg',
    '/Images/Img-3.jpg',
    '/Images/Img-4.jpg',
];

function setRandomImg(sectionId){
    const randomIndex = Math.floor(Math.random() * images.length);
    const imgElement = document.getElementById(sectionId);
    imgElement.src = images[randomIndex];
}
setRandomImg('target');
setRandomImg('target1');
setRandomImg('target2');



burger = document.querySelector('.burger')
navBar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.Rightnav')

burger.addEventListener('click', ()=>{
    navBar.classList.toggle('h-nav');
    navList.classList.toggle('v-class');
    rightNav.classList.toggle('v-class');
})