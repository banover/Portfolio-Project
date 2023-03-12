// sticky navigation

const sectionHomeEl = document.querySelector(".section-home");

const observer = new IntersectionObserver(
  (entries) => {
    console.log(entries);
    const entry = entries[0];
    console.log(entry);

    if (entry.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (entry.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-120px",
  }
);

observer.observe(sectionHomeEl);

// smooth scrolling

const navLinks = document.querySelectorAll(".header a");
console.log(navLinks);
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (href !== "#") {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// make mobile navigation work

const btnNavEl = document.querySelectorAll(".btn-mobile");
const headerEl = document.querySelector(".header");

btnNavEl.forEach((btn) => {
  btn.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });
});

// btnNavEl.addEventListener("click", function () {
//   headerEl.classList.toggle("nav-open");
// });
