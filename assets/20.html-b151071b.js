import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const t={},e=p(`<h1 id="_20-有效的括号" tabindex="-1"><a class="header-anchor" href="#_20-有效的括号" aria-hidden="true">#</a> 20.有效的括号</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 给定一个只包括 &#39;(&#39;，&#39;)&#39;，&#39;<span class="token punctuation">{</span>&#39;，&#39;<span class="token punctuation">}</span>&#39;，&#39;[&#39;，&#39;]&#39; 的字符串 s ，判断字符串是否有效。
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// 如果长度不是2的倍数</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> rightToLeft <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;)&#39;</span><span class="token operator">:</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;]&#39;</span><span class="token operator">:</span> <span class="token string">&#39;[&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;}&#39;</span><span class="token operator">:</span> <span class="token string">&#39;{&#39;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> s <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// 如果是左括号,入栈</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;(&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;[&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;{&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 如果是右括号，和栈最后一个元素比较是否匹配</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;)&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;]&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;}&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> left <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">===</span> rightToLeft<span class="token punctuation">[</span>s<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">continue</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// 如果长度不是2的倍数</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> rightToLeft <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;)&#39;</span><span class="token operator">:</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;]&#39;</span><span class="token operator">:</span> <span class="token string">&#39;[&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;}&#39;</span><span class="token operator">:</span> <span class="token string">&#39;{&#39;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> s <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> left <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">!==</span> rightToLeft<span class="token punctuation">[</span>s<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isValid</span><span class="token punctuation">(</span><span class="token string">&quot;()[]{}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isValid</span><span class="token punctuation">(</span><span class="token string">&quot;{[]}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isValid</span><span class="token punctuation">(</span><span class="token string">&quot;([)]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","20.html.vue"]]);export{k as default};
