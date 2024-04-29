// Getting required Elements
const countEl = document.getElementById("count");
const markAsReadBtn = document.getElementById("mark-read");
const notificationEl = document.querySelectorAll(".notification-card");

// Adding Event listener
markAsReadBtn.addEventListener("click", () => {
  notificationEl.forEach((el) => {
    // checking if any notification contains active class
    if (el.classList.contains("active")) {
      el.classList.remove("active");
      el.querySelector(".red-dot").style.display = "none";
    }
  });
  countEl.textContent = 0;
});
