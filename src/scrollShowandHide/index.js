// scroll show and hide
    const contentBox = useRef();

    useEffect(() => {

        contentBox.current = document.getElementById("scrollCapture");

        const navBarHeight=()=> {

            if(contentBox.current.scrollTop < 242){
                setShowBtn(false);
                setfullHeight(false);
            }else{
                setShowBtn(true);
            }
        }

        const watchScroll=()=> {
            if(contentBox && contentBox.current && isConnect ){
                contentBox.current.addEventListener("scroll", navBarHeight);
            }
        }
        watchScroll();
        return () => {
            if(contentBox&&contentBox.current){
                contentBox.current.removeEventListener("scroll", navBarHeight);
            }
        };
    });


//goTop的情形
const goTop = () => {
        const node = document.querySelector('#scrollCapture');
        node.scrollTo({
            top : 0,
            left : 0,
            behavior : 'smooth'
        })
    }
