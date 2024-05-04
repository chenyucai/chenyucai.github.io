import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const t={},e=p(`<h1 id="_43-字符串相乘" tabindex="-1"><a class="header-anchor" href="#_43-字符串相乘" aria-hidden="true">#</a> 43.字符串相乘</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">num1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">num2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token doc-comment comment">/**
    * 计算形式
    *    num1
    *  x num2
    *  ------
    *  result
    */</span>
<span class="token keyword">var</span> <span class="token function-variable function">multiply</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>num1 <span class="token operator">===</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">||</span> num2 <span class="token operator">===</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;0&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 模拟乘法的过程，从个位数开始相乘</span>
    <span class="token comment">// 需要用一个数组存，直接计算可能会超过int类型长度</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> num1<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> subSum <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> num2<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> n1 <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>num1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">let</span> n2 <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>num2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token punctuation">(</span>n1 <span class="token operator">*</span> n2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">===</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">continue</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">let</span> needZero <span class="token operator">=</span> <span class="token punctuation">(</span>num1<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num2<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> j<span class="token punctuation">)</span>
            <span class="token comment">// 补0</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> needZero<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                num <span class="token operator">+=</span> <span class="token string">&#39;0&#39;</span>
            <span class="token punctuation">}</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
            <span class="token comment">// 使用两个字符串的加法</span>
            subSum <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span>subSum<span class="token punctuation">,</span> num<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        sum <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> subSum<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 两个字符串相加, 因为字符串长度会很长，可能超过int类型长度</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">str1<span class="token punctuation">,</span> str2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>str1 <span class="token operator">===</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> str2
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>str2 <span class="token operator">===</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> str1
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> prefix <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 进1</span>
    <span class="token comment">// 从个位数开始相加</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> str1<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> str2<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">||</span> prefix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> n1 <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> n2 <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>str2<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> result <span class="token operator">=</span> n1 <span class="token operator">+</span> n2 <span class="token operator">+</span> prefix
        <span class="token keyword">let</span> num <span class="token operator">=</span> result <span class="token operator">%</span> <span class="token number">10</span>
        prefix <span class="token operator">=</span> result <span class="token operator">&gt;</span> <span class="token number">9</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span>
        res <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>res<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>

        i<span class="token operator">--</span>
        j<span class="token operator">--</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token comment">// console.log(multiply(&#39;18&#39;, &#39;18&#39;))</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token string">&quot;123456789&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;987654321&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// console.log(add(&#39;18&#39;, &#39;19&#39;))</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","43.html.vue"]]);export{r as default};
