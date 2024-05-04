import{_ as e,o as r,c as a,a as t}from"./app-5b0f25a8.js";const n="/images/tcp-1.png",i="/images/tcp-2.png",c={},s=t('<h1 id="tcp的3次握手和4次挥手" tabindex="-1"><a class="header-anchor" href="#tcp的3次握手和4次挥手" aria-hidden="true">#</a> TCP的3次握手和4次挥手</h1><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><p>TCP(Transmission Control Protocol)传输控制协议，是主机对主机层的传输控制协议，提供可靠的连接服务，采用三次握手确认建立一个连接。</p><p>位码，即tcp标志位，有6种标示：<code>SYN(synchronous 建立联机)、ACK(acknowledgement 确认)、PSH(push 传送)、FIN(finish 结束)、RST(reset 重置)、URG(urgent 紧急)、Sequence number(顺序号码)、Acknowledge number(确认号码)</code>。</p><h2 id="_3次握手" tabindex="-1"><a class="header-anchor" href="#_3次握手" aria-hidden="true">#</a> 3次握手</h2><p>3次握手是指客户端和服务端总共要发送3个数据包来完成建立连接。</p><p>第1次握手：客户端向服务端发送请求建立连接信号SYN(seq=j)，此时客户端进入发送状态SYN_SENT。</p><p>第2次握手：服务端收到客户端SYN(seq=j)信号后，服务端也向客户端发送一个请求建立连接信号SYN(seq=k)和确认信号ACK(ack=j+1),此时服务端进入接收状态SYN_RECV。</p><p>第3次握手：客户端收到SYN(seq=k)+ACK(ack=j+1)，确认连接进入ESTABLISHED状态。然后再给服务端发送一个确认信号ACK(ack=k+1)，服务端收到后确认连接然后进入连接状态。此时客户端就能给服务端传输数据了。</p><p><img src="'+n+'" alt="1"></p><h2 id="_4次挥手" tabindex="-1"><a class="header-anchor" href="#_4次挥手" aria-hidden="true">#</a> 4次挥手</h2><p>由于TCP连接时全双工的，因此，每个方向都必须要单独进行关闭，这一原则是当一方完成数据发送任务后，发送一个FIN来终止这一方向的连接，收到一个FIN只是意味着这一方向上没有数据流动了，即不会再收到数据了，但是在这个TCP连接上仍然能够发送数据，直到这一方向也发送了FIN。首先进行关闭的一方将执行主动关闭，而另一方则执行被动关闭，上图描述的即是如此。</p><p>（1）第一次挥手：Client发送一个FIN，用来关闭Client到Server的数据传送，Client进入FIN_WAIT_1状态。</p><p>（2）第二次挥手：Server收到FIN后，发送一个ACK给Client，确认序号为收到序号+1（与SYN相同，一个FIN占用一个序号），Server进入CLOSE_WAIT状态。</p><p>（3）第三次挥手：Server发送一个FIN，用来关闭Server到Client的数据传送，Server进入LAST_ACK状态。</p><p>（4）第四次挥手：Client收到FIN后，Client进入TIME_WAIT状态，接着发送一个ACK给Server，确认序号为收到序号+1，Server进入CLOSED状态，完成四次挥手。</p><p><img src="'+i+'" alt="1"></p><h2 id="为什么建立连接是三次握手-而关闭连接却是四次挥手呢" tabindex="-1"><a class="header-anchor" href="#为什么建立连接是三次握手-而关闭连接却是四次挥手呢" aria-hidden="true">#</a> 为什么建立连接是三次握手，而关闭连接却是四次挥手呢？</h2><p>这是因为服务端在LISTEN状态下，收到建立连接请求的SYN报文后，把ACK和SYN放在一个报文里发送给客户端。</p><p>而关闭连接时，当收到对方的FIN报文时，仅仅表示对方不再发送数据了但是还能接收数据，己方也未必全部数据都发送给对方了，所以己方可以立即close，也可以发送一些数据给对方后，再发送FIN报文给对方来表示同意现在关闭连接，因此，己方ACK和FIN一般都会分开发送。</p><h2 id="为什么time-wait状态需要经过2msl-最大报文段生存时间-才能返回到close状态" tabindex="-1"><a class="header-anchor" href="#为什么time-wait状态需要经过2msl-最大报文段生存时间-才能返回到close状态" aria-hidden="true">#</a> 为什么TIME_WAIT状态需要经过2MSL(最大报文段生存时间)才能返回到CLOSE状态？</h2><p>如果Client直接CLOSED了，那么由于IP协议的不可靠性或者是其它网络原因，导致Server没有收到Client最后回复的ACK。那么Server就会在超时之后继续发送FIN，此时由于Client已经CLOSED了，就找不到与重发的FIN对应的连接，最后Server就会收到RST而不是ACK，Server就会以为是连接错误把问题报告给高层。这样的情况虽然不会造成数据丢失，但是却导致TCP协议不符合可靠连接的要求。所以，Client不是直接进入CLOSED，而是要保持TIME_WAIT，当再次收到FIN的时候，能够保证对方收到ACK，最后正确的关闭连接。</p>',22),p=[s];function h(d,o){return r(),a("div",null,p)}const l=e(c,[["render",h],["__file","tcp.html.vue"]]);export{l as default};