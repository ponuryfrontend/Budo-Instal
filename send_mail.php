<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pobieranie danych z formularza
    $firstName = htmlspecialchars(trim($_POST['contact-first-name']));
    $lastName = htmlspecialchars(trim($_POST['contact-last-name']));
    $email = htmlspecialchars(trim($_POST['contact-email']));
    $phone = htmlspecialchars(trim($_POST['contact-phone']));
    $message = htmlspecialchars(trim($_POST['contact-msg']));

    // Adres e-mail, na który wiadomość ma być wysłana
    $to = "your-email@example.com";  // Zmień na swój adres e-mail

    // Temat wiadomości e-mail
    $subject = "Nowa wiadomość od " . $firstName . " " . $lastName;

    // Treść wiadomości e-mail
    $body .= "Wiadomość:\n$message\n";
    $body = "Imię: $firstName\n";
    $body .= "Nazwisko: $lastName\n";
    $body .= "E-mail: $email\n";
    $body .= "Numer telefonu: $phone\n\n";

    // Nagłówki wiadomości e-mail
    $headers = "From: $encoded_from <$from>\r\n" .
           "Reply-To: $from\r\n" .
           "Content-Type: text/plain; charset=UTF-8\r\n" .
           "MIME-Version: 1.0\r\n";

    // Wysyłanie wiadomości e-mail
    $mail_status = mail($to, mb_encode_mimeheader($subject), $body, $headers);

    if ($mail_status) {
        header("Location: /index.html?mail_status=sent");
    } else {
        header("Location: /index.html?mail_status=error");
    }
}
else {
    http_response_code(400);
    echo 'Invalid request.';
}
?>
