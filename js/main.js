$(".button-collapse").sideNav();
$('.button-collapse').sideNav('hide');

var app = angular.module('app', ['ngRoute']);
/*
 * Web App Routing
 */
app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "home.html",
      controller : "home"
    })
    .when("/about", {
      templateUrl : "about.html",
      controller : "about"
    })
    .when("/author", {
      templateUrl : "author.html",
      controller : "author"
    })
    .when("/speaker", {
      templateUrl : "speaker.html",
      controller : "speaker"
    })
    .when("/paper", {
      templateUrl : "paper.html",
      controller : "paper"
    })
    .when("/workshop", {
      templateUrl : "workshop.html",
      controller : "workshop"
    })
    .when("/sponsor", {
      templateUrl : "sponsor.html",
      controller : "sponsors"
    })
    .when("/contact", {
      templateUrl : "contact.html",
      controller : "contact"
    });    
});

app.controller('AppController', function($scope, $http) {
    
});

/* Home Page */
app.controller('home', function($scope, $http) {
    particleAnimate();
    
    /*var typed = new Typed('#desc', {
        strings: [
            "The 1st IEMGRAPH Conference and Exhibition",
            "September, 2018",
            "at IEM Kolkata"
        ],
        typeSpeed: 30,
        backSpeed: 30,
        backDelay: 2000,
        startDelay: 2000,
        loop: true
        
    });
    $(".typed-cursor").hide();*/
});

app.controller('about', function($scope, $http) {
    
});

app.controller('author', function($scope, $http) {
    
});

app.controller('speaker', function($scope, $http) {
    
});

app.controller('paper', function($scope, $http) {
    
});

app.controller('workshop', function($scope, $http) {
    
});

app.controller('sponsor', function($scope, $http) {
    
});

app.controller('contact', function($scope, $http) {

});
