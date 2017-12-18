require('./theme/index');
angular.module('st-admin', [
    'ui.router',
    'oc.lazyLoad',
    'theme'
])
    .config(require('./app.constants'))
    .config(require('./app.router'))
    .controller('mainCtrl', require('./app.ctrl'))
;


