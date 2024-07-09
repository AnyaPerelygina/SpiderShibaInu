const addToggleMenu = () => {
  const OPENED_CLASS = 'is-opened';
  const LINK_CLASS = '.nav__link';
  const BUTTON_CLASS = '.header__link';
  const root = document.querySelector('.header');
  const container = root.querySelector('.header__container');
  const toggle = root.querySelector('.toggle');
  const nav = root.querySelector('.nav__wrapper');
  const headerLink = root.querySelector(BUTTON_CLASS);

  const moveHeaderLink = () => {
    if (window.innerWidth < 1024 && !nav.contains(headerLink)) {
      nav.appendChild(headerLink);
    } else if (window.innerWidth > 1023 && nav.contains(headerLink)) {
      container.appendChild(headerLink);
      closeMenu();
    }
  };

  const onDocumentKeydown = (evt) => {
    if (evt.key === 'Escape') {
      closeMenu();
    }
  };

  const onLinkClick = (evt) => {
    if (evt.target.matches(LINK_CLASS) || evt.target.matches(BUTTON_CLASS)) {
      closeMenu();
    }
  };

  const isMenu = (evt) => {
    if ((evt.target.closest('.header') && evt.target.closest('.toggle')) || evt.target.closest('.nav__wrapper')) {
      evt.preventDefault();
    } else {
      closeMenu();
    }
  };

  const openMenu = () => {
    root.classList.add(OPENED_CLASS);
    toggle.classList.add(OPENED_CLASS);
    nav.classList.add(OPENED_CLASS);
    document.addEventListener('keydown', onDocumentKeydown);
    nav.addEventListener('click', onLinkClick);
    document.addEventListener('click', isMenu);
    window.scrollLock.disableScrolling();
    document.addEventListener('click', onDocumentOutside);
  };

  const closeMenu = () => {
    root.classList.remove(OPENED_CLASS);
    toggle.classList.remove(OPENED_CLASS);
    nav.classList.remove(OPENED_CLASS);
    document.removeEventListener('keydown', onDocumentKeydown);
    nav.removeEventListener('click', onLinkClick);
    document.removeEventListener('click', isMenu);
    window.scrollLock.enableScrolling();
    document.removeEventListener('click', onDocumentOutside);
  };

  const onDocumentOutside = (evt) => {
    if (
      (evt.target !== toggle && !toggle.contains(evt.target)) &&
      (evt.target !== nav && !nav.contains(evt.target))
    ) {
      closeMenu();
    }
  };

  toggle.addEventListener('click', () => {
    if (!toggle.classList.contains(OPENED_CLASS)) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  window.addEventListener('resize', moveHeaderLink);

  moveHeaderLink();
};

export {addToggleMenu};
