import lab_1 from './lab_1.js';
import lab_2 from './lab_2.js';

const _params = new URLSearchParams(window.location.search);

if (_params.get('scheduleMemberProgressNo')) {
  await lab_1();
} else {
  await lab_2();
}

setTimeout(() => {
  window.close();
}, 1000);
