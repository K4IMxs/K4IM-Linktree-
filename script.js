const links = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@K4IMXS",
    icon: "▶",
    description: "Acessar o canal",
    tone: "primary",
  },
  {
    label: "Discord",
    href: "https://discord.gg/5nDX37ghGt",
    icon: "◈",
    description: "Loja Oficial de Homebrews!",
    tone: "secondary",
  },
  {
    label: "Frost Forge",
    href: "https://instagram.com/_frostforge?srtk=MXQ4NDBnNTRnMWs3OQ%3D%3D",
    icon: "◎",
    description: "Perfil profissional de RPG content",
    tone: "accent",
  },
  {
    label: "WebnexTech",
    href: "https://instagram.com/webnex.tech?srtk=eGV6MGg0ajNhNTl2",
    icon: "◎",
    description: "Perfil profissional de Desenvolvimento Web",
    tone: "accent",
  },
];

const linksContainer = document.getElementById("links");
const statsContainer = document.getElementById("stats");

linksContainer.innerHTML = links
  .map(
    ({ label, href, icon, description, tone }) => `
      <a class="link-button ${tone}" href="${href}" target="_blank" rel="noreferrer">
        <div class="link-left">
          <span class="link-icon">${icon}</span>
          <span class="link-text">
            <strong>${label}</strong>
            <small>${description}</small>
          </span>
        </div>
        <span class="link-arrow">→</span>
      </a>
    `
  )
  .join("");

statsContainer.innerHTML = stats
  .map(
    ({ value, label }) => `
      <div class="stat-box">
        <strong>${value}</strong>
        <span>${label}</span>
      </div>
    `
  )
  .join("");
