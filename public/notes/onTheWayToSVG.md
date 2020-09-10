# SVG 研究之路
`筆記來源：參考自oxxostudio.tw`

## 群組
    <g></g>無法單純利用 x 或 y 來控制位置

    <g id="layer02">
        <ellipse fill="#67CE6F" stroke="#FFFFFF" stroke-width="5" stroke-miterlimit="10" cx="75" cy="196.375" rx="47" ry="37.625"/>
    </g>
## SVG Path `指令列表 d=""`
>M 起始點的 x , y 座標
>H,V,L跟直線有關
>C,S,Q,T跟貝茲曲線有關
>A 跟橢圓形有關
>rx ry x-axis-rotation large-arc-flag sweep-flag x y
其中 rx, ry 為橢圓形的 x 軸及 y 軸的半徑，
x-axis-rotation 是弧線與 x 軸的旋轉角度，通常是0，
large-arc-flag 則設定 1 最大角度的弧線或是 0 最小角度的弧線，
sweep-flag 設定方向為 1 順時針方向或 0 逆時針方向 ( Arc )
>Z 關閉路徑

## 定義與使用(以文字範例)
    <defs>
    <path id="a1" d="M0 50 C150 150 100 -50 300 50" stroke="#000" fill="none"/>
    </defs>
    <text>
    <textPath xlink:href="#a1">這是隨著路徑跑的文字，很酷吧
    </textPath>
    </text>
## 遮色片

    <defs>  
    <clipPath id="a1">
    <rect x="0" y="0" width="200" height="100" />
    </clipPath>
    </defs>
    <circle cx="100" cy="100" r="100" clip-path="url(#a1)" fill="#000" />
## 不同灰階 不同效果
    <defs>
    <mask id="mask1"> 
        <rect  x="0" y="0" width="50" height="50" fill="#fff"/>
    </mask> 
    <mask id="mask2"> 
        <rect  x="50" y="0" width="50" height="50" fill="#bbb"/>
    </mask> 
    </defs>
    <rect x="0" y="0" width="50" height="50" fill="#f00" mask="url(#mask1)"/>
    <rect x="50" y="0" width="50" height="50" fill="#f00" mask="url(#mask2)"/>
## 漸層
    <defs>
    <linearGradient id="Gradient">
        <stop offset="0" stop-color="white" stop-opacity="0" />
        <stop offset="1" stop-color="white" stop-opacity="1" />
    </linearGradient>
    <mask id="Mask">
        <rect x="0" y="0" width="200" height="200" fill="url(#Gradient)"  />
    </mask>
    </defs>

    <rect x="0" y="0" width="200" height="200" fill="green" />
    <rect x="0" y="0" width="200" height="200" fill="red" mask="url(#Mask)" />
## 濾鏡
    <fe什麼什麼 />
>例如
    <defs>
        <filter width="200" height="200" x="0" y="0" id="blur1" filterUnits="userSpaceOnUse" >
        <feGaussianBlur stdDeviation="5" in="SourceAlpha"  />
        </filter>
    </defs>
        <rect x="30" y="35" width="70" height="70" fill="#f00" filter=url("#blur1") />