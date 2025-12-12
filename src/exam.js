const user = Number(
  document
    .querySelector(
      '#divOnLineEduList > table > tbody > tr:first-child > td > input:last-child',
    )
    .getAttribute('value'),
);
const url = 'https://safety.konkuk.ac.kr/ushm/edu/examSendSub.do';
const payload = `scheduleMemberNo=${user}&contentQuestionNos=35466&answers%5B0%5D=1&contentQuestionNos=35445&answers%5B1%5D=4&contentQuestionNos=35448&answers%5B2%5D=1&contentQuestionNos=33632&answers%5B3%5D=3&contentQuestionNos=33909&answers%5B4%5D=1&contentQuestionNos=34009&answers%5B5%5D=4&contentQuestionNos=34021&answers%5B6%5D=2&contentQuestionNos=35403&answers%5B7%5D=4&contentQuestionNos=34065&answers%5B8%5D=2&contentQuestionNos=35296&answers%5B9%5D=4`;

await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
  body: payload,
});
