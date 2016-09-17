<?
include_once "config.php";

$host=DB_LOCAL;
//настройки для локального сервера
//$db=DB_local;
//$user=DB_LOGIN_local;
//$pass=DB_PASS_local;
//настройки для хостинга
 $db=DB;
 $user=DB_LOGIN;
 $pass=DB_PASS;

$dsn = "mysql:dbname=$db;host=$host";


$pdo = new PDO($dsn, $user, $pass);//подключаемся в БД

	
$sql="SELECT name,text,date FROM reviews ";
$review = $pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC); 
	foreach ($review as $value) {
	}
		





