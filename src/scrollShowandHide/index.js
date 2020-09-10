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

//Click按鈕展開
contentBox.current = document.getElementById("scrollCapture");
const fixposition = (e)=>{

    if(contentBox.current){
        heightNow.current = contentBox.current.scrollTop;
    }

    const pageY = e.nativeEvent.pageY;
    const pageX = e.nativeEvent.pageX;

    if(e.target.tagName.toLowerCase()==="div"||e.target.tagName.toLowerCase()==="svg"||e.target.tagName.toLowerCase()==="path"){
        setTimeout(()=>{
            const dropdownPos = document.getElementsByClassName('dropdownPos')[0];
            if(dropdownPos){
                dropdownPos.style.display = 'inline-block';
                dropdownPos.style.left = pageX - dropdownPos.offsetWidth + "px";
                dropdownPos.style.top = pageY - dropdownPos.offsetHeight + "px";
            }
        }, 0);
    }
}