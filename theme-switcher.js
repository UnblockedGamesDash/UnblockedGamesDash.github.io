function changeTheme(themeName) {
  const themeLink = document.getElementById('theme-link');
  themeLink.href = `${dark}-mode.css`; // Assumes you have separate CSS files named "light-mode.css" and "dark-mode.css"
}
