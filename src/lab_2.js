import { logProgression } from './log.js';

async function lab_2() {
  const _params = new URLSearchParams(window.location.search);
  const scheduleMemberProgressNo = _params.get('smProgressNo');

  const totalPageElement = document.querySelector('.total_page, .tPageNum');
  const totalPage = +totalPageElement?.innerHTML;

  for (let i = 1; i <= totalPage; ++i) {
    const response = await fetch(
      'https://safety.konkuk.ac.kr/ushm/edu/SetImgtechContents2019AfterVersionProcessUpdate',
      {
        method: 'POST',
        body: new URLSearchParams({
          scheduleMemberProgressNo,
          watchedpage: i,
          gapTime: 3600,
        }),
      },
    );

    logProgression(response.ok, i);
  }
}

export default lab_2;
