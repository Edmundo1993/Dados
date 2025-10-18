// Contato + WhatsApp via FormSubmit
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const company = formData.get('company');
    const service = formData.get('service');
    const message = formData.get('message');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (!response.ok) throw new Error('Erro ao enviar formulário');

      const whatsappMsg = `Olá Edmundo, sou ${name} da ${company || 'empresa não informada'}. Gostaria de saber mais sobre o serviço de ${service}. ${message}`;
      const whatsappUrl = `https://wa.me/5521982204101?text=${encodeURIComponent(whatsappMsg)}`;
      window.open(whatsappUrl, '_blank', 'noopener');

      form.reset();
      window.location.href = './pages/thanks.html';
    } catch (err) {
      console.error(err);
      alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente ou chame no WhatsApp.');
    }
  });
}

// Carrossel de empresas
const carousel = document.getElementById('companiesCarousel');
const dots = document.querySelectorAll('.carousel-dot');
let currentIndex = 0;
const slideCount = document.querySelectorAll('.company-slide').length;

function updateCarousel(index) {
  const scrollPosition = index * 220; // 200px + 20px
  carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  currentIndex = index;
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.getAttribute('data-index'));
    updateCarousel(index);
  });
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % slideCount;
  updateCarousel(currentIndex);
}, 3000);

carousel.addEventListener('scroll', () => {
  const scrollPosition = carousel.scrollLeft;
  const index = Math.round(scrollPosition / 220);
  if (index !== currentIndex) {
    currentIndex = index;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  }
});
