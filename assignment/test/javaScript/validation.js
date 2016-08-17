var EmpData=[];
var NONE='none';
var BLOCK='block';
var EMPTY_FIELD="";
var NULL=null;
var HR_EMAIL='aman@g.com';
var HR_PASSWORD=12345;
var TEST='it is working...';
var ERROR_ID_PASSWORD='Either Email or Password is Incorrect';
var ERROR_EMPTY_FIELDS='Please do not leave blank fields';
var ERROR_PASSWORD_MISMATCH='Password Mismatch';
var ERROR_EMAIL_ERROR='Please Enter Another Email';



/**
 * hjh
 * @param num - STRING
 */
function showHideOnHrLogin(num) {
	document.getElementById('MainDiv').style.display = BLOCK;
	switch(num)
	{		
		case 1:
		{
			document.getElementById('EmployeeFormDiv').style.display = NONE;
			document.getElementById('LogoutButton').style.display = NONE;
			document.getElementById('NavigationDiv').style.display = BLOCK;
			empDetails();
			break;
		}
		case 2:
		{			
			document.getElementById('LoginPageForm').style.display = NONE;
			document.getElementById('LogoutButton').style.display = BLOCK;
			document.getElementById('EmployeeFormDiv').style.display = BLOCK;
			break;
		}				
	}
}

function showHideNavigationDiv(DivId) {
	hideAllDiv();
	document.getElementById('MainDiv').style.display = BLOCK;
	document.getElementById('NavigationDiv').style.display = BLOCK;
	document.getElementById(DivId).style.display = BLOCK;	
}

function hideAllDiv() {
	document.getElementById('LogoutButton').style.display = NONE;
	document.getElementById('EmployeeFormDiv').style.display = NONE;
	document.getElementById('RemarksDiv').style.display = NONE;
	document.getElementById('EmployeeDetailDiv').style.display = NONE;
	document.getElementById('EmployDetailShowDiv').style.display = NONE;
	document.getElementById('NavigationDiv').style.display = NONE;
}
function showHideOnLogout() {
	clearLoginPageFields();
	document.getElementById('MainDiv').style.display = NONE;		
	document.getElementById('LoginPageForm').style.display = BLOCK;
}

function showHideOnEmployeeLogin() {	
	hideAllDiv();
	document.getElementById('LoginPageForm').style.display = NONE;
	document.getElementById('MainDiv').style.display = BLOCK;
	document.getElementById('LogoutButton').style.display = BLOCK;	
}

function clearLoginPageFields() {
	document.getElementById('username').value = EMPTY_FIELD;
	document.getElementById('password').value = EMPTY_FIELD;
}

function clearEmployeeFormFields() {
	document.getElementById('emp_name').value = EMPTY_FIELD;
	document.getElementById('address').value = EMPTY_FIELD;
	document.getElementById('email').value = EMPTY_FIELD;
	document.getElementById('pincode').value = EMPTY_FIELD;
	document.getElementById('emp_pass1').value = EMPTY_FIELD;
	document.getElementById('emp_pass2').value = EMPTY_FIELD;
}

function clearRemarksField() {
	document.getElementById('RemarkText').value = EMPTY_FIELD;
}

function emptyFieldValidate() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	if(username == EMPTY_FIELD || password == EMPTY_FIELD) {
		return false;
	}
	return true;
}

function hrAuthentication() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	if(username == HR_EMAIL && password == HR_PASSWORD) {
		return true;
	}
		return false;	
}

function containsEmployData() {
	if(EmpData[0] == NULL)
	{
		return false;
	}
		return true;
}

function employeeAuthentication() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	for(i=0; i<EmpData.length; i++) {
				var userEmail = EmpData[i].email;
				var userPassword = EmpData[i].password;
				if(username == userEmail && password == userPassword ) {
					return i+1;
					break;
				}
			}
			return false;
}

function valid() {
	if(emptyFieldValidate()) {
		if(hrAuthentication()) {
			if(containsEmployData()) {
				document.getElementById('LoginPageForm').style.display = NONE;
				document.getElementById('NavigationDiv').style.display = BLOCK;
				showHideNavigationDiv("EmployeeDetailDiv");				
			}
			else {
				showHideOnHrLogin(2);
				clearLoginPageFields();	
			}
		}
		else if(containsEmployData()) {
			var index = employeeAuthentication();

			if(index) {
				showHideOnEmployeeLogin();
				showDetails(index-1);
				clearLoginPageFields();
			}
			else {
				alert(ERROR_ID_PASSWORD);
				clearLoginPageFields();
			}
		}
		else {
			alert(ERROR_ID_PASSWORD);
			clearLoginPageFields();
		}
	}
	else {
		alert(ERROR_EMPTY_FIELDS);
	}
	return false;
}

