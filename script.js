const links = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@K4IMXS",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="2.5" y="5" width="19" height="14" rx="4" fill="#FF0000"></rect>
        <path d="M10 9.5L15.2 12L10 14.5V9.5Z" fill="white"></path>
      </svg>
    `,
    description: "Acessar o canal",
    tone: "primary",
  },
  {
    label: "Discord",
    href: "https://discord.gg/5nDX37ghGt",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M19.6 6.5C18.5 5.9 17.3 5.5 16 5.2L15.6 5.8C16.6 6.2 17.5 6.7 18.3 7.4C16.8 6.9 15.2 6.7 13.7 6.8C11.2 6.8 8.8 7.6 6.8 9.3C5.7 10.5 4.8 11.9 4.2 13.5C3.6 13.2 3.1 12.8 2.7 12.3L2.2 12.8C2.8 13.7 3.5 14.4 4.4 15C5.2 15.6 6.1 16.1 7 16.4C7.4 16.5 7.8 16.6 8.2 16.6C8.8 16.6 9.4 16.4 9.8 16.1C10.7 15.4 11.3 14.5 11.5 13.5C12.1 13.9 12.7 14.1 13.4 14.1C14.1 14.1 14.7 13.9 15.4 13.6C15.7 14.6 16.4 15.5 17.3 16.2C18.2 15.8 19.1 15.3 19.9 14.6C20.8 13.8 21.4 12.7 21.7 11.5C21.1 10.7 20.3 9.9 19.4 9.2C19.9 8.4 20.2 7.5 20.3 6.6L19.6 6.5ZM10.1 13.3C9.3 13.3 8.6 12.7 8.6 11.9C8.6 11.1 9.3 10.5 10.1 10.5C10.9 10.5 11.6 11.1 11.6 11.9C11.6 12.7 10.9 13.3 10.1 13.3ZM15.7 13.3C14.9 13.3 14.2 12.7 14.2 11.9C14.2 11.1 14.9 10.5 15.7 10.5C16.6 10.5 17.2 11.1 17.2 11.9C17.2 12.7 16.5 13.3 15.7 13.3Z" fill="currentColor"></path>
      </svg>
    `,
    description: "Loja Oficial de Homebrews!",
    tone: "secondary",
  },
  {
    label: "Frost Forge",
    href: "https://instagram.com/_frostforge?srtk=MXQ4NDBnNTRnMWs3OQ%3D%3D",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"></rect>
        <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" stroke-width="1.8"></circle>
        <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"></circle>
      </svg>
    `,
    description: "Perfil profissional de RPG content",
    tone: "accent",
  },
  {
    label: "WebnexTech",
    href: "https://instagram.com/webnex.tech?srtk=eGV6MGg0ajNhNTl2",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"></rect>
        <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" stroke-width="1.8"></circle>
        <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"></circle>
      </svg>
    `,
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
