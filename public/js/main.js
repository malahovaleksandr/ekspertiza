(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZF9yZXZpZXdzLmpzIl0sIm5hbWVzIjpbImUiLCJ0IiwibiIsInIiLCJzIiwibyIsInUiLCJhIiwicmVxdWlyZSIsImkiLCJFcnJvciIsImYiLCJleHBvcnRzIiwiY2FsbCIsImxlbmd0aCIsIjEiLCJtb2R1bGUiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJvbiIsInByZXZlbnREZWZhdWx0IiwicmV3aWV2c05hbWUiLCJ2YWwiLCJyZXdpZXZzVGV4dCIsInRleHQiLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGEiLCJuYW1lX3Jldmlld3MiLCJ0ZXh0X3Jldmlld3MiLCJzdWNjZXNzIiwicmVzIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJDQUFBLFFBQUFBLEdBQUFDLEVBQUFDLEVBQUFDLEdBQUEsUUFBQUMsR0FBQUMsRUFBQUMsR0FBQSxJQUFBSixFQUFBRyxHQUFBLENBQUEsSUFBQUosRUFBQUksR0FBQSxDQUFBLEdBQUFFLEdBQUEsa0JBQUFDLFVBQUFBLE9BQUEsS0FBQUYsR0FBQUMsRUFBQSxNQUFBQSxHQUFBRixHQUFBLEVBQUEsSUFBQUksRUFBQSxNQUFBQSxHQUFBSixHQUFBLEVBQUEsTUFBQSxJQUFBSyxPQUFBLHVCQUFBTCxFQUFBLEtBQUEsR0FBQU0sR0FBQVQsRUFBQUcsSUFBQU8sV0FBQVgsR0FBQUksR0FBQSxHQUFBUSxLQUFBRixFQUFBQyxRQUFBLFNBQUFaLEdBQUEsR0FBQUUsR0FBQUQsRUFBQUksR0FBQSxHQUFBTCxFQUFBLE9BQUFJLEdBQUFGLEVBQUFBLEVBQUFGLElBQUFXLEVBQUFBLEVBQUFDLFFBQUFaLEVBQUFDLEVBQUFDLEVBQUFDLEdBQUEsTUFBQUQsR0FBQUcsR0FBQU8sUUFBQSxJQUFBLEdBQUFILEdBQUEsa0JBQUFELFVBQUFBLFFBQUFILEVBQUEsRUFBQUEsRUFBQUYsRUFBQVcsT0FBQVQsSUFBQUQsRUFBQUQsRUFBQUUsR0FBQSxPQUFBRCxLQUFBVyxHQUFBLFNBQUFQLEVBQUFRLEVBQUFKLEdBQ0FLLEVBQUFDLFVBQUFDLE1BQUEsV0FDQUMsUUFBQUMsSUFBQSx1QkFHQUosRUFBQSx5QkFBQUssR0FBQSxRQUFBLFNBQUF0QixHQUNBQSxFQUFBdUIsZ0JBRUEsSUFBQUMsR0FBQVAsRUFBQSx1QkFBQVEsTUFDQUMsRUFBQVQsRUFBQSx1QkFBQVEsS0FHQSxJQUZBTCxRQUFBQyxJQUFBLFNBRUEsSUFBQUcsRUFBQSxDQUVBUCxFQUFBLHVCQUFBUSxJQUFBLFFBQ0FSLEdBQUEsdUJBQUFVLEtBQUEsbUJBRUEsSUFBQSxJQUFBRCxFQUFBLENBRUFULEVBQUEsdUJBQUFRLElBQUEsUUFDQVIsR0FBQSx1QkFBQVUsS0FBQSxzQkFHQVYsR0FBQVcsTUFDQUMsSUFBQSx5QkFDQUMsS0FBQSxPQUNBQyxNQUNBQyxhQUFBUixFQUNBUyxhQUFBUCxHQUVBUSxRQUFBLFNBQUFDLEdBQ0FmLFFBQUFDLElBQUEsbUJBQUFjLElBRUFDLE1BQUEsV0FDQW5CLEVBQUEsa0JBQUFVLEtBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZygn0L/QvtC00LrQu9GO0YfQtdC9IHJld2lldnMnKTtcclxufSk7XHJcblxyXG4kKCcuZm9ybS1yZXdpZXZzX19idXR0b24nKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB2YXIgcmV3aWV2c05hbWU9JCgnLmZvcm0tcmV3aWV2c19fbmFtZScpLnZhbCgpLC8vINC30L3QsNGH0LXQvdC40Y8g0LLQstC10LTQtdC90L3Ri9C1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC8XHJcbiAgICAgICAgcmV3aWV2c1RleHQ9JCgnLmZvcm0tcmV3aWV2c19fdGV4dCcpLnZhbCgpOy8vINC30L3QsNGH0LXQvdC40Y8g0LLQstC10LTQtdC90L3Ri9C1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC8XHJcbmNvbnNvbGUubG9nKCdjbGljaycpO1xyXG5cclxuICAgIGlmKHJld2lldnNOYW1lIT0nJyApXHR7Ly/Qv9GA0L7QstC10YDQutCwINGH0YLQvtCxINC90LUg0LHRi9C70L4g0L/Rg9GB0YLQvtC1INC/0L7Qu9C1XHJcbiAgICAgICAgIHZhciBuYW1lVmFsPSdvayc7XHJcbiAgICAgICAgJCgnLmZvcm0tcmV3aWV2c19fbmFtZScpLnZhbCgnJyk7XHJcbiAgICB9ZWxzZSBcdCQoJy5mb3JtLXJld2lldnNfX25hbWUnKS50ZXh0KCfQo9C60LDQttC40YLQtSDQktCw0YjQtSDQuNC80Y8nKTtcclxuXHJcbiAgICBpZihyZXdpZXZzVGV4dCE9JycgKVx0ey8v0L/RgNC+0LLQtdGA0LrQsCDRh9GC0L7QsSDQvdC1INCx0YvQu9C+INC/0YPRgdGC0L7QtSDQv9C+0LvQtVxyXG4gICAgICAgIHZhciB0ZXh0VmFsPSdvayc7XHJcbiAgICAgICAgJCgnLmZvcm0tcmV3aWV2c19fdGV4dCcpLnZhbCgnJyk7XHJcbiAgICB9ZWxzZSBcdCQoJy5mb3JtLXJld2lldnNfX3RleHQnKS50ZXh0KCfQndCw0L/QuNGI0LjRgtC1INGB0LLQvtC5INC+0YLQt9GL0LInKTtcclxuXHJcbiAgICAvL2lmKG5hbWVWYWw9PSdvaycgJiYgdGV4dFZhbD09J29rJyl7Ly/Qv9GA0L7QstC10YDQutCwINC90LAg0L/Rg9GB0YLQvtC1INC/0L7Qu9C1LCDRh9GC0L7QsSDQvdC1INC+0YLRgdGL0LvQsNGC0Ywg0L/QvtC60LAg0L3QtSDQt9Cw0L/QvtC70L3Rj9GCXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnLi4vcGhwL2FkZF9yZXZpZXdzLnBocCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICBuYW1lX3Jldmlld3M6cmV3aWV2c05hbWUsXHJcbiAgICAgICAgICAgICAgICB0ZXh0X3Jldmlld3M6cmV3aWV2c1RleHRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQvtGC0LLQtdGCINC+0YIg0YHQtdGA0LLQtdGA0LAnK3Jlcyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgJCgnLmVyb3JyX21hc3NhZ2UnKS50ZXh0KCfQvdC10YIg0L7RgtCy0LXRgtCwINC+0YIg0YHQtdGA0LLQtdGA0LAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAvLyB9XHJcbn0pO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