function checkEmployeeFormEmptyField(empObject) {	
	for(var attr in empObject) {		
		if(empObject[attr] == EMPTY_FIELD) {
			return false;
		}
	}
	return true;
}

function isPasswordMatch(employData) {

	if(employData.pass1 == employData.pass2) {
		return true;
	}
		return false;
}

function isEmailExist(employData) {
	if(employData.email == HR_EMAIL) {
		return true;
	}
	else if(EmpData[0] == NULL) {
		return false;
	}
	else {
		for(i=0;i<EmpData.length;i++) {
				var userEmail = EmpData[i].email;
				
				if(employData.email == userEmail) {					
					return true;
					break;
				}
			}
			return false;
	}
}

function data_inp() {
	var obj = {};	
	obj.email = document.getElementById('email').value;
	obj.address = document.getElementById('address').value;
	obj.username = document.getElementById('emp_name').value;
	obj.pincode = document.getElementById('pincode').value;
	obj.password = document.getElementById('emp_pass1').value;
	obj.remarks = " ";
	obj.pass1 = document.getElementById('emp_pass1').value;
    obj.pass2 = document.getElementById('emp_pass2').value;
    	
	if(checkEmployeeFormEmptyField(obj)) {
		if(isPasswordMatch(obj)) {
			if(!isEmailExist(obj)) {
				EmpData.push(obj);
				clearEmployeeFormFields();
				showHideOnHrLogin(1);
			}
			else {
				alert(ERROR_EMAIL_ERROR);
			}
			
		}
		else {
			alert(ERROR_PASSWORD_MISMATCH);
		}
	}
	else {
		alert(ERROR_EMPTY_FIELDS);
	}
	return false;
}

function insertObjectInArray() {
	var emp_name = document.getElementById('emp_name').value;
	var email = document.getElementById('email').value;
	var address = document.getElementById('address').value;
	var pincode = document.getElementById('pincode').value;
	var pass1 = document.getElementById('emp_pass1').value;
	var obj = {};
		obj.username = emp_name;
		obj.address = address;
		obj.pincode = pincode;
		obj.email = email;
		obj.password = pass1;
		obj.remarks = EMPTY_FIELD;
		EmpData.push(obj);			
}

function empDetails() {
	showHideNavigationDiv("EmployeeDetailDiv");
	var select = document.getElementById('EmploySelect');
	for (i = select.length - 1; i >= 0; i--)  {
		select.remove(i);
	}	
	for(var i = 0;i < EmpData.length;i++) {
		var opt = document.createElement('option');
		opt.setAttribute('value',i);
		var node = document.createTextNode(EmpData[i].username);		
		opt.appendChild(node);		
		select.appendChild(opt);
	}
	document.getElementById('EmployeeDetailDiv').style.display = BLOCK;
}

function showEmpDetails() {
		var select = document.getElementById('EmploySelect');
		var index = select.options[select.selectedIndex].value;
		showDetails(index);		
}

function addRemarks() {	
	document.getElementById('RemarkText').value = EMPTY_FIELD;
	showHideNavigationDiv("RemarksDiv");
	var select = document.getElementById('RemarkSelect');

	for (i = select.length - 1; i >= 0; i--)  {
		select.remove(i);
	}
	for(var i = 0;i < EmpData.length;i++) {
		var opt = document.createElement('option');
		opt.setAttribute('value',i);
		var node = document.createTextNode(EmpData[i].username);		
		opt.appendChild(node);		
		select.appendChild(opt);
	}
	document.getElementById('RemarksDiv').style.display=BLOCK;			
}

function addFeedback() {
		var sel = document.getElementById('RemarkSelect');
		var index = sel.options[sel.selectedIndex].value;
		EmpData[index].remarks = document.getElementById('RemarkText').value;
		showHideNavigationDiv("EmployeeDetailDiv");;
}	

function showDetails(index) {
	var elements = document.getElementsByClassName('EmployeeDetailText');
    	for(i = 0;i < elements.length;i++) {
        	elements[i].innerHTML = EMPTY_FIELD;
    	}
		var username = document.createTextNode(EmpData[index].username);
		var email = document.createTextNode(EmpData[index].email);
		var address = document.createTextNode(EmpData[index].address);
		var pincode = document.createTextNode(EmpData[index].pincode);
		var remarks = document.createTextNode(EmpData[index].remarks);

		document.getElementById('EmployeeName').appendChild(username);
		document.getElementById('EmployeeEmail').appendChild(email);
		document.getElementById('EmployeeAddress').appendChild(address);
		document.getElementById('Employeepincode').appendChild(pincode);
		document.getElementById('EmployeeRemarks').appendChild(remarks);		

		document.getElementById('EmployDetailShowDiv').style.display=BLOCK;
}

