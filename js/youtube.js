// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// 함수 이름은 절대 바꾸면 안됨!!!
function onYouTubeIframeAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 최초 재생한 유튜브 영상 ID
    playerVars: {
      autoplay: true,
      loop: true,
      playList: 'An6LvWQuj_8'
    },
    events: {
      onReady: function (event) {
        event.target.mute()
      }
    }
  });
}