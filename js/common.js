// 검색창 클릭시 가로사이즈 추가
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input'); 

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// 카피라이트 부분에 현재 연도 자동 기입
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();