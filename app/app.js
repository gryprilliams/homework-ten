import * as Model from "../model/model.js";

function initListeners() {
  $("nav #links a").on("click", function (e) {
    let btnID = e.currentTarget.id;
    pageChange(btnID);
  });
}

function initURLListener() {
  $(window).on("hashchange", Model.changeRoutes);
  Model.changeRoutes();
}

$(document).ready(function () {
  //   initListener();
  console.log(Model.wordArray);
  initURLListener();
});

// function pageChange(pageName) {
//   changePageContent(pageName);
//   console.log(pageName);
// }
