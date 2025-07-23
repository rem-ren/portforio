// スライドショー画像のみ取得
const images = document.querySelectorAll('.slider-container .image-container img');

// ナビゲーションコンテナ
const navContainer = document.querySelector('.nav-container');

// 画像の総数
const totalImages = images.length;

// 表示する画像を指定するインデックス
let imageIndex = 0;

// タイマー
let interval;

// 新しいボタン要素を作成
const button = document.createElement('button');

// 新しく作成したボタンにクラスを追加
button.classList.add('nav-btn');

// 新しく作成したボタンをナビゲーションコンテナに追加
//navContainer.appendChild(button);

// 画像と同じ数のボタンを作成
for (let i = 0; i < totalImages; i++) {
    const button = document.createElement('button');
    button.classList.add('nav-btn');
    navContainer.appendChild(button);
}

// すべてのボタンをまとめて取得
const buttons = document.querySelectorAll('.nav-btn');

// すべてのボタンにクリックイベントを追加
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        imageIndex = index;
        updateSlider();
        resetInterval();
    });
});

// 画像とボタンの更新
function updateSlider() {
    // すべての画像から 'image-active' クラスを削除
    images.forEach(image => {
        image.classList.remove('image-active');
    });

    // すべてのボタンから 'button-active' クラスを削除
    buttons.forEach(button => {
        button.classList.remove('btn-active');
    });

    // 表示する画像を変数imageIndexで指定して 'image-active' クラスを追加
    images[imageIndex].classList.add('image-active');

    // 色を変えるボタンを変数imageIndexで指定して 'btn-active' クラスを追加
    buttons[imageIndex].classList.add('btn-active');
}


// 次の画像を指定して表示
function nextImage() {
    imageIndex++;
    if (imageIndex > totalImages-1) {
        imageIndex = 0;
    }
    updateSlider();
}

// 次の画像へ自動再生
function autoplay() {
    interval = setInterval(nextImage, 3000);
}

// 自動再生を一時停止してから再び再生
function resetInterval() {
    clearInterval(interval);
    autoplay();
}

// スライドショーを開始
autoplay();
updateSlider();

// 左右矢印ボタンの取得
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// 左矢印クリックで前の画像
leftArrow.addEventListener('click', () => {
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex = totalImages - 1;
    }
    updateSlider();
    resetInterval();
});

// 右矢印クリックで次の画像
rightArrow.addEventListener('click', () => {
    imageIndex++;
    if (imageIndex > totalImages - 1) {
        imageIndex = 0;
    }
    updateSlider();
    resetInterval();
});

