document.addEventListener("DOMContentLoaded", () => {
  const heroForm = document.querySelector(".hero__form");
  const heroInput = document.querySelector(".hero__input");
  const earyAccessForm = document.querySelector(".easy-access__form");
  const heroErroMsg = document.querySelector(".hero__input-error-msg");
  const earyAccessErrorMsg = document.querySelector(
    ".easy-access__input-error-msg",
  );
  console.log("form", heroForm);

  const checkfromValid = (email) =>
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email,
    );

  heroForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("hmm");
    if (!checkfromValid(heroInput.value)) {
      heroErroMsg.classList.add("error");
    }
  });
});
