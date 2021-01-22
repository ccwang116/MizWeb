const reptTarget = useRef();
const [reptWidth, setReptWidth] = useState(274);

useEffect(() => {
  //根據瀏覽器寬度不同，決定slider往左滑多少寬度
  //一進到頁面reptTarget.current為undefined，因此在手機板時改用innerWidth
  const getReptWidth = () => {
    if (window.innerWidth < 799) {
      setReptWidth(window.innerWidth - 22);
    } else {
      setReptWidth(
        reptTarget?.current === undefined ? 274 : reptTarget.current.offsetWidth
      );
    }
  };

  getReptWidth();

  window.addEventListener("resize", getReptWidth);
  return () => {
    window.removeEventListener("resize", getReptWidth);
  };
}, []);
