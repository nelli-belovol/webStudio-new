const refs = {
  btnAll: document.getElementById('btnAll'),
  btnWebSite: document.getElementById('btnWebSite'),
  btnApp: document.getElementById('btnApp'),
  btnDesign: document.getElementById('btnDesign'),
  btnMarketing: document.getElementById('btnMarketing'),
  controls: document.querySelector('.controls__item'),
  listBtn: document.querySelector('.controls'),
  nav: document.querySelector('.nav__menu'),
}

refs.nav.addEventListener('click', e => {
  console.log(e.target)
  //   e.target.classList.toggle('filter__btn--active')
})

// console.log(refs.nav)
