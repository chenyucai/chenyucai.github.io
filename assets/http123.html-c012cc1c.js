import{_ as t,o as h,c as e,a}from"./app-5b0f25a8.js";const p={},r=a('<h1 id="http1、http2、http3的区别" tabindex="-1"><a class="header-anchor" href="#http1、http2、http3的区别" aria-hidden="true">#</a> http1、http2、http3的区别</h1><h2 id="http2解决了队头阻塞的问题-最大区别" tabindex="-1"><a class="header-anchor" href="#http2解决了队头阻塞的问题-最大区别" aria-hidden="true">#</a> http2解决了队头阻塞的问题（最大区别）</h2><p>虽然http1使用持久化连接和管线化实现在同一个tcp连接里发送多个请求，但是所以请求都是按次序进行的，服务器处理完一个再接着处理下一个。如果前面的处理特别慢，后面学多请求就要排队等着，这就导致了<code>“队头阻塞”</code>。</p><p>http2解决了这个问题，在一个tcp连接里可以同时发送多个请求，并且不用按照顺序一一对应。</p><h2 id="http2报文完全使用二进制协议" tabindex="-1"><a class="header-anchor" href="#http2报文完全使用二进制协议" aria-hidden="true">#</a> http2报文完全使用二进制协议</h2><p>HTTP/1.1 版的头信息肯定是文本（ASCII编码），数据体可以是文本，也可以是二进制。</p><p>HTTP/2 则是一个彻底的二进制协议，头信息和数据体都是二进制，并且统称为”帧”：头信息帧和数据帧。并对报头进行压缩。</p><p>二进制协议解析起来更高效、“线上”更紧凑，更重要的是错误更少。</p><h2 id="http3彻底解决队头阻塞的问题" tabindex="-1"><a class="header-anchor" href="#http3彻底解决队头阻塞的问题" aria-hidden="true">#</a> http3彻底解决队头阻塞的问题</h2><p>TCP的队头阻塞并没有彻底解决：在HTTP/2中，多个请求是跑在一个TCP管道中的。但当出现了丢包时，HTTP/2 的表现反倒不如 HTTP/1 了。因为TCP为了保证可靠传输，有个特别的丢包重传机制，丢失的包必须要等待重新传输确认，HTTP/2出现丢包时，整个 TCP 都要开始等待重传，那么就会阻塞该TCP连接中的所有请求。</p><p>而对于 HTTP/1.1 来说，可以开启多个 TCP 连接，出现这种情况反到只会影响其中一个连接，剩余的 TCP 连接还可以正常传输数据。</p><h2 id="http3集成tls加密功能" tabindex="-1"><a class="header-anchor" href="#http3集成tls加密功能" aria-hidden="true">#</a> http3集成TLS加密功能</h2><p>类似https ssl</p>',13),d=[r];function c(s,i){return h(),e("div",null,d)}const o=t(p,[["render",c],["__file","http123.html.vue"]]);export{o as default};
