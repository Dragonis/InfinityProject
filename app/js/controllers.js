'use strict';

/* Controllers */

var myApp = angular.module('myApp.controllers', []);

  myApp.factory('Hero',function(){
     var Hero = {};
      // opis
      Hero.id = 1;
      Hero.nick = "test";
      Hero.plec = "kobieta";
      Hero.rasa = "człowiek";
      // atrybuty
      Hero.sila = 5;
      Hero.zrecznosc = 4;
      Hero.inteligencja = 4;
      Hero.witalnosc = 4;
      // umiejetnosci
      Hero.walka_wrecz = 1;
      Hero.kamehameha = 1;

      Hero.dodajwSile = function(){

              $http.post('SpisGraczy.json',$scope.hero).then(function(data) {
               $scope.hero.sila =+1;
               });
      };

      Hero.odemijwSile = function(){
          //return Hero.sila--;
      };
      return Hero;
  });

  myApp.controller('HomeCtrl', ['$scope', function($scope) {

  }]);
  myApp.controller('HeroCtrl', ['$scope','$http','Hero', function($scope,$http,Hero) {
      $http.get('SpisGraczy.json')
          .then(function(res){
              $scope.Hero = res.data; // object Hero
          });


  }]);
