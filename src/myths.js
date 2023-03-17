import './myths.css'

const MenuField = document.querySelector('.A_MenuPhoneHambField')
if (MenuField){
    const MenuSections = document.querySelector('.M_MenuSections')
    MenuField.addEventListener("click", function(e){
        MenuField.classList.toggle('active');
        MenuSections.classList.toggle('active');
    })
}