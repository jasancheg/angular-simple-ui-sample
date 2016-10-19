/**
 * @ngdoc controller
 * @name app.components.news.controller:NewsListCtrl
 * @requires logger
 * @description Controller of the app
 */

(function() {
  'use strict';

  angular
    .module('app.components.news')
    .controller('NewsListCtrl', NewsListCtrl);

  /* @ngInject */
  function NewsListCtrl($log, api, API_URL, NewsList) {

    var vm = this;
    vm.currentPage = 1;
    vm.itemsPerPage = 10;
    vm.pages = 5;
    vm.contentlets = NewsList.contentlets;

    vm.selectPage = selectPage;
    vm.setItemsPerPage = setItemsPerPage;

    activate();
    ///////////

    function activate() {


      $log.info('Activated List News View', { vm: vm });
    }

    function setItemsPerPage(num) {
      vm.itemsPerPage = num;
      updateList();
    }

    function selectPage(page) {
      vm.currentPage = page;
      updateList();
    }

    function updateList() {
      getNews()
        .then(function(res){
          vm.contentlets = res.contentlets;
           toastr.success('some message', 'List updated');
          console.log("list updated", {list: vm.contentlets})
        });
    }

    function getNews() {
      var url = 'content/render/false/type/json/query/+contentType:News%20+(conhost:48190c8c-42c4-46af-8d1a-0cd5db894797%20conhost:SYSTEM_HOST)%20+languageId:1%20+deleted:false%20+working:true/orderby/News.sysPublishDate%20desc';

      if(vm.itemsPerPage !== 10) {
        url += '/limit/' + vm.itemsPerPage;
      }

      if(vm.currentPage !== 1) {
        url += '/offset/' + vm.currentPage
      }

      return api.get(url);
    }
  }
})();
