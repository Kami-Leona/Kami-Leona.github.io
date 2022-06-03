var words=[
    '盒马鲜生的麻薯',
    '宫廷糕点铺的椒盐小酥饼',
    '二荆条火锅的毛肚',
    '甜九九的奥利奥毛巾卷',
    '二荆条火锅的黑豆腐',
    '零糖可口可乐',
    '杨枝甘露',
    '亲妈做的清汤小面',
    '醪糟小汤圆',
    '蒜香小排骨',
    '台湾风味米饼（芝士味）',
    '肥肠鱼',
    '干锅排骨虾',
    '麻辣耗儿鱼',
    '自贡跳水美蛙',
    '北海道日本料理'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let text = document.querySelector('.text').querySelector('h1');
      setTimeout(function(){
        textone.innerHTML = '欢迎来到kami-leona的主页';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          text.innerHTML = '';
      },28000)


 
