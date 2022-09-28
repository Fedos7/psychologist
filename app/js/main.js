import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const mobileMenuIcon = document.querySelector(".mobile-menu__icon");
const mobileMenu = document.querySelector(".mobile-menu");
mobileMenuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

const tabsControl = (tabsList, tabsContentList) => {
  const toogleClass = "active";
  let activeTabIndex = 0;
  for (let i = 0; i < tabsList.length; i++) {
    tabsList[i].addEventListener("click", (ev) => {
      if (activeTabIndex !== i) {
        tabsList[activeTabIndex].classList.toggle(toogleClass);
        tabsContentList[activeTabIndex].classList.toggle(toogleClass);
        activeTabIndex = i;
        tabsContentList[activeTabIndex]?.classList.toggle(toogleClass);
        ev.target.classList.toggle(toogleClass);
      }
    });
  }
};

const questionsTabsList = document.querySelectorAll(".questions .tab");
const questionsAnswerList = document.querySelectorAll(".questions .answer");

tabsControl(questionsTabsList, questionsAnswerList);

const educationTabsList = document.querySelectorAll(".education .tab");
const educationAnswerList = document.querySelectorAll(".education .tab-result");
tabsControl(educationTabsList, educationAnswerList);

const questionsAccordionItemsList = document.querySelectorAll(
  ".questions .accordion__item"
);
const questionsAccordionStartIndex = 0;
for (let index = 0; index < questionsAccordionItemsList.length; index++) {
  questionsAccordionItemsList[index].addEventListener(
    "click",
    function (e) {
      // e.stopPropagation();
      this.classList.toggle("active");
      console.log(this, e, e.target.nextElementSibling);
      this.nextElementSibling.classList?.toggle("active");
    },
    {
      capture: true,
    }
  );
}

const modal = document.querySelector(".modal");
const showModalBtn = document.querySelector(".top-section__btn");
const modalClose = document.querySelector(".modal .modal__close");
if (showModalBtn) {
  showModalBtn.addEventListener("click", () =>
    modal.classList.remove("d-none")
  );
  modalClose.addEventListener("click", () => modal.classList.add("d-none"));
}

const enrollModal = document.querySelector(".enroll-modal");
const showEnrollModalBtn = document.querySelector("#enroll");
const enrollModalClose = document.querySelector(".enroll-modal .modal__close");
showEnrollModalBtn.addEventListener("click", () => {
  enrollModal.classList.remove("d-none");
  console.log("test", enrollModal);
});
enrollModalClose.addEventListener("click", () =>
  enrollModal.classList.add("d-none")
);

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
});
