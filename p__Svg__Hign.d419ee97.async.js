(self["webpackChunk"]=self["webpackChunk"]||[]).push([[268],{6361:function(n,t,e){"use strict";var i=e(11849),r=e(73120),a=e(53961),s=e(30703),o=e(36836),l=e(85893),x="mxPB";t["Z"]=n=>(0,l.jsx)(r.D,{"data-inspector-line":"8","data-inspector-column":"4","data-inspector-relative-path":"src/components/MarkDown/index.tsx",children:n.markdown,remarkPlugins:[o.Z],components:{code(t){var e=t.inline,r=t.className,o=t.children,c=/language-(\w+)/.exec(r||"");return!e&&c?(0,l.jsx)(a.Z,(0,i.Z)((0,i.Z)({"data-inspector-line":"16","data-inspector-column":"12","data-inspector-relative-path":"src/components/MarkDown/index.tsx",children:String(o).replace(/\n$/,""),style:s.Z,language:c[1],showLineNumbers:!0,PreTag:"div"},n),{},{_nk:"".concat(x,"21")})):(0,l.jsx)("code",(0,i.Z)((0,i.Z)({"data-inspector-line":"26","data-inspector-column":"12","data-inspector-relative-path":"src/components/MarkDown/index.tsx",className:r},n),{},{_nk:"".concat(x,"31"),children:o}))}},_nk:"".concat(x,"11")})},40141:function(n,t,e){"use strict";e.d(t,{Uh:function(){return i},_1:function(){return r},Dk:function(){return a},eJ:function(){return s},Sx:function(){return o}});var i='<svg \n  width="100%" \n\theight="1000" \n  // min-x min-y width height\n\tviewBox="0 0 100% 100%" \n\txmlns="http://www.w3.org/2000/svg"\n>\n</svg>',r='<svg\n  width="100px"\n  height="100px"\n  // min-x min-y width height\n  viewBox="0 0 100% 100%"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  {/* <xxx x="0" y="0" width="100" height="100" fill="red" /> */}\n  <rect x="0" y="0" width="100" height="100" fill="red" />\n</svg>',a="\n~~~js\n# style='fill:red;...'\n# fill='red'\nfill(\u586b\u5145\u989c\u8272)   \nfill-opacity(\u586b\u5145\u900f\u660e\u5ea6)\nstroke(\u8fb9\u6846\u989c\u8272)   \nstroke-width(\u8fb9\u6846\u5bbd\u5ea6)   \nstroke-opacity(\u8fb9\u6846\u900f\u660e\u5ea6)   \nstroke-dasharray(\u521b\u5efa\u865a\u7ebf)\ntransform(\u53d8\u6362)\nfilter(\u6ee4\u955c)(url[#\u6ee4\u955cid)]\n~~~\n",s='\n            <svg\n              width="1000px"\n              height="250px"\n              // min-x min-y width height\n              viewBox="0 0 100% 100%"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <rect\n                x="0"\n                y="0"\n                width="100"\n                height="200"\n                // \u5706\u89d2\n                rx="15"\n                ry="15"\n                fill="lavender"\n              />\n              <circle\n                // \u5706\u5fc3\u6a2a\u5750\u6807\n                cx="220"\n                // \u5706\u5fc3\u7eb5\u5750\u6807\n                cy="100"\n                // \u534a\u5f84\n                r="100"\n                fill="red"\n              />\n              <ellipse\n                //\u5706\u5fc3\u6a2a\u5750\u6807\n                cx="500"\n                //\u5706\u5fc3\u7eb5\u5750\u6807\n                cy="100"\n                //\u6a2a\u5411\u534a\u5f84\n                rx="150"\n                //\u7eb5\u5411\u534a\u5f84\n                ry="100"\n                fill="#f06"\n              />\n              <line\n                // \u8d77\u70b9\u6a2a\u5750\u6807\n                x1="400"\n                // \u8d77\u70b9\u7eb5\u5750\u6807\n                y1="100"\n                // \u7ec8\u70b9\u6a2a\u5750\u6807\n                x2="100"\n                // \u7ec8\u70b9\u7eb5\u5750\u6807\n                y2="0"\n                stroke="black"\n              />\n              <polygon\n                // x1,y1,x2,y2,x3,y3 ...\n                points="200,10,250,190,160,210"\n                stroke="blue"\n              />\n              <polyline\n                // x1,y1,x2,y2,x3,y3 ...\n                points="200,10,250,190,160,210"\n                stroke="green"\n              />\n            </svg>\n',o='\n## \u5176\u4ed6\u5b9e\u4f8b\n\n### text\n\n~~~js\n<text x="10" y="15">I love SVG</text>\n#\ntransform="rotate(30 20,40)"\n// dx\uff0cdy\u8868\u793a\u5e73\u79fb\u7684\u8ddd\u79bb\n\n~~~\n\n#### textPath\n\n~~~js\n// \u6cbfpath\u65b9\u5411\u6392\u5217\u6587\u672ctextPath\n<path \n  id="wavyPath"\n  d="M75,100 a50,25 0 1,0 50,25" \n  fill="none" />\n<text x="50" y="50" font-size="14">\n        <textPath xlink:href="#wavyPath">\n        Text travels along any path that you define for it.\n        </textPath>\n</text>\n~~~\n\n### A\n\n~~~js\n<a xlink:href="http://www.w3schools.com/svg/" target="_blank"> ... </a>\n~~~\n\n### span\n\n~~~js\n<tspan fill="red">D3</tspan>\n~~~\n\n### linearGradient\n\n~~~js\n// \u7ebf\u6027\u6e10\u53d8 \u5f84\u5411\u6e10\u53d8\n<defs>\n    <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">  \n      \x3c!--x1,y1 x2,y2\u7528\u6765\u5b9a\u4e49\u5f84\u5411\u6e10\u53d8\u7684\u65b9\u5411\uff0c\u6b64\u5904\u4e3a\u5411\u53f3--\x3e\n        <stop offset="0%" stop-color="blue">\n        <stop offset="100%" stop-color="red">\n    </linearGradient>\n    <radialGradient id="irisGradient">\n        <stop offset="25%" stop-color="green" />\n        <stop offset="100%" stop-color="dodgerblue" />\n    </radialGradient>\n</defs>\n<rect fill="url(#myGradient)" x1="10" y1="10" width="300" height="100"/>\n~~~\n\n### defs\n\n~~~jd\n// \u5b9a\u4e49\u53ef\u91cd\u7528\u7ec4\u4ef6\n<defs />\n~~~\n\n### g\n\n~~~js\n// \u5206\u7ec4 \u5b9a\u4e49\u7edf\u4e00\u7684\u6837\u5f0f\n<g/>\n~~~\n\n### use\n\n~~~js\n// \u5f15\u7528defs\u4e2d\u5b9a\u4e49\u7684\u5143\u7d20  \n<g id="eye"> ... </g>\n<use xlink:href="#eye" x="250" fill="dodgerblue" />\n~~~\n\n## path\n\n### base\n\n~~~js\n#\n \u5b57\u6bcd\u5927\u5199:\u7edd\u5bf9\u4f4d\u7f6e \u5c0f\u5199:\u76f8\u5bf9\u4f4d\u7f6e\n#\n\u547d\u4ee4            \u540d\u79f0                        \u53c2\u6570\n M           moveto \u2003\u79fb\u52a8\u5230                (x y)+\n L           lineto \u2003\u753b\u7ebf\u5230                (x y)+\n Z          closepath \u2003\u5173\u95ed\u8def\u5f84            (none)\n H          horizontal lineto \u2003\u6c34\u5e73\u7ebf\u5230      x+\n V          vertical lineto \u2003\u5782\u76f4\u7ebf\u5230        y+\n A        elliptical arc\u692d\u5706\u5f27            \n   (rx ry x-axis-rotation large-arc-flag sweep-flag x y)+\n C        curveto \u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf\u5230          (x1 y1 x2 y2 x y)+\n S     smooth curveto\u5149\u6ed1\u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf\u5230   (x2 y2 x y)+\n Q        B\xe9zier curveto\u4e8c\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf\u5230    (x1 y1 x y)+\n T     smooth B\xe9zier curveto\u5149\u6ed1\u4e8c\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf\u5230  (x y)+\n #\n    <path d="M150 0 L75 200 L225 200 Z" />\n~~~\n\n### \u8d1d\u585e\u5c14\u66f2\u7ebf\n\n#### \u4e09\u6b21\n\n~~~js\n # \u8d1d\u8d5b\u5c14\u66f2\u7ebf\n// x1 y1 x2 y2 \u4e3a\u63a7\u5236\u70b9 x y \u4e3a\u5173\u952e\u70b9\n Cx1 y1, x2 y2, x y \n <path \n\td="M20 20 C140 30 60 160 200 200" \n\tstroke="#000000" \n\tfill="none" \n\tstyle="stroke-width: 2px;"\n/>\n~~~\n\n#### \u5149\u6ed1\u4e09\u6b21\n\n~~~js\n// S\u7528\u6765\u8865\u5200 \u81ea\u52a8\u751f\u6210\u4e00\u4e2a\u5bf9\u79f0\u70b9\n// Sx2 y2, x y\n<path \n\td="M20 20 C140 30 60 160 200 200 S140 30 200 200" \n\tstroke="#000000" \n\tfill="none" \n\tstyle="stroke-width: 2px;"\n/>\n~~~\n\n#### \u4e8c\u6b21\n\n~~~js\n// X1,y1,x,y\n<path \n\td="M20 20 Q140 30 200 200" \n\tstroke="#000000" \n\tfill="none" \n\tstyle="stroke-width: 2px;"\n/>\n~~~\n\n#### \u5149\u6ed1\u4e8c\u6b21\n\n~~~js\n// T\u7528\u6765\u8865\u5200 \u81ea\u52a8\u751f\u6210\u4e00\u4e2a\u5bf9\u79f0\u70b9\n// Tx y\n<path \n\td="M20 20 Q140 30 200 200 T" \n\tstroke="#000000" \n\tfill="none" \n\tstyle="stroke-width: 2px;"\n/>\n~~~\n\n### \u5706\u5f27\n\n~~~js\n// A rx ry x-deg large-arc sweep-flag x y\n// rx    x\u8f74\u534a\u5f84\n// x-deg x\u8f74\u65cb\u8f6c\u89d2\u5ea6\n// large-arc \u8868\u793a\u5927\u4e8e180\u5ea6\u8fd8\u662f\u5c0f\u4e8e180 0\u4e3a\u5c0f 1\u4f4d\u5927\n// sweep-flag \u5f27\u7ebf\u65b9\u5411 0\u4e3a\u6cbf\u9006\u65f6\u9488\uff0c1\u4e3a\u6cbf\u987a\u65f6\u9488\n// x y\u4e3a\u6700\u7ec8\u5750\u6807\u3002\n<path d="M80 80 A45 45, 0, 0, 0, 125 125" fill="green" />\n~~~\n\n## \u4e8b\u4ef6\n\n~~~js\ndocument.getElementById(\'...\')\n  .addEventListener("click",function(){\n     ...\n  })\n~~~\n'},90159:function(n,t,e){"use strict";e.r(t);e(58024);var i=e(91894),r=e(67265),a=e(6361),s=e(40141),o=e(85893),l="aLcC",x=()=>(0,o.jsx)(r.ZP,{"data-inspector-line":"7","data-inspector-column":"4","data-inspector-relative-path":"src/pages/Svg/Hign/index.tsx",_nk:"".concat(l,"11"),children:(0,o.jsx)(i.Z,{"data-inspector-line":"8","data-inspector-column":"6","data-inspector-relative-path":"src/pages/Svg/Hign/index.tsx",style:{margin:24},_nk:"".concat(l,"21"),children:(0,o.jsx)(a.Z,{"data-inspector-line":"9","data-inspector-column":"8","data-inspector-relative-path":"src/pages/Svg/Hign/index.tsx",markdown:s.Sx,_nk:"".concat(l,"31")})})});t["default"]=x}}]);