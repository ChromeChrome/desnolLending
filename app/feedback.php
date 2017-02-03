<?php
$data = stripslashes(strip_tags($_POST["data"]));
// $formPage = stripslashes(strip_tags($_POST["data"]));
//print_r($_POST);

parse_str($data, $userData);

function handler_mail($nameGuest, $phoneGuest, $emailGuest, $msgTask, $form){
    
    $subject  = 'Заявка с сайта Desnolsoft lending.ru';
   
    if( !empty($nameGuest)  )    $message .= "<strong>Имя отправителя:</strong> ".$nameGuest."<br>";
    if( !empty($phoneGuest) )    $message .= "<strong>Телефон отправителя:</strong> ".$phoneGuest."<br>";
    if( !empty($emailGuest) )    $message .= "<strong>Email отправителя:</strong> ".$emailGuest."<br>";
    if( !empty($msgTask)    )    $message .= "<strong>Сообщение отправителя</strong> ".$msgTask."<br>";
    if( !empty($form)       )    $message .= "<strong>Форма отправки</strong> ".$form."<br>";

    $headers .= 'From: Desnolsoft lending.RU' . "\r\n" .
                'Reply-To: Desnolsoft lending' . "\r\n" .
			    "Content-type: text/html; charset=\"utf-8\"";

    $to = 'nikitinkonstantin32@gmail.com';
    
    if ( (!empty($nameGuest) and !empty($phoneGuest)) || (!empty($emailGuest) and !empty($nameGuest)) ){
        mail($to, $subject, $message, $headers); 
        echo "Успешно";
    }
    else {
        echo "Не все поля заполнены";     
    } 
}
if(isset($userData["nameGuest"])){
    handler_mail( 
        $userData["nameGuest"], $userData["phoneGuest"] ,
        $userData["emailGuest"],$userData["msgTask"],$userData["formName"]
    );
}
elseif(isset($userData["nameInPopup"])){
    handler_mail( 
        $userData["nameInPopup"], $userData["phoneInPopup"] ,
        $userData["emailInPopup"],$userData["msgInPopup"],$userData["formName"]
    );
}
?>