const swiper1 = new Swiper('.swiper1', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'fade', //追加 フェード機能をONにする
  fadeEffect: {//ここにオプションを指定します。
    crossFade: true
  },
  speed: 4500,
  autoplay: {
    delay: 6000,
    pauseOnMouseEnter: true,        // 追記
    disableOnInteraction: false,
  },


  on: {
    slideChange: function () {


      // bird-fly クラスの追加/削除
      const birdWings = document.querySelectorAll('.bird-wing');

      birdWings.forEach((birdWing) => {
        birdWing.classList.add('bird-fly');

        setTimeout(() => {
          birdWing.classList.remove('bird-fly');
        }, 3200);
      });

    },

  }
});

var slide = document.querySelector('.bird');
var swiperAll = document.querySelector('.swiper-all');
var newHeight = swiperAll.clientHeight + 30; // .swiper-allの高さに40pxを追加
slide.style.height = newHeight + 'px';

const swiper2 = new Swiper('.swiper2', {
  loop: true,


  speed: 2000,
  autoplay: {
    delay: 1000,

  }

});


document.addEventListener("DOMContentLoaded", function () {
  const messages = document.querySelectorAll(".x-bubble .message");
  let currentIndex = 0;

  function switchMessages() {
    // すべてのメッセージを非表示にする
    messages.forEach(message => {
      message.classList.remove("active");
    });

    // 現在のメッセージを表示
    messages[currentIndex].classList.add("active");

    // 次のメッセージに移動
    currentIndex = (currentIndex + 1) % messages.length; // 0 と 1 の間を循環
  }

  // 初期表示
  switchMessages();

  // 30秒ごとにメッセージを切り替える
  setInterval(switchMessages, 7000); // 30000ミリ秒 = 30秒
});




const element1 = document.querySelector('.move1'); // "move"クラスを持つ要素を取得します
element1.animate(
  [
    { transform: 'translateX(0%) translateY(0%) rotate(0deg) ' },
    { transform: 'translateX(100%) translateY(50%) rotate(180deg) ' },
    { transform: 'translateX(40%) translateY(270%) rotate(40deg) ' },
    { transform: 'translateX(0%) translateY(0%) rotate(360deg) ' }
  ],
  {
    duration: 15000,
    easing: 'linear',
    iterations: Infinity
  }
);

const element2 = document.querySelector('.move2');
element2.animate(
  [
    { transform: 'translateX(95%) translateY(250%) rotate(120deg) ' },
    { transform: 'translateX(0%) translateY(180%) rotate(50deg) ' },
    { transform: 'translateX(70%) translateY(0%) rotate(290deg) ' },
    { transform: 'translateX(95%) translateY(250%) rotate(480deg) ' }
  ],
  {
    duration: 11000,
    easing: 'linear',
    iterations: Infinity
  }
);

const element3 = document.querySelector('.move3');
element3.animate(
  [
    { transform: 'translateX(55%) translateY(140%) rotate(270deg) ' },
    { transform: 'translateX(50%) translateY(300%) rotate(330deg) ' },
    { transform: 'translateX(20%) translateY(5%) rotate(560deg) ' },
    { transform: 'translateX(55%) translateY(140%) rotate(630deg) ' }
  ],
  {
    duration: 16000,
    easing: 'linear',
    iterations: Infinity
  }
);

const element4 = document.querySelector('.move4');
element4.animate(
  [
    { transform: 'translateX(0%) translateY(180%) rotate(360deg) ' },
    { transform: 'translateX(40%) translateY(170%) rotate(200deg) ' },
    { transform: 'translateX(100%) translateY(210%) rotate(100deg) ' },
    { transform: 'translateX(0px) translateY(180%) rotate(0deg) ' }
  ],
  {
    duration: 16000,
    easing: 'linear',
    iterations: Infinity
  }
);

function toggleClass() {
  const entry = document.querySelector('.entry'); // 'entry' クラスの要素を取得

  // 4秒間 'write' クラスを追加
  entry.classList.add('write');

  // 4秒後にクラスを削除して、1秒間インターバル
  setTimeout(() => {
    entry.classList.remove('write'); // クラスをリセット
  }, 4000); // 4秒後にリセット

}

// 5秒ごとにクラスの追加を繰り返す
setInterval(toggleClass, 5000); // 5秒間隔で繰り返し

