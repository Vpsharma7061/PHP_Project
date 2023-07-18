
  <?php
  echo "PHP";

  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $address = $_POST['address'];
  $message= $_POST['message'];
  // echo empty($message);
  if(!empty($email) && !empty($message)){
    
    if(filter_var($email,FILTER_VALIDATE_EMAIL)){
      $receiver = "harshrastogi172000@gmail.com";
      $subject = "form: $name <$email>";
      $body = "Name: $name\nEmail: $email\nphone: $phone\naddress: $address\nMessage: $message\n\nRegards,\n$name"; 
      $sender = "From: $email"; 
      echo $sender;
      if(mail($receiver,$subject,$body,$sender)){
        echo "Your message has been sent successfully";
      }
      else{
        echo "sorry,failed to send your message";
      }
    }
    else{
      echo "Enter a valid address";
    }
  }
  else{
    echo "Email and name field is required";
  }

  
   
  ?>