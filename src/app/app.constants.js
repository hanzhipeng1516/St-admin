module.exports = function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        debug: false,
        events: false,
        modules: [
            {
                name: 'msg',
                file: [
                    require('./pages/msg/msg.module'),
                    require('./pages/msg/msg.router'),
                    require('./pages/msg/msg.html'),
                    require('./pages/msg/msg.ctrl'),
                    require('./pages/msg/msg.constants')
                ]
            }
        ]
    });
};