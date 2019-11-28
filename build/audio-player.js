const assetUrl = 'http://localhost:8080';

let lastId = null;
let fileIndex = null;
let currentTrack = null;
let playerCurrentTime = undefined;

const playSymbol = "►";
const pauseSymbol = "❙❙";

// player components
const playerTitle = document.getElementById('player-title');
const playButton = document.getElementById('play-button');
const timeString = document.getElementById('current-time');
const progressBar = document.getElementById('progress');
const timeLine = document.getElementById('time-line');
const playlist = document.querySelector('.playlist');

const audioTag = document.createElement('audio');

// set default
playButton.textContent = playSymbol;

function getFileIndex() {
  const hash = Date.now();
  return fetch(`${assetUrl}/audio/index.json?v=${hash}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    });
}

function onPlayerEnded() {
  playButton.textContent = playSymbol;
  playerCurrentTime = undefined;
  audioTag.currentTime = 0;
}

function stopPlayback() {
  audioTag.removeEventListener('ended', onPlayerEnded, false);
  playButton.textContent = playSymbol;
  audioTag.pause();

  return Promise.resolve();
}

function startPlayback(item) {
  if (!fileIndex) {
    playButton.textContent = ":(";
    return;
  }

  currentTrack = item;

  const audioUrl = fileIndex[item.id].url;

  audioTag.src = audioUrl;
  audioTag.controls = false;
  audioTag.crossOrigin = 'anonymous';

  if (playerCurrentTime !== undefined) {
    audioTag.currentTime = playerCurrentTime;
  } else {
    audioTag.currentTime = 0;
  }

  audioTag.addEventListener('ended', onPlayerEnded, false);

  const playPromise = audioTag.play();
  const onPlay = () => { lastId = item.id; };

  if (playPromise) {
    return playPromise
      .then(onPlay)
      .catch(err => {
        playButton.textContent = ":(";
      });
  } else {
    // iOS 10
    onPlay();
    return Promise.resolve();
  }
}

function playAudio(item) {
  playerCurrentTime = audioTag.currentTime;
  playerTitle.textContent = item.name;

  if (audioTag.paused) { // no playback
    if (item.id !== lastId) {
      playerCurrentTime = undefined;
    }
    return startPlayback(item);
  } else if (!audioTag.paused && item.id !== lastId) { // switch track from playlist
    stopPlayback();
    playerCurrentTime = undefined;
    return startPlayback(item);
  } else { // paused
    return stopPlayback();
  }
}

function audioEvents() {
  audioTag.addEventListener('play', () => {
    playButton.textContent = pauseSymbol;
  }, false);

  audioTag.addEventListener('pause', () => {
    playButton.textContent = playSymbol;
  }, false);

  audioTag.addEventListener('timeupdate', () => {
    const t = audioTag.currentTime;
    const progress = t / audioTag.duration * 100;

    progressBar.style.width = '' + progress + '%';

    const time = new Date(t * 1000).toISOString().substr(11, 8);
    timeString.textContent = time;
  }, false);
}

function uiEvents() {
  // attach transport event listeners
  playButton.addEventListener('click', () => {
    playAudio(currentTrack);
  }, false);

  timeLine.addEventListener('click', (event) => {
    function scrub() {
      const pos = Math.max(0, (event.clientX - timeLine.offsetLeft) / timeLine.offsetWidth);

      progressBar.style.width = '' + (pos * 100.0) + '%';
      audioTag.currentTime = pos * audioTag.duration;
    }

    if (lastId === null) { // first time
      playAudio(currentTrack).then(scrub);
    } else {
      scrub();
      if (audioTag.paused) {
        playAudio(currentTrack)
      }
    }
  }, false);
}

function addEventListeners() {
  audioEvents();
  uiEvents();
}

function parseDuration(duration) {
  const date = new Date(null);
  date.setSeconds(duration);
  return date.toISOString().substr(11, 8);
}

getFileIndex()
  .then(index => {
    if (Object.keys(index).length === 0) {
      throw new Error('Empty index file');
    }

    fileIndex = index; // save index

    const sortedFiles = [];

    for (const key in index) {
      sortedFiles.push([key, index[key]]);
    }

    // sort by mtime
    sortedFiles.sort((a, b) => {
      const date1 = new Date(a[1].dateModified);
      const date2 = new Date(b[1].dateModified);
      return date1 - date2;
    });

    sortedFiles.forEach((entry, i) => {
      const [id, object] = entry;
      const item = Object.assign({}, object, { id });
      const {
        name,
        duration,
        dateModified,
      } = item;

      // save first track
      if (i === 0) {
        currentTrack = item;
      }

      const displayName = document.createElement('li');

      const durationString = new Date(duration * 1000)
        .toISOString()
        .substr(11, 8);

      const title = document.createElement('div');
      const dur = document.createElement('div');

      title.textContent = name;
      dur.textContent = durationString;

      displayName.appendChild(title);
      displayName.appendChild(dur);
      displayName.classList.add('playlist-item')

      if (i === 0) {
        displayName.classList.add('selected');
      }

      displayName.addEventListener('click', () => {
        playAudio(item);

        Array.from(playlist.children).forEach(listItem => {
          listItem.classList.remove('selected');
        });
        displayName.classList.add('selected');
      }, false);

      playlist.appendChild(displayName);
    });

    // display first track
    playerTitle.textContent = currentTrack.name;
    addEventListeners();
  })
  .catch(err => console.error(err));
