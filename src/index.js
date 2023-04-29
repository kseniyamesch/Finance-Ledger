import './js/modernizr-custom';

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

window.addEventListener('scroll', function() {
    if (pageYOffset > 50) {
      document.querySelector('.header').classList.add('active')
    } else {
      document.querySelector('.header').classList.remove('active')
    }
  })