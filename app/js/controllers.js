'use strict';

/* Controllers */

var myApp = angular.module('myApp.controllers', []);

  myApp.factory('Hero',function(){
     var Hero = {};
      // opis
      Hero.id = 1;
      Hero.nick = "Dragonis";
      Hero.plec = "kobieta";
      Hero.rasa = "człowiek";
      // atrybuty
      Hero.sila = 4;
      Hero.zrecznosc = 4;
      Hero.inteligencja = 4;
      Hero.witalnosc = 4;
      // umiejetnosci
      Hero.walka_wrecz = 1;
      Hero.kamehameha = 1;

      Hero.dodajwSile = function(){
          return Hero.sila++;
      };

      Hero.odemijwSile = function(){
          return Hero.sila--;
      };
      return Hero;
  });
  myApp.controller('HomeCtrl', ['$scope', function($scope) {

  }]);
  myApp.controller('HeroCtrl', ['$scope','Hero', function($scope,Hero) {
        $scope.bohater = Hero;

  }]);
