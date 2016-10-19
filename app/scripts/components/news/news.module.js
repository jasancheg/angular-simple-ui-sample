/**
 * @ngdoc module
 * @name app.components
 * @description define components's modules
 */

(function() {
  'use strict';

  angular
    .module('app.components.news', [])
    .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
      routerHelper.configureStates(getStates());
    }

    /* @ngInject */
    // function GetNews (api) {
    //   return api.get('/user');
    // }

    function getStates() {
      return [
        {
          state: 'news',
          config: {
            absract: true,
            template: '<ui-view class="shuffle-animation"/>',
            url: '/news'
          }
        },
        {
          state: 'news.add',
          config: {
            url: '/add',
            templateUrl: 'scripts/components/news/add-news/add-news.html',
            controller: 'NewsAddCtrl',
            controllerAs: 'vm',
            title: 'Add news'
          }
        },
        {
          state: 'news.list',
          config: {
            url: '/list',
            templateUrl: 'scripts/components/news/list-news/list-news.html',
            controller: 'NewsListCtrl',
            controllerAs: 'vm',
            title: 'News list'
            // resolve: {
            //   NewsList: GetNews
            // }
          }
        }
      ];
    }
})();
