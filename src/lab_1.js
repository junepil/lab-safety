import {logProgression} from "./log.js";

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

  logProgression(response.ok);
}

export default lab_1;
