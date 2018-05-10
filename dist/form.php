<?php
$name = $_GET['name'];
$product = $_GET['ask'];
$tel = $_GET['tel'];
$message = "
Имя: {$name} 
Телефон: {$tel}
Товар: {$product}";
mail('elena-gold2005@mail.ru', 'Новый заказ', $message);