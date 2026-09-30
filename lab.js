const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".project-card");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filters.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    cards.forEach((card) => {
      const tags = (card.dataset.tags || "").split(" ");
      card.hidden = selected !== "all" && !tags.includes(selected);
    });
  });
});
