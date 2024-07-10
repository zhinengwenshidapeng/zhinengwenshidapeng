// JavaScript Document
var p = document.getElementById("password");
	p.onchange = function () {
	    var m = document.getElementById("password").value;
	    var r = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/;
	    if (!r.test(m)) { 
			alert("密码长度至少6位数且包含字母与数字"); }
	}
	var s = document.getElementById("btn1");
	s.onclick = function () {
		var id = document.getElementById("id").value;
		var name = document.getElementById("user").value;
		var password = document.getElementById("password").value;
		console.log(id + " " + name + " " + password);
		var _url = "http://localhost:8080/W0618/AddUser?name=" + name + "&password=" + password+"&id="+id;
		console.log(_url);
		$.ajax({
			type:"get",
			url:_url,
			success:function(data){
				var rev=JSON.parse(data);
				$.messager.alert('Info',rev);
				}
			},)
		window.location.href="login.html";
	}
	function jd(){
	        var y=document.getElementById("email").value;
	        var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
	        if(!reg.test(y)){
	        alert("邮箱格式错误");
	        }
	    }
	var qr=document.getElementById("que");
	    qr.onchange=function(){
	        var m=document.getElementById("password").value;
	        var q=document.getElementById("que").value;
	        if(m!==q){alert("两次密码不一样");}
	    }