import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const t={},e=p(`<h1 id="_946-验证栈序列" tabindex="-1"><a class="header-anchor" href="#_946-验证栈序列" aria-hidden="true">#</a> 946.验证栈序列</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">pushed</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">popped</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">validateStackSequences</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">pushed<span class="token punctuation">,</span> popped</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义一个栈，不断的往里面入栈元素，当遇到可以出栈的元素，先把该元素出栈，再继续其他元素入栈</span>
    <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>pushed<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 先入栈</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>pushed<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token comment">// 每次获取栈顶元素，与popped相比看是否符合出栈</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> top <span class="token operator">=</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>top <span class="token operator">===</span> popped<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 符合出栈，先出栈</span>
                stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                popped<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 否则继续执行入栈操作</span>
                <span class="token keyword">break</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","946.html.vue"]]);export{k as default};
