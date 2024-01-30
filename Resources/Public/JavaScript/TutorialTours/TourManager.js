
//import bootstrapTour from '@codingfreaks/cf-cookiemanager/thirdparty/bootstrap-tour.js';
import $ from 'jquery';
//import ServiceTour from '@codingfreaks/cf-cookiemanager/TutorialTours/ServiceTour.js';
//import CategoryTour from '@codingfreaks/cf-cookiemanager/TutorialTours/CategoryTour.js';
//import FrontendTour from '@codingfreaks/cf-cookiemanager/TutorialTours/FrontendTour.js';

let tourMap = {
   // "CategoryTour": { run: new bootstrapTour.Tour(CategoryTour)},
   // "ServiceTour": {run: new bootstrapTour.Tour(ServiceTour)},
   // "FrontendTour": {run: new bootstrapTour.Tour(FrontendTour)},
}

$(".startTour").click(function (e) {
    let selectedTourName = $(this).data("tour");
    tourMap[selectedTourName].run.init();
    tourMap[selectedTourName].run.restart();
});

if (typeof sessionStorage.getItem("currentTour") !== "undefined" && sessionStorage.getItem("currentTour") !== null && sessionStorage.getItem("currentTour") !== "") {
    let currentTour = sessionStorage.getItem("currentTour");
    tourMap[currentTour].run.init();
    tourMap[currentTour].run.start();
}

$("body").delegate(".force-end-tour","click", function (e) {
    let currentTour = sessionStorage.getItem("currentTour");
    tourMap[currentTour].run.end();
    sessionStorage.setItem("currentTour", "");
});


