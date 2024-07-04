import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const playToEarn = document.querySelector('.play-to-earn');
const playToEarnTitle = document.querySelectorAll('[data-title="title"]');
const playToEarnDescription = document.querySelectorAll('[data-description="description"]');
const playToEarnCard = document.querySelectorAll('[data-component="card"]');
const playToEarnImg = document.querySelectorAll('[data-image="card-image"]');
const playToEarnSubtitle = document.querySelectorAll('[data-subtitle="subtitle"]');
const playToEarnText = document.querySelectorAll('[data-text="text"]');

const initAnimationPlayToEarn = () => {
  gsap.from(playToEarnTitle, {
    scrollTrigger: {
      trigger: playToEarn,
      start: 'top center',
    },
    y: 20,
    opacity: 0,
    duration: 1,
  });

  gsap.from(playToEarnDescription, {
    scrollTrigger: {
      trigger: playToEarn,
      start: 'top center',
    },
    y: 20,
    opacity: 0,
    duration: 1,
  });

  gsap.from(playToEarnCard, {
    scrollTrigger: {
      trigger: playToEarnCard,
      start: 'top center',
    },
    scale: 0,
    opacity: 0,
    duration: 1,
  });

  gsap.from(playToEarnImg, {
    scrollTrigger: {
      trigger: playToEarnCard,
      start: 'top center',
    },
    scale: 0,
    opacity: 0,
    duration: 1,
  });

  gsap.from(playToEarnSubtitle, {
    scrollTrigger: {
      trigger: playToEarnCard,
      start: 'top center',
    },
    y: 20,
    opacity: 0,
    duration: 1,
  });

  gsap.from(playToEarnText, {
    scrollTrigger: {
      trigger: playToEarnCard,
      start: 'top center',
    },
    y: 20,
    opacity: 0,
    duration: 1,
  });
};

export {initAnimationPlayToEarn};
