/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-09-17 16:08:39
 * @version $Id$
 */

// 标签添加自定义属性
function dataNum() {
  var num = $(".time-item-warp li").length;
  //console.log(num);
  for (var i = 0; i < num; i++) {
    var li = $(".time-item-warp li").eq(i)
    //console.log(li);
    li.attr("data-num", i); //为li标签添加自定义属性
  }
}
