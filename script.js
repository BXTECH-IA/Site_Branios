/**
 * Brânios Quantum - Interactive Logic
 */

const services = [
  {
    title: "IA para Atendimento",
    desc: "Agentes inteligentes que entendem o seu cliente e vendem por você, dia e noite.",
    icon: "🤖"
  },
  {
    title: "Agendamentos Inteligentes",
    desc: "Algoritmos que otimizam sua escala e reduzem lacunas na agenda automaticamente.",
    icon: "📅"
  },
  {
    title: "Integrações Fluidas",
    desc: "Conectamos todo o seu ecossistema digital para que os dados fluam sem fricção.",
    icon: "⚡"
  },
  {
    title: "Software Pro",
    desc: "Desenvolvimento de sistemas robustos com foco em performance crítica e experiência do usuário.",
    icon: "💻"
  }
];

const benefits = [
  { title: "Alta Produtividade", desc: "Elimine o manual. Deixe que a tecnologia faça o trabalho pesado." },
  { title: "Redução de Atrito", desc: "Processos automatizados significam menos erros e mais satisfação." },
  { title: "Escala Exponencial", desc: "Sistemas desenhados para suportar o crescimento do seu negócio." },
  { title: "Visão de Futuro", desc: "Mantenha sua empresa na vanguarda tecnológica do setor." }
];

/**
 * Renders cards into a container
 */
function renderCards(id, data) {
  const container = document.getElementById(id);
  if (!container) return;

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card hidden";
    card.innerHTML = `
      ${item.icon ? `<div style="font-size: 2.5rem; margin-bottom: 10px;">${item.icon}</div>` : ''}
      <h3>${item.title}</h3>
      <p style="color: #94A3B8; font-size: 0.95rem;">${item.desc}</p>
    `;
    container.appendChild(card);
  });
}

// Initial Render
renderCards("servicesGrid", services);
renderCards("benefitsGrid", benefits);

/**
 * Scroll Reveal Animation
 */
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, observerOptions);

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

/**
 * Dynamic Navbar
 */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/**
 * Ethereal Hero Parallax (Integrated Background Feel)
 */
const heroImageContainer = document.querySelector(".hero-image-container");

if (heroImageContainer) {
  document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth) - 0.5;
    const yPos = (clientY / window.innerHeight) - 0.5;

    // Very subtle, ethereal movement for background integration
    const moveX = xPos * 40;
    const moveY = yPos * 40;
    const rotateX = yPos * -10;
    const rotateY = xPos * 10;

    heroImageContainer.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px)) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
}

// Smooth scroll implementation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
