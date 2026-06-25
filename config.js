var config = {
  student_name: "Gurmani Kaur",
  student_nickname: "Guru",
  student_year_sem: "Summer 2026",
  student_email: "gurmanikaur3571@gmail.com",
 
  background_color: "#F5EFE4",
  text_color: "#1C1C1A",
  accent_color: "#6B7C5C",
  secondary_color: "#E8DDD0",
 
  font_family: "'Cormorant Garamond', serif",
  body_font_family: "'DM Sans', sans-serif",
  code_font_family: "'Roboto Mono', monospace"
};

document.title = `${config.student_name} · PS70`;
 
const root = document.documentElement;
root.style.setProperty("--background-color",   config.background_color);
root.style.setProperty("--text-color",         config.text_color);
root.style.setProperty("--accent-color",       config.accent_color);
root.style.setProperty("--secondary-color",    config.secondary_color);
root.style.setProperty("--font-family",        config.font_family);
root.style.setProperty("--body-font-family",   config.body_font_family);
root.style.setProperty("--mono-font-family",   config.code_font_family);

document.querySelector("footer").innerHTML = `
  <a href="./index.html#final-project">Work</a>
  <a href="./about.html">About</a>

  <div id="contact-info">
    <a href="mailto:${config.student_email}">${config.student_email}</a>
  </div>
`;

document.querySelectorAll('#student-name').forEach(el => {
  el.innerHTML = `${config.student_name}`;
});