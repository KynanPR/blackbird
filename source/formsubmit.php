<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$gender = $_POST['gender'];
$message = $_POST['message'];
$formcontent="From: $name \n Phone: $phone \n Gender: $gender \n Message: $message";
$recipient = "contact@blackbirdcounselling.co.uk";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>