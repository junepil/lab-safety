async function lab_1() {
  const params = new URLSearchParams(window.location.search);
  const scheduleMemberProgressNo = params.get("scheduleMemberProgressNo");

  const response = await fetch(
    "https://safety.konkuk.ac.kr/ushm/edu/contentsViewAviProcessCheckSub",
    {
      method: "POST",
      body: new URLSearchParams({
        scheduleMemberProgressNo,
        currentTime: "23",
        isEnd: "true",
        isMobile: "false",
      }),
    },
  );

  if (response.ok) {
    console.log(
      "%c수강 처리 완료",
      "background: green; border-radius: 8px; padding: 4px; font-style: bold;",
    );
  } else {
    console.log(
      "%c수강 처리 실패",
      "background: green; border-radius: 8px; padding: 4px; font-style: bold;",
    );
  }
}

export default lab_1;
