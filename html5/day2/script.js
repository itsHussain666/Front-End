const songs = [
    {
      title: "Tum se",
      file: "songs/song1.mp3"
    },
    {
      title: "Tu har lamha",
      file: "songs/song2.mp3"
    },
    {
      title: "Song 3",
      file: "songs/song3.mp3"
    },
    {
        title: "Song 4",
        file: "songs/song3.mp3"
      },
      {
        title: "Song 5",
        file: "songs/song3.mp3"
      }
  ];
  
  let currentIndex = 1;
  const audio = document.getElementById("audio");
  const title = document.getElementById("title");
  const volumeSlider = document.getElementById("volume");
  let list=document.getElementById("list")
function songplay(n){
currentIndex=n.id

    loadSong(currentIndex);
    audio.play();
    

}
  
  function loadSong(index) {
    const song = songs[index];
    title.textContent = song.title;
    audio.src = song.file;
  }
  
  function togglePlay() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  
  function nextSong() {
    currentIndex = (currentIndex + 1) % songs.length;
    
    loadSong(currentIndex);
    audio.play();
  }
  
  function prevSong() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadSong(currentIndex);
    audio.play();
  }
  
  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
  });
  
  // Load first song on page load
  loadSong(currentIndex);
  
