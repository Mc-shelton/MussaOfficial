<?php


session_start();
$name = ucwords($_POST["name"]);
$from = strtolower($_POST['email']);
$subject = ucfirst($_POST['subject']);
$question = ucfirst($_POST['question']);

$to = "info@social-ci.org";
$subject = $subject;

$message = "<p>" . $question . "</p>";

$header = "From:" . $from . "\r\n";
$header .= "Reply-To: " . $from . "\r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-type: text/html\r\n";

$retval = mail($to, $subject, $message, $header);

if ($retval) {
    $_SESSION['mail'] = "Thank you" . $name . ". your question will be address soon";
    header("location: index.php");
} else {
    $_SESSION['mail'] = "Sorry, something went wrong!";
    header("location: index.php");
}
