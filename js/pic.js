!function() {
    var box = $("#box"), span = "span",
    e = {
        lvT: ["祖蓝的黑粉~", "祖蓝的路人粉~", "祖蓝的忠实粉~", "祖蓝鹰眼人~", "火眼金睛王祖蓝~", "洞察一切王祖蓝~", "两眼冒金星~", "24k氪金眼", "已被亮瞎！"],
        render: function(lvMap, f) {
            box.find(span).css({
                "background": "url(./img/black1.png)",
                "background-size": "cover"
            });
            var h = Math.floor(Math.random() * lvMap * lvMap);
            box.find(span).eq(h).css({
                "background": "url(./img/black2.png)",
                "background-size": "cover"
            }).data("type", "a");
        },
        getGameOverText: function(lv) {
            var b = 15 > lv ? 0 : Math.ceil((lv - 20) / 10); //ceil向上取整
            var c = this.lvT[b] || _.last(this.lvT); //数组最后一个值
            var d = c + "lv" + lv;
            return {txt: d};
        }};
    API.color = e
 }();

$(function  () {
        //音乐播放
        var isPlaying = false;
        //播放音乐效果
        $('#audio_btn').click(function() {
                if (isPlaying) {
                        isPlaying = false;
                        document.getElementById('media').pause();
                        $(this).addClass('off');
                        $(this).removeClass('rotate');
                }else{
                document.getElementById('media').play();
                $(this).removeClass('off');
                $(this).addClass('rotate');
                isPlaying = true;
            }
        });
  });
