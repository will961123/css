const setTitle = title=>{
    document.title = title
    const ua = navigator.userAgent.toLowerCase()
    if(/iphone|ipad|ipod/.test(ua)){
        const iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        const iframeCallback = function () {
            setTimeout(function () {
                iframe.removeEventListener('load',iframeCallback)
                document.body.removeChild(iframe)
            },0)
        }
        iframe.addEventListener('load',iframeCallback)
        document.body.appendChild(iframe)
    }
}
export default setTitle