$(document).ready(function(){
    console.log('подключен rewievs');
});

$('.form-rewievs__button').on('click',function(e) {
    e.preventDefault();

    var rewievsName=$('.form-rewievs__name').val(),// значения введенные пользователем
        rewievsText=$('.form-rewievs__text').val();// значения введенные пользователем
console.log('click');

    if(rewievsName!='' )	{//проверка чтоб не было пустое поле
         var nameVal='ok';
        $('.form-rewievs__name').val('');
    }else 	$('.form-rewievs__name').text('Укажите Ваше имя');

    if(rewievsText!='' )	{//проверка чтоб не было пустое поле
        var textVal='ok';
        $('.form-rewievs__text').val('');
    }else 	$('.form-rewievs__text').text('Напишите свой отзыв');

    //if(nameVal=='ok' && textVal=='ok'){//проверка на пустое поле, чтоб не отсылать пока не заполнят
        $.ajax({
            url: '../php/add_reviews.php',
            type: 'POST',
            data:{
                name_reviews:rewievsName,
                text_reviews:rewievsText
            },
            success: function(res){
                console.log('ответ от сервера'+res);
            },
            error: function(){
                $('.erorr_massage').text('нет ответа от сервера');
            }
        });
   // }
});

