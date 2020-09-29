$(document).ready(function(){
	$('#sub').click(function(){
		var comp=$('#company').val();
		console.log(comp)
		if (comp=='par') 
		{
			window.location.href='/moms_bakery/par/'
		}
		if (comp=='san') 
		{
			window.location.href='/moms_bakery/san/'
		}
		if (comp=='bur') 
		{
			window.location.href='/moms_bakery/bur/'
		}
		if (comp=='pat') 
		{
			window.location.href='/moms_bakery/pat/'
		}
		if (comp=='ice') 
		{
			window.location.href='/moms_bakery/ice/'
		}		
	});
})