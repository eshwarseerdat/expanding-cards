const panels = document.querySelectorAll(".panel");

const makeActive = (selected) => {
  panels.forEach((panel) => {
    if (panel.classList.contains("active") && panel !== selected) {
      panel.classList.remove("active");
    }
  });
  selected.classList.toggle("active");
};

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    makeActive(panel);
  });
});
