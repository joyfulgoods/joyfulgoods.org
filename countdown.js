
// Set the date we're counting down to
const countdownDate = new Date("May 31, 2023 00:00:00").getTime();

// Update the countdown every second
const updateCountdown = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();
    
  // Find the distance between now and the count down date
  const distance = countdownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Display the result in the element with id="countdown-timer"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
    
  // If the countdown is over, show "EXPIRED"
  if (distance < 0) {
    clearInterval(updateCountdown);
    document.getElementById("countdown-timer").innerHTML = "EXPIRED";
  }
}, 1000);

// Load the SendGrid API library
const sgMail = require('@sendgrid/mail');

// Set the API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Function to send an email
function sendEmail(to, from, subject, body) {
  // Create the email message
  const msg = {
    to,
    from,
    subject,
    html: body
  };

  // Send the email using the SendGrid API
  return sgMail.send(msg);
}

// Example usage of the sendEmail function
sendEmail('recipient@example.com', 'sender@example.com', 'Welcome to JoyfulGoods!', '<p>Thank you for signing up for JoyfulGoods! We will keep you updated on our progress.</p>')
  .then(() => {
    console.log('Email sent successfully');
  })
  .catch((error) => {
    console.error('Error sending email:', error);
  });
