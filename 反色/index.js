window.onload = function () {
    let pointer = document.querySelector('.pointer')
    let lastTime = 0;
    document.addEventListener('mousemove', function (e) { 
        let nowTime = + new Date() 
        if (nowTime - lastTime > 100) { 
            e = e || window.event
            let x = e.x
            let y = e.y
            pointer.style.left = x + 'px'
            pointer.style.top = y + 'px'
            lastTime = nowTime
        }


    })


}