window.addEventListener("DOMContentLoaded", () => {
  // показ и открытие меню бокового
  const btnHideMenu = document.querySelector(".content__block-menu__hide");
  const blockHideMenu = document.querySelector(".content__block-menu");
  const textHideMenu = document.querySelectorAll(
    ".content__block-menu__link span"
  );
  const textHideMenuBtn = document.querySelector(
    ".content__block-menu__hide span"
  );
  const arrowHideMenuBtn = document.querySelector(
    ".content__block-menu__hide svg"
  );

  const iconColorMenu = document.querySelectorAll(
    ".content__block-menu__link svg path"
  );

  const linkColorMenu = document.querySelectorAll(".content__block-menu__link");

  const iconColorMenuActive = document.querySelector(
    ".content__block-menu__link.active svg path"
  );

  const iconHideMenuLeft = document.querySelectorAll(
    ".content__block-menu__hide svg path"
  );

  const btnHideMenuLeft = document.querySelector(".content__block-menu__hide");

  const listsMenuBg = document.querySelectorAll(".content__block-menu__list");

  const propertyAside = document.getElementById("propertyAside");

  const contentAsideBlock = document.querySelector(".content__block-scrollbar");

  btnHideMenu.addEventListener("click", (e) => {
    btnHideMenu.classList.toggle("active");
    textHideMenu.forEach((text) => {
      if (btnHideMenu.classList.contains("active")) {
        text.style.display = "none";
        textHideMenuBtn.style.display = "none";
        blockHideMenu.style.maxWidth = "49px"; // ширина блока
        if (propertyAside) propertyAside.style.maxWidth = "49px";
        arrowHideMenuBtn.style.rotate = "180deg"; // переворот стрелки
        iconColorMenu.forEach((icon) => {
          icon.style.fill = "#ffffff";
        });
        if (contentAsideBlock) contentAsideBlock.style.display = "none";

        btnHideMenuLeft.style.backgroundColor = "#172139";
        iconHideMenuLeft.forEach((iconHide) => {
          iconHide.style.fill = "#ffffff";
        });

        // при наведении на кнопку "скрыть" меняется Bg и color icon

        btnHideMenuLeft.addEventListener("mouseover", () => {
          iconHideMenuLeft.forEach((iconHide) => {
            iconHide.style.fill = "#FF6600";
          });
        });
        btnHideMenuLeft.addEventListener("mouseout", () => {
          iconHideMenuLeft.forEach((iconHide) => {
            iconHide.style.fill = "#ffffff";
          });
        });

        // bg кнопки при ширине 49px

        listsMenuBg.forEach((list) => {
          list.style.backgroundColor = "#172139";
        });
        // при наведении на кнопки меняется Bg и color icon

        linkColorMenu.forEach((link) => {
          const linkIcon = link.querySelectorAll("svg path");
          for (let i = 0; i <= linkIcon.length; i++) {
            link.addEventListener("mouseover", () => {
              if (linkIcon[i]) linkIcon[i].style.fill = "#FF6600";
            });
            link.addEventListener("mouseout", () => {
              if (linkIcon[i]) linkIcon[i].style.fill = "#ffffff";
            });
          }
        });

        iconColorMenuActive.style.fill = "#FF6600";
      } else {
        setTimeout(() => {
          textHideMenuBtn.style.display = "block";
          text.style.display = "block";
        }, 300);
        blockHideMenu.style.maxWidth = "100%";
        if (propertyAside) propertyAside.style.maxWidth = "290px";
        if (contentAsideBlock) contentAsideBlock.style.display = "block";

        arrowHideMenuBtn.style.rotate = "0deg";
        iconColorMenu.forEach((icon) => {
          icon.style.fill = "#FF6600";
        });

        iconHideMenuLeft.forEach((iconHide) => {
          iconHide.style.fill = "#FF6600";
          console.log(iconHide);
        });

        listsMenuBg.forEach((list) => {
          list.style.backgroundColor = "#ffffff";
          if (list.classList.contains("active")) {
            list.style.backgroundColor = "#172139";
          }
          list.addEventListener("mouseover", () => {
            list.style.backgroundColor = "#172139";
          });
          list.addEventListener("mouseout", () => {
            list.style.backgroundColor = "#ffffff";
          });
        });

        linkColorMenu.forEach((link) => {
          link.classList.remove("width");
        });

        btnHideMenuLeft.style.backgroundColor = "#ffffff";

        btnHideMenuLeft.addEventListener("mouseover", () => {
          btnHideMenuLeft.style.backgroundColor = "#172139";
        });

        btnHideMenuLeft.addEventListener("mouseout", () => {
          btnHideMenuLeft.style.backgroundColor = "#ffffff";
        });

        iconColorMenuActive.style.fill = "#ffffff";

        iconHideMenuLeft.forEach((iconHide) => {
          iconHide.style.fill = "#FF6600";
        });
        window.location.reload();
      }
    });
  });

  // показ и открытие меню вверх

  const btnHideMenuTop = document.querySelector(".hide__menu-top");
  const blockViewMenuTop = document.querySelector(
    ".main__container-block__btns-box__view"
  );

  const blockViewMenuTopGap = document.querySelector(
    ".main__container-block__btns-box"
  );

  const mainContainerBlockCreate = document.querySelector(
    ".main__container-block__create"
  );

  const mainBlockSinchrBtn = document.querySelector(
    ".main__container-block__btns .sinchronizacion__btn"
  );

  const headerBlockSinchrBtn = document.querySelector(
    ".header__block-sinchr button"
  );

  const titleMain = document.getElementById("titleMain");
  const blockTitleMain = document.getElementById("blockTitleMain");
  const hideBtnTomMenu = document.getElementById("hideBtnTomMenu");
  const viewBlockMain = document.getElementById("viewBlockMain");

  btnHideMenuTop?.addEventListener("click", () => {
    blockViewMenuTop.classList.toggle("active");
    mainContainerBlockCreate.classList.toggle("active");
    if (blockViewMenuTop.classList.contains("active")) {
      blockViewMenuTopGap.style.gap = "0";
      blockViewMenuTopGap.style.marginBottom = "0";
      mainBlockSinchrBtn.style.display = "none";
      headerBlockSinchrBtn.style.opacity = "1";
      btnHideMenuTop.textContent = "Показать меню";
      if (blockTitleMain && hideBtnTomMenu) {
        blockTitleMain.appendChild(hideBtnTomMenu);
      } else {
        console.error(
          "Элемент для перемещения, целевой элемент или элемент-ссылка не найден."
        );
      }
      titleMain.style.marginBottom = "0";
    } else {
      blockViewMenuTopGap.style.gap = "20px";
      blockViewMenuTopGap.style.marginBottom = "25px";
      mainBlockSinchrBtn.style.display = "flex";
      btnHideMenuTop.textContent = "Скрыть меню";
      headerBlockSinchrBtn.style.opacity = "0";
      titleMain.style.marginBottom = "25px";
      if (viewBlockMain && hideBtnTomMenu) {
        viewBlockMain.appendChild(hideBtnTomMenu);
      } else {
        console.error(
          "Элемент для перемещения, целевой элемент или элемент-ссылка не найден."
        );
      }
    }
  });

  // aside scroll

  const btnsSelect = document.querySelectorAll(
    ".content__block-scrollbar__container-box__text"
  );

  const pageEmployeesDepartments = document.querySelector(
    ".employees-department"
  );

  const btnsDepartment = document.querySelectorAll(".btns__department");

  btnsSelect.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-select");
      const targetId = document.getElementById(target);
      const view = targetId.classList.contains("active");
      if (!view) {
        btn.classList.add("active");
        targetId.classList.add("active");
      } else {
        btn.classList.remove("active");
        targetId.classList.remove("active");
      }
      if (pageEmployeesDepartments) {
        btnsDepartment.forEach((btnDepartment, indexDepartment) => {
          const targetDepartment = btnDepartment.getAttribute(
            "data-btn-department"
          );
          if (target === targetDepartment) {
            btnDepartment.classList.toggle("active");
          }
        });
      }
    });
  });

  // открытие блока редактирования

  const btnActionsCheck = document.querySelector(
    ".main__container-block__actions-editing"
  );

  const blockActionsCheck = document.querySelector(
    ".main__container-block__actions-editing__box-popup"
  );

  const closePopupBtn = document.querySelector(
    ".main__container-block__actions-editing__box-popup__list-btn"
  );

  const notificationPage = document.querySelector(".notification__page");

  const btnsList = document.querySelectorAll(
    ".main__container-block__actions-editing__box-popup__list button"
  );

  const inputsAll = document.querySelectorAll(
    ".main__container-block__table-body .main__container-block__table-col__input"
  );

  const textContents = document.querySelectorAll(
    ".main__container-block__table-body .main__container-block__table-col__text"
  );

  const blockFooterTextDate = document.querySelector(".footer__texts-date");

  // Инициализация инпутов при загрузке страницы
  for (let i = 0; i < inputsAll.length; i++) {
    if (i < textContents.length) {
      inputsAll[i].value = textContents[i].innerHTML.replace(/ +/g, " ").trim();
    }
  }

  // Обработчик событий для изменения текста в параграфах
  inputsAll.forEach((input, index) => {
    input.addEventListener("input", () => {
      if (index < textContents.length) {
        textContents[index].innerHTML = input.value;
      }
    });
  });

  const selectSingleProperty = document.querySelectorAll(".__select");

  const rows = document.querySelectorAll(".main__container-block__table-row");

  const popupOverlay = document.querySelector(".popup-overlay");

  btnActionsCheck?.addEventListener("click", (e) => {
    btnActionsCheck.classList.toggle("active");
    blockActionsCheck.classList.toggle("active");

    if (notificationPage) {
      popupOverlay.classList.toggle("active");
    }

    if (blockActionsCheck.classList.contains("active")) {
      closePopup();
      blockFooterTextDate.style.display = "none";
    }
  });

  function closePopup() {
    closePopupBtn.addEventListener("click", () => {
      blockActionsCheck.classList.remove("active");
      btnActionsCheck.classList.remove("active");
      blockFooterTextDate.style.display = "flex";
      if (notificationPage) {
        popupOverlay.classList.remove("active");
      }
    });
  }

  // Обработчик события для кнопок в btnsList
  btnsList.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      blockActionsCheck.classList.remove("active");
      btnActionsCheck.classList.remove("active");
    });
  });

  // Функциональность по кнопкам попапа

  const btnsPopupAll = document.querySelectorAll(
    ".main__container-block__actions-editing__box-popup__list"
  );

  btnsPopupAll.forEach((btnPopup) => {
    btnPopup.addEventListener("click", () => {
      const dataTarger = btnPopup.getAttribute("data-btn");
      const btnId = document.getElementById(dataTarger);
      const btnIdAll = document.querySelectorAll(".footer__box");
      btnIdAll.forEach((btn) => {
        btn.style.display = "none";
      });
      if (btnId) btnId.style.display = "flex";

      if (dataTarger === "editLists") {
        rows.forEach((row, index) => {
          const checkbox = row.querySelector(".input__checkbox");
          const blockText = row.querySelectorAll(
            ".main__container-block__table-col p"
          );

          const blockEditing = row.querySelectorAll(".editing__block");

          if (checkbox.checked) {
            blockText.forEach((text) => {
              text.style.display = "none"; // Показываем текст для чекнутого блока
            });
            blockEditing.forEach((editing) => {
              editing.style.display = "block"; // Показываем текст для чекнутого блока
            });
          } else {
            blockText.forEach((text) => {
              text.style.display = "block"; // Скрываем текст для остальных блоков
            });
            blockEditing.forEach((editing) => {
              editing.style.display = "none"; // Показываем текст для чекнутого блока
            });
          }
        });
      }
    });
  });

  const btnSaveEditLists = document.querySelectorAll(".edit__lists-save");

  btnSaveEditLists.forEach((btn) => {
    btn.addEventListener("click", () => {
      rows.forEach((row) => {
        const blockText = row.querySelectorAll(
          ".main__container-block__table-col p"
        );
        const blockEditing = row.querySelectorAll(".editing__block");

        blockText.forEach((text) => {
          text.style.display = "block"; // Показываем текст для всех блоков при закрытии попапа
        });
        blockEditing.forEach((editing) => {
          editing.style.display = "none"; // Показываем текст для чекнутого блока
        });
      });
    });
  });
  // открытия селект количества показываемых имуществ

  const selectSingle = document.querySelector(
    ".main__container-block__actions-select"
  );
  const selectSingle_title = document.querySelector(
    ".main__container-block__actions-select__title"
  );

  const selectSingle_labels = document.querySelectorAll(
    ".main__container-block__actions-select__content-label"
  );

  const selectSingle_titleProperty =
    document.querySelectorAll(".__select__title");

  const selectSingle_labelsProperty =
    document.querySelectorAll(".__select__label");

  const selectProperty = document.querySelectorAll(".select__property");
  const selectPropertyTitle = document.querySelectorAll(
    ".select__property-title"
  );
  const selectPropertyLabel = document.querySelectorAll(
    ".select__property-label"
  );

  const arrSelectObj = [
    {
      select_single: selectSingle,
      select_title: selectSingle_title,
      content_label: selectSingle_labels,
    },
  ];

  const arrSelectObjProperty = [
    {
      select_single: selectSingleProperty,
      select_title: selectSingle_titleProperty,
      content_label: selectSingle_labelsProperty,
    },
    {
      select_single: selectProperty,
      select_title: selectPropertyTitle,
      content_label: selectPropertyLabel,
    },
  ];

  arrSelectObjProperty.forEach((selectProperty) => {
    for (let i = 0; i < selectProperty.select_single.length; i++) {
      selectFun(
        selectProperty.select_single[i],
        selectProperty.select_title[i],
        selectProperty.content_label
      );
    }
  });

  function selectFun(select_single, select_title, content_labels) {
    select_title?.addEventListener("click", () => {
      if ("active" === select_single.getAttribute("data-state")) {
        select_single.setAttribute("data-state", "");
        select_title.style.color = "";
        select_single.classList.toggle("active");
      } else {
        select_single.setAttribute("data-state", "active");
        select_title.style.color = "#ff6600";
        select_single.classList.toggle("active");
      }
    });

    // Закрытие при клике на опцию
    content_labels.forEach((label) => {
      label.addEventListener("click", (evt) => {
        select_title.textContent = evt.target.textContent;
        select_single.setAttribute("data-state", "");
      });
    });
  }

  // // Toggle menu
  arrSelectObj.forEach((select) => {
    selectFun(select.select_single, select.select_title, select.content_label);
  });

  //

  const checkboxAll = document.querySelectorAll(
    ".main__container-block__table-body .input__checkbox"
  );

  let checkboxFilter = document.querySelector(
    ".main__container-block__table-filter .input__checkbox"
  );

  const checkboxMinus = document.querySelector(
    ".main__container-block__table-filter__minus"
  );

  checkboxAll.forEach((checkbox) => {
    let checkboxesLength = checkboxAll.length;
    checkbox.addEventListener("change", function (event) {
      let countChecked = document.querySelectorAll(
        ".main__container-block__table-body .input__checkbox[type='checkbox']:checked"
      ).length;

      if (countChecked === checkboxesLength) {
        checkboxFilter.checked = true;
        checkboxMinus.style.display = "none";
      } else if (countChecked > 0) {
        checkboxMinus.style.display = "block";
        checkboxFilter.checked = false;
      } else if (countChecked === 0) {
        checkboxFilter.checked = false;
        checkboxMinus.style.display = "none";
      }
    });
  });

  checkboxFilter?.addEventListener("change", () => {
    if (checkboxFilter.checked) {
      checkboxMinus.style.display = "none";
    }
  });

  // выбрать все
  function checkAll() {
    checkboxAll.forEach((checkbox) => {
      if (checkbox !== checkboxFilter) {
        checkbox.checked = checkboxFilter.checked;
      }
    });
  }

  if (checkboxFilter) {
    checkboxFilter.addEventListener("click", checkAll);
  }

  const mainContainerBox = document.querySelector(".main__container-box");
  const headerBlockTitle = document.querySelector(".header__block-box h2");
  const mainEditContainerBox = document.querySelector(".main__edit");
  const headerBlockExit = document.querySelector(".header__block-exit__btns");
  const mainEditBlockStatuses = document.querySelector(
    ".main__edit .main__edit-block__statuses"
  );

  const headerBlockRedirect = document.querySelector(
    ".header__edit-scroll__block-redirect"
  );

  const arrMainBoxContainer = [
    {
      scrollContainer: mainContainerBox,
      blockView: headerBlockSinchrBtn,
    },
    {
      scrollContainer: mainEditContainerBox,
      blockView: headerBlockExit,
    },
  ];

  arrMainBoxContainer.forEach((mainBox) => {
    mainBox.scrollContainer?.addEventListener("scroll", (e) => {
      const scrollPosition = mainBox.scrollContainer.scrollTop;
      if (scrollPosition >= 100) {
        headerBlockTitle.style.opacity = "1";
        if (mainBox.blockView) mainBox.blockView.style.opacity = "1";
        if (mainBlockSinchrBtn) mainBlockSinchrBtn.style.display = "none";
        if (mainEditBlockStatuses) mainEditBlockStatuses.style.display = "none";
        if (headerBlockRedirect) headerBlockRedirect.style.display = "flex";
      } else if (scrollPosition === 0) {
        headerBlockTitle.style.opacity = "0";
        if (mainBox.blockView) mainBox.blockView.style.opacity = "0";
        if (mainBlockSinchrBtn) mainBlockSinchrBtn.style.display = "flex";
        if (mainEditBlockStatuses) mainEditBlockStatuses.style.display = "flex";
        if (headerBlockRedirect) headerBlockRedirect.style.display = "none";
      }
    });
  });

  const headerBlockRedirectLinks = document.querySelectorAll(
    ".header__edit-scroll__block-redirect a[href^='#']"
  );

  // Добавляем обработчик события scroll только один раз

  // Добавляем обработчик события клика по ссылке
  headerBlockRedirectLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const hrefId = document.querySelector(href);
    link.addEventListener("click", (event) => {
      event.preventDefault(); // предотвращаем стандартное действие ссылки
      if (hrefId) {
        hrefId.scrollIntoView({ behavior: "smooth" });
      }
    });

    mainEditContainerBox.addEventListener("scroll", () => {
      if (hrefId) {
        const targetPosition = hrefId.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Проверяем, находится ли элемент в видимой части экрана
        if (targetPosition < windowHeight) {
          headerBlockRedirectLinks.forEach((linkRemove) => {
            linkRemove.classList.remove("active");
          });
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      }
    });
  });

  const mainLabels = document.querySelectorAll(".main__label");
  mainLabels.forEach((label) => {
    const svg = label.querySelector("svg");
    const input = label.nextElementSibling;
    // Изначально проверяем значение input
    if (input.value === "" || input.value === "0") {
      if (svg) svg.style.display = "none";
    }

    // Добавляем обработчик событий для input
    input.addEventListener("input", () => {
      if (input.value === "" || input.value === "0") {
        svg.style.display = "none";
      } else {
        svg.style.display = "block";
      }
    });
  });

  // открытие попапов

  const arrBlockPopups = document.querySelectorAll(".popup");
  const btnAddField = document.querySelector(".btn__create-add__field");
  const btnCreateDepartment = document.querySelector(
    ".employees-department .btn__create"
  );
  const btnModal = document.querySelectorAll(".btn-modal");
  const btnEditDepartments = document.querySelectorAll(
    ".btns__department .btn__edit-department"
  );
  const btnsClose = document.querySelectorAll(".popup .btn__footer");

  const arrBtns = [{ btn: btnAddField }, { btn: btnCreateDepartment }];
  const arrViewPopup = [{ blockPopup: arrBlockPopups, btns: arrBtns }];
  const arrViewPopupEdit = [
    { blockPopup: arrBlockPopups, btns: btnModal },
    { btns: btnEditDepartments },
  ];

  arrViewPopup.forEach((popup) => {
    popup.btns.forEach((btn) => {
      btn.btn?.addEventListener("click", () => {
        const targetPopup = btn.btn.getAttribute("data-popup");
        const idPopup = document.getElementById(targetPopup);
        idPopup.classList.add("active");
        popupOverlay.classList.add("active");
      });
    });
  });

  arrViewPopupEdit.forEach((popup) => {
    popup.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetPopup = btn.getAttribute("data-popup");
        const idPopup = document.getElementById(targetPopup);
        idPopup.classList.add("active");
        popupOverlay.classList.add("active");
      });
    });
  });

  // закрытие попапа
  btnsClose.forEach((btnClose) => {
    const popupBlock = btnClose.closest(".popup");
    btnClose.addEventListener("click", () => {
      if (popupBlock.classList.contains("active")) {
        popupBlock.classList.remove("active");
        popupOverlay.classList.remove("active");
      }
    });
  });

  const btnsShowLists = document.querySelectorAll(
    ".inventory-create__volume-btns .footer__texts-doc"
  );

  btnsShowLists.forEach((btnShow) => {
    btnShow.addEventListener("click", () => {
      const dataLists = btnShow.getAttribute("data-lists");
      const idLists = document.getElementById(dataLists);
      const inventoryCreatePage = document.querySelector(".inventory__create");
      const inventoryCreateBtns = document.querySelector(
        ".inventory-create__volume .footer__box"
      );
      const btnSpan = btnShow.querySelector("span");
      const inventoryCreateBtnsFooter = document.getElementById("deleteVolume");
      idLists?.classList.toggle("active");
      if (inventoryCreatePage) {
        if (idLists.classList.contains("active")) {
          inventoryCreateBtns.style.display = "none";
          inventoryCreateBtnsFooter.style.display = "flex";
          btnSpan.textContent = "Скрыть список";
        } else {
          inventoryCreateBtns.style.display = "flex";
          inventoryCreateBtnsFooter.style.display = "none";
          btnSpan.textContent = "Показать список";
        }
      }
    });
  });

  const tds = document.querySelectorAll(".main__container-block__table-col");

  tds.forEach((td) => {
    td.style.minWidth = "50px";
  });

  const btnsHideInput = document.querySelectorAll(
    ".main__container-block__create-input__btn"
  );

  const btnsShowInput = document.querySelectorAll(".btn__show-input");
  btnsShowInput.forEach((btn) => {
    btn.addEventListener("click", () => {
      const dataShow = btn.getAttribute("data-btn-show");
      const dataShowBlock = document.querySelector(
        `[data-btn-show="${dataShow}"]`
      )?.parentElement;
      const idInput = document.getElementById(dataShow);
      idInput?.classList.toggle("active");
      if (idInput?.classList.contains("active")) {
        idInput.style.display = "block";
        dataShowBlock.style.display = "none";
      }
      btnsHideInput.forEach((btnHide) => {
        btnHide.addEventListener("click", () => {
          if (idInput) idInput.style.display = "none";
          if (dataShowBlock) dataShowBlock.style.display = "flex";
        });
      });
    });
  });
});
