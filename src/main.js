import lab_1 from './lab_1.js';
import lab_2 from './lab_2.js';
import { logExit } from './log.js';

const _params = new URLSearchParams(window.location.search);

if (_params.get('scheduleMemberProgressNo')) {
  await lab_1();
} else {
  await lab_2();
}

logExit();

setTimeout(() => {
  window.close();
}, 1000);
