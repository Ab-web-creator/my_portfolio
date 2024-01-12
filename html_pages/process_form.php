<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Hier kun je de code toevoegen om een e-mail te versturen
    $to = "diederickv@gmail.com";
    $subject = "Nieuw formulier ingediend";
    $headers = "From: $email";

    // Voeg de inhoud van het bericht samen
    $email_content = "Naam: $name\n";
    $email_content .= "E-mail: $email\n";
    $email_content .= "Bericht:\n$message";

    // Stuur het e-mailbericht
    mail($to, $subject, $email_content, $headers);

    // Voeg hier eventueel verdere verwerkingslogica toe

    // Stuur de gebruiker door naar een bedankpagina of iets dergelijks
    header("Location: bedankt.html");
    exit();
}
?>
