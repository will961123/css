

var open_id;
var name = 'open_id';
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
var r = window.location.search.substr(1).match(reg);
if (r != null) {
    open_id = unescape(r[2]);
} else {
    open_id = null;
}
if (typeof opId !== 'undefined') {
    open_id = opId || ''
}
var now_prize = 0;
new Vue({
    el: "#app",
    data: {
        showIndeBg: false,// 开屏页
        sec: 3,
        // page1Url: img1 ? img1 : '',
        // page2Url: img2 ? img2 : '',
        // page3Url: img3 ? img3 : '',
        isStart: 1,
        page1Flag: true,
        page2Flag: false,
        page3Flag: false,
        tabFlag: 0,
        score: 10,
        tabbar: [
            {
                claName: 'icontachometer',
                name: '抽奖'
            },
            {
                claName: 'icongift',
                name: '奖品'
            },
            {
                claName: 'iconvolume',
                name: '规则'
            }
        ],
        list: [
            { img: '/jy/images/1.png', title: 'Chicco儿童安全座椅' },
            { img: '/jy/images/5.png', title: '运动水杯' },
            { img: '/jy/images/2.png', title: '德尔玛吸尘器' },
            { img: '/jy/images/5.png', title: '运动水杯 ' },
            { img: '/jy/images/3.png', title: '伊伊爱时尚清新印花空调被 ' },
            { img: '/jy/images/5.png', title: '运动水杯' },
            { img: '/jy/images/4.png', title: '特瑞欧餐具7件套' },
            { img: '/jy/images/5.png', title: '运动水杯' }
        ],
        index: -1,   // 当前转动到哪个位置，起点位置
        count: 8,    // 总共有多少个位置
        timer: 0,    // 每次转动定时器
        speed: 200,  // 初始转动速度
        times: 0,    // 转动次数
        cycle: 50,   // 转动基本次数：即至少需要转动多少次再进入抽奖环节
        prize: 0,    // 中奖位置
        click: true, // 是否有权限
        showToast: false, //显示中奖弹窗
        isAward: true,//是否中奖
        isHeXiao: false,//是否核销
        awardList: [    //奖品列表

        ],
        showFlag: true,
        musicFlag: true,//背景音乐的bofang


        needWriteUserInfo: false,
        writeUser: {
            name: '',
            age: '',
            phone: ''
        },

        // 2020年6月22日 14:52:15
        canReDraw:true,
        sectionIdx:0,
        canShowMc:false,
        mcType:1,
        addUserInfo:false,
        addUserInfoObj: {
            name: '', 
            phone: ''
        },

    },
    created() {
        var that = this;
        this.time()
       
        // that.init();
        // if (!$$name || !$$phone || !$$age_class) {
        //     that.needWriteUserInfo = true
        // } else {
        //     that.needWriteUserInfo = false
        // }
    },
    mounted() { 
        this.setHtmlFontSize();
        var audio = document.getElementById('audio');
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);
        
       
    },
    methods: {
        saveUinfo(){
            this.addUserInfo = false
            this.sectionIdx = 0
            $.toast("提交成功!", 'text');

            return
            
            if (!this.addUserInfoObj.name) {
                $.toast("请填写姓名", 'text');
                return false
            }
            if (!this.addUserInfoObj.phone) {
                $.toast("请填写手机号", 'text');
                return false
            }

            var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(this.addUserInfoObj.phone)) {
                $.toast("请填写正确手机号", 'text');
                return false;
            }
      
        },
        showAddUserInfo(){
            this.addUserInfo = true
        },
        backIndex(){
            this.sectionIdx = 0
        },
        showGame(){
            this.closeMc()
            this.sectionIdx = 1
            this.canvasInit()
        },
        showMc(type){ 
            this.canShowMc = true
            this.mcType = type

            
        },
        closeMc(){
            this.canShowMc = false
        },
        canvasInit() {
            var p = document.getElementsByClassName('canvasText')[0]
            var box = document.getElementsByClassName('canvasBox')[0]
            var canvas = document.getElementById('canvas')
            var ctx = canvas.getContext('2d')
            var textList = ['一等奖', '二等奖', '三等奖', '二等奖', '三等奖', '谢谢惠顾', '三等奖', '谢谢惠顾']
            this.drawCover(ctx)
            this.handlerMouseDown(canvas, ctx)
            this.compatible(canvas, ctx, box)
            this.setText(p, textList)
        },
        setText(p, textList) {
            p.innerHTML = textList[this.getRandom(0, textList.length - 1)]
        },
        getRandom(start, end) {
            return parseInt(Math.random() * (end - start + 1) + start)
        },
        drawCover(ctx) {  
            ctx.beginPath()
            ctx.globalCompositeOperation ='source-over'
            ctx.fillStyle = '#4a934e' 
            ctx.fillRect(0, 0, 200, 100)
        },

        reDraw(x, y, ctx, canvas) {
            // if(!this.canReDraw){
            //     return false
            // }
            var w = canvas.width
            var h = canvas.height
            var area = w * h
            ctx.beginPath()
            ctx.globalCompositeOperation = 'destination-out'
            // canvas.style.display = 'none';
            // canvas.offsetHeight;
            // canvas.style.display = 'inherit';
            ctx.arc(x, y, 15, 0, Math.PI * 2)
            ctx.fill()
            ctx.closePath()

            var data = ctx.getImageData(0, 0, w, h).data
            var scrapeNum = 0 
            for (var i = 3; i < data.length; i += 4) {
                if (data[i] === 0) {
                    scrapeNum++
                }
            }
            if (scrapeNum > area * 0.6) {
                ctx.clearRect(0, 0, w, h)
                canvas.onmousemove = function () { }
                canvas.ontouchmove = function () { }
                $.toast("中奖了", 'text');
                this.canReDraw = false
            }
        },
        handlerMouseDown(canvas, ctx) {
            var that = this
            canvas.onmousedown = function () {
                canvas.onmousemove = function (e) {
                    e = e || window.event
                    var x = e.offsetX
                    var y = e.offsetY
                    console.log(x, y)
                    that.reDraw(x, y, ctx, canvas)
                }
            }
            canvas.onmouseup = function () {
                canvas.onmousemove = function () { }
            }
        },
        compatible(canvas, ctx, box) {
            var that = this
            canvas.ontouchstart = function () {
                var left = box.offsetLeft
                var top = box.offsetTop
                canvas.ontouchmove = function (e) {
                    e = e || window.event
                    var x = e.touches[0].clientX - left
                    var y = e.touches[0].clientY - top
                    that.reDraw(x, y, ctx, canvas)
                }
            }
            canvas.ontouchend = function () {
                canvas.ontouchmove = function () { }
            }
        }

        // 2020年6月22日 15:03:08 以下是旧代码
        ,
        time() {
            var that = this;
            var timer = ''
            timer = setInterval(function () {
                that.sec--;
                if (that.sec == 0) {
                    clearInterval(timer);
                    that.showIndeBg = false;
                }
            }, 1000);

        },
        // 保存用户信息
        doSave() {
            console.log('save'); console.log(this.writeUser)
            if (!this.writeUser.name) {
                $.toast("请填写姓名", 'text');
                return false
            }
            if (!this.writeUser.phone) {
                $.toast("请填写手机号", 'text');
                return false
            }

            var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(this.writeUser.phone)) {
                $.toast("请填写正确手机号", 'text');
                return false;
            }

            if (!this.writeUser.age) {
                $.toast("请选择年龄", 'text');
                return false
            }

            var that = this
            $.ajax({
                url: "/jy/addUserInfo",
                data: {
                    name: that.writeUser.name,
                    phone: that.writeUser.phone,
                    age_class: that.writeUser.age,
                    open_id: opId
                },
                dataType: "json",
                type: "post",
                timeout: 10000,
                beforeSend: function () {
                    $.showLoading('加载中');
                },
                error: function () {
                    setTimeout(() => {
                        $.hideLoading();
                        $.toast.prototype.defaults.duration = 1000;
                        $.toast("网络异常", 'text');
                    }, 1000);
                },
                success: function (res) {
                    console.log('保存', res)
                    $.hideLoading();

                    if (res == 1) {
                        that.needWriteUserInfo = false
                        // that.awardList = res.list;
                    } else {
                        $.toast.prototype.defaults.duration = 1000;
                        $.toast(res.msg || '网络繁忙', 'text');
                    }
                }
            })


        },
        close() { console.log('close'); this.needWriteUserInfo = false },
        musicClick() {
            var that = this;
            var bgsound = document.getElementById('audio');
            if (that.musicFlag) {
                bgsound.pause();
            } else {
                bgsound.play();
            }
            that.musicFlag = !that.musicFlag;
        },
        init() {
            var that = this;

            $.ajax({
                url: "/jy/my_award",
                data: { open_id: open_id },
                dataType: "json",
                type: "post",
                timeout: 10000,
                beforeSend: function () {
                    $.showLoading('加载中');
                },
                error: function () {
                    setTimeout(() => {
                        $.hideLoading();
                        $.toast.prototype.defaults.duration = 1000;
                        $.toast("网络异常", 'text');
                    }, 1000);
                },
                success: function (res) {
                    $.hideLoading();

                    if (res.code == 200) {

                        that.awardList = res.list;
                    } else {
                        $.toast.prototype.defaults.duration = 1000;
                        $.toast(res.msg, 'text');
                    }
                }
            })
        },
        duihuan(item) {
            var that = this;
            // console.log(item);
            $.prompt({
                title: '',
                text: '核销码',
                input: '请输入核销码',
                empty: false, // 是否允许为空
                onOK: function (input) {
                    // console.log(input);
                    var obj = {
                        award_id: item.pid,
                        project_id: item.project_id,
                        open_id: open_id,
                        pwd: input
                    }
                    $.ajax({
                        url: "/jy/prize_success",
                        data: obj,
                        dataType: "json",
                        type: "post",
                        timeout: 10000,
                        beforeSend: function () {
                            $.showLoading('加载中');
                        },
                        error: function () {
                            setTimeout(() => {
                                $.hideLoading();
                                $.toast.prototype.defaults.duration = 1000;
                                $.toast("网络异常", 'text');
                            }, 1000);
                        },
                        success: function (res) {
                            $.hideLoading();
                            if (res.code == 200) {
                                $.toast('兑奖成功', function () {
                                    that.init();
                                });
                            } else {
                                $.toast.prototype.defaults.duration = 1000;
                                $.toast(res.msg, 'text');
                            }
                        }
                    })
                },
                onCancel: function () {
                    //点击取消
                }
            });
        },
        tabChange(f) {
            var that = this;
            that.tabFlag = f;
        },
        setHtmlFontSize() {
            const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
            const htmlDom = document.getElementsByTagName('html')[0];
            htmlDom.style.fontSize = htmlWidth / 375 * 100 + 'px';
        },
        startLottery() {
            var that = this;
            if (!that.click) { return }

            var flag = false;
            if (open_id) {
                that.click = false;

                $.ajax({
                    type: "POST",
                    url: "/jy/get_award",
                    data: { open_id: open_id, project_id: 1 },
                    dataType: "json",
                    async: false,
                    success: function (data) {

                        if (data == -3) {

                            alert('游戏正在筹备中！');
                            that.click = true;
                        } else if (data == -2) {

                            alert('游戏已经结束了！');
                            that.click = true;
                        } else if (data == -1) {

                            alert('您已经中过奖了！');
                            that.click = true;
                        } else if (data == 0) {

                            alert('您没有抽奖次数了！');
                            that.click = true;
                        } else if (data == 9999) {

                            alert('奖品已经全部发完了！');
                            that.click = true;
                        } else if (data == 1) {
                            $.toast("请完善个人信息才能进行抽奖", 'text');
                            that.click = true;
                            that.needWriteUserInfo = true
                        } else {
                            now_prize = data.level;
                            flag = true;

                            that.init();
                        }
                    }
                });


                if (flag) {
                    this.startRoll();
                    flag = false;
                }


            } else {
                alert('系统错误！请刷新网页');
                return;
            }

        },
        startRoll() {
            this.times += 1;
            this.click = false;
            this.oneRoll();
            if (this.times > this.cycle + 10 && this.prize === this.index) {
                clearTimeout(this.timer)
                this.prize = -1;
                // console.log(this.prize,'this.prize')
                this.times = 0
                this.speed = 200
                var that = this; setTimeout(res => { that.showToast = true; that.click = true; }, 500)
            } else {
                if (this.times < this.cycle) { this.speed -= 10 } else if (this.times === this.cycle) {

                    const index = now_prize;
                    this.prize = index;

                } else if (this.times > this.cycle + 10 && ((this.prize === 0 && this.index === 7) || this.prize === this.index + 1)) {
                    this.speed += 110;
                } else {
                    this.speed += 20;
                }
                if (this.speed < 40) { this.speed = 40 }
                this.timer = setTimeout(this.startRoll, this.speed)
            }
        },
        oneRoll() {
            let index = this.index
            const count = this.count
            index += 1
            if (index > count - 1) { index = 0 }
            this.index = index
        },

    }
})






