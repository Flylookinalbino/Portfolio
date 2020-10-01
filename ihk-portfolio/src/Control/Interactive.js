// function animate(id, removeProperty, changeProperty) {
//   console.log(document.querySelector(`#${id}`));
//   document.querySelector(`#${id}`).classList.remove(`${removeProperty}`);
//   document.querySelector(`#${id}`).classList.toggle(`${changeProperty}`);
// }

export function FadeIn() {
  console.log('Entered FadeIn');
  document.querySelector('#show').classList.remove('hidden');
  document.querySelectorAll('.main')[0].classList.add('domFadeIn');
  document
    .querySelectorAll('.main')[1]
    .firstElementChild.classList.add('navFlyIn');
  // console.log(document.querySelectorAll('.main')[1].firstElementChild);
}
export function FadeOut() {
  console.log('Entered FadeOut');
  document.querySelectorAll('.main')[0].classList.add('domFadeOut');
  document
    .querySelectorAll('.main')[1]
    .firstElementChild.classList.add('navFlyOut');
  // console.log(document.querySelectorAll('.main')[1].firstElementChild);
}
export function checkAnimation() {
  // console.log(document.querySelector('.main').classList);
  if (
    document.querySelectorAll('.main')[0].classList.contains('domFadeOut') &&
    document
      .querySelectorAll('.main')[1]
      .firstElementChild.classList.contains('navFlyOut')
  ) {
    document.querySelector('#show').classList.add('hidden');
    document.querySelectorAll('.main')[0].classList.remove('domFadeOut');
    document
      .querySelectorAll('.main')[1]
      .firstElementChild.classList.remove('navFlyOut');
    // console.log(document.querySelectorAll('.main')[1].firstElementChild);
  } else {
    document.querySelectorAll('.main')[0].classList.remove('domFadeIn');
    document
      .querySelectorAll('.main')[1]
      .firstElementChild.classList.remove('navFlyIn');
    // console.log(document.querySelectorAll('.main')[1].firstElementChild);
  }
}

export function flipCard(e) {
  var card =
    e.target.parentElement.tagName === 'LI'
      ? e.target.parentElement.parentElement.parentElement.parentElement
      : e.target.parentElement;
  card.classList.toggle('flipper-is-flipped');
}
