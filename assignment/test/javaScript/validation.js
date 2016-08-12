var abc=[];
function aabb()
{
	var bu=document.getElementById('button4');
	bu.preventDefault;
}

function show_hide(num)
{
	switch(num)
	{
		case 1:
		{
			document.getElementById('emp_form1').style.display='none';
			document.getElementById('nav_bar').style.display='block';
			break;
		}
		case 2:
		{
			document.getElementById('login_page').style.display='none';
			document.getElementById('add_emp').style.display='block';
			break;
		}
		case 3:
		{
			
			if(document.getElementById('emp_detail')!=null)
			{
					document.getElementById('emp_detail').style.display='none';
			}
			if(document.getElementById('show_emp_detail')!=null)
			{
					document.getElementById('show_emp_detail').style.display='none';
			}
			if(document.getElementById('remarks_div')!=null)
			{
					document.getElementById('remarks_div').style.display='none';
			}
			document.getElementById('emp_form1').style.display='block';
			break;
		}
		case 4:
		{
			if(document.getElementById('show_emp_detail')!=null)
			{
					document.getElementById('show_emp_detail').style.display='none';
			}
			if(document.getElementById('remarks_div')!=null)
			{
					document.getElementById('remarks_div').style.display='none';
			}
			if(document.getElementById('emp_form1')!=null)
			{
					document.getElementById('emp_form1').style.display='none';
			}
			//document.getElementById('show_emp_detail').style.display='none';
			emp_details();
			
			
			break;
		}
		case 5:
		{
			if(document.getElementById('emp_detail')!=null)
			{
					document.getElementById('emp_detail').style.display='none';
			}
			if(document.getElementById('show_emp_detail')!=null)
			{
					document.getElementById('show_emp_detail').style.display='none';
			}
			if(document.getElementById('emp_form1')!=null)
			{
					document.getElementById('emp_form1').style.display='none';
			}
			add_remarks();
			break;
		}
		case 6:
		{
			if(document.getElementById('emp_detail')!=null)
			{
					document.getElementById('emp_detail').style.display='none';
			}
			if(document.getElementById('show_emp_detail')!=null)
			{
					document.getElementById('show_emp_detail').style.display='none';
			}
			if(document.getElementById('remarks_div')!=null)
			{
					document.getElementById('remarks_div').style.display='none';
			}
			if(document.getElementById('emp_form1')!=null)
			{
					document.getElementById('emp_form1').style.display='none';
			}
			break;
		}
	}
}

function valid()
{
	

	var username=document.getElementById('username').value;
	var password=document.getElementById('password').value;
	if(username=="" || password=="")
	{
		alert('please do not leave field blank');
	}
	
	else if(username=='aman@g.com' && password==12345)
	{
		alert("Correct login");
		show_hide(2);
		
			
		document.getElementById('username').value='';
		document.getElementById('password').value='';
		//window.open("hr.html");
	}
	else
	{
		alert("Wrong id password");
		document.getElementById('username').value='';
		document.getElementById('password').value='';
	}

	//document.getElementById('posts').innerHTML="hahahahaha";
	return false;

}

function show()
{
		document.getElementById('add_emp').style.display='none';
		document.getElementById('emp_form1').style.display='block';
}

function data_inp()
{

	var emp_name=document.getElementById('emp_name').value;
	var email=document.getElementById('email').value;
	var address=document.getElementById('address').value;
	var pincode=document.getElementById('pincode').value;
	var pass1=document.getElementById('emp_pass1').value;
	var pass2=document.getElementById('emp_pass2').value;

	if(emp_name=="" || email== "" || address== ""|| pincode == "" || pass1 == "" || pass2 == "")
	{
		alert('please fill all fields');
	}
	else if(pass1!=pass2)
	{
		alert('Password Mismatch.');
	}
	else
	{

		var obj={};
	
		obj.username=emp_name;
		obj.address=address;
		obj.pincode=pincode;
		obj.email=email;
		obj.password=pass1;
		

		abc.push(obj);	
		alert(abc);
		show_hide(1);
		
		
	}

	return false;
	
	//alert(abc);

	
	
	
}

function nav_show()
{
	document.getElementById('emp_form1').style.display='none';
	document.getElementById('nav_bar').style.display='block';
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
		


		//add_remarks();

}

function add_remarks()
{
	var prev_div = document.getElementById('remarks_div');
   
    if(prev_div!=null)
    {
   	 prev_div.parentNode.removeChild(prev_div); 	
	};

	var div=document.createElement('div');
		div.setAttribute('id','remarks_div');
		div.insertAdjacentHTML('afterbegin','<label>Employs : ');
		div.insertAdjacentHTML('afterbegin','<h2>Add Remarks</h2>');
		
		
		

		var sel=document.createElement('select');
		sel.setAttribute('id','select2');

		for(var i=0;i<abc.length;i++)
	{
		var opt=document.createElement('option');
		opt.setAttribute('value',i);
		var node=document.createTextNode(abc[i].username);		
		opt.appendChild(node);		
		sel.appendChild(opt);
	}
		div.appendChild(sel);
		div.insertAdjacentHTML('beforeend',''+
			'<br /><label>Remarks : </label><input type="text" id="Remarks">');
		div.insertAdjacentHTML('beforeend','<br /><button onclick="alert(`hahaha`);"> Add </button>'+
			'');
		var main_div=document.getElementById('main_div');
		main_div.appendChild(div);
		
}	