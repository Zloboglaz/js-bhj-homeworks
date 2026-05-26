// получаем все контейнеры
const tabsContainers = document.querySelectorAll(".tabs");

tabsContainers.forEach((container) => {
  // получаем список заголовков и содержимого
  const tabs = container.querySelectorAll(".tab");
  const contents = container.querySelectorAll(".tab__content");

  tabs.forEach((tab, i) => {
    // нажатие на заголовок
    tab.addEventListener("click", () => {
      tabs.forEach((tb) => {
        //удаляем класс активности у всех заголовков
        tb.classList.remove("tab_active");
      });

      // добавляем класс активности только нажатому заголовку
      tab.classList.add("tab_active");

      contents.forEach((content) => {
        //удаляем класс активности у всего содержимого
        content.classList.remove("tab__content_active");
      });

      // добавляем класс активности только содержимому с нажатым заголовком
      contents[i].classList.add("tab__content_active");
    });
  });
});
