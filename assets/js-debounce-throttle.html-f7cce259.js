import{_ as n,o as s,c as a,a as t}from"./app-5b0f25a8.js";const p={},e=t(`<h1 id="防抖与节流" tabindex="-1"><a class="header-anchor" href="#防抖与节流" aria-hidden="true">#</a> 防抖与节流</h1><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><ul><li><strong>防抖(debounce)</strong>: n 秒后在执行该回调，若在 n 秒内被重复触发，则重新计时。<strong>场景：不可控的高频触发，如点击按钮、输入框搜索</strong></li><li><strong>节流(throttle)</strong>: n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效。<strong>场景：快速连续的触发，如滚动条事件、mousemove</strong></li></ul><blockquote><p>假设电梯有两种运行策略 <code>防抖</code> 和 <code>节流</code>，超时设定为15秒，不考虑容量限制 电梯第一个人进来后，15秒后准时运送一次，这是节流。 电梯第一个人进来后，等待15秒。如果过程中又有人进来，15秒等待重新计时，直到15秒后开始运送，这是防抖。</p></blockquote><p>两者的区别：</p><ul><li>防抖可能用于无法预知的用户主动行为，如用户输入内容去服务端动态搜索结果。用户打字的速度等是无法预知的，具有非规律性。</li><li>节流可能用于一些非用户主动行为或者可预知的用户主动行为，如用户滑动商品橱窗时发送埋点请求、滑动固定的高度是已知的逻辑，具有规律性。</li><li>防抖是关注于最后一次的事件触发，而节流则是在规定的时间里只执行一次。</li></ul><h2 id="防抖代码实现" tabindex="-1"><a class="header-anchor" href="#防抖代码实现" aria-hidden="true">#</a> 防抖代码实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 防抖-非立即执行</span>
<span class="token keyword">function</span> <span class="token function">laterDebounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> context <span class="token operator">=</span> <span class="token keyword">this</span>
        <span class="token keyword">var</span> args <span class="token operator">=</span> arguments
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
        timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 防抖-立即执行，立即执行的意思是先执行再等待，会出现wait时间内连续点击两次，第二次无效的情况</span>
<span class="token keyword">function</span> <span class="token function">immediateDebounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> context <span class="token operator">=</span> <span class="token keyword">this</span>
        <span class="token keyword">var</span> args <span class="token operator">=</span> arguments
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
            flag <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
        timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            flag <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 第一次点击立即执行，接下来防抖（比较符合场景）</span>
<span class="token keyword">function</span> <span class="token function">firstImmediateDebounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> immediate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> context <span class="token operator">=</span> <span class="token keyword">this</span>
        <span class="token keyword">var</span> args <span class="token operator">=</span> arguments
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>immediate <span class="token operator">&amp;&amp;</span> count <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
            count<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
                count<span class="token operator">++</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="节流代码实现" tabindex="-1"><a class="header-anchor" href="#节流代码实现" aria-hidden="true">#</a> 节流代码实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 节流：时间戳写法</span>
<span class="token keyword">function</span> <span class="token function">throttle1</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> oldTime <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>now <span class="token operator">-</span> oldTime <span class="token operator">&gt;=</span> wait<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> context <span class="token operator">=</span> <span class="token keyword">this</span>
            <span class="token keyword">var</span> args <span class="token operator">=</span> arguments
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
            oldTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 节流：定时器写法</span>
<span class="token keyword">function</span> <span class="token function">throttle2</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> canExec <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">var</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>canExec<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            canExec <span class="token operator">=</span> <span class="token boolean">false</span>
            <span class="token keyword">var</span> context <span class="token operator">=</span> <span class="token keyword">this</span>
            <span class="token keyword">var</span> args <span class="token operator">=</span> arguments
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
            timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                canExec <span class="token operator">=</span> <span class="token boolean">true</span>
                <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","js-debounce-throttle.html.vue"]]);export{r as default};
