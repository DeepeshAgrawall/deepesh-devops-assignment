document.addEventListener("DOMContentLoaded", () => {
  const version = document.getElementById("version");
  if (version) {
    version.setAttribute("title", "Deployed via GitHub Actions");
  }
});
