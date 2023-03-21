import './myths.css'

const MenuField = document.querySelector('.A_MenuPhoneHambField')
if (MenuField){
    const MenuSections = document.querySelector('.M_MenuSections')
    MenuField.addEventListener("click", function(e){
        MenuField.classList.toggle('active');
        MenuSections.classList.toggle('active');
    })
}

const zodiaks = document.querySelector('.M_ZodiacAllTogether')

const aries = document.querySelector('.A_ZodiakAries')
const ariesName = document.querySelector('.ariesName')
const ariesStars = document.querySelector('.Q_ZodiakAries')
const text1 = document.querySelector('.aries')

const leo = document.querySelector('.A_ZodiakLeo')
const leoName = document.querySelector('.leoName')
const leoStars = document.querySelector('.Q_ZodiakLeo')
const text2 = document.querySelector('.leo')

if (zodiaks){
    aries.addEventListener("click", function(e){
        aries.classList.add('active');
        ariesName.classList.add('active');
        ariesStars.classList.add('active');
        text1.classList.add('active');

        leo.classList.remove('active');
        leoName.classList.remove('active');
        leoStars.classList.remove('active');
        text2.classList.remove('active');
    })
} else {
    aries.classList.remove('active');
    ariesName.classList.remove('active');
    ariesStars.classList.remove('active');
    text1.classList.remove('active');
}



if (zodiaks){
    leo.addEventListener("click", function(e){
        leo.classList.add('active');
        leoName.classList.add('active');
        leoStars.classList.add('active');
        text2.classList.add('active');

        aries.classList.remove('active');
        ariesName.classList.remove('active');
        ariesStars.classList.remove('active');
        text1.classList.remove('active');
    })
} else {
    leo.classList.remove('active');
    leoName.classList.remove('active');
    leoStars.classList.remove('active');
    text2.classList.remove('active');
}

