import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const e={},t=p(`<h1 id="判断两个对象是否相等" tabindex="-1"><a class="header-anchor" href="#判断两个对象是否相等" aria-hidden="true">#</a> 判断两个对象是否相等</h1><p>思路：</p><ol><li>首先判断两个比较的对象是不是Object</li><li>如果都是对象，再比较两个对象的长度是否相等</li><li>如果长度相等，再比较对象的属性是否相等</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">compareObject</span><span class="token punctuation">(</span><span class="token parameter">obj1<span class="token punctuation">,</span> obj2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj1 <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> obj2 <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> attrs1 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>
    <span class="token keyword">const</span> attrs2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>attrs1<span class="token punctuation">.</span>length <span class="token operator">!==</span> attrs2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> o1 <span class="token operator">=</span> <span class="token keyword">typeof</span> obj1<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span>
        <span class="token keyword">let</span> o2 <span class="token operator">=</span> <span class="token keyword">typeof</span> obj2<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span>
        <span class="token comment">// 如果都是对象，继续递归比较</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>o1 <span class="token operator">&amp;&amp;</span> o2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">compareObject</span><span class="token punctuation">(</span>obj1<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> obj2<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果不是对象，就比较它们的值</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>obj1<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">!==</span> obj2<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 别忘了如果全部循环都没有出现false，最后记得return ture</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&#39;12&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">objs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">&#39;eee&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;3&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&#39;12&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">objs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">&#39;eee&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;3&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token function">compareObject</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> obj2<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[t];function c(l,i){return s(),a("div",null,o)}const u=n(e,[["render",c],["__file","js-check-object.html.vue"]]);export{u as default};
