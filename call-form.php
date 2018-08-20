<?php

if((isset($_POST['call-name']))&&(isset($_POST['phone'])&&$_POST['phone']!="")){ 
  $to = 'vinaymenon313@gmail.com';
  $subject = 'Callback';
  $message = '<b>Name:</b> '.$_POST['call-name'].'<b>Phonenum:</b>'.$_POST['phone']; 
  $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: Site <info@mail.com>\r\n"; 
mail($to, $subject, $message, $headers);

  echo json_encode(array('status' => 'success'));
} else {
  echo json_encode(array('status' => 'error'));
}