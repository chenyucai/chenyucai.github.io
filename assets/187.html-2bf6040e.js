import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const t={},e=p(`<h1 id="_187-重复的dna序列" tabindex="-1"><a class="header-anchor" href="#_187-重复的dna序列" aria-hidden="true">#</a> 187.重复的DNA序列</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findRepeatedDnaSequences</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// map记录所有长度为10的字符串</span>
    <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> str <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
        <span class="token comment">// 长度小于10</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">[</span>str<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            map<span class="token punctuation">[</span>str<span class="token punctuation">]</span><span class="token operator">++</span>

        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            map<span class="token punctuation">[</span>str<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token comment">// 滑动窗口+哈希</span>
<span class="token keyword">var</span> <span class="token function-variable function">findRepeatedDnaSequences</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义两根指针控制窗口大小</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token comment">// 记录长度为10的字符串出现的次数</span>
    <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        right<span class="token operator">++</span>

        <span class="token comment">// 长度为10的字符串，为什么是9不是10，比如1-10有10个字符，10-1=9</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left <span class="token operator">===</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// console.log(left, right)</span>
            <span class="token keyword">let</span> str <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">[</span>str<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                map<span class="token punctuation">[</span>str<span class="token punctuation">]</span><span class="token operator">++</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">[</span>str<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 记录一次就行了，</span>
                    res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                map<span class="token punctuation">[</span>str<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
            left<span class="token operator">++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>


console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">findRepeatedDnaSequences</span><span class="token punctuation">(</span><span class="token string">&quot;AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","187.html.vue"]]);export{k as default};
