import{_ as n,o as s,c as a,a as t}from"./app-5b0f25a8.js";const e={},p=t(`<h1 id="a-b-c和a-b-c-哪个性能更高" tabindex="-1"><a class="header-anchor" href="#a-b-c和a-b-c-哪个性能更高" aria-hidden="true">#</a> a.b.c和a[&#39;b&#39;][&#39;c&#39;]哪个性能更高</h1><p>个人理解应该是 a.b.c 比 a[&#39;b&#39;][&#39;c&#39;] 性能高点，后者还要考虑 [ ] 中是变量的情况，</p><p>再者，从两种形式的结构来看，显然编译器解析前者要比后者容易些，自然也就快一点</p><p>构造深层数据结构测试一下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 构造深层对象，{&quot;key&quot;:{&quot;key&quot;:{&quot;key&quot;:{&quot;key&quot;:{&quot;key&quot;:{&quot;key&quot;:{&quot;key&quot;:&quot;here&quot;}}}}}}}</span>
<span class="token keyword">function</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token parameter">times</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> temp <span class="token operator">=</span> obj
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>times<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> t <span class="token operator">=</span> temp<span class="token punctuation">[</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">]</span>
        t<span class="token punctuation">[</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        temp <span class="token operator">=</span> t
    <span class="token punctuation">}</span>
    temp<span class="token punctuation">[</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;here&#39;</span>
    <span class="token comment">// console.log(JSON.stringify(obj));</span>

    <span class="token comment">// 访问obj.key.key...</span>
    console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&#39;a.key&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> o1 <span class="token operator">=</span> obj
    <span class="token keyword">while</span><span class="token punctuation">(</span>o1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>o1 <span class="token operator">===</span> <span class="token string">&#39;here&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        o1 <span class="token operator">=</span> o1<span class="token punctuation">.</span>key
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&#39;a.key&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">// 访问obj[&#39;key&#39;][&#39;key&#39;]</span>
    console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">a[&#39;key&#39;]</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> o2 <span class="token operator">=</span> obj
    <span class="token keyword">while</span><span class="token punctuation">(</span>o2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>o2 <span class="token operator">===</span> <span class="token string">&#39;here&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        o2 <span class="token operator">=</span> o2<span class="token punctuation">[</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">a[&#39;key&#39;]</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">compare</span><span class="token punctuation">(</span><span class="token number">5000000</span><span class="token punctuation">)</span>
<span class="token comment">// a.key: 81.062ms</span>
<span class="token comment">// a[&#39;key&#39;]: 93.266ms</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(i,l){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","js-abc.html.vue"]]);export{k as default};
