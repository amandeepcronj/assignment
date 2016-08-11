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
	//alert(abc);

	return emp_details();
	
	return false;
}

function data_show()
{
	var prev_div = document.getElementById('emp_show');
   
    if(prev_div!=null)
    {
   	 prev_div.parentNode.removeChild(prev_div); 	
	};

	var div=document.createElement('div');
	div.setAttribute('id','emp_show');
	var sel=document.createElement('select');
	sel.setAttribute('id','select1');
	//sel.setAttribute('onchange','aaaa();')


	for(var i=0;i<abc.length;i++)
	{
		var opt=document.createElement('option');
		opt.setAttribute('value',i+1);
		var node=document.createTextNode(abc[i].username);		
		opt.appendChild(node);		
		sel.appendChild(opt);
	}
		//var br=document.createElement('br');
		//var poo=document.createTextNode("This is something");	

	div.appendChild(sel);
	//div.appendChild(br);
	//div.appendChild(poo);
	var div2=document.getElementById('main_div');
	div2.appendChild(div);
}

function aaaa()
{
	//alert("CHANGED");
	var fil=document.getElementById('select1');
    //You can alert the value of the selected option, using this:
    alert(fil.options[fil.selectedIndex].value + " was selected");
}


function emp_details()
{
	var prev_div = document.getElementById('emp_detail');
   
    if(prev_div!=null)
    {
   	 prev_div.parentNode.removeChild(prev_div); 	
	};

	var div=document.createElement('div');
		div.setAttribute('id','emp_detail');
	var br=document.createElement('br');
	var data=document.createTextNode("Employ Details ");
	var label=document.createElement('label');
	var data2=document.createTextNode('Employ : ');
		label.appendChild(data2);

	var button=document.createElement('button');
		button.setAttribute('onclick','show_emp_details();');
	var data3=document.createTextNode('Show Details');
		button.appendChild(data3);
	var sel=document.createElement('select');
		sel.setAttribute('id','select1');
		//*sel.setAttribute('onchange','aaaa();');


	for(var i=0;i<abc.length;i++)
	{
		var opt=document.createElement('option');
		opt.setAttribute('value',i);
		var node=document.createTextNode(abc[i].username);		
		opt.appendChild(node);		
		sel.appendChild(opt);
	}
		//var br=document.createElement('br');
		//var poo=document.createTextNode("This is something");	
		
		div.appendChild(data);
		div.appendChild(br);

		div.appendChild(label);
		//div.appendChild(br);
		div.appendChild(sel);
		var br1=document.createElement('br');
		div.appendChild(br1);
		div.appendChild(button);
	//div.appendChild(br);
	//div.appendChild(poo);
	var div2=document.getElementById('main_div');
	div2.appendChild(div);
}

function show_emp_details()
{
		var prev_div = document.getElementById('show_emp_detail');
   
    if(prev_div!=null)
    {
   	 prev_div.parentNode.removeChild(prev_div); 	
	};

		var sel=document.getElementById('select1');
		var index=sel.options[sel.selectedIndex].value;
		var username=abc[index].username;

		//alert(username);

		var div=document.createElement('div');
		div.setAttribute('id','show_emp_detail');
		// div.innerHTML('<br /><lalbel>Employee name</label>' + username +' ');
		//alert(username);

		var main_div=document.getElementById('main_div');
		div.insertAdjacentHTML('beforeend','<br /><lalbel>Employee name</label> : ' +
		 username +' ');
		main_div.appendChild(div);

}

function add_remarks()
{
	var div=document.createElement('div');
		div.setAttribute('id','remarks_div');
		
}	