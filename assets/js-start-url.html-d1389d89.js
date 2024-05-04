import{_ as l,o as e,c as i,a as r}from"./app-5b0f25a8.js";const t={},a=r('<h1 id="在浏览器输入一个url" tabindex="-1"><a class="header-anchor" href="#在浏览器输入一个url" aria-hidden="true">#</a> 在浏览器输入一个URL</h1><ol><li>首先在浏览器中输入URL</li><li>查找缓存：浏览器先查看浏览器缓存-系统缓存-路由缓存中是否有该地址页面，如果有则显示页面内容。如果没有则进行下一步。</li><li>DNS域名解析：浏览器向DNS服务器发起请求，解析该URL中的域名对应的IP地址。DNS服务器是基于UDP的，因此会用到UDP协议。</li><li>建立TCP连接：解析出IP地址后，根据IP地址和默认80端口，和服务器建立TCP连接</li><li>发起HTTP请求：浏览器发起读取文件的HTTP请求，，该请求报文作为TCP三次握手的第三次数据发送给服务器</li><li>服务器响应请求并返回结果：服务器对浏览器请求做出响应，并把对应的html文件发送给浏览器</li><li>关闭TCP连接：通过四次挥手释放TCP连接</li><li>浏览器渲染（关键渲染路径）：客户端（浏览器）解析HTML内容并渲染出来，浏览器接收到数据包后的解析流程为： <ul><li>构建DOM树：词法分析然后解析成DOM树（dom tree），是由dom元素及属性节点组成，树的根是document对象</li><li>构建CSS规则树：生成CSS规则树（CSS Rule Tree）</li><li>构建render树：Web浏览器将DOM和CSSOM结合，并构建出渲染树（render tree）</li><li>布局（Layout）：计算出每个节点在屏幕中的位置</li><li>绘制（Painting）：即遍历render树，并使用UI后端层绘制每个节点。</li></ul></li></ol>',2),o=[a];function n(c,s){return e(),i("div",null,o)}const _=l(t,[["render",n],["__file","js-start-url.html.vue"]]);export{_ as default};
