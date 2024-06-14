import { useState } from "react";

export function useButton() {
  const [on, setOn] = useState(true);

  function handleClick() {
    setOn((one) => !one);
    if (on === true) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }
  return { on, handleClick };
}
