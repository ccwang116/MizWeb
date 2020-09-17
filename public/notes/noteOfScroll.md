## 放大
    style="transform: matrix(1.83276, 0, 0, 1.83276, 0, 0);"
>1~2

## 上升
    style="transform: matrix(1, 0, 0, 1, 0, 4.82394); opacity: 1;"

## 遮色片拿掉換色
    style="clip-path: inset(17.656% 0px 0px);"
>可以想像一開始就存在許多顏色在底下只是一層一層拿掉



## 打字機
>其餘用點點點填滿

## 播放動畫
    style="animation-delay: -41s;"
>從0到-67
>動畫在css就寫好了

    animation: unlock_animation-large 5.58333s steps(1) forwards;

# 分層概念
## 最外層 main

    display: block;
## section裡面包的東西/依序由外而內
>section className="section"

    position: relative;
>div class="sticky-container"

    position: relative;
>div class="sticky-content"

    position: sticky;
    overflow: hidden;
    height: 100vh;
    width: 100%;
    top: 0;
    min-height: 454px;
>div class="scroll-container"

    position: absolute;
    z-index: 4;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
>div class="section-content"

    margin-left: auto;
    margin-right: auto;
    width: 980px;
    position: relative;
>再裡面 才是真正的顯示&動畫元素

## section裡面包的東西2
>div class="sticky-container"

    position: relative;
### 裡面有3個平行的div

分別為
>div class="content-above-sticky"

    height: calc(var(--shared-intro-height-headline-enhanced) - (200px / 2));
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    height: var(--shared-intro-height-sticky-content);
>div class="sticky-content"

    z-index: 1;
    position: sticky;
    top: 0;
>div class="content-below-sticky"

    z-index: 3;
    position: absolute;
    bottom: 0;
    left: 0;
