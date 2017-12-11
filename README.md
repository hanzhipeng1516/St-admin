# St-admin
angularJS 1.2.30+Bootstrap 3.3.7 兼容IE8

### 目录 

<h3>1. 兼容IE8的补丁部分
<h3>2. 全局依赖包
<h3>3. 项目结构
<h3>4. 路由部分
<h3>5. 自定义服务
<h3>6. 自定义过滤器
<h3>7. [自定义指令](#menu7)
<h3>8. 第三方模块的使用</h3>

<br>

1. 依赖包部分：
    1. Css框架
        
        模块 | 文件路径 | 描述
        --- | --- | ---
        bootstrap | vendor/bootstrap/ | bootstrap框架基础样式
        ngAnimate | css/animate.css | ngAnimate模块的CSS3.0动画样式
        app | css/app.css | bootstrap框架的扩张样式CSS3.0
        theme | css/theme.css | 系统主题样式(自定义主题自行需增加),具有媒体查询
        iconfont | iconfont/iconfont.css | 对应项目的字体图标
        
    2. JS组件
        
        模块 | 文件路径 | 描述
        --- | --- | ---
        ui.router | vendor/angular/angular-ui-router |ui路由
        oc.lazyLoad | vendor/angular/oclazyload| 懒加载
        ngAnimate | vendor/angular/angular-animate |动画
        ngSanitize | vendor/angular/angular-sanitizes | 消毒器
        ui.bootstrap | vendor/angular/angular-bootstrap |ui组件
        ngStorage | vendor/angular/angular-ngStorage | 存储机制
        me-lazyload | vendor/angular/me-lazyload | 图片延迟加载
        
2.
3.
4.
5.
6.
<h5 id="menu7">7.自定义指令</h5>
-  [面包屑导航栏](app/tpl/common/breadCrumb/breadcrumb.md)
-  [Modal弹窗](app/tpl/common/modal/modal.md)
