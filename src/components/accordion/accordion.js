const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display === "none";
    } else {
      document.querySelectorAll(".accordion-content").forEach((item) => {
        item.style.display = "none";
      });
      content.style.display = "block";
    }
  });
});
