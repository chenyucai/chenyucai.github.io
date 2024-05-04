import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const t={},e=p(`<h1 id="_169-多数元素" tabindex="-1"><a class="header-anchor" href="#_169-多数元素" aria-hidden="true">#</a> 169.多数元素</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">majorityElement</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> countMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    nums<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">n</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>countMap<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            countMap<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            countMap<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> countMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> countMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> countMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>countMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> key
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">majorityElement</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 投票法，时间复杂度O(n),空间复杂度O(1)</span>
    <span class="token comment">// 因为多数元素在数组里出现的次数绝对大于n/2，所以用不同元素消去相同元素，剩下的必然是相同元素</span>
    <span class="token keyword">let</span> candidate <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// 投票对象</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// 投票数</span>
    <span class="token comment">// 遍历投票对象</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> candidate<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//投票对象相同，票数+1</span>
            count<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 投票对象不同，票数-1</span>
            count<span class="token operator">--</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//该元素不是多数元素，更新投票对象candidate并把票数置1</span>
                candidate <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
                count <span class="token operator">=</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> candidate
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","169.html.vue"]]);export{k as default};
