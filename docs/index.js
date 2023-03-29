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

document.addEventListener('DOMContentLoaded', function () {
  phoneMenu();
});
/******/ })()
;