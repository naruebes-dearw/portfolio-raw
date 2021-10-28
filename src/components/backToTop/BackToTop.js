import { useEffect, useState } from "react";
import "./BackToTop.css"

const BackToTop = ({ theme }) => {
  const [showBtn, setshowBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollDown = window.scrollY;
      setshowBtn(scrollDown > 300 ? true : false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showBtn]);

  return (
    <button onClick={() => window.scroll(0, 0)} className={`back-to-top btn-shadow ${showBtn && "showBtn"} ${theme}`}>
      <i className="bi bi-caret-up-fill"></i>
    </button >
  )
}

export default BackToTop
