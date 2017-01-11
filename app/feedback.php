<?php
$data = stripslashes(strip_tags($_POST["data"]["dataSend"]));
$formPage = stripslashes(strip_tags($_POST["data"]["formPage"]));

parse_str($data, $userData);

function handler_mail($name, $phone, $email, $txt, $form, $formPage){
    
    $subject  = 'Заявка с сайта Desnolsoft lending.ru';
   
    if( !empty($name)  )      $message .= "<strong>Имя отправителя:</strong> ".$name."<br>";
    if( !empty($phone) )      $message .= "<strong>Телефон отправителя:</strong> ".$phone."<br>";
    if( !empty($email) )      $message .= "<strong>Email отправителя:</strong> ".$email."<br>";
    if( !empty($txt)   )      $message .= "<strong>Сообщение отправителя</strong> ".$txt."<br>";
    if( !empty($form)  )      $message .= "<strong>Название формы:</strong> ".$form."<br>";

    $headers .= 'From: Desnolsoft lending.RU' . "\r\n" .
                'Reply-To: Desnolsoft lending' . "\r\n" .
			    "Content-type: text/html; charset=\"utf-8\"";

    $to = 'nikitinkonstantin32@gmail.com';
    
    if ( (!empty($name) and !empty($phone)) || (!empty($email) and !empty($name)) ){
        custom_mail($to, $subject, $message, $headers); 
    }
    else {
        echo "Не все поля заполнены";     
    } 
}
if(isset($userData["name"])){
    handler_mail( 
        $userData["name"], $userData["phone"] ,
        $userData["email"],$userData["message"], 
        $userData["formName"]
    );
}
// elseif(isset($userData["name_itc"])){
//     handler_mail( 
//         $userData["name_itc"], $userData["phone_itc"], "",
//         $userData["msg"], $userData["formName"], $formPage, $userData, ""
//     ); 
// }
?>