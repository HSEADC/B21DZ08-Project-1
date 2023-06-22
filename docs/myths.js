/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


function phoneMenu() {
  var MenuField = document.querySelector('.A_MenuPhoneHambField');

  if (MenuField) {
    var MenuSections = document.querySelector('.M_MenuSections');
    MenuField.addEventListener('click', function (e) {
      MenuField.classList.toggle('active');
      MenuSections.classList.toggle('active');
    });
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
  var filtrbutton = document.querySelectorAll('.A_FilterBarFilterButtonText');
  var cards = document.querySelectorAll('.W_Card');

  var _loop = function _loop(i) {
    var fbuttons = filtrbutton[i];
    fbuttons.addEventListener('click', function () {
      var fbutton = fbuttons.dataset.filter;

      for (var _i = 0; _i < filtrbutton.length; _i++) {
        var _fbutton = filtrbutton[_i];

        _fbutton.classList.remove('active');
      }

      fbuttons.classList.add('active');

      for (var _i2 = 0; _i2 < cards.length; _i2++) {
        var tags = cards[_i2];
        tags.classList.add('hidden');
        var tag = tags.dataset.tags;

        if (tag.includes(fbutton)) {
          cards[_i2].classList.remove('hidden');
        }

        console.log(cards, fbutton, tag);
      }
    });
  };

  for (var i = 0; i < filtrbutton.length; i++) {
    _loop(i);
  }
} // Zodiak Page
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
  var zodiaks = document.querySelectorAll('.A_ZodiakButton');
  var zodiaksname = document.querySelectorAll('.A_ZodiakName');
  var zodiaksinfo = document.querySelectorAll('.M_ZodiakRightBlock');
  var zodiaksimage = document.querySelectorAll('.Q_ZodiakCenter');

  var _loop2 = function _loop2(i) {
    var buttons = zodiaks[i];
    buttons.addEventListener('click', function () {
      var button = buttons.dataset.tag;

      for (var _i3 = 0; _i3 < zodiaks.length; _i3++) {
        var _button = zodiaks[_i3];

        _button.classList.remove('active');
      }

      buttons.classList.add('active');

      for (var _i4 = 0; _i4 < zodiaksname.length; _i4++) {
        var names = zodiaksname[_i4];
        names.classList.remove('active');

        if (names.dataset.name == button) {
          zodiaksname[_i4].classList.add('active');
        }
      }

      for (var _i5 = 0; _i5 < zodiaksinfo.length; _i5++) {
        var info = zodiaksinfo[_i5];
        info.classList.remove('active');
        console.log(info.dataset.name, button);

        if (info.dataset.name == button) {
          zodiaksinfo[_i5].classList.add('active');
        }
      }

      for (var _i6 = 0; _i6 < zodiaksimage.length; _i6++) {
        var image = zodiaksimage[_i6];
        image.classList.remove('active');
        console.log(image.dataset.name, button);

        if (image.dataset.name == button) {
          zodiaksimage[_i6].classList.add('active');
        }
      }
    });
  };

  for (var i = 0; i < zodiaks.length; i++) {
    _loop2(i);
  }
} // if (Array(zodiaks).classList.contains('active')) {
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
  // создали функцию
  var stars = document.querySelectorAll('.stars');
  var starsname = document.querySelectorAll('.W_MapStarinfo'); // ввели переменные stars - то на что нажимаем + в хтмл data-tag + добавляем в хтмл класс stars
  // starsname - то что меняется + в хтмл data-name

  var _loop3 = function _loop3(i) {
    var star_buttons = stars[i];
    star_buttons.addEventListener('click', function () {
      var star_button = star_buttons.dataset.tag;

      for (var _i7 = 0; _i7 < stars.length; _i7++) {
        var _star_button = stars[_i7];

        _star_button.classList.remove('active');
      }

      star_buttons.classList.add('active');

      for (var _i8 = 0; _i8 < starsname.length; _i8++) {
        var star_names = starsname[_i8];
        star_names.classList.remove('active');
        console.log(star_names.dataset.name, star_button);

        if (star_names.dataset.name == star_button) {
          starsname[_i8].classList.add('active');
        }
      }
    });
  };

  for (var i = 0; i < stars.length; i++) {
    _loop3(i);
  }
}

var currentSlide = 0;

function initModal() {
  var sliderButtonLeft = document.querySelector('.A_SliderButtonLeft');
  var sliderButtonRight = document.querySelector('.A_SliderButtonRight');
  sliderButtonLeft.addEventListener('click', function () {
    slide('prev');
  });
  sliderButtonRight.addEventListener('click', function () {
    slide('next');
  });
}

