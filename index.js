import lab_1 from "./lab_1";
import lab_2 from "./lab_2";

const _params = new URLSearchParams(window.location.search);

if (_params.get("scheduleMemberProgressNo")) {
  await lab_1();
} else {
  await lab_2();
}
