import lab_1 from './lab_1.js';
import lab_2 from './lab_2.js';

const _params = new URLSearchParams(window.location.search);

async function resolveVideo() {
  if (_params.get('scheduleMemberProgressNo')) {
    await lab_1();
  } else {
    await lab_2();
  }

  window.close();
}

export default resolveVideo;
