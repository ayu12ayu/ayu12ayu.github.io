'use strict';

// ページトップボタンを取得
const backToTopButton = document.getElementById('back-to-top');

// スクロール位置に応じてボタンを表示・非表示にする
function toggleBackToTopButton() {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

// スクロール時に実行
window.addEventListener('scroll', toggleBackToTopButton);

// ページ読み込み時にも状態を確認
toggleBackToTopButton();

// ボタンをクリックしたときの処理
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
