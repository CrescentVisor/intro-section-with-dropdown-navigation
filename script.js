//Querying DOM elements for mobile navigation implementation.
const hamburgerMenu = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-menu');
const downArrows = document.querySelectorAll('.down-arrow');

//Querying mobile links and dropdown component DOM elements.
const mobileFeaturesLink = document.querySelector('.mobile-features');
const mobileCompanyLink = document.querySelector('.mobile-company');
const mobileFeaturesDropdown = document.querySelector('.mobile-features-dropdown');
const mobileCompanyDropdown = document.querySelector('.mobile-company-dropdown');

//Querying desktop links and dropdown component DOM elements.
const desktopFeaturesLink = document.querySelector('.desktop-features');
const desktopCompanyLink = document.querySelector('.desktop-company');
const desktopFeaturesDropdown = document.querySelector('.desktop-features-dropdown');
const desktopCompanyDropdown = document.querySelector('.desktop-company-dropdown');

//Allows menu to be opened by clicking/tapping on hamburger menu icon.
const openMenu = function(){
    overlay.classList.remove('hidden');
};

//Allows menu to be closed by clicking/tapping the cross icon.
const closeMenu = function(){
    overlay.classList.add('hidden');
};

//Attaches event listeners to hamburger icon and cross icon.
hamburgerMenu.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);


/*Attaches event listeners to feature and company desktop 
navigation links that will reveal the dropdown sub menus.*/
desktopFeaturesLink.addEventListener('click', (e) => {
    e.preventDefault();

    const children = Array.from(e.target.children);

    if(desktopFeaturesDropdown.classList.contains('hidden')){
        children[0].src = './images/icon-arrow-up.svg';
    }else{
        children[0].src = './images/icon-arrow-down.svg';
    }
    desktopFeaturesDropdown.classList.toggle('hidden');
})

desktopCompanyLink.addEventListener('click', (e) =>{
    e.preventDefault();
    const children = Array.from(e.target.children);

    if(desktopCompanyDropdown.classList.contains('hidden')){
        children[0].src = './images/icon-arrow-up.svg';
    }else{
        children[0].src = './images/icon-arrow-down.svg';
    }
    desktopCompanyDropdown.classList.toggle('hidden');
});


/*Attaches event listeners to feature and mobile company 
navigation links that will reveal the dropdown sub menus.*/
mobileFeaturesLink.addEventListener('click', (e) =>{
    e.preventDefault();
    const children = Array.from(e.target.children);

    if(mobileFeaturesDropdown.classList.contains('hidden')){
        children[0].src = './images/icon-arrow-up.svg';
    }else{
        children[0].src = './images/icon-arrow-down.svg';
    }
    mobileFeaturesDropdown.classList.toggle('hidden');
});

mobileCompanyLink.addEventListener('click', (e) =>{
    e.preventDefault();
    const children = Array.from(e.target.children);

    if(mobileCompanyDropdown.classList.contains('hidden')){
        children[0].src = './images/icon-arrow-up.svg';
    }else{
        children[0].src = './images/icon-arrow-down.svg';
    }
    mobileCompanyDropdown.classList.toggle('hidden');
});