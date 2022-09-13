<?php


session_start();
$name = ucwords($_POST["name"]);
$from = strtolower($_POST['email']);
$phone = strtolower($_POST['phone']);
$date = strtolower($_POST['date']);
$times = strtolower($_POST['time']);
$quantity = strtolower($_POST['quantity']);
$descript = ucfirst($_POST['descript']);

$to = "sheltonnito@gmail.com";
$subject = "Order from " . $name;

$message = "<p> from :"  . $from . "</p>";
$message .= "<p> name :" . $name . "</p>";
$message .= "<p> phone No :" . $phone . "</p>";
$message .= "<p> exp delivery :" . $date . $time . "</p>";
$message .= "<p> description : <br>" . $descript . "</p>";

$header = "From:" . $from . "\r\n";
$header .= "Reply-To: " . $from . "\r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-type: text/html\r\n";

$retval = mail($to, $subject, $message, $header);


if ($retval) {
    echo ` 
    <script>
      var sent = document.getElementsByClassName("sent-message");
      var error = document.getElementsByClassName("error-message");

      alert(sent[0]);
      sent[0].style.display = "block !important";
    </script>`;
    header("location: index.html");
} else {
    echo "<script>alert('Sorry, something went wrong!')</script>";
    header("location: index.html");
}
