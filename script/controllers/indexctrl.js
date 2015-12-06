(function () {
  'use strict';
  angular.module('aggstyleapp').controller('IndexCtrl', IndexCtrl);

  IndexCtrl.$inject = ['$scope'];

  function IndexCtrl($scope) {
    var vm = this;
     vm.team.title = 'Our team';
     vm.team = [];
     if (vm.team.size = 0){
        vm.team =[{'name':'Ricardo Zandonai','job':'Solution architect','desc': 'with more than 10 years of experience in create systems environments, became a focused their occupation in solutions with low impact','img':'img/zandonai.png','face':'https://www.facebook.com/ricardo.zandonai','linked':'http://br.linkedin.com/in/ricardozandonai' }
                ,{'name':'Mauricio Narcizo','job':'Solution architect','desc': 'with more than 10 years of experience in create systems environments, became a focused their occupation in solutions with low impact','img':'img/mauricio.png','face':'https://www.facebook.com/mauricio.narcizo','linked':'https://br.linkedin.com/pub/mauricio-narcizo/33/130/a62'}];
     }

  }
})();