import { changePageContent } from "../model/model.js";

function initListeners() {
    $("nav #links a").on("click", function (e) {

        let btnID = e.currentTarget.id; 
        console.log("click", btnID);
        changePageContent(btnID);
        
    })
}

function listen() {
    $("#tourpackage #tourslink a").on("click", function (e){
        alert(e.currentTarget.id);
        changePageContent(e.currentTarget.id)
    })
}

$(document).ready(function() {
    initListeners();
    listen();
    changePageContent("home");
});