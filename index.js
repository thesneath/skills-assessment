const dropdown = document.querySelector('#dropdown');
const email = document.querySelectorAll('.email');
const phone = document.querySelectorAll('.phone');

dropdown.addEventListener('change', () => {

  if(dropdown.value === 'email') {
    email.forEach(item => {
      item.classList.remove('hide')
    })
    phone.forEach(item => {
      item.classList.add('hide')
    })
  };
  if(dropdown.value === 'phone') {
    email.forEach(item => {
      item.classList.add('hide')
    })
    phone.forEach(item => {
      item.classList.remove('hide')
    })
  }
})

