import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const t={},e=p(`<h1 id="js实现深拷贝" tabindex="-1"><a class="header-anchor" href="#js实现深拷贝" aria-hidden="true">#</a> JS实现深拷贝</h1><blockquote><p>注意解决<code>循环引用</code>问题</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 记录处理过的对象，解决循环引用问题</span>
    <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">function</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 其他类型，如字符串、数字的直接返回</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> obj
        <span class="token punctuation">}</span>

        <span class="token comment">// 循环引用了，之前已经处理过，直接返回</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 判断是数组还是对象</span>
        <span class="token keyword">let</span> newObj <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token comment">// 记录处理过的对象</span>
        map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> newObj<span class="token punctuation">)</span> <span class="token comment">// 注意不能写在for循环后面</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            newObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">clone</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> newObj
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">clone</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
obj<span class="token punctuation">.</span>o <span class="token operator">=</span> obj
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","js-deepclone.html.vue"]]);export{r as default};
