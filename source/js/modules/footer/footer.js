import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const footer = document.querySelectorAll('.footer');

const initAnimationFooter = () => {
  gsap.config({nullTargetWarn: false});

  footer.forEach((footerElement) => {
    gsap.from(footerElement.querySelector('.footer__title'), {
      scrollTrigger: {
        trigger: footerElement,
        start: 'top center',
      },
      y: 20,
      opacity: 0,
      duration: 1,
    });

    gsap.from(footerElement.querySelector('.footer__img'), {
      scrollTrigger: {
        trigger: footerElement,
        start: 'top center',
      },
      scale: 0,
      opacity: 0,
      duration: 1,
    });
  });
};

export {initAnimationFooter};
