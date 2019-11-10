//画布设置+变量
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Github用户anthonydelgado创建的Emoji数组: https://gist.github.com/anthonydelgado/528d1fab9242067348c0ac25f873d7f0
var emojiArray = ["✌", "😂", "😝", "😁", "😱", "👉", "🙌", "🍻", "🔥", "🌈", "☀", "🎈", "🌹", "💄", "🎀", "⚽", "🎾", "🏁", "😡", "👿", "🐻", "🐶", "🐬", "🐟", "🍀", "👀", "🚗", "🍎", "💝", "💙", "👌", "❤", "😍", "😉", "😓", "😳", "💪", "💩", "🍸", "🔑", "💖", "🌟", "🎉", "🌺", "🎶", "👠", "🏈", "⚾", "🏆", "👽", "💀", "🐵", "🐮", "🐩", "🐎", "💣", "👃", "👂", "🍓", "💘", "💜", "👊", "💋", "😘", "😜", "😵", "🙏", "👋", "🚽", "💃", "💎", "🚀", "🌙", "🎁", "⛄", "🌊", "⛵", "🏀", "🎱", "💰", "👶", "👸", "🐰", "🐷", "🐍", "🐫", "🔫", "👄", "🚲", "🍉", "💛", "💚"]
var xPositions = [window.innerWidth / 2, window.innerWidth / 4, window.innerWidth / 4 * 3, window.innerWidth / 8, window.innerWidth / 8 * 7];
var yPositions = [0, 0, 0, 0, 0];
var arrayOfCurrentEmojis = [];

// 核心表情功能 
var emojiDrops = function() {
     ctx.font = '30px serif';
     for (var i = 0; i < xPositions.length; i++) {
          arrayOfCurrentEmojis.push(emojiArray[Math.floor((Math.random() * emojiArray.length - 1) + 1)]);
          ctx.fillText(arrayOfCurrentEmojis[i], xPositions[i], yPositions[i]);

          // 这将使每个表情符号以随机的速度移动，因此看起来更逼真
          yPositions[i] += Math.floor((Math.random() * 5) + 2);

          // 如果任何表情符号到达结尾，它将返回顶部 
          for (var k = 0; k < yPositions.length; k++) {
               if (yPositions[k] >= window.innerHeight) {
                    yPositions[k] = 0;
               }
          }
     }
};

// 初始化;
function draw() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
     emojiDrops();
	//用来在页面重绘之前，通知浏览器调用一个指定的函数，以满足开发者操作动画的需求。
     window.requestAnimationFrame(draw);
}
draw();

// 鼠标事件
document.getElementById("canvas").addEventListener("click", function(event) {
     xPositions.push(event.pageX);
     yPositions.push(event.pageY);
}, false);
