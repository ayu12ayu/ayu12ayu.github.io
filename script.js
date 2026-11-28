'use strict';

// ページトップボタンを取得
const backToTopButton = document.getElementById('back-to-top');

// スクロールしたときの処理
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

// ボタンをクリックしたときの処理
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
console.log('JavaScript読み込み成功！');
