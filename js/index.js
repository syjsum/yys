let btnLeft = document.querySelector(".fun-btn-left")
let btnRight = document.querySelector(".fun-btn-right")
let funUl = document.querySelector(".fun-ul")

// 定义获取元素样式的方法 适配不同的浏览器
function getStyle(ele) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(ele)
  } else {
    return ele.currentStyle
  }
}

// 给右按钮绑定单击响应函数
btnRight.onclick = function () {
  // 获取ul 的left
  let left = parseInt(getStyle(funUl).left)
  // 每点一次向右按钮，left就向左移动230px
  left -= 230
  // 判断
  // 当left走到-1380px，也就是走到最后一张照片后停止不动
  // 向右按钮消失
  if (left <= -1380) {
    left = -1380
    btnRight.style.display = "none"
  }
  // 如果向左移动的距离小于230px，向左按钮出现
  if (left <= -230) {
    btnLeft.style.display = "block"
  }
  // 将left的值设置到ul上
  funUl.style.left = left + "px"
}

// 给左按钮绑定单击响应函数
btnLeft.onclick = function () {
  // 获取ul 的left
  let left = parseInt(getStyle(funUl).left)
  // 每点一次向左按钮，left就向右移动230px
  left += 230
  // 判断
  // 当距离为0时，停止不动
  // 向左按钮消失
  if (left >= 0) {
    left = 0
    btnLeft.style.display = "none"
  }
  // 如果向右移动的距离大于1380px， 向左按钮出现
  if(left >= -1380){
    btnRight.style.display = 'block';
  }
  // 将left的值设置到ul上
  funUl.style.left = left + "px"
}