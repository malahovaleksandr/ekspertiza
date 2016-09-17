<?php
include_once "config.php";


$host=DB_LOCAL;
//настройки для подключения на локальном сервере
//$db=DB_local;
//$user=DB_LOGIN_local;
//$pass=DB_PASS_local;
//настройки для подключения на сервере на сайте
 $db=DB;
 $user=DB_LOGIN;
 $pass=DB_PASS;
$dateReviews=date("d m Y"); 

$dsn = "mysql:dbname=$db;host=$host";// подключение к БД mysql


$pdo = new PDO($dsn, $user, $pass);//подключаемся в БД

function clean($value = "") {//функция проверки вводимых данных
 $value = trim($value);
 $value = stripslashes($value);
 $value = strip_tags($value);
 $value = htmlspecialchars($value);

 return $value;
};

$sql = "INSERT INTO reviews(name,
            date,
            text
            ) VALUES (
            :name_reviews, 
            :date_reviews, 
            :text_reviews
            )";

$stmt = $pdo->prepare($sql);

//проверяем и очищаем данные от не нужных символов
$name=clean($_POST['name_reviews']);
$text=clean($_POST['text_reviews']);

$stmt->bindParam(':name_reviews', $name, PDO::PARAM_STR);   //данные названия текста блога
$stmt->bindParam(':date_reviews', $dateReviews, PDO::PARAM_STR); //данные даты текста блога
$stmt->bindParam(':text_reviews', $text, PDO::PARAM_STR);//данные текста блога

$stmt->execute();
echo ' добавили';