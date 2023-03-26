import './myths.css'

const MenuField = document.querySelector('.A_MenuPhoneHambField')
if (MenuField){
    const MenuSections = document.querySelector('.M_MenuSections')
    MenuField.addEventListener("click", function(e){
        MenuField.classList.toggle('active');
        MenuSections.classList.toggle('active');
    })
}


document.addEventListener('DOMContentLoaded', () => {
    
      initModal()
      initSelect()
      // initMultiSelect()
  
      initFilters()
      initMultiSelect()
  
      initSearch()
  })

  function initFilters() {
    const contentItems = document.getElementsByClassName('W_Cards')
  
    for (let i = 0; i < contentItems.length; i++) {
      const contentItem = contentItems[i]
  
      const contentItemCover = contentItem.querySelector(
        '.Q_CardsImage'
      ).src
  
      const contentItemTags = contentItem.dataset.sky.split(',')
  
      const contentItemTitle = contentItem.querySelector(
        '.A_CardsStarName'
      ).innerText
  
      const contentItemData = {
        id: generateHash(),
        image: contentItemCover,
        tags: contentItemTags,
        title: contentItemTitle,
      }
  
      content.push(contentItemData)
    }
  
    // console.log('content', content)
  }