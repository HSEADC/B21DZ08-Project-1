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

function initFilters() {
  // const contentItems = document.getElementsByClassName('W_Cards')
  // for (let i = 0; i < contentItems.length; i++) {
  //   const contentItem = contentItems[i]
  //   const contentItemCover = contentItem.querySelector('.Q_CardsImage').src
  //   const contentItemTags = contentItem.dataset.sky.split(',')
  //   const contentItemTitle =
  //     contentItem.querySelector('.A_CardsStarName').innerText
  //   const contentItemData = {
  //     id: generateHash(),
  //     image: contentItemCover,
  //     tags: contentItemTags,
  //     title: contentItemTitle
  //   }
  //   content.push(contentItemData)
  // }

  const filtrbutton = document.querySelectorAll('.A_FilterBarFilterButtonText')
  const cards = document.querySelectorAll('.W_Card')

  for (let i = 0; i < filtrbutton.length; i++) {
    const fbuttons = filtrbutton[i]
    fbuttons.addEventListener('click', function () {
      const fbutton = fbuttons.dataset.filter
      for (let i = 0; i < filtrbutton.length; i++) {
        const fbutton = filtrbutton[i]
        fbutton.classList.remove('active')
      }
      fbuttons.classList.add('active')

      for (let i = 0; i < cards.length; i++) {
        const tags = cards[i]
        tags.classList.add('hidden')
        const tag = tags.dataset.tags
        if (tag.includes(fbutton)) {
          cards[i].classList.remove('hidden')
        }
        console.log(cards, fbutton, tag)
      }
    })
  }
}

// Zodiak Page

// function getZodiakTags() {
//   const zodiakButton = document.querySelectorAll('.A_ZodiakButton')
//   const tags = []

//   for (let i = 0; i < zodiakButton.length; i++) {
//     const trueTag = zodiakButton[i]
//     const contentTag = trueTag.dataset.tag.split()

//     tags.push(...contentTag)
//   }
// }

// function getZodiakNames() {
//   const zodiakName = document.querySelectorAll('.A_ZodiakName')
//   const names = []

//   for (let i = 0; i < zodiakName.length; i++) {
//     const trueName = zodiakName[i]
//     const contentName = trueName.dataset.name.split()

//     names.push(...contentName)
//   }
// }

function initZodiaks() {
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
function initMaps() {
  // getZodiakTags()
  // getZodiakNames()
  const stars = document.querySelectorAll('.stars')
  const starsname = document.querySelectorAll('.W_MapStarinfo')
  // const zodiaksinfo = document.querySelectorAll('.M_ZodiakRightBlock')
  // const zodiaksimage = document.querySelectorAll('.Q_ZodiakCenter')

  for (let i = 0; i < stars.length; i++) {
    const star_buttons = stars[i]
    star_buttons.addEventListener('click', function () {
      const star_button = star_buttons.dataset.tag
      for (let i = 0; i < stars.length; i++) {
        const star_button = stars[i]
        star_button.classList.remove('active')
      }
      star_buttons.classList.add('active')
      for (let i = 0; i < starsname.length; i++) {
        const star_names = starsname[i]
        star_names.classList.remove('active')
        console.log(star_names.dataset.name, star_button)
        if (star_names.dataset.name == star_button) {
          starsname[i].classList.add('active')
        }
      }
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initZodiaks()
  initMaps()
  phoneMenu()
  // initModal()
  // initSelect()

  initFilters()
  // initMultiSelect()

  // initSearch()
  if (document.body.classList.contains('map')) {
    initModal()
  }
})

let currentSlide = 0

function initModal() {
  const sliderButtonLeft = document.querySelector('.A_SliderButtonLeft')
  const sliderButtonRight = document.querySelector('.A_SliderButtonRight')

  sliderButtonLeft.addEventListener('click', () => {
    slide('prev')
  })

  sliderButtonRight.addEventListener('click', () => {
    slide('next')
  })
}

function slide(direction) {
  const sliderButtonLeft = document.querySelector('.A_SliderButtonLeft')
  const sliderButtonRight = document.querySelector('.A_SliderButtonRight')
  const rail = document.querySelector('.W_SliderRail')
  const railLength = rail.children.length

  if (direction === 'next' && currentSlide + 1 < railLength) {
    currentSlide++
  } else if (direction === 'prev' && currentSlide > 0) {
    currentSlide--
  }

  if (currentSlide === 0) {
    sliderButtonLeft.classList.add('toPress')
    sliderButtonRight.classList.remove('toPress')
  } else if (currentSlide + 1 === railLength) {
    sliderButtonLeft.classList.remove('toPress')
    sliderButtonRight.classList.add('toPress')
  }

  rail.style.transform = 'translateX(-' + 613 * currentSlide + 'px)'
}
