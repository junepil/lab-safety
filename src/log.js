function _useMessage(payload) {
  return `%c${payload}`;
}

function _useLog(message, style) {
  let color = '';

  switch (style) {
    case 'success':
      color = 'green';
      break;
    case 'fail':
      color = 'red';
      break;
    case 'info':
      color = 'blue';
      break;
  }

  const styleString = `background: ${color}; border-radius: 8px; padding: 4px; font-style: bold;`;
  console.log(message, styleString);
}

function logProgression(success, index = null) {
  const result = success ? '수강 처리 완료' : '수강 처리 실패';
  const message = _useMessage(`${index} ${result}`);

  if (success) {
    _useLog(message, 'success');
  } else {
    _useLog(message, 'fail');
  }
}

function logFinish() {
  const message = _useMessage('안전교육 학습이 종료됐어요 😎');

  _useLog(message, 'info');
}

export { logProgression, logFinish };
