const form = document.getElementById('bookingForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = encodeURIComponent(document.getElementById('name').value);
  const service = encodeURIComponent(document.getElementById('service').value);
  const date = encodeURIComponent(document.getElementById('date').value);
  const time = encodeURIComponent(document.getElementById('time').value);
  const notes = encodeURIComponent(document.getElementById('notes').value);

  const whatsappNumber = "27680824771"; // without '+' for wa.me links
  const message = `Hello! I would like to book a Flawlessly Blended appointment.%0AName: ${name}%0AService: ${service}%0ADate: ${date}%0ATime: ${time}%0ANotes: ${notes}`;

  const url = `https://wa.me/${whatsappNumber}?text=${message}`;
  window.open(url, '_blank');
});