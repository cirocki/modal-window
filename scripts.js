window.addEventListener("DOMContentLoaded", (event) => {
  const openModalButton = document.querySelector(".open-modal");
  const modalWindow = document.querySelector(".modal");
  const pageContent = document.querySelector(".page-content");
  const modalClosers = document.querySelectorAll(".close-modal");

  const openModalFunction = () => {
    if (modalWindow) {
      modalWindow.classList.add("is-open");
      pageContent.classList.add("blurred");
    }
  };
  const closeModalFunction = () => {
    if (modalWindow && modalWindow.classList.contains("is-open")) {
      modalWindow.classList.remove("is-open");
      pageContent.classList.remove("blurred");
    }
  };

  //   OPEN MODAL FUNCTION ON BUTTON CLICK
  if (openModalButton) {
    openModalButton.addEventListener("click", () => {
      openModalFunction();
    });
  }

  //   CLOSE MODAL FUNCTION ON CLOSER ITEM CLICK
  modalClosers.forEach((element) => {
    element.addEventListener("click", () => {
      closeModalFunction();
    });
  });

  //   CLOSE MODAL FUNCTION ON 'ESCAPE' KEY
  document.onkeyup = function (event) {
    if (event.keyCode === 27) {
      closeModalFunction();
    }
  };

  //   CLOSE MODAL FUNCTION ON CLICK OUTSIDE MODAL CONTENT
  modalWindow.addEventListener("click", function (event) {
    const isInside = event.target.closest(".modal__content");
    if (!isInside) {
      closeModalFunction();
    }
  });
});
