<html>
<head>
<title>Confirmation Page of Web Form</title>
</head>
<h1>Confirmation Page of Customer Info</h1>

<p>Thank you for submitting this form. 

<p>We have successfully received it. 

<p>Below is a summary of the information you provided.<br><br> 

<?php
$uname = $_POST['uname'];
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$tname = $_POST['tname'];
$gender = $_POST['gender'];
$age = $_POST['age'];
$country = $_POST['country'];
$language = $_POST['language'];
$favefood = $_POST['favefood'];
$bio = $_POST['bio'];
$cardname =$_POST['cardname'];
$cardnum = $_POST['cardnum'];
$carddate = $_POST['carddate'];
$line1 = $_POST['line1'];
$line2 = $_POST['line2'];
$postcode = $_POST['postcode'];
$country= $_POST['country'];
$line1a= $_POST['line1a'];
$line2a= $_POST['line2a'];
$postcode2= $_POST['postcode2'];
$country2= $_POST['country2'];
?>
<p> Please review your details before proceeding.</p>
<fieldset>
<legend>Your details are:</legend>
<ul> 
	<li>Username: <?php echo "$uname";?> </li>
    <li>First Name: <?php echo "$fname";?> </li>
    <li>Surname: <?php echo "$lname";?> </li>
    <li>Email: <?php echo "$email";?> </li>
    <li>Twitter Username: <?php echo "$tname";?> </li>
    <li>Gender: <?php echo "$gender";?> </li>
    <li>Age: <?php echo "$age";?> </li>
    <li>Country: <?php echo "$country";?> </li>
    <li>Language: <?php echo "$language";?> </li>
    <li>Favourite Food: <?php echo "$favefood";?> </li>
    <li>Bio: <?php echo "$bio";?> </li>
    <li>Name on credit card: <?php echo "$cardname";?> </li>
    <li>Card Number: <?php echo "$cardnum";?> </li>
    <li>Expiry Date: <?php echo "$carddate";?> </li>
    <li>Postal Address Line 1: <?php echo "$line1";?> </li>
    <li>Postal Address Line 2: <?php echo "$line2";?> </li>
    <li>Postal Address Postcode: <?php echo "$postcode";?> </li>
    <li>Postal Address Country: <?php echo "$country";?> </li>
    <li>Delivery Address Line 1: <?php echo "$line1a";?> </li>
    <li>Delivery Address Line 2: <?php echo "$line2a";?> </li>
    <li>Delivery Address Postcode: <?php echo "$postcode2";?> </li>
    <li>Delivery Address Country: <?php echo "$country2";?> </li>
<ul> 
</fieldset>

</html>