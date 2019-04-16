$(function() {
	$(".daojia").on('click', function() {
		layer.confirm('确定快递到家吗？', {
			title: '快递服务',
			btn: ['确定', '取消'] //按钮
		}, function(index) {
			layer.msg('玩命提示中');
			layer.close(index);
			//此处请求后台程序，下方是成功后的前台处理……
			layer.msg("稍等,您的包裹正在整装待发");
			// location.href = "http://127.0.0.1:8848/zhj%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86/Coffee/zaixian.html";   
		});
	});

	$(".shangmen").on('click', function() {
		layer.confirm('确定上门自取吗？', {
			title: '自取服务',
			btn: ['确定', '取消'] //按钮
		}, function(index) {
			// layer.close(index);
			//此处请求后台程序，下方是成功后的前台处理……
			var index = layer.load(0, {
				shade: [0.7, '#393D49']
			}, {
				shadeClose: true
			}); //0代表加载的风格，支持0-2
			location.href = "http://127.0.0.1:8848/zhj%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86/Coffee/zaixian.html"; /* 跳转到主页的在线预约地图界面 */
		});
	});

// anime({
//   targets: '.art-bothside',
//   translateX:40,
//   duration: 3000
// 
// });

anime({
  targets: '.art-bothside',
  scale: [
	 {value: .1, easing: 'easeOutQuad', duration: 0.2},
	{value: 1, easing: 'easeInOutSine', duration: 500}
  ],
  // delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
});
})
