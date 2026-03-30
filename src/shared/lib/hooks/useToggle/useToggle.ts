import { useState } from "react";

export const useToggle = (initialValue: boolean = false) => {
  const [isToggled, setIsToggled] = useState(initialValue);

  const toggle = function () {
    setIsToggled((prev) => !prev);
  };
  return [isToggled, toggle] as const;
};
