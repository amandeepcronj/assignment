var abc=[];
// function aabb()
// {
// 	var bu=document.getElementById('button4');
// 	bu.preventDefault;
// }

function show_hide(num)
{
	switch(num)
	{
		
		case 1:
		{
			document.getElementById('emp_form1').style.display='none';
			document.getElementById('logout').style.display='none';
			document.getElementById('nav_bar').style.display='block';
			emp_details();
			break;
		}
		case 2:
		{
			if(document.getElementById('emp_data')!=null)
			{
					document.getElementById('emp_data').style.display='none';
			}
			document.getElementById('login_page').style.display='none';
			
			document.getElementById('main_div').style.display='block';
			document.getElementById('logout').style.display='block';
			show();
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
			if(document.getElementById('emp_data')!=null)
			{
					document.getElementById('emp_data').style.display='none';
			}
			document.getElementById('semi_main').style.display='block';
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
			if(document.getElementById('emp_data')!=null)
			{
					document.getElementById('emp_data').style.display='none';
			}
			document.getElementById('semi_main').style.display='block';
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
			if(document.getElementById('emp_data')!=null)
			{
					document.getElementById('emp_data').style.display='none';
			}
			document.getElementById('semi_main').style.display='block';
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
			if(document.getElementById('emp_data')!=null)
			{
					document.getElementById('emp_data').style.display='none';
			}
			document.getElementById('semi_main').style.display='block';
			break;
		}
		case 7:
		{
			document.getElementById('emp_detail').style.display='none';
			break;
		}
		case 8:
		{
			clear_fields(1);
			document.getElementById('logout').style.display='none';
			document.getElementById('nav_bar').style.display='none';
			document.getElementById('emp_form1').style.display='none';
			document.getElementById('semi_main').style.display='none';
			document.getElementById('login_page').style.display='block';

			break;
		}
		case 9:
		{
			if(document.getElementById('show_emp_detail')!=null)
			{
					document.getElementById('show_emp_detail').style.display='none';
			}
			if(document.getElementById('remarks_div')!=null)
			{
					document.getElementById('remarks_div').style.display='none';
			}
			if(document.getElementById('emp_detail')!=null)
			{
					document.getElementById('emp_detail').style.display='none';
			}
			document.getElementById('login_page').style.display='none';
			
			document.getElementById('logout').style.display='block';
			document.getElementById('semi_main').style.display='block';
		}
	}
}

