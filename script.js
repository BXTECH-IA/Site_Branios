const services = [
  "IA para atendimento",
  "Agendamentos inteligentes",
  "Integrações e automações",
  "Software sob medida"
];

const benefits = [
  "Aumente produtividade",
  "Reduza custos",
  "Automatize processos",
  "Escale seu negócio"
];

function render(id, data) {
  const container = document.getElementById(id);

  data.forEach(text => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = text;
    container.appendChild(div);
  });
}

render("servicesGrid", services);
render("benefitsGrid", benefits);

// ANIMAÇÃO AO SCROLL
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
