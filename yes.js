const febHolidays = [
  "Dear Bhabhi, please feel it 😊",
  "Please ye pyaar ka cycle hai, ache se feel karna ❤️",
  "Dost bhi aap, family bhi aap 😊",
  "Ek bhi aap aur hazaar bhi aap 🤩",
  "Dukh me aap aur khushi me bhi aap 🤨",
  "Jindagi ke safar me kaafi zaroori ho aap ❤",
  "Maine dil se izzat di hai aapko, you’re special❤️",
  "You're a wonderful person ✔",
  "You are like my sister ✨💕",
  "And of course... wait Bhabhi.....",
  "My best well-wisher🤭",
  "I will always be there for you",
  "No matter how far we are🥰",
  "I promise I will always respect you",
  "You're the most caring, understanding, sweetest person 🤞✍",
  "In one word, you're just amazing.😍",
  "I’m lucky to have a Bhabhi like you 🥰",
  "I'm so grateful to have you in my life❤️",
  "I'll always do my best to make you proud 🥺",
  "Main humesha aapke sath hun 🤞✔",
  "Kabhi khud ko akela mat samajhna💓",
  "You're the most special person in our family 🥰",
  "I always pray for your happiness 😊",
  "And trust me, there's no one like you 🥰",
  "You're the best Bhabhi!! 💖",
  "Or should I say, I miss you when we don’t talk for long 🤨",
  "Acche lagte hai wo pal jo aapke sath bitaye hain 💓",
  "There are some hardships, 😢",
  "but we overcame most of them 🥰",
  "and it made me realize how important family is ❤️",
  "This complete love cycle is just for you, 😘",
  "my dear Bhabhi, my family 💖",
  "Please take care of yourself, because you are precious ❤",
  "Aap family ki jaan ho, aapki jagah koi nahi le sakta ❤️",
  "Thanks to God ki aap humari family ka hissa hain 🙏",
  "You're truly a blessing, my dear Bhabhi",
  "I respect you so much ❤️",
];
const ulEl = document.querySelector("ul");
const d = new Date();
let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
let activeIndex = daynumber;
const rotate = -360 / febHolidays.length;
init();
function init() {
  febHolidays.forEach((holiday, idx) => {
    const liEl = document.createElement("li");
    liEl.style.setProperty("--day_idx", idx);
    liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
      }</time><span>${holiday}</span>`;
    ulEl.append(liEl);
  });
  ulEl.style.setProperty("--rotateDegrees", rotate);
  adjustDay(0);
}
function adjustDay(nr) {
  daynumber += nr;
  ulEl.style.setProperty("--currentDay", daynumber);
  const activeEl = document.querySelector("li.active");
  if (activeEl) activeEl.classList.remove("active");
  activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
  const newActiveEl = document.querySelector(
    `li:nth-child(${activeIndex + 1})`
  );
  document.body.style.backgroundColor = window.getComputedStyle(
    newActiveEl
  ).backgroundColor;
  newActiveEl.classList.add("active");
}
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      adjustDay(-1);
      break;
    case "ArrowDown":
      adjustDay(1);
      break;
    default:
      return;
  }
});
