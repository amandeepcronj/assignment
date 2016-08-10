var abc=[];

function valid()
{
	

	var username=document.getElementById('username').value;
	var password=document.getElementById('password').value;
	if(username=="" || password=="")
	{
		alert('please do not leave field blank');
	}
	
	else if(username=='amancronj' && password==12345)
	{
		alert("Correct login");
		
		window.open("hr.html");


	}
	else
	{
		alert("Wrong id password");
	}

	//document.getElementById('posts').innerHTML="hahahahaha";
	return false;

}

function show()
{

		document.getElementById('emp_form1').style.display='block';
}

function data_inp()
{

	var user=document.getElementById('emp_name').value;
	var pass=document.getElementById('emp_pass').value;
	
	var obj={};
	
	obj.username=user;
	obj.password=pass;

	abc.push(obj);
	alert(abc);
	

	return false;
}

