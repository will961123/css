async function faceDetection() {
    const loading = document.querySelector("#loading")
    loading.style.display = 'flex'

    // 加载模型
    await faceapi.nets.ssdMobilenetv1.loadFromUri('models')
    await faceapi.nets.faceLandmark68Net.loadFromUri('models') 

    // 找到人的图片
    const input = document.getElementById("input");  
    // 保存查找的单个人脸信息 识别的是按照原图大小 说以下面重新调整
    const detection = await faceapi.detectSingleFace(input).withFaceLandmarks() 
    // 保存实际显示的图片的宽度和高度
    const nowInputSize = { width: input.width, height: input.height }
    // 对识别的结果重新调整大小
    const resizeDetection = faceapi.resizeResults(detection, nowInputSize)

    // 获取口罩
    const mask = document.querySelector("#mask")
    // 获得人脸信息中的landmarks 再从中取其他的值
    const { landmarks } = resizeDetection
    const { imageWidth, positions } = landmarks

    // 获得耳朵附近的值
    const { _x: x, _y: y } = positions[1]
    // 计算耳朵到下巴的距离 也就是口罩的高度
    const height = Math.sqrt(Math.pow(positions[1]._x - positions[8]._x, 2) + Math.pow(positions[1]._y - positions[8]._y, 2))

    mask.width = imageWidth
    mask.height = height * 0.9
    mask.style.transform = `translate(${x  }px,${y + height * 0.05}px)`
    mask.style.opacity = 1

    loading.style.display = 'none'
}

faceDetection() 