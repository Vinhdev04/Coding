const tabs = document.querySelectorAll(".tab-item");
const panes = document.querySelectorAll(".tab-pane");
const line = document.querySelector(".tabs .line");

console.log(tabs);

tabs.forEach((tab, index) => {
  tab.addEventListener("click", function (e) {
    document.querySelector(".tab-item.active")?.classList.remove("active");
    document.querySelector(".tab-pane.active")?.classList.remove("active");

    line.style.left = tab.offsetLeft + "px";
    line.style.width = tab.offsetWidth + "px";

    tab.classList.add("active");
    panes[index].classList.add("active");
  });
});

// Cập nhật lại vị trí của line khi trang được tải
document.addEventListener("DOMContentLoaded", function () {
  const activeTab = document.querySelector(".tab-item.active");
  if (activeTab) {
    line.style.left = activeTab.offsetLeft + "px";
    line.style.width = activeTab.offsetWidth + "px";
  }
});
