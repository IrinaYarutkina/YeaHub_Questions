import { useState } from "react";

function useToggle(initialValue: boolean) {
  const [isOpen, setIsOpen] = useState(initialValue);

  const toggle = () => setIsOpen((prev) => !prev);
  return [isOpen, toggle];
}
export default useToggle;
