import lab_1 from './lab_1.js';
import lab_2 from './lab_2.js';

if (window.__IS_AVI__) {
  await lab_1();
} else {
  await lab_2();
}

// setTimeout(() => {
//   window.close();
// }, 2000);
