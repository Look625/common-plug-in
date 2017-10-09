# common-plug-in
一些在页面中常用到的插件：轮播、表单验证、分页插件，还有jQuery bootstrap等，方便用的时候提取

banner.js
banner.js是一个轮播图的插件，基于jQuery。
    <div class="banner">
		<ul>
			<li><img src="img/banner1.png" width="339" height="250"  alt="" /></li>
			<li><img src="img/banner2.png" width="339" height="250"  alt="" /></li>
			<li><img src="img/banner3.jpg" width="339" height="250"  alt="" /></li>
		</ul>
		<div class="pagination">
			<span class="active">1</span>
			<span>2</span>
			<span>3</span>
	    </div>
	</div>
	为基本布局。后面调用时只需要换 var slideBox = $(".banner");//(或者自定义的元素名)
