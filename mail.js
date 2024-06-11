function emailSend() {

	const userName = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const email2 = document.getElementById('email2').value;
	const subject = document.getElementById('subject').value;
	const address = document.getElementById('address').value;
	const phone = document.getElementById('phone').value;
	const message = document.getElementById('message').value

	const messageBody = "Name " + userName +
		"<br/> Email " + email;
	Email.send({
		Host: "smtp.elasticemail.com",
		Username: "amaan96393@gmail.com",
		Password: "0DFF22B0329AF3CEA576D7652DF740C6C78D",
        // SecureToken:"1c6e4dc9-4181-4bfa-8ff7-630e062dcb08",
		To: email,
		From: "amaan96393@gmail.com",
		Subject: "New User Enquiry",
		message: message,
		Body:
			`
		<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Your Email Subject</title>
				<style>
					body {
						font-family: Arial, sans-serif;
						background-color: #f4f4f4;
						padding: 20px;
					}

					.container {
						max-width: 600px;
						margin: 0 auto;
						background-color: #ffffff;
						padding: 20px;
						border-radius: 8px;
						box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
					}

					h1 {
						color: #333333;
					}

					p {
						color: #666666;
						margin-bottom: 10px;
					}

					a {
						color: #007BFF;
						text-decoration: underline;
					}
					span{
						color: blue;
						font-weight: 600
					}
				</style>
			</head>
			<body>
				<div class="container">
					<h1>User Details:</h1>
					<p>Hello <span> ${userName} </span>,</p>
					<p><strong>Full Name:</strong> ${userName}</p>
					<p><strong>Email:</strong> ${email2}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Adress:</strong> ${address}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
					<p><strong>Message:</strong> ${message} </p>
					<p>If you have any questions, please <a href="info@awwaltech.com">contact us</a>.</p>
					<p>Thank you!</p>
				</div>
			</body>
			</html>
	`
	}).then(
		message => {
			console.log(message)
			if (message == 'OK') {
				swal("Successfull", "Your Message has benn sent Successfully!", "success");
			}
			else {
				swal("Error", "You clicked the button!", "error");
			}
		}
	);
}