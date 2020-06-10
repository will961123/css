var __domStyle =
  "transition: top 1s;position: fixed; position: fixed;  z-index: 999; left: 50%;  transform: translateX(-50%);  background: #edf2fc;  border: 1px solid #ebeef5;  color: #909399; padding: 15px 15px 15px 20px;  border-radius: 4px;  min-width: 380px; text-align: center;  box-sizing: border-box;";

var __tostList = [];

/**
 *
 * @param {string} content  提示内容
 * @param {number} time 消失时间
 */
function $showTost(content, time) {
  new $$showTost(content, time);
}
function $$showTost(content, time) {
  this.content = content;
  this.time = time;
  this.init();
}
$$showTost.prototype.init = function() {
  var dom = document.createElement("div");
  dom.style = __domStyle;
  dom.innerHTML = this.content;
  dom.style.top = __tostList.length * 60 + 30 + "px";
  dom.className = "tostContent";
  document.body.appendChild(dom);
  __tostList = Array.prototype.slice.call(
    document.getElementsByClassName("tostContent")
  );
  setTimeout(function() {
    document.body.removeChild(dom);
    __tostList.shift();
    for (var i = 0; i < __tostList.length; i++) {
      __tostList[i].style.top = i * 60 + 30 + "px";
    }
  }, this.time);
};
