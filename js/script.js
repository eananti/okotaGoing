// get and store date element
const footerYear = new Date();

// display date element at the footer
document.getElementById('copyright').innerHTML = footerYear.getFullYear();