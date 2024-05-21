
const searchUI = document.querySelector('.search');
const searchInput = document.querySelector('input');
const icon = document.querySelector('.material-symbols-outlined');
const navItem = document.querySelector('li');

searchUI.addEventListener('click',function(){
    searchInput.focus();
});

searchInput.addEventListener('focus',function(){
    searchUI.classList.add('focused');
    searchInput.setAttribute('placeholder', '통합검색');
    icon.style.opacity = '0';
});

// blur : 포커스를 잃었을때 이벤트
searchInput.addEventListener('blur',function(){
    searchUI.classList.add('focused');
    searchInput.setAttribute('placeholder', '');
    icon.style.opacity = '1';
});


document.addEventListener('DOMContentLoaded', function () {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('mouseenter', function () {
      const targetId = this.getAttribute('data-target');
      const dropdown = document.getElementById(targetId);
      dropdown.style.display = 'grid';
    });

    toggle.addEventListener('mouseleave', function () {
      const targetId = this.getAttribute('data-target');
      const dropdown = document.getElementById(targetId);
      dropdown.style.display = 'none';
    });
  });

  const dropdowns = document.querySelectorAll('.dropdown-content');

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', function () {
      this.style.display = 'grid';
    });

    dropdown.addEventListener('mouseleave', function () {
      this.style.display = 'none';
    });
  });
});





// 
//