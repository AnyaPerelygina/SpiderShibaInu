const addToggleMenu = () => {
  const OPENED_CLASS = 'is-opened';
  const LINK_CLASS = '.nav__link';
  const BUTTON_CLASS = '.header__link';
  const root = document.querySelector('.header');
  const toggle = root.querySelector('.toggle');
  const nav = root.querySelector('.nav__wrapper');
  const headerLink = root.querySelector(BUTTON_CLASS);

  const moveHeaderLink = (matches) => {
    if (matches) {
      nav.appendChild(headerLink);
    }

    return;
  };

  const onDocumentKeydown = (evt) => {
    return evt.key === 'Escape' ? closeMenu() : null;
  };

  const onLinkClick = (evt) => {
    return evt.target.matches(LINK_CLASS) || evt.target.matches(BUTTON_CLASS) ? closeMenu() : null;
  };

  const isMenu = (evt) => {
    return (evt.target.closest('.header') && evt.target.closest('.toggle') || evt.target.closest('.nav__wrapper')) ? evt.preventDefault() : closeMenu();
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
    return !toggle.classList.contains(OPENED_CLASS) ? openMenu() : closeMenu();
  });

  const mediaQuery = window.matchMedia('(max-width: 1023px)');
  mediaQuery.addEventListener('change', (e) => moveHeaderLink(e.matches));
  moveHeaderLink(mediaQuery.matches);
};

export {addToggleMenu};
