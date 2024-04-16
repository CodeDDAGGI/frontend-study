const searchUI = document.querySelector('.search');
const searchInput = document.querySelector('input');
const icon = document.querySelector('.material-symbols-outlined');

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

// 
//