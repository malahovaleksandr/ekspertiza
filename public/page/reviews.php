<!DOCTYPE HTML><?php require_once "../php/return_reviews.php"
?>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="loft">
		<link rel="icon" href="../favicon.ico" type="image/x-icon">
		<link rel="stylesheet" href="/css/main.css">
	</head>
	<body>
		<div class="wrapper_main">
			<header class="header">
				<div class="header_content_wrapper">
					<div class="header_logo"></div>
					<div class="header_text">
						<div class="header_text_title1">АВТОНОМНАЯ НЕКОММЕРЧЕСКАЯ ОРГАНИЗАЦИЯ</div>
						<div class="header_text_title2">МОРДОВСКИЙ РЕГИОНАЛЬНЫЙ ЭКСПЕРТНО-ПРАВОВОЙ ЦЕНТР</div>
					</div>
				</div>
				<div class="header_contact">
					Адрес:430000, Республика Мордовия,<br>
					г. Саранск, ул. Васенко, д.34 <br>
					Тел./факс: (8-834-2) 24-37-24,<br>
					моб.: 8 (906) 162-79-77 <br>
					email: anorapc@mail.ru
				</div>
			</header>
			<div class="main-contant">
				<div class="header-nav"><a href="../index.php" class="nav-link">
						<div class="nav-link__text">ГЛАВНАЯ</div></a><a href="contacts.php" class="nav-link">
						<div class="nav-link__text">КОНТАКТНАЯ ИНФОРМАЦИЯ</div></a><a href="leadership.php" class="nav-link">
						<div class="nav-link__text">О РУКОВОДСТВЕ</div></a><a href="ekspertProf.php" class="nav-link">
						<div class="nav-link__text">ЭКСПЕРТНЫЙ ПРОФИЛЬ</div></a><a href="cooperation.php" class="nav-link">
						<div class="nav-link__text">СОТРУДНИЧЕСТВО</div></a><a href="#" class="nav-link nav_link_activ">
						<div class="nav-link__text">ОТЗЫВЫ</div></a></div>
				<div class="wrap_background"></div>
				<div class="wrapper-rewievs"><?php foreach ($review as $key => $value){
    echo "<div class=\"rewievs-from-client\">
        <div class=\"rewievs-from-client_name\">".$value['name']."</div>
        <div class=\"rewievs-from-client_date\">Дата: ".$value['date']."</div>
        <div class=\"rewievs-from-client_text\">".$value['text']."</div>
    </div>";
}

?>
					<form class="form-rewievs">
						<div class="form-rewievs__title">Если Вы наш клиент - оставьте Ваш отзыв!</div>
						<label class="form-rewievs__label">Ваше имя:<br>
							<input type="text" placeholder="Ваше имя" class="rewievs-form__name form-rewievs__name">
						</label>
						<label class="form-rewievs__label">Ваш отзыв:<br>
							<textarea cols="10" rows="5" placeholder="Ваш отзыв" class="rewievs-form__answer form-rewievs__text"></textarea>
						</label>
						<button type="submit" name="form-rewievs-button" class="form-rewievs__button">Отправить</button>
					</form>
				</div>
			</div>
			<footer class="footer">
				<div class="fotter__logo"></div>
				<div class="fotter__text">
					Директор<br>
					АНО «Мордовский РЭПЦ»	<br>
					  <b>  Р.Р. Ларин</b>
				</div>
				<script src="../js/jquery.js" type="text/javascript"></script>
				<script src="../js/main.js" type="text/javascript"></script>
			</footer>
		</div>
	</body>
</html>