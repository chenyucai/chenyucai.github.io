import{_ as n,o as s,c as a,a as t}from"./app-5b0f25a8.js";const p={},e=t(`<h1 id="_841-钥匙和房间" tabindex="-1"><a class="header-anchor" href="#_841-钥匙和房间" aria-hidden="true">#</a> 841.钥匙和房间</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">rooms</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">canVisitAllRooms</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">rooms</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 访问过的房间</span>

    <span class="token comment">// 模拟开房间过程</span>
    <span class="token keyword">function</span> <span class="token function">visit</span><span class="token punctuation">(</span><span class="token parameter">curRoomNum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 递归结束条件，如果访问到原来访问过的，说明死循环了</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>visited<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>curRoomNum<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>curRoomNum<span class="token punctuation">)</span> <span class="token comment">// 记录访问了该房间</span>
        <span class="token keyword">const</span> keys <span class="token operator">=</span> rooms<span class="token punctuation">[</span>curRoomNum<span class="token punctuation">]</span> <span class="token comment">// 房间里的钥匙</span>
        <span class="token comment">// 每条线路都走一遍</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> keys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">visit</span><span class="token punctuation">(</span>keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 从0号房间开始</span>
    <span class="token function">visit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>visited<span class="token punctuation">)</span>

    <span class="token keyword">return</span> visited<span class="token punctuation">.</span>size <span class="token operator">===</span> rooms<span class="token punctuation">.</span>length
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","841.html.vue"]]);export{k as default};
