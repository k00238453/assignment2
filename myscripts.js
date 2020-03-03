window.onload = SetDefaultValue;

function AddressFunction() {
if (document.getElementById('same').checked)
{
    document.getElementById("line1a").value=document.
            getElementById("line1").value;
    document.getElementById("line2a").value=document.
            getElementById("line2").value;
    document.getElementById("postcode2").value=document.
            getElementById("postcode").value;
    document.getElementById("Country2").value=document.
            getElementById("Country").value                               
}
    
else
{
    document.getElementById("line1a").value="";
    document.getElementById("line2a").value="";
    document.getElementById("postcode2").value="";
    document.getElementById("country2").value="";
}

function SetDefaultValue(){
	var PopulateField = document.getElementById("uname").value="Enter Username";
	var PopulateField = document.getElementById("fname").value="Enter First Name";
	var PopulateField = document.getElementById("lname").value="Enter Surname";
	var PopulateField = document.getElementById("email").value="Enter Email";
	var PopulateField = document.getElementById("tname").value="Enter Twitter Username";
	var PopulateField = document.getElementById("country").value="Enter Country";
	var PopulateField = document.getElementById("cardname").value="Enter Name on Card";
	var PopulateField = document.getElementById("cardnum").value="9999-9999-9999-9999";
	var PopulateField = document.getElementById("carddate").value="DD-MM-YYYY";
	var PopulateField = document.getElementById("line1").value="Line 1";
	var PopulateField = document.getElementById("line2").value="Line 2";
	var PopulateField = document.getElementById("postcode").value="Postcode";
	var PopulateField = document.getElementById("Country").value="Country";
	var PopulateField = document.getElementById("line1a").value="Line 1";
	var PopulateField = document.getElementById("line2a").value="Line 2";
	var PopulateField = document.getElementById("postcode2").value="Postcode";
	var PopulateField = document.getElementById("Country2").value="Country";
}

function validateEmail()
{
	var email = document.getElementById("txtEmail").value;
	if (email.length == 0)
	{	alert("Please enter an email address");
		return false;
	}
	else if (email.indexOf("@") == -1 || email.indexOf(".") == -1)
	{	alert("Please enter a valid email address");
		return false;
	}
	else
	{	alert("Thank you, "+ email);
	}
}

function validateForm()
{
	var name = document.getElementById("txtName").value;
	if (name.length == 0)
	{	alert("Please enter your name");
		return false;
        }
        
	var email = document.getElementById("txtEmail").value;

	if (email.length == 0)
	{	alert("Please enter an email address");
		return false;
	}

	else if (email.indexOf("@") == -1 || email.indexOf(".") == -1)
	{	alert("Please enter a valid email address");
		return false;
	}

	alert("Thank you, " + name);
}

function validateName(){
        var name = document.getElementById("txtName").value;
        
	if (name.length == 0)
	{	alert("Please enter your name");
		return false;
	}
	else
	{	alert("Thank you, " + name);
}
}
}