<?php
use PHPMailer\PHPMailer\PHPMailer;

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$tel = $_POST['phone'];
$massage = $_POST['massage'];

require_once "Mailer/PHPMailer.php";
require_once "Mailer/SMTP.php";
require_once "Mailer/Exception.php";

$mail = new PHPMailer();


//server setting
$mail->CharSet = "utf-8";
$mail->isSMTP();
$mail->Host         = 'smtp.mail.ru';   //Установка smtp сервера
$mail->SMTPAuth     = true;
$mail->Username     = 'поавнчепряп@mail.ru';  //логин от почты
$mail->Password     = '**********';   // парроль от почты
$mail->SMTPSecure   = 'ssl';  //вкл шифрования
$mail->Port         = '465';  //Порт

$mail->setFrom('поавнчепряп@mail.ru', 'MDSoft начинает набор абитуриентов))')   ;        //Отправитель
$mail->addAddress('поавнчепряп@student.csn.khai.edu', 'Dmirtiy')   ;  //Получатель
$mail->addAddress('поавнчепряп@mail.ru', 'MDSoft')   ;  //Получатель
$mail->addAddress('поавнчепряпk@gmail.com', 'MDSoft')   ;  //Получатель
$mail->addAddress('поавнчепряп@yandex.ru', 'MDSoft')   ;  //Получатель

//Add docyments
//$mail->addAttachment('/var/tmp/file.gz')   ;
//$mail->addAttachment('/tmp/image.jpg' , 'new.jpg')  ;

//content mail
$mail->isHTML(true);
$mail->Subject = 'Тема сайта МДСофт'; //Тема письме
$mail->Body = 'Имя: ' .$firstName . '<br>Фамилия: ' . $lastName .'<br>Маил: ' . $email .'<br>Телефон: ' . $tel . '<br>Сообщение: ' . $massage ;
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';//  Тело письма для клиентов не обробатывающих!!

$mail->send();


?>
