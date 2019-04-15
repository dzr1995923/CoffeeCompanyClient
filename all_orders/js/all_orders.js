$(function () {
	var username=$(".username").html("张三");//用户昵称
	
	var sex=1;//判断用户性别
	if(sex==1){
		$(".sex").html("先生");
	}else{
		$(".sex").html("女士");
	}
	var garden=4  //用户等级
	$(".garden").html("<img src='img/vip/vip"+garden+".png' />")//显示用户等级图片
	
		function vip(){//为会员单独建立一个方法 后续使用
		var discount=$("#discount");//获取折扣节点
			if(garden==1){
				discount.html("0.98");
			}else if(garden==2){
				discount.html("0.95");
			}else if(garden==3){
				discount.html("0.95");
			}else if(garden==4){
				discount.html("0.85");
			}else if(garden==5){
				discount.html("0.80");
			}
	}

var hobbies = $(".all");
// 获取全选/全不选选项
var clickNumber=0;
$(".all_instruct span").on("click",function () {
		var no_flag=false;
		var flag=true;
		for (var i = 0; i < hobbies.length; i++) {
	if (clickNumber%2==0&&hobbies.length>0) {
		for (var i = 0; i < hobbies.length; i++) {
		hobbies[i].checked = flag;
		}
	} else {
for (var i = 0; i < hobbies.length; i++) {
		hobbies[i].checked = no_flag;
		}
	}
		clickNumber ++;
	}
})

				

})

