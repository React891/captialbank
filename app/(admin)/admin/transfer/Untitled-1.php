<?php
include('db.php');
if (isset($_POST["email"]) && (!empty($_POST["email"]))) {
    $email = trim($_POST["email"]);
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $email = filter_var($email, FILTER_VALIDATE_EMAIL);

    if (!$email) {
        $error = "<p>Invalid email address. Please enter a valid email address!</p>";
    } else {
        $stmt = $con->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $results = $stmt->get_result();
        $row = $results->num_rows;

        if ($row == 0) {
            $error = "<p>No user is registered with this email address!</p>";
        }
    }

    if (!empty($error)) {
        echo "<div class='error'>$error</div>
              <br /><a href='javascript:history.go(-1)'>Go Back</a>";
    } else {
        $expFormat = mktime(date("H"), date("i"), date("s"), date("m"), date("d") + 1, date("Y"));
        $expDate = date("Y-m-d H:i:s", $expFormat);
        $key = bin2hex(random_bytes(16)); // Secure random key

        // Insert into password reset table
        $stmt = $con->prepare("INSERT INTO password_reset_temp (email, key, expDate) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $email, $key, $expDate);
        $stmt->execute();

        $resetLink = "https://www.yourdomain.com/reset-password.php?key=$key&email=$email&action=reset";

        $output = '<p>Dear user,</p>';
        $output .= '<p>Please click on the following link to reset your password:</p>';
        $output .= "<p><a href='$resetLink' target='_blank'>$resetLink</a></p>";
        $output .= '<p>The link will expire after 1 day for security reasons.</p>';
        $output .= '<p>If you did not request this password reset, no action is required.</p>';
        $output .= '<p>Thanks,</p><p>Your Team</p>';

        $body = $output;
        $subject = "Password Recovery";

        require("PHPMailer/PHPMailerAutoload.php");
        $mail = new PHPMailer();
        $mail->IsSMTP();
        $mail->Host = "smtp.hostinger.com"; // SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = "support@firstunionb.com"; // Replace with your email
        $mail->Password = "yourpassword"; // Replace with your email password
        $mail->Port = 465; // SSL port
        $mail->SMTPSecure = 'ssl'; // Encryption
        $mail->IsHTML(true);
        $mail->From = "support@firstunionb.com";
        $mail->FromName = "Your Website Name";
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->AddAddress($email);

        if (!$mail->Send()) {
            echo "Mailer Error: " . $mail->ErrorInfo;
        } else {
            echo "<div class='success'>
                    <p>An email has been sent to you with instructions to reset your password.</p>
                  </div>";
        }
    }
} else {
?>
<form method="post" action="">
    <label><strong>Enter Your Email Address:</strong></label><br /><br />
    <input type="email" name="email" placeholder="username@email.com" required />
    <br /><br />
    <input type="submit" value="Reset Password" />
</form>
<?php } ?>
