<?php

$errors = [];
$errorMessage = '';
echo "script";
echo var_dump($_POST);
if (!empty($_POST)) {
   $name = $_POST['name'];
   $email = $_POST['email'];
   $contact = $_POST['contact'];
   $message = $_POST['message'];
   $subject = $_POST['subject'];
echo "script2";
   if (empty($name)) {
       $errors[] = 'Name is empty';
        echo var_dump($errors);
   }

   if (empty($email)) {
       $errors[] = 'Email is empty';
   } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       $errors[] = 'Email is invalid';
       echo var_dump($errors);
   }

   if (empty($message)) {
       $errors[] = 'Message is empty';
       echo var_dump($errors);
   }

   if (empty($errors)) {
       $toEmail = 'email@saphal.in';
       $emailSubject = $subject;
       $headers = ['From' => $email, 'Reply-To' => $email, 'Content-type' => 'text/html; charset=utf-8'];
    //   $bodyParagraphs = ["Name: {$name}", "Email: {$email}", "Message:", $message];
    //   $body = join(PHP_EOL, $bodyParagraphs);
    $body = 
    "<h1> From: $name </h1>
    <h2> Phone: $contact</h2>
    <h2> Message: $message</h2>
    ";
       if (mail($toEmail, $emailSubject, $body, $headers)) 

           header('Location: index.html');
       } else {
           $errorMessage = 'Oops, something went wrong. Please try again later';
           
       }

   } else {

       $allErrors = join('<br/>', $errors);
       $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
       
   }


?>