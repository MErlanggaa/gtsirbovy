const captchaTextBox = document.querySelector(".captcha_box input"); // Fixed class name
const refreshButton = document.querySelector(".refresh_button");
const captchaInputBox = document.querySelector(".captcha_input input"); // Fixed class name
const message = document.querySelector(".message");
const submitButton = document.querySelector(".button");

let captchaText = null;

const generatorCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 7);
    const randomStringArray = randomString.split("");
    const changeString = randomStringArray.map((char) =>
        Math.random() > 0.5 ? char.toUpperCase() : char
    );
    captchaText = changeString.join(" ");
    captchaTextBox.value = captchaText;
    console.log(captchaText);
};

const refreshBtnClick = () => {
    generatorCaptcha();
    captchaInputBox.value = "";
    captchaKeyUpValidate();
};

const captchaKeyUpValidate = () => {
    submitButton.classList.toggle("disabled", !captchaInputBox.value);
    if (!captchaInputBox.value) message.classList.remove("active");
};

const submitBtnClick = () => {
    captchaText = captchaText
        .split("")
        .filter((char) => char !== " ")
        .join("");
    message.classList.add("active");
    if (captchaInputBox.value == captchaText) {
        message.innerText = "Entered captcha is correct";
        message.style.color = "#FF2525";
    }
};

refreshButton.addEventListener("click", refreshBtnClick);
captchaInputBox.addEventListener("keyup", captchaKeyUpValidate);
submitButton.addEventListener("click", submitBtnClick);

generatorCaptcha(); // Fixed function name
