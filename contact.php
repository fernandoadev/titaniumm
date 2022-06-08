<?php 

	/* ==========================  Define variables ========================== */

	#Your e-mail address
	define("__TO__", "fernandoa.code@gmail.com");

	#Message subject
	define("__SUBJECT__", "");

	#Success message
	define('__SUCCESS_MESSAGE__', "Sua mensagem foi enviada com sucesso, logo entraremos em contato!");

	#Error message 
	define('__ERROR_MESSAGE__', "Não foi possível enviar sua mensagem, tenta novamente mais tarde!");

	#Messege when one or more fields are empty
	define('__MESSAGE_EMPTY_FILDS__', "Por favor, preencha todos os campos");

	/* ========================  End Define variables ======================== */

	//Send mail function
	function send_mail($to,$subject,$message,$headers){
		if(@mail($to,$subject,$message,$headers)){
			echo json_encode(array('info' => 'success', 'msg' => __SUCCESS_MESSAGE__));
		} else {
			echo json_encode(array('info' => 'error', 'msg' => __ERROR_MESSAGE__));
		}
	}


	//Get post data
	if(isset($_POST['nome']) and isset($_POST['email']) and isset($_POST['mensagem'])){
		$name 	 = $_POST['nome'];
		$mail 	 = $_POST['email'];
		$website  = 'http://www.titaniumm.com.br/';
		$comment = $_POST['mensagem'];

		if($name == '') {
			echo json_encode(array('info' => 'error', 'msg' => "Por favor insira seu nome."));
			exit();
		} else if($comment == ''){
			echo json_encode(array('info' => 'error', 'msg' => "Por favor digite sua mensagem."));
			exit();
		} else {
			//Send Mail
			$to = __TO__;
			$subject = __SUBJECT__ . ' ' . $name;
			$message = '
			<html>
			<head>
			  <title>Mail from '. $name .'</title>
			</head>
			<body>
			  <table style="width: 500px; font-family: arial; font-size: 14px;" border="1">
				<tr style="height: 32px;">
				  <th align="right" style="width:150px; padding-right:5px;">Nome:</th>
				  <td align="left" style="padding-left:5px; line-height: 20px;">'. $name .'</td>
				</tr>
				<tr style="height: 32px;">
				  <th align="right" style="width:150px; padding-right:5px;">E-mail:</th>
				  <td align="left" style="padding-left:5px; line-height: 20px;">'. $mail .'</td>
				</tr>
				<tr style="height: 32px;">
				  <th align="right" style="width:150px; padding-right:5px;">Assunto:</th>
				  <td align="left" style="padding-left:5px; line-height: 20px;">'. $subject .'</td>
				</tr>
				<tr style="height: 32px;">
				  <th align="right" style="width:150px; padding-right:5px;">Mensagem:</th>
				  <td align="left" style="padding-left:5px; line-height: 20px;">'. $comment .'</td>
				</tr>
			  </table>
			</body>
			</html>
			';

			$headers  = 'MIME-Version: 1.0' . "\r\n";
			$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
			$headers .= 'From: ' . $mail . "\r\n";

			send_mail($to,$subject,$message,$headers);
		}
	} else {
		echo json_encode(array('info' => 'error', 'msg' => __MESSAGE_EMPTY_FILDS__));
	}
 ?>