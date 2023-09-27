"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menu"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutPg: () => (/* binding */ aboutPg)
/* harmony export */ });
function aboutPg(){
    const aboutBtn = document.querySelector('#about');
    aboutBtn.addEventListener('click', function() {
        const mainBody = document.querySelector('#pageContent');
        mainBody.innerHTML = `<h1>The Mead Menu</h1>
        <h2>Bringing ancient traditions to life with modern tools.</h2>
        <img src="https://images.unsplash.com/photo-1474314005122-3c07c4df1224" id='menuImg' style='height:450px;;object-fit:contain'>
        <p>Honey wine - commonly called mead - is one of the first forms of alcohol consumed by humans. We are a collection of home brewers who try to share this ancient tradition with others, using modern tools. Our mead selection constantly updates, below is what we curently have on offer:</p>
        <div id="menu">
            <div id="meadList"><div class="header">Mead name</div><div class="header">Tasting notes</div><div class="header">ABV</div><div class="header">Price</div><div class="header">Bottle size</div>
            <div class="entry">"The Trappist"</div><div class="entry">Lemony, zesty with hints of spice</div><div class="entry">11.8%</div><div class="entry">£19.99</div><div class="entry">75cl</div>
            <div class="entry">"The Sack"</div><div class="entry">Sweet, light, hints of caramel</div><div class="entry">15.5%</div><div class="entry">£24.99</div><div class="entry">75cl</div>
            <div class="entry">"Killer Bee"</div><div class="entry">Spicy and zesty, with hints of pepper</div><div class="entry">12%</div><div class="entry">£14.99</div><div class="entry">50cl</div>
            <div class="entry">"Cyser Squad"</div><div class="entry">Tart, sweet with hints of vanilla</div><div class="entry">10%</div><div class="entry">£9.99</div><div class="entry">33cl</div></div>
        </div>`
    })
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtIQUFrSDtBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGFib3V0UGcoKXtcbiAgICBjb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dCcpO1xuICAgIGFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2VDb250ZW50Jyk7XG4gICAgICAgIG1haW5Cb2R5LmlubmVySFRNTCA9IGA8aDE+VGhlIE1lYWQgTWVudTwvaDE+XG4gICAgICAgIDxoMj5CcmluZ2luZyBhbmNpZW50IHRyYWRpdGlvbnMgdG8gbGlmZSB3aXRoIG1vZGVybiB0b29scy48L2gyPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDc0MzE0MDA1MTIyLTNjMDdjNGRmMTIyNFwiIGlkPSdtZW51SW1nJyBzdHlsZT0naGVpZ2h0OjQ1MHB4OztvYmplY3QtZml0OmNvbnRhaW4nPlxuICAgICAgICA8cD5Ib25leSB3aW5lIC0gY29tbW9ubHkgY2FsbGVkIG1lYWQgLSBpcyBvbmUgb2YgdGhlIGZpcnN0IGZvcm1zIG9mIGFsY29ob2wgY29uc3VtZWQgYnkgaHVtYW5zLiBXZSBhcmUgYSBjb2xsZWN0aW9uIG9mIGhvbWUgYnJld2VycyB3aG8gdHJ5IHRvIHNoYXJlIHRoaXMgYW5jaWVudCB0cmFkaXRpb24gd2l0aCBvdGhlcnMsIHVzaW5nIG1vZGVybiB0b29scy4gT3VyIG1lYWQgc2VsZWN0aW9uIGNvbnN0YW50bHkgdXBkYXRlcywgYmVsb3cgaXMgd2hhdCB3ZSBjdXJlbnRseSBoYXZlIG9uIG9mZmVyOjwvcD5cbiAgICAgICAgPGRpdiBpZD1cIm1lbnVcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtZWFkTGlzdFwiPjxkaXYgY2xhc3M9XCJoZWFkZXJcIj5NZWFkIG5hbWU8L2Rpdj48ZGl2IGNsYXNzPVwiaGVhZGVyXCI+VGFzdGluZyBub3RlczwvZGl2PjxkaXYgY2xhc3M9XCJoZWFkZXJcIj5BQlY8L2Rpdj48ZGl2IGNsYXNzPVwiaGVhZGVyXCI+UHJpY2U8L2Rpdj48ZGl2IGNsYXNzPVwiaGVhZGVyXCI+Qm90dGxlIHNpemU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnRyeVwiPlwiVGhlIFRyYXBwaXN0XCI8L2Rpdj48ZGl2IGNsYXNzPVwiZW50cnlcIj5MZW1vbnksIHplc3R5IHdpdGggaGludHMgb2Ygc3BpY2U8L2Rpdj48ZGl2IGNsYXNzPVwiZW50cnlcIj4xMS44JTwvZGl2PjxkaXYgY2xhc3M9XCJlbnRyeVwiPsKjMTkuOTk8L2Rpdj48ZGl2IGNsYXNzPVwiZW50cnlcIj43NWNsPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW50cnlcIj5cIlRoZSBTYWNrXCI8L2Rpdj48ZGl2IGNsYXNzPVwiZW50cnlcIj5Td2VldCwgbGlnaHQsIGhpbnRzIG9mIGNhcmFtZWw8L2Rpdj48ZGl2IGNsYXNzPVwiZW50cnlcIj4xNS41JTwvZGl2PjxkaXYgY2xhc3M9XCJlbnRyeVwiPsKjMjQuOTk8L2Rpdj48ZGl2IGNsYXNzPVwiZW50cnlcIj43NWNsPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW50cnlcIj5cIktpbGxlciBCZWVcIjwvZGl2PjxkaXYgY2xhc3M9XCJlbnRyeVwiPlNwaWN5IGFuZCB6ZXN0eSwgd2l0aCBoaW50cyBvZiBwZXBwZXI8L2Rpdj48ZGl2IGNsYXNzPVwiZW50cnlcIj4xMiU8L2Rpdj48ZGl2IGNsYXNzPVwiZW50cnlcIj7CozE0Ljk5PC9kaXY+PGRpdiBjbGFzcz1cImVudHJ5XCI+NTBjbDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVudHJ5XCI+XCJDeXNlciBTcXVhZFwiPC9kaXY+PGRpdiBjbGFzcz1cImVudHJ5XCI+VGFydCwgc3dlZXQgd2l0aCBoaW50cyBvZiB2YW5pbGxhPC9kaXY+PGRpdiBjbGFzcz1cImVudHJ5XCI+MTAlPC9kaXY+PGRpdiBjbGFzcz1cImVudHJ5XCI+wqM5Ljk5PC9kaXY+PGRpdiBjbGFzcz1cImVudHJ5XCI+MzNjbDwvZGl2PjwvZGl2PlxuICAgICAgICA8L2Rpdj5gXG4gICAgfSlcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=