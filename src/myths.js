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

function updatedContent() {
  const contentCenterImage = document.querySelectorAll('.A_ZodiakInCircle')
  const contentNameTitle = document.querySelectorAll('.A_ZodiakName')
  const contentDescription = document.querySelectorAll('.M_ArticleRightBlock')
  const contentPage = {
    id: '',
    image: contentCenterImage,
    title: contentNameTitle,
    description: contentDescription
  }

  contentPageId.forEach((id) => {
    content.forEach((contentPage) => {
      if (contentPage.id === id) {
      }
    })
  })
}

function initZodiaks() {
  getZodiakTags()
  getZodiakNames()
  const zodiaks = document.querySelectorAll('.A_ZodiakButton')

  let zodiakClicked = zodiaks[0]

  for (let i = 0; i < zodiaks.length; i++) {
    zodiaks[i].addEventListener('click', function () {
      zodiakClicked.classList.remove('active')
      this.classList.add('active')

      zodiakClicked = this
    })
  }

  if (Array(zodiaks).classList.contains('active')) {
    console.log('hi')
    const clickedTag = zodiaks.dataset.tag.split()
    console.log(clickedTag)

    let foundName = names.filter((e) => {
      return e === clickedTag
    })
    console.log(clickedTag)
    zodiakName.classList.remove('active')
    if ((foundName = clickedTag)) {
      zodiakName.classList.add('active')
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initZodiaks()
  phoneMenu()
})
