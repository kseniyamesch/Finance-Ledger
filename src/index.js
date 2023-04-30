// Smooth scroll

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


  // Form validation 

  const form = document.querySelector('.contact-form');
  const formBtn = document.querySelector('.form-btn');
  const formValue = document.querySelector('.form-input').value;
const warning = document.querySelector('.form-text');
  
  form.addEventListener ('submit', handleFormSubmit)

  function handleFormSubmit (evt) {
    evt.preventDefault();

if(!evt.currentTarget.elements.email.value) {
warning.classList.add('visible');
} else {
  warning.classList.remove('visible');
  warning.classList.add('invisible');
}
    console.dir(evt.currentTarget.elements);
  }