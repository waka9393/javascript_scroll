// JavaScript

//実行する機能
const show = (entries) => {
//console.log(entries[0].target);
const keyframes = {
    opacity: [0, 1],
    translate: ['200px 0',0]
  }
  entries[0].target.animate(keyframes,600);
}

//監視機能の設置
const observer = new IntersectionObserver(show);

//監視対象の指示
observer.observe(document.querySelector('#img01'));