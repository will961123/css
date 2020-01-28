$(function () {
    // 大于900使用背景图 小于900使用图片 配合css媒体查询或类
    $(window).on("resize", function () {
        let w = $(this).width()
        let isShowBigImg = w >= 900
        let $domList = $("#bannerImgList .carousel-item")
        $domList.each((idx, item) => {
            let src = isShowBigImg ? $(item).data('big-img') : $(item).data('sm-img')
            if (isShowBigImg) {
                $(item).empty().css({
                    background: `url(${src}) no-repeat center center`,
                    backgroundSize: "cover"
                })
            } else {
                let img = `<img src="${src}" ></img>`
                $(item).empty().append(img)
            }
            // 只有背景图才需要这个类 用作设置高度
            isShowBigImg ? $(item).addClass('showBigImg') : $(item).removeClass('showBigImg')
        })

    })
    $(window).trigger("resize")

    // 小屏幕 myTab 列表overflow-X : auto
    $(window).on("resize", function () {
        let $ul = $('#myTab')
        let $liList = $(".nav-item", $ul)
        let totalWidth = 0
        $liList.each((idx, item) => {
            totalWidth += $(item).width()
        })
        let parentWidth = $ul.parent().width()
        totalWidth > parentWidth ? $ul.css({
            width: totalWidth + 'px'
        }) : $ul.css({
            width: 'auto'
        })

    }).trigger("resize")


    // footer 提示框
    $('#footer img').tooltip()

})