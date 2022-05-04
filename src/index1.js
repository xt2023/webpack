//使用es6默认导入语法导入jQuery
import $ from 'jquery'
//导入样式（在webpack中，一切皆为模块，都可以通过ES6导入语法进行导入和使用）
//如果某个模块中，使用from接受到的成员是undefined，则没必要进行接收
import ('@/css/index.css')
import ('@/css/index.less')

//导入图片。得到图片文件
import logo from './images/OIP-C.jpg'
console.log(logo)
// //给img标签动态赋值
$('.box').attr('src',logo)


//定义入口函数
$(function() {
    //实现奇偶数焓行变色
    $('li:odd').css('background-color', 'blue')
    $('li:even').css('background-color', 'yellow')

})
//定义装饰器函数
// function info(target){
//     target.info='Person info'
// }
// //定义一个类
// @info
// class Person {}
//
// console.log(Person.info)

