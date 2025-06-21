function createLog(success, index = null) {
  let message = "%c";

  if (index) {
    message += `${index}번째 영상 `;
  }

  if (success) {
    console.log(
      message + "수강 처리 완료",
      "background: green; border-radius: 8px; padding: 4px; font-style: bold;",
    );
  } else {
    console.log(
      message + "수강 처리 실패",
      "background: green; border-radius: 8px; padding: 4px; font-style: bold;",
    );
  }
}

export default createLog;
