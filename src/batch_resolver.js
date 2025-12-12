import { logProgression, logFinish } from './log';

function getVideos() {
  const table = document.querySelector('#divProgressInfList > table > tbody');
  const videos = [];

  for (const row of table.children) {
    if (row.className === 'edufireTableTop') continue;

    const td = row.lastElementChild;
    const input = td.lastElementChild;

    const functionString = input.getAttribute('onclick');
    const regex = /OpenContentView(Pop\w*)\((\d+)\)/;
    const match = functionString.match(regex);

    if (match) {
      const suffix = match[1]; // "Pop" 또는 "PopAvi"
      const id = Number(match[2]);

      videos.push({ suffix, id });
    }
  }

  return videos;
}

function processSingleVideo({ suffix, id }) {
  return new Promise((resolve) => {
    const url = `/ushm/edu/contentsView${suffix}.do?scheduleMemberProgressNo=${id}`;
    let child = window.open(url);

    let isScriptInjected = false;

    let checkLoad = setInterval(() => {
      if (child.closed) {
        clearInterval(checkLoad);
        resolve();
        return;
      }

      if (!isScriptInjected && child.document.readyState === 'complete') {
        child.window.__IS_AVI__ = suffix.includes('Avi');
        const script = child.document.createElement('script');
        script.type = 'module';
        script.src =
          'https://cdn.jsdelivr.net/gh/junepil/lab-safety@830e54e/dist/video_resolver.js';
        child.document.head.appendChild(script);
        isScriptInjected = true;
      }
    }, 500);
  });
}

async function processVideos(videos) {
  for (const video of videos) {
    await processSingleVideo(video);
    logProgression(true, video.id);
  }

  logFinish();
  setTimeout(() => {
    location.reload();
  }, 1000);
}

export { getVideos, processVideos };
