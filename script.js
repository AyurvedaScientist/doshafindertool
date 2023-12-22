function calculateDosha() {
    // Define Dosha points
    let vataPoints = 0;
    let pittaPoints = 0;
    let kaphaPoints = 0;
  
    // Get answers from the form
    const form = document.getElementById('doshaForm');
    const answers = new FormData(form);
  
    // Iterate through each answer
    for (const entry of answers) {
      const question = entry[0];
      const answer = entry[1];
  
      // Assign points based on the answer
      if (answer === 'vata') {
        vataPoints += 1;
      } else if (answer === 'pitta') {
        pittaPoints += 1;
      } else if (answer === 'kapha') {
        kaphaPoints += 1;
      }
    }
  
    // Determine the predominant Dosha
    const predominantDosha = Math.max(vataPoints, pittaPoints, kaphaPoints);
  
    // Display the result
    const resultContainer = document.getElementById('result');
    const emailSubscriptionContainer = document.getElementById('emailSubscription');

  if (predominantDosha === vataPoints) {
    resultContainer.innerHTML = 'Your predominant Dosha is Vata.';
  } else if (predominantDosha === pittaPoints) {
    resultContainer.innerHTML = 'Your predominant Dosha is Pitta.';
  } else {
    resultContainer.innerHTML = 'Your predominant Dosha is Kapha.';
  }

  
  
  // Show the email subscription form
  emailSubscriptionContainer.style.display = 'block';
}

function subscribe() {
  const email = document.getElementById('email').value;

  // You can add your logic here to handle the subscription, e.g., sending data to a server

  // For demonstration purposes, let's log the email to the console
  console.log(`Subscribed email: ${email}`);

  // You can provide a confirmation message or redirect the user to a thank-you page
  alert('Thank you for subscribing!');
}