function clear_fields(num)
{
	switch(num)
	{
		case 1:
		{
			document.getElementById('username').value='';
			document.getElementById('password').value='';
			break;
		}
		case 2:
		{
			document.getElementById('emp_name').value='';
			document.getElementById('address').value='';
			document.getElementById('email').value='';
			document.getElementById('pincode').value='';
			document.getElementById('emp_pass1').value='';
			document.getElementById('emp_pass2').value='';
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
		if(abc[0]==null)
		{
			//alert("Correct login");
			show_hide(2);
			clear_fields(1);
			
			
		}
		else
		{
			document.getElementById('login_page').style.display='none';
			document.getElementById('nav_bar').style.display='block';
			show_hide(4);

		}	
		
	}
	else
	{
		if(abc[0]!=null)
		{
			for(i=0;i<abc.length;i++)
			{
				var email=abc[i].email;
				var pass=abc[i].password;
				if(username==email && password == pass )
				{
					show_hide(9);
					show_details(i);
					clear_fields(1);
					return false;
					break;
				}
			}
			alert("Wrong id password");
			clear_fields(1);
		}
		else
		{
			
			
			alert("Wrong id password");
			clear_fields(1);
		}
		
	}

	
	return false;

}

function show()
{
		document.getElementById('logout').style.display='block';
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
	else if(email=='aman@g.com')
	{
		alert('Please Enter Another email');
	}
	else
	{
		if(abc[0]!=null)
		{
			for(i=0;i<abc.length;i++)
			{
				var email1=abc[i].email;
				
				if(email==email1 || email=='aman@g.com')
				{
					alert('Please Enter Another email');
					return false;
					break;
				}
			}
			var obj={};
		obj.username=emp_name;
		obj.address=address;
		obj.pincode=pincode;
		obj.email=email;
		obj.password=pass1;
		obj.remarks='';
		abc.push(obj);	
		
		clear_fields(2);
		show_hide(1);
			
		}
		else
		{
			
			var obj={};
		obj.username=emp_name;
		obj.address=address;
		obj.pincode=pincode;
		obj.email=email;
		obj.password=pass1;
		obj.remarks='';
		abc.push(obj);	
		
		clear_fields(2);
		show_hide(1);
		}

		
		
		
	}

	return false;
	
	

	
	
	
}

function nav_show()
{
	document.getElementById('emp_form1').style.display='none';
	document.getElementById('nav_bar').style.display='block';
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
	var cen=document.createElement('center');
	var br=document.createElement('br');
	var br2=document.createElement('br');
	var header=document.createElement('h3');

	var data=document.createTextNode("Employ Details ");
		header.appendChild(data);
	var label=document.createElement('label');
	var data2=document.createTextNode('Select Employ : ');
		label.appendChild(data2);

	var button=document.createElement('button');
		button.setAttribute('onclick','show_emp_details();');
		button.setAttribute('class','button');
		
	var data3=document.createTextNode('Show Details');
		button.appendChild(data3);
	var sel=document.createElement('select');
		sel.setAttribute('id','select1');


	for(var i=0;i<abc.length;i++)
	{
		var opt=document.createElement('option');
		opt.setAttribute('value',i);
		var node=document.createTextNode(abc[i].username);		
		opt.appendChild(node);		
		sel.appendChild(opt);
	}
		
		
		cen.appendChild(header);
		cen.appendChild(br);

		cen.appendChild(label);
		cen.appendChild(sel);
		var br1=document.createElement('br');
		cen.appendChild(br1);
		cen.appendChild(br2);
		cen.appendChild(button);
	var div2=document.getElementById('semi_main');
	div.appendChild(cen);
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
		var email=abc[index].email;
		var address=abc[index].address;
		var pincode=abc[index].pincode;
		var remarks=abc[index].remarks;

		//alert(username);
		show_hide(7);
		
		var div=document.createElement('div');
		div.setAttribute('id','show_emp_detail');
		var cen=document.createElement('center');
		// div.innerHTML('<br /><label>Employee name</label>' + username +' ');
		//alert(username);

		var main_div=document.getElementById('semi_main');
		cen.insertAdjacentHTML('beforeend','<h3>Employ Details</h3>');
		cen.insertAdjacentHTML('beforeend','<label>Full name</label> : ' +
		 username +' ');
		cen.insertAdjacentHTML('beforeend','<br /><br /><label>Email</label> : ' +
		 email +' ');
		cen.insertAdjacentHTML('beforeend','<br /><br /><label>Address</label> : ' +
		 address +' ');
		cen.insertAdjacentHTML('beforeend','<br /><br /><label>Pincode</label> : ' +
		 pincode +' ');
		cen.insertAdjacentHTML('beforeend','<br /><br /><label>Remarks</label> : ' +
		 remarks +' ');

		div.appendChild(cen);
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

	var cen=document.createElement('center');
		cen.insertAdjacentHTML('afterbegin','<label>Employs : ');
		cen.insertAdjacentHTML('afterbegin','<h2>Add Remarks</h2>');
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
		cen.appendChild(sel);
		cen.insertAdjacentHTML('beforeend',''+
			'<br /><br /><label>Remarks : </label><input type="text" id="feedback">');
		cen.insertAdjacentHTML('beforeend','<br /><br /><button  class="button" onclick="add_feedback();"> Add </button>'+
			'');
		var main_div=document.getElementById('semi_main');
		div.appendChild(cen);
		main_div.appendChild(div);
		
}

function add_feedback()
{
	var sel=document.getElementById('select2');
		var index=sel.options[sel.selectedIndex].value;
		abc[index].remarks=document.getElementById('feedback').value;
		show_hide(4);
}	



function show_details(index)
{
	document.getElementById('semi_main').style.display='block';
	var prev_div = document.getElementById('emp_data');
   
    if(prev_div!=null)
    {
   	 prev_div.parentNode.removeChild(prev_div); 	
	};
	
		var username=abc[index].username;
		var email=abc[index].email;
		var address=abc[index].address;
		var pincode=abc[index].pincode;
		var remarks=abc[index].remarks;
		
		var div=document.createElement('div');
		div.setAttribute('id','emp_data');
		var cen=document.createElement('center');
		// div.innerHTML('<br /><label>Employee name</label>' + username +' ');
		//alert(username);

		var main_div=document.getElementById('semi_main');
		cen.insertAdjacentHTML('beforeend','<h3>Employ Details</h3>');
		cen.insertAdjacentHTML('beforeend','<label>Full name</label> : ' +
		 username +' ');
		cen.insertAdjacentHTML('beforeend','<br /><br /><label>Email</label> : ' +
		 email +' ');
		cen.insertAdjacentHTML('beforeend','<br /><br /><label>Address</label> : ' +
		 address +' ');
		cen.insertAdjacentHTML('beforeend','<br /><br /><label>Pincode</label> : ' +
		 pincode +' ');
		cen.insertAdjacentHTML('beforeend','<br /><br /><label>Remarks</label> : ' +
		 remarks +' ');

		div.appendChild(cen);
		main_div.appendChild(div);
}