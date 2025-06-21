const _params = new URLSearchParams(window.location.search);
const scheduleMemberProgressNo = _params.get("smProgressNo");

const totalPageElement = document.querySelector(".total_page");
const totalPage = +totalPageElement?.innerHTML;

for (let i = 1; i <= totalPage; ++i) {
  const response = await fetch(
    "https://safety.konkuk.ac.kr/ushm/edu/SetImgtechContents2019AfterVersionProcessUpdate",
    {
      method: "POST",
      body: new URLSearchParams({
        scheduleMemberProgressNo,
        watchedpage: i,
        gapTime: 3600,
      }),
    },
  );

  if (response.ok) {
    console.log(
      `%c${i}번째 영상 수강 처리 완료`,
      "background: green; border-radius: 8px; padding: 4px; font-style: bold;",
    );
  } else {
    console.log(
      `%c${i}번째 영상 수강 처리 실패`,
      "background: green; border-radius: 8px; padding: 4px; font-style: bold;",
    );
  }
}
