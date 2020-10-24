<?php

$name = $_POST['user-name'];
$phone = $_POST['phone'];
$street = $_POST['street'];
$house = $_POST['house'];
$block = $_POST['block'];
$flat = $_POST['flat'];
$floor = $_POST['floor'];
$pay = $_POST['payment'];
$comment = $_POST['comment'];
$disturb = $_POST['callback']; // 1 или null
$disturb = isset($disturb) ? 'НЕТ' : 'ДА';

$mail_message = '
<html>
<head>
    <title>Заявка</title>
</head>
<body>
    <h2>Заказ</h2>
    <ul>
        <li>Имя:' . $name . '</li>
        <li>Телефон: ' . $phone . '</li>
        <li>Улица: ' . $street . '</li>
        <li>Дом: ' . $house . '</li>
        <li>Блок: ' . $block . '</li>
        <li>Квартира: ' . $flat . '</li>
        <li>Этаж: ' . $floor . '</li>
        <li>Способ оплаты: ' . $pay . '</li>
        <li>Комментарий к заказу: ' . $comment . '</li>
        <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
    </ul>
</body>
</html>';

$headers = "From: Администратор сайта <admin@loftschool.com>\r\n".
            "MIME-Version: 1.0" . "\r\n" .
            "Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail('vladimirplotnikov371@gmail.com', 'Заказ', $mail_message, $headers);

if ($mail) {
    $data['status'] = "OK";

}else{
    $data['status'] = "NO";

}

echo json_encode($data);

?>