// 微信分享 接口调用
function getConfig() {
    var that = this;
    var locationUrl = location.href.split('#')[0];//当前页面url

    var obj = {
        openId: open_id,
        "url": locationUrl
    }
    $.ajax({
        type: "POST",
        url: "/jy/getSdkConfig",
        data: obj,
        dataType: "json",
        success: function (res) {
            var appId = res.appId;
            var timestamp = res.timestamp;
            var nonceStr = res.nonceStr;
            var jsapi_ticket = res.jsapi_ticket;
            var signature = res.signature;
            // var yang = res.nickName;
            // var hao = res.picUrl;


            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: appId, // 必填，公众号的唯一标识
                timestamp: timestamp, // 必填，生成签名的时间戳
                nonceStr: nonceStr, // 必填，生成签名的随机串
                signature: signature,// 必填，签名
                jsApiList: [
                    'onMenuShareAppMessage',  //分享到朋友圈
                    'onMenuShareTimeline',//分享 给朋友
                ] // 必填，需要使用的JS接口列表
            });
            wx.ready(function () {
                var shareData = {
                    title: '感恩回馈季 幸福五重礼',
                    desc: '感恩回馈季 幸福五重礼',
                    link: "http://vote.hnshengen.com/jy/wx/getcode?masterId=" + open_id,
                    imgUrl: 'http://vote.hnshengen.com/jy/images/fx.png',
                    success: function (res) {

                    }
                };
                wx.onMenuShareAppMessage(shareData);//分享给好友
                wx.onMenuShareTimeline(shareData);//分享到朋友圈
            })
            wx.error(function (res) {
                //alert(res.errMsg);//错误提示

            });

        }
    });
}
// getConfig();