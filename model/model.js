export var wordArray = [
  "home",
  "about",
  "tours",
  "israel",
  "usa",
  "australia",
  "newzealand",
  "france",
  "egypt",
  "japan",
  "canada",
  "uae",
  "specialoffers",
  "blog",
  "contact",
];

export function changeRoutes() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  //   console.log("home place");
  if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
      //   console.log("data " + data);
      $("#app").html(data);
    });
    console.log(pageID);
  } else {
    $.get(`pages/home.html`, function (data) {
      //   console.log("data " + data);
      console.log("home place");
      $("#app").html(data);
    });
  }

  if (pageID == "home" || pageID == "") {
    $("nav .nav-holder .links a").css("color", "#fff");
    $(".logo").css("background-image", "url(../images/logos/logo-white.png)");
    $("#nav-holder").css("border-bottom", "solid white 2px");
  } else {
    console.log("home", pageID);
    $("nav #links a").css("color", "black");
    $(".logo").css("background-image", "url(../images/logos/logo-black.png)");
    $("#nav-holder").css("border-bottom", "solid black 2px");
  }
}
