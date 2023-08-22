const image = document.getElementById("cover"),
      title = document.getElementById("song-title"),
      artist = document.getElementById("song-artist"),
      prevBtn = document.getElementById("prev-button"),
      playBtn = document.getElementById("play-button"),
      nextBtn = document.getElementById("next-button"),
      background = document.getElementById("bg-img");

const music = new Audio();

const songs = [
  {
    path: 'assets/audio/belenggu.mp3',
    displayName: 'Belenggu',
    cover: 'assets/img/amigdala-art-work.png',
    artist: 'Amigdala - Belenggu',
  },
  {
    path: 'assets/audio/kembalipulang.mp3',
    displayName: 'Kembali Pulang',
    cover: 'assets/img/febyputri.jpg',
    artist: 'Feby Putri - Kembali Pulang',
  },
  {
    path: 'assets/audio/kaurumahku.mp3',
    displayName: 'Kau Rumahku',
    cover: 'assets/img/raisaanggiani.jpeg',
    artist: 'raisa anggiani - Kau Rumahku',
  }
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
  if(isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function playMusic() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

function pauseMusic() {
  isPlaying = false;
  // Change pause button icon
  playBtn.classList.replace('fa-pause', 'fa-play');
  // Set button hover title
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

function loadMusic(song) {
  music.src = song.path;
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  image.src = song.cover;
  background.src = song.cover;
}

function changeMusic(direction) {
  musicIndex = (musicIndex + direction + songs.length) % songs.length;
  loadMusic(songs[musicIndex]);
  playMusic();
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));

loadMusic(songs[musicIndex]);