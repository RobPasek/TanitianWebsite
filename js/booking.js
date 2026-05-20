
function bookingPopup() {

  let page = window.location.pathname.split("/").pop();

  page = page.replace(".html", "");

  const messages = {
    "transportation": "Transportation has been added to your trip plan.",
    "lodging": "Your lodging choice has been added to your trip plan.",
    "entertainment": "Entertainment activities have been added to your trip plan.",
    "food": "Dining options have been added to your trip plan.",
    "faq": "Travel information has been saved for your trip plan.",
    "plan-your-trip": "Your trip plan has been updated."
  };

  const message =
    messages[page] ||
    `You have selected ${page.replace(/[-_]/g, " ")}.`;

  alert(message);
}
