import { useEffect, useState } from "react";

const CheckScrollDown = (distanceY) => {
  const [isScrollDown, setIsScrollDown] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollDown = window.scrollY;
      setIsScrollDown(scrollDown > 300 ? true : false);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrollDown]);

  return isScrollDown
}

export default CheckScrollDown
