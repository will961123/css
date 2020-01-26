function copy() {
    let iptEl = document.createElement('input')
    // 防止ios闪屏
    iptEl.setAttribute("readonly","")
    iptEl.value = str
    document.body.appendChild(iptEl)
    // 选中文本 两个方法功能相同 为了兼容浏览器
    iptEl.select()
    iptEl.setSelectionRange(0,str.length)
    document.execCommand('copy')
    iptEl.remove()
}