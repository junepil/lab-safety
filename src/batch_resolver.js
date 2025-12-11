import { logProgression } from './log';

function getVideos() {
  const table = document.querySelector('#divProgressInfList > table > tbody');
  const videos = [];

  for (const row of table.children) {
    if (row.className === 'edufireTableTop') continue;

    const td = row.lastElementChild;
    const input = td.lastElementChild;

    const functionString = input.getAttribute('onclick');
    const match = functionString.match(/OpenContentViewPop\((\d+)\)/);

    const videoId = Number(match[1]);
    videos.push(videoId);
  }

  return videos;
}

function processSingleVideo(video) {
  return new Promise((resolve) => {
    let child = window.open(
      `/ushm/edu/contentsViewPop.do?scheduleMemberProgressNo=${video}`,
    );

    let isScriptInjected = false;

    let checkLoad = setInterval(() => {
      if (child.closed) {
        clearInterval(checkLoad);
        logProgression(true, video); // 기존 로직
        resolve();
        return;
      }

      if (!isScriptInjected && child.document.readyState === 'complete') {
        const script = child.document.createElement('script');
        script.type = 'module';
        script.src =
          'https://cdn.jsdelivr.net/gh/junepil/lab-safety@batch-resolver/dist/video_resolver.js';
        child.document.head.appendChild(script);

        isScriptInjected = true;
      }
    }, 500);
  });
}

async function processVideos(videos) {
  for (const video of videos) {
    console.log(`Video ${video} 처리 시작...`);

    await processSingleVideo(video);

    console.log(`Video ${video} 처리 완료.`);
  }
  console.log('모든 비디오 처리 완료!');
}

export { getVideos, processVideos };
