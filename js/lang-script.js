document.querySelectorAll(".custom-select-topbar").forEach((select) => {
  select.addEventListener("change", function () {
    if (this.value === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", "en");
    }
  });
});