function slide(direction) {
  var sliderButtonLeft = document.querySelector('.A_SliderButtonLeft');
  var sliderButtonRight = document.querySelector('.A_SliderButtonRight');
  var rail = document.querySelector('.W_SliderRail');
  var railLength = rail.children.length;

  if (direction === 'next' && currentSlide + 1 < railLength) {
    currentSlide++;
  } else if (direction === 'prev' && currentSlide > 0) {
    currentSlide--;
  }

  if (currentSlide === 0) {
    sliderButtonLeft.classList.add('toPress');
    sliderButtonRight.classList.remove('toPress');
  } else if (currentSlide + 1 === railLength) {
    sliderButtonLeft.classList.remove('toPress');
    sliderButtonRight.classList.add('toPress');
  }

  rail.style.transform = 'translateX(-' + 78 * currentSlide + '%)';
}

document.addEventListener('DOMContentLoaded', function () {
  initMobile();
  initZodiaks();
  initMaps();
  phoneMenu();
  initFilters();
  initMaps1();
  initModal();
  initArrow();
  initMaps();
}); // function initMobile() {
//   const arrow = document.querySelectorAll('.M_MapStarsText')
//   const window = document.querySelectorAll('.M_MapStarsWindow')
//   for (let i = 0; i < arrow.length; i++) {
//     const arrow_buttons = arrow[i]
//     arrow_buttons.addEventListener('click', function () {
//       const arrow_button = arrow_buttons.dataset.tag
//       for (let i = 0; i < window.length; i++) {
//         const arrow_names = window[i]
//         if (arrow_names.dataset.name == arrow_button) {
//           arrow_names.classList.add('active')
//         }
//       }
//     })
//   }
// }

function initMobile() {
  var arrow = document.querySelectorAll('.M_MapStarsText');
  var window = document.querySelectorAll('.M_MapStarsWindow');

  var _loop4 = function _loop4(i) {
    var arrow_buttons = arrow[i];
    arrow_buttons.addEventListener('click', function () {
      var arrow_button = arrow_buttons.dataset.tag;

      for (var _i9 = 0; _i9 < window.length; _i9++) {
        var arrow_names = window[_i9];

        if (arrow_names.dataset.name == arrow_button) {
          arrow_names.classList.toggle('active');
        }
      }
    }, 1000);
  };

  for (var i = 0; i < arrow.length; i++) {
    _loop4(i);
  }
} // function initMobile() {
//   const arrow = document.querySelectorAll('.M_MapStarsText')
//   const window = document.querySelectorAll('.M_MapStarsWindow')
//   for (let i = 0; i < arrow.length; i++) {
//     const arrow_buttons = arrow[i]
//     arrow_buttons.addEventListener('click', function () {
//       const arrow_button = arrow_buttons.dataset.tag
//       for (let i = 0; i < window.length; i++) {
//         const arrow_names = window[i]
//         if (arrow_names.dataset.name == arrow_button) {
//           if (arrow_names.classList.contains('active')) {
//             arrow_names.classList.remove('active')
//           } else {
//             arrow_names.classList.add('active')
//           }
//         }
//       }
//     })
//   }
// }
// function initArrow() {
//   const ArrowMobile = document.querySelector('.Q_ArrowExpand')
//   ArrowMobile.addEventListener('click', function (e) {
//     ArrowMobile.classList.toggle('open')
//   })
// }


var arrow = document.getElementById('arrow');

arrow.onclick = function () {
  arrow.classList.toggle('open');
};

function initMaps1() {
  // создали функцию
  var south = document.querySelectorAll('.south');
  var southname = document.querySelectorAll('.W_MapStarSouth'); // ввели переменные stars - то на что нажимаем + в хтмл data-tag + добавляем в хтмл класс stars
  // starsname - то что меняется + в хтмл data-name

  var _loop5 = function _loop5(i) {
    var south_buttons = south[i];
    south_buttons.addEventListener('click', function () {
      var south_button = south_buttons.dataset.tag;

      for (var _i10 = 0; _i10 < south.length; _i10++) {
        var _south_button = south[_i10];

        _south_button.classList.remove('active');
      }

      south_buttons.classList.add('active');

      for (var _i11 = 0; _i11 < southname.length; _i11++) {
        var south_names = southname[_i11];
        south_names.classList.remove('active');
        console.log(south_names.dataset.name, south_button);

        if (south_names.dataset.name == south_button) {
          southname[_i11].classList.add('active');
        }
      }
    });
  };

  for (var i = 0; i < south.length; i++) {
    _loop5(i);
  }
}
/******/ })()
;