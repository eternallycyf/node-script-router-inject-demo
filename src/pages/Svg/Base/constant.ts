export const svgContent = `<svg 
  width="100%" 
	height="1000" 
  // min-x min-y width height
	viewBox="0 0 100% 100%" 
	xmlns="http://www.w3.org/2000/svg"
>
</svg>`;

export const svgBaseAPI = `<svg
  width="100px"
  height="100px"
  // min-x min-y width height
  viewBox="0 0 100% 100%"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* <xxx x="0" y="0" width="100" height="100" fill="red" /> */}
  <rect x="0" y="0" width="100" height="100" fill="red" />
</svg>`;

export const svgStyle = `
~~~js
# style='fill:red;...'
# fill='red'
fill(填充颜色)   
fill-opacity(填充透明度)
stroke(边框颜色)   
stroke-width(边框宽度)   
stroke-opacity(边框透明度)   
stroke-dasharray(创建虚线)
transform(变换)
filter(滤镜)(url[#滤镜id)]
~~~
`;

export const svgDemo = `
            <svg
              width="1000px"
              height="250px"
              // min-x min-y width height
              viewBox="0 0 100% 100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0"
                y="0"
                width="100"
                height="200"
                // 圆角
                rx="15"
                ry="15"
                fill="lavender"
              />
              <circle
                // 圆心横坐标
                cx="220"
                // 圆心纵坐标
                cy="100"
                // 半径
                r="100"
                fill="red"
              />
              <ellipse
                //圆心横坐标
                cx="500"
                //圆心纵坐标
                cy="100"
                //横向半径
                rx="150"
                //纵向半径
                ry="100"
                fill="#f06"
              />
              <line
                // 起点横坐标
                x1="400"
                // 起点纵坐标
                y1="100"
                // 终点横坐标
                x2="100"
                // 终点纵坐标
                y2="0"
                stroke="black"
              />
              <polygon
                // x1,y1,x2,y2,x3,y3 ...
                points="200,10,250,190,160,210"
                stroke="blue"
              />
              <polyline
                // x1,y1,x2,y2,x3,y3 ...
                points="200,10,250,190,160,210"
                stroke="green"
              />
            </svg>
`;

export const svgOther = `
## 其他实例

### text

~~~js
<text x="10" y="15">I love SVG</text>
#
transform="rotate(30 20,40)"
// dx，dy表示平移的距离

~~~

#### textPath

~~~js
// 沿path方向排列文本textPath
<path 
  id="wavyPath"
  d="M75,100 a50,25 0 1,0 50,25" 
  fill="none" />
<text x="50" y="50" font-size="14">
        <textPath xlink:href="#wavyPath">
        Text travels along any path that you define for it.
        </textPath>
</text>
~~~

### A

~~~js
<a xlink:href="http://www.w3schools.com/svg/" target="_blank"> ... </a>
~~~

### span

~~~js
<tspan fill="red">D3</tspan>
~~~

### linearGradient

~~~js
// 线性渐变 径向渐变
<defs>
    <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">  
      <!--x1,y1 x2,y2用来定义径向渐变的方向，此处为向右-->
        <stop offset="0%" stop-color="blue">
        <stop offset="100%" stop-color="red">
    </linearGradient>
    <radialGradient id="irisGradient">
        <stop offset="25%" stop-color="green" />
        <stop offset="100%" stop-color="dodgerblue" />
    </radialGradient>
</defs>
<rect fill="url(#myGradient)" x1="10" y1="10" width="300" height="100"/>
~~~

### defs

~~~jd
// 定义可重用组件
<defs />
~~~

### g

~~~js
// 分组 定义统一的样式
<g/>
~~~

### use

~~~js
// 引用defs中定义的元素  
<g id="eye"> ... </g>
<use xlink:href="#eye" x="250" fill="dodgerblue" />
~~~

## path

### base

~~~js
#
 字母大写:绝对位置 小写:相对位置
#
命令            名称                        参数
 M           moveto  移动到                (x y)+
 L           lineto  画线到                (x y)+
 Z          closepath  关闭路径            (none)
 H          horizontal lineto  水平线到      x+
 V          vertical lineto  垂直线到        y+
 A        elliptical arc椭圆弧            
   (rx ry x-axis-rotation large-arc-flag sweep-flag x y)+
 C        curveto 三次贝塞尔曲线到          (x1 y1 x2 y2 x y)+
 S     smooth curveto光滑三次贝塞尔曲线到   (x2 y2 x y)+
 Q        Bézier curveto二次贝塞尔曲线到    (x1 y1 x y)+
 T     smooth Bézier curveto光滑二次贝塞尔曲线到  (x y)+
 #
    <path d="M150 0 L75 200 L225 200 Z" />
~~~

### 贝塞尔曲线

#### 三次

~~~js
 # 贝赛尔曲线
// x1 y1 x2 y2 为控制点 x y 为关键点
 Cx1 y1, x2 y2, x y 
 <path 
	d="M20 20 C140 30 60 160 200 200" 
	stroke="#000000" 
	fill="none" 
	style="stroke-width: 2px;"
/>
~~~

#### 光滑三次

~~~js
// S用来补刀 自动生成一个对称点
// Sx2 y2, x y
<path 
	d="M20 20 C140 30 60 160 200 200 S140 30 200 200" 
	stroke="#000000" 
	fill="none" 
	style="stroke-width: 2px;"
/>
~~~

#### 二次

~~~js
// X1,y1,x,y
<path 
	d="M20 20 Q140 30 200 200" 
	stroke="#000000" 
	fill="none" 
	style="stroke-width: 2px;"
/>
~~~

#### 光滑二次

~~~js
// T用来补刀 自动生成一个对称点
// Tx y
<path 
	d="M20 20 Q140 30 200 200 T" 
	stroke="#000000" 
	fill="none" 
	style="stroke-width: 2px;"
/>
~~~

### 圆弧

~~~js
// A rx ry x-deg large-arc sweep-flag x y
// rx    x轴半径
// x-deg x轴旋转角度
// large-arc 表示大于180度还是小于180 0为小 1位大
// sweep-flag 弧线方向 0为沿逆时针，1为沿顺时针
// x y为最终坐标。
<path d="M80 80 A45 45, 0, 0, 0, 125 125" fill="green" />
~~~

## 事件

~~~js
document.getElementById('...')
  .addEventListener("click",function(){
     ...
  })
~~~
`;
