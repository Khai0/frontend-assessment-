const tabsContainer = document.querySelector(".tabs");
const contentsContainer = document.querySelector(".contents");

fetch("data.json")
  .then(res => res.json())
  .then(data => {
    data.forEach((item, index) => {
      // Create Tab
      const tab = document.createElement("div");
      tab.classList.add("tab");
      tab.innerText = item.title;

      // Create Content
      const content = document.createElement("div");
      content.classList.add("content");
      content.innerHTML = item.content;

      if (index === 0) {
        tab.classList.add("active");
        content.classList.add("active");
      }

      tab.addEventListener("click", () => {
        const isActive = tab.classList.contains("active");

        // Close all
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        document.querySelectorAll(".content").forEach(c => c.classList.remove("active"));

        if (!isActive) {
          tab.classList.add("active");
          content.classList.add("active");
        }
      });

      tabsContainer.appendChild(tab);
      contentsContainer.appendChild(content);
    });
  });