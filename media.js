(function() {

    var Media = {}

    /**
     * 初始化模块
     */
    Media.init = function() {
        var self = this;

        self.setRem();
        // 在每次窗口重制大小的时候重置rem，从而方便调试
        window.addEventListener('resize', function() {
            console.log('resize');
            self.setRem();
        })
    }

    /**
     * 设置根元素字体大小
     */
    Media.setRem = function() {
        var self = this;

        // 获取屏幕宽度
        var deviceWidth = window.screen.width;
        // 将rem的宽度设置为屏幕宽度
        document.querySelector('html').style.fontSize = (deviceWidth) + 'px';
    }

    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = Media;
    } else if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function() {
            return Media;
        });
    } else {
        window.Media = Media;
    }
}())
