import{_ as t,o as a,c as e,a as h}from"./app-5b0f25a8.js";const i="/images/http-1.png",r="/images/http-2.png",p="/images/http-3.png",d={},n=h('<h1 id="http协议" tabindex="-1"><a class="header-anchor" href="#http协议" aria-hidden="true">#</a> HTTP协议</h1><h2 id="http协议的特点" tabindex="-1"><a class="header-anchor" href="#http协议的特点" aria-hidden="true">#</a> HTTP协议的特点</h2><ul><li>无连接：连接一次就会断掉，不会保持连接</li><li>无状态：浏览器无法区分前后两次连接是否同一个人。实际场景中我们可以通过设置session来实现区分。</li><li>简单快速、灵活</li></ul><h2 id="http报文组成部分" tabindex="-1"><a class="header-anchor" href="#http报文组成部分" aria-hidden="true">#</a> HTTP报文组成部分</h2><p><img src="'+i+'" alt="1"></p><p>请求行包含：http协议、方法、地址、端口</p><h2 id="http方法" tabindex="-1"><a class="header-anchor" href="#http方法" aria-hidden="true">#</a> HTTP方法</h2><p><img src="'+r+'" alt="1"></p><h2 id="http状态码" tabindex="-1"><a class="header-anchor" href="#http状态码" aria-hidden="true">#</a> HTTP状态码</h2><p><img src="'+p+'" alt="1"></p><h2 id="http持久连接-keep-alive" tabindex="-1"><a class="header-anchor" href="#http持久连接-keep-alive" aria-hidden="true">#</a> HTTP持久连接（keep-alive）</h2><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><p>一个普通的http请求是实用一个tcp连接来进行 请求/应答 模式，即一个请求发出后得到应答然后就会断开。 http持久连接则是使用同一个tcp连接来发送和接收多个http请求/应答。浏览器一般保持连接的时间在10s左右。</p><h3 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h3><ul><li>在http1.0中，需要手动设置请求头 <code>Connection: Keep-Alive</code></li><li>在http1.1中，所有的连接默认都是keep alive。</li></ul><h3 id="优势" tabindex="-1"><a class="header-anchor" href="#优势" aria-hidden="true">#</a> 优势</h3><ul><li>一定提升请求性能</li><li>tcp连接减少了</li><li>无需再握手，减少了后续请求的延迟</li></ul><h2 id="http管线化" tabindex="-1"><a class="header-anchor" href="#http管线化" aria-hidden="true">#</a> HTTP管线化</h2><p>正常的http持久连接的情况下，请求传递类似这样<br> 请求1 -&gt; 响应1 -&gt; 请求2 -&gt; 响应2 -&gt; 请求3 -&gt; 响应3</p><p>使用管线化后，长这样<br> 请求1 -&gt; 请求2 -&gt; 请求3 -&gt; 响应1 -&gt; 响应2 -&gt; 响应3</p><h2 id="http-103-状态码" tabindex="-1"><a class="header-anchor" href="#http-103-状态码" aria-hidden="true">#</a> HTTP 103 状态码</h2><p>HTTP 103 状态码 (Early Hints) 是一个信息性 HTTP 状态代码，可以用于在最终响应之前发送一个初步的 HTTP 响应。</p><p>利用 HTTP 103 状态码，就可以让服务器在服务器处理主资源的同时向浏览器发送一些关键子资源（JavaScript、CSS 或字体文件）或页面可能使用的其他来源的提示。</p><p>浏览器可以使用这些提示来预热连接，并在等待主资源响应的同时请求子资源。换句话说，Early Hints 可以通过提前做一些工作来帮助浏览器利用这种 服务器思考时间，从而提升页面的渲染性能。</p>',24),s=[n];function c(l,o){return a(),e("div",null,s)}const u=t(d,[["render",c],["__file","http.html.vue"]]);export{u as default};