$(function(){
	$('ul li').click(function(){
		var height = $(this).attr('height');
		var width = $(this).attr('width');
		chrome.tabs.getSelected(null,function(tab){

			var url = tab.url;
			var title = tab.title;

			window.open(url,title,"menubar=1,resizable=1,width="+width+",height="+height+"");
		})
	});
});