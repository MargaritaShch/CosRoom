//Благодарность
 const form = document.querySelector("form");
 const message = document.createElement("p");
 message.textContent = "Спасибо! Ваш отзыв отправлен. Нам важно ваше мнение!";

 form.addEventListener("submit", (event) => {
   event.preventDefault();
   form.style.display = "none";
   form.insertAdjacentElement("afterend", message);
 });