import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const hero = document.querySelectorAll('.hero');

const initAnimationHero = () => {
  gsap.config({nullTargetWarn: false});

  hero.forEach((heroElement) => {
    gsap.from(heroElement.querySelectorAll('.hero__img'), {
      scrollTrigger: {
        trigger: heroElement,
        start: 'top center',
      },
      scale: 0,
      opacity: 0,
      duration: 1,
    });
  });
};

export {initAnimationHero};
