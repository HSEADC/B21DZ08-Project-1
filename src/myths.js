import './myths.css'

function phoneMenu() {
  const MenuField = document.querySelector('.A_MenuPhoneHambField')
  if (MenuField) {
    const MenuSections = document.querySelector('.M_MenuSections')
    MenuField.addEventListener('click', function (e) {
      MenuField.classList.toggle('active')
      MenuSections.classList.toggle('active')
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

      const contentItemCover = contentItem.querySelector('.Q_CardsImage').src

      const contentItemTags = contentItem.dataset.sky.split(',')

      const contentItemTitle =
        contentItem.querySelector('.A_CardsStarName').innerText

      const contentItemData = {
        id: generateHash(),
        image: contentItemCover,
        tags: contentItemTags,
        title: contentItemTitle
      }

      content.push(contentItemData)
    }

    // console.log('content', content)
  }
}

// function getZodiakTags() {
//   const zodiakButton = document.querySelectorAll('.A_ZodiakButton')
//   const tags = []
//   for (let i = 0; i < zodiakButton.length; i++) {
//     const trueTag = zodiakButton[i]
//     const contentTag = trueTag.dataset.tag.split()

//     tags.push(...contentTag)
//     // console.log(contentTag)
//   }
// }

// Zodiak Page

function getZodiakTags() {
  const zodiakButton = document.querySelectorAll('.A_ZodiakButton')
  const tags = []

  for (let i = 0; i < zodiakButton.length; i++) {
    const trueTag = zodiakButton[i]
    const contentTag = trueTag.dataset.tag.split()

    tags.push(...contentTag)
    // console.log(contentTag)
  }
}

function getZodiakNames() {
  const zodiakName = document.querySelectorAll('.A_ZodiakName')
  const names = []

  for (let i = 0; i < zodiakName.length; i++) {
    const trueName = zodiakName[i]
    const contentName = trueName.dataset.name.split()

    names.push(...contentName)
    // console.log(contentName)
  }
}

// function updatedContent() {
//   const contentCenterImage = document.querySelectorAll('.A_ZodiakInCircle')
//   const contentNameTitle = document.querySelectorAll('.A_ZodiakName')
//   const contentDescription = document.querySelectorAll('.M_ArticleRightBlock')
//   const contentPage = {
//     id: '',
//     image: contentCenterImage,
//     title: contentNameTitle,
//     description: contentDescription
//   }

//   contentPageId.forEach((id) => {
//     content.forEach((contentPage) => {
//       if (contentPage.id === id) {
//       }
//     })
//   })
// }

function initZodiaks() {
  getZodiakTags()
  getZodiakNames()
  const zodiaks = document.querySelectorAll('.A_ZodiakButton')
  const zodiaksname = document.querySelectorAll('.A_ZodiakName')
  const zodiaksinfo = document.querySelectorAll('.M_ZodiakRightBlock')
  const zodiaksimage = document.querySelectorAll('.Q_ZodiakCenter')

  for (let i = 0; i < zodiaks.length; i++) {
    const buttons = zodiaks[i]
    buttons.addEventListener('click', function () {
      const button = buttons.dataset.tag
      for (let i = 0; i < zodiaks.length; i++) {
        const button = zodiaks[i]
        button.classList.remove('active')
      }
      buttons.classList.add('active')

      for (let i = 0; i < zodiaksname.length; i++) {
        const names = zodiaksname[i]
        names.classList.remove('active')
        console.log(names.dataset.name, button)
        if (names.dataset.name == button) {
          zodiaksname[i].classList.add('active')
        }
      }

      for (let i = 0; i < zodiaksinfo.length; i++) {
        const info = zodiaksinfo[i]
        info.classList.remove('active')
        console.log(info.dataset.name, button)
        if (info.dataset.name == button) {
          zodiaksinfo[i].classList.add('active')
        }
      }

      for (let i = 0; i < zodiaksimage.length; i++) {
        const image = zodiaksimage[i]
        image.classList.remove('active')
        console.log(image.dataset.name, button)
        if (image.dataset.name == button) {
          zodiaksimage[i].classList.add('active')
        }
      }
    })
  }
}

// if (Array(zodiaks).classList.contains('active')) {
//   const clickedTag = zodiaks.dataset.tag.split()
//   console.log(clickedTag)

//   let foundName = names.filter((e) => {
//     return e === clickedTag
//   })
//   console.log(clickedTag)
//   zodiakName.classList.remove('active')
//   if ((foundName = clickedTag)) {
//     zodiakName.classList.add('active')
//   }
// }

document.addEventListener('DOMContentLoaded', () => {
  initZodiaks()
  phoneMenu()
})
