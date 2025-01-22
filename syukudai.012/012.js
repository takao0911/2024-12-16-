const btn = document.getElementById('btn');
const text = document.getElementById('text');


btn.addEventListener('click', () => {
     text.textContent ="処理中";


    setTimeout(() => {
        text.textContent = "処理が完了しました";
    }, 2000);
})