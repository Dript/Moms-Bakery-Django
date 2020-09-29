$(document).ready(function(){
	$('#sub').click(function(){
		var usrname=$('#usrname').val();
		var pass=$('#pass').val(); 
		$.ajax({
			url:'/moms_bakery/get_data/',
			type:'POST',
			data:{'usrname':usrname,'pass':pass},
			success:function(response,ids)
			{
				if(response=='success')
				{
					window.location.href='/moms_bakery/dash/'
				}
				if(response=='no')
				{
					alert('Username Password Mismatch')
				}
			},
			error:function(xhr,textStatus,thrownError)
			{
				alert('error');
			}
		});
	});
})