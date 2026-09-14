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

  var webpMap = {
    'assets/images/books/brian-weiss-a-traves-del-tiempo.jpg': 'assets/images/webp/atravesdeltiempo.webp',
    'assets/images/books/brian-weiss-los-mensajes-de-los-sabios.jpeg': 'assets/images/webp/losmensajesdelos00bria.webp',
    'assets/images/books/brian-weiss-los-milagros-existen.jpeg': 'assets/images/webp/losmilagrosexist0000weis.webp',
    'assets/images/books/brian-weiss-muchas-vidas-muchos-maestros.jpeg': 'assets/images/webp/muchasvidasmucho0000weis.webp',
    'assets/images/books/brian-weiss-muchos-cuerpos-una-misma-alma.jpeg': 'assets/images/webp/muchoscuerposuna0000weis.webp',
    'assets/images/books/helen-wambach-vida-antes-de-la-vida.jpeg': 'assets/images/webp/vidaantesdelavid00wamb.webp',
    'assets/images/books/ian-stevenson-cases-of-the-reincarnation-type.jpeg': 'assets/images/webp/casesofreincarna02stev.webp',
    'assets/images/books/ian-stevenson-children-who-remember-previous-lives.jpeg': 'assets/images/webp/childrenwhoremem0000stev.webp',
    'assets/images/books/ian-stevenson-twenty-cases-suggestive-of-reincarnation.jpeg': 'assets/images/webp/twentycasessugge0000stev.webp',
    'assets/images/books/ian-stevenson-where-reincarnation-and-biology-intersect.jpeg': 'assets/images/webp/wherereincarnati0000stev.webp',
    'assets/images/books/raymond-moody-life-after-life-french.jpg': 'assets/images/webp/lavieapreslavie.webp',
    'assets/images/branding/mi-terapia-regresiva-logo-150.png': 'assets/images/webp/miterapiaregresiva.com_-150x150.webp',
    'assets/images/branding/mi-terapia-regresiva-logo.png': 'assets/images/webp/miterapiaregresiva.com_-1024x1024.webp'
  };

  document.querySelectorAll('img').forEach(function (img) {
    var src = img.getAttribute('src');
    if (!src) return;
    if (webpMap[src]) {
      img.setAttribute('src', webpMap[src]);
      return;
    }
    if (src.indexOf('assets/images/original/') === 0 && /\.(?:jpe?g|png)$/i.test(src)) {
      img.setAttribute('src', src.replace('assets/images/original/', 'assets/images/webp/').replace(/\.(?:jpe?g|png)$/i, '.webp'));
    }
  });

  if (!document.querySelector('.whatsapp-float')) {
    var link = document.createElement('a');
    link.className = 'whatsapp-float';
    link.href = 'https://wa.me/34650805613?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20las%20sesiones%20de%20terapia%20regresiva.';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', 'Contactar por WhatsApp');
    link.textContent = 'WhatsApp';
    document.body.appendChild(link);
  }

  document.querySelectorAll('.site-footer').forEach(function (footer) {
    var resourceNav = footer.querySelector('nav[aria-label="Recursos y legal"]');
    if (resourceNav && !resourceNav.querySelector('a[href="licencias-de-recursos/"]')) {
      var resourceLink = document.createElement('a');
      resourceLink.href = 'licencias-de-recursos/';
      resourceLink.textContent = 'Licencias de recursos';
      resourceNav.appendChild(resourceLink);
    }

    if (footer.querySelector('.footer-legal')) return;
    var box = document.createElement('div');
    box.className = 'wrap footer-legal';
    var line = document.createElement('p');
    line.appendChild(document.createTextNode('© 2023–2026 Mi Terapia Regresiva · Código bajo '));
    var license = document.createElement('a');
    license.href = 'https://github.com/miterapiaregresiva/stg/blob/main/LICENSE';
    license.target = '_blank';
    license.rel = 'noopener noreferrer';
    license.textContent = 'GNU AGPL v3.0';
    line.appendChild(license);
    line.appendChild(document.createTextNode(' · Desarrollo web: '));
    var credit = document.createElement('a');
    credit.href = 'https://gofiodesign.eu/';
    credit.target = '_blank';
    credit.rel = 'noopener noreferrer';
    credit.textContent = 'Gofio Design';
    line.appendChild(credit);
    box.appendChild(line);
    footer.appendChild(box);
  });

  if (!document.getElementById('sprint-4-styles')) {
    var style = document.createElement('style');
    style.id = 'sprint-4-styles';
    style.textContent = '.footer-legal{margin-top:2rem;padding-top:1.25rem;border-top:1px solid var(--line);font-size:.84rem}.footer-legal p{margin:0}.whatsapp-float{position:fixed;right:max(1rem,env(safe-area-inset-right));bottom:max(1rem,env(safe-area-inset-bottom));z-index:50;min-width:58px;height:58px;padding:0 1rem;border-radius:999px;display:flex;align-items:center;justify-content:center;background:#25d366;color:#fff;font-weight:750;text-decoration:none;box-shadow:0 12px 30px rgba(24,93,50,.28);animation:wa-pop .45s ease-out both,wa-pulse 1.7s ease-in-out 1.5s 2}.whatsapp-float::before{content:"¿Hablamos?";position:absolute;right:calc(100% + .7rem);white-space:nowrap;background:#fff;color:var(--text);border:1px solid var(--line);border-radius:999px;padding:.42rem .72rem;font-size:.88rem;font-weight:650;box-shadow:0 8px 22px rgba(55,34,63,.12);opacity:0;pointer-events:none;animation:wa-tip 7s ease 1.1s 1 both}.whatsapp-float:hover,.whatsapp-float:focus-visible{background:#1da851}.whatsapp-float:hover::before,.whatsapp-float:focus-visible::before{opacity:1;animation:none}@keyframes wa-pop{from{opacity:0;transform:translateY(18px) scale(.85)}to{opacity:1;transform:none}}@keyframes wa-pulse{0%,100%{box-shadow:0 12px 30px rgba(24,93,50,.28)}50%{box-shadow:0 12px 30px rgba(24,93,50,.28),0 0 0 9px rgba(37,211,102,.16)}}@keyframes wa-tip{0%,100%{opacity:0;transform:translateX(8px)}12%,72%{opacity:1;transform:none}}@media(max-width:520px){.whatsapp-float{font-size:.86rem;height:54px}.whatsapp-float::before{display:none}}@media(prefers-reduced-motion:reduce){.whatsapp-float,.whatsapp-float::before{animation:none}}';
    document.head.appendChild(style);
  }
});
