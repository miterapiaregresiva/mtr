document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.faq').forEach(function (faq) {
    var items = Array.from(faq.querySelectorAll('details'));
    items.forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (!item.open) return;
        items.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      });
    });
  });

  var link = document.createElement('a');
  link.className = 'whatsapp-float';
  link.href = 'https://wa.me/34650805613';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', 'Contactar por WhatsApp');
  link.textContent = 'WhatsApp';
  document.body.appendChild(link);
});
