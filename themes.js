// Function to set the selected theme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName); // Store the selected theme in localStorage
  document.documentElement.className = themeName; // Apply the selected theme to the root HTML element
}

// Function to toggle between light and dark themes
function toggleTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}

// Function to apply the selected theme when the page loads
function applyThemeOnLoad() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme); // Apply the saved theme if available
  } else {
    setTheme('light'); // Default to light theme if no theme is saved
  }
}

// Call the applyThemeOnLoad function when the page loads
window.onload = applyThemeOnLoad;
