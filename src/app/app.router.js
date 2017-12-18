module.exports = function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
        url: '/app',
        template: require('./app.html'),
        controller: 'mainCtrl'
    });
    $urlRouterProvider.otherwise('/app');
};