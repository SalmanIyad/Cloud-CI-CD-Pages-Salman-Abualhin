document.getElementById("btn").addEventListener("click", () => {
  const msgElement = document.getElementById("msg");
  msgElement.innerText =
    "Success! The CI/CD pipeline and JavaScript are working perfectly ✅";

  msgElement.classList.remove("show");
  void msgElement.offsetWidth;
  msgElement.classList.add("show");
});
