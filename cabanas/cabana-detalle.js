const cabanaName = document.body.dataset.cabana || "La Madrina";
const whatsappText = `Hola! Quisiera consultar disponibilidad para la cabana ${cabanaName} de La Madrina.`;
const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappText)}`;

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = whatsappUrl;
  link.target = "_blank";
  link.rel = "noreferrer";
});
