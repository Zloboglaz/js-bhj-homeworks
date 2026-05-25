// ищем все списки
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const btn = dropdown.querySelector(".dropdown__value");
  const list = dropdown.querySelector(".dropdown__list");
  const elements = dropdown.querySelectorAll(".dropdown__item");

  // окрываем и закрываем список при нажатии
  btn.addEventListener("click", () => {
    list.classList.toggle("dropdown__list_active");
  });

  // получаем ссылку, запрещаем переход, меняем название кнопки и сворачиваем список
  elements.forEach((elem) => {
    const href = elem.querySelector(".dropdown__link");
    href.addEventListener("click", (event) => {
      event.preventDefault();
      btn.textContent = href.textContent;
      list.classList.remove("dropdown__list_active");
    });
  });
});
