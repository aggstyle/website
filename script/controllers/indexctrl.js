(function () {
  'use strict';
  angular.module('aggstyleapp', []).controller('IndexCtrl', IndexCtrl);

  IndexCtrl.$inject = ['$scope'];

  function IndexCtrl($scope) {
    var vm = this;
    
    
    //home
    vm.homesub='AgGStyle'
    vm.hometext = 'testeeeeeee'
    vm.homescroll='Scroll down'
    //works 
    vm.worktitle = 'Our Work`s'
    vm.workdescription = 'something about what we can do'
    
    // team
     vm.teamtitle = 'Our team';

        vm.team =[{'name':'Ricardo Zandonai','job':'Solution architect','desc': 'with more than 10 years of experience in create systems environments, became a focused their occupation in solutions with low impact','img':'img/zandonai.png','face':'https://www.facebook.com/ricardo.zandonai','linked':'http://br.linkedin.com/in/ricardozandonai' }
                ,{'name':'Mauricio Narcizo','job':'Solution architect','desc': 'with more than 10 years of experience in create systems environments, became a focused their occupation in solutions with low impact','img':'img/mauricio.png','face':'https://www.facebook.com/mauricio.narcizo','linked':'https://br.linkedin.com/pub/mauricio-narcizo/33/130/a62'}];


  }
})();