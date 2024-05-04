import{_ as n,o as a,c as s,a as e}from"./app-5b0f25a8.js";const t={},c=e(`<h1 id="webpack热更新原理" tabindex="-1"><a class="header-anchor" href="#webpack热更新原理" aria-hidden="true">#</a> webpack热更新原理</h1><h2 id="核心流程" tabindex="-1"><a class="header-anchor" href="#核心流程" aria-hidden="true">#</a> 核心流程</h2><p>Webpack HMR 特性的执行过程并不复杂：</p><ol><li>使用 <code>webpack-dev-server</code> （后面简称 WDS）托管静态资源，同时以 <code>Runtime</code> 方式向主chunk注入一段处理 <code>HMR</code> 逻辑的客户端代码；</li><li>浏览器加载页面后，与 <code>WDS</code> 建立 <code>WebSocket</code> 连接；</li><li>Webpack 监听到文件变化后，增量构建发生变更的模块，并通过 <code>WebSocket</code> 发送 <code>hash</code> 事件；</li><li>浏览器接收到 hash 事件后，请求 <code>manifest</code> 资源文件，确认增量变更范围；</li><li>浏览器加载发生变更的增量模块；</li><li>Webpack 运行时触发变更模块的 <code>module.hot.accept</code> 回调，执行代码变更逻辑；</li></ol><p>hmr运行时代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;./a.js&#39;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token string">&#39;./a.js&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;捕获到a.js变化&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            el<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webapck热更新和vite的区别" tabindex="-1"><a class="header-anchor" href="#webapck热更新和vite的区别" aria-hidden="true">#</a> webapck热更新和vite的区别</h2><ul><li>webpack热更要重新构建，意思就是重新打包，性能会随项目规模大而变慢。</li><li>vite本身基于unbundle的思想，利用的是<code>type=module</code>的js加载原理，某个文件改动很容易的确认出hrm的边界，也不需要重新构建整个项目，直接更新单个文件即可。</li></ul><h3 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h3><ul><li>当基于打包器启动时，编辑文件后将重新构建文件本身。显然我们不应该重新构建整个包，因为这样更新速度会随着应用体积增长而直线下降。</li><li>一些打包器的开发服务器将构建内容存入内存，这样它们只需要在文件更改时使模块图的一部分失活，但它也仍需要整个重新构建并重载页面。这样代价很高，并且重新加载页面会消除应用的当前状态，所以打包器支持了动态模块热重载（HMR）：允许一个模块 “热替换” 它自己，而对页面其余部分没有影响。这大大改进了开发体验 - 然而，在实践中我们发现，即使是 HMR 更新速度也会随着应用规模的增长而显著下降。</li></ul><h3 id="vite改进" tabindex="-1"><a class="header-anchor" href="#vite改进" aria-hidden="true">#</a> vite改进</h3><ul><li>在 Vite 中，HMR 是在原生 ESM 上执行的。当编辑一个文件时，</li></ul><blockquote><p>Vite 只需要精确地使已编辑的模块与其最近的 HMR 边界之间的链失效（大多数时候只需要模块本身），使 HMR 更新始终快速，无论应用的大小。</p></blockquote><ul><li>Vite 同时利用 HTTP 头来加速整个页面的重新加载（再次让浏览器为我们做更多事情）：源码模块的请求会根据 304 Not Modified 进行协商缓存，而依赖模块请求则会通过 Cache-Control: max-age=31536000,immutable 进行强缓存，因此一旦被缓存它们将不需要再次请求。</li></ul>`,14),o=[c];function p(i,l){return a(),s("div",null,o)}const d=n(t,[["render",p],["__file","webpack-hot.html.vue"]]);export{d as default};
