import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const t={},e=p(`<h1 id="_59-螺旋矩阵2" tabindex="-1"><a class="header-anchor" href="#_59-螺旋矩阵2" aria-hidden="true">#</a> 59.螺旋矩阵2</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">generateMatrix</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 很妙的解法！</span>
    <span class="token comment">// 设置边界top,bottom,left,right</span>
    <span class="token comment">// 按右、下、左、上 顺序遍历，边界缩小</span>
    <span class="token comment">// 初始化边界值</span>
    <span class="token keyword">let</span> top <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token keyword">let</span> bottom <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">let</span> matrix <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;=</span> n <span class="token operator">*</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 右</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> left<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            matrix<span class="token punctuation">[</span>top<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> num
            num<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        top<span class="token operator">++</span> <span class="token comment">// 最上面一层填完了，缩小上边界</span>

        <span class="token comment">// 下</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> top<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> bottom<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> num
            num<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        right<span class="token operator">--</span> <span class="token comment">// 最右边一层填完了，缩小右边界</span>

        <span class="token comment">// 左</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> right<span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> left<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            matrix<span class="token punctuation">[</span>bottom<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> num
            num<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        bottom<span class="token operator">--</span> <span class="token comment">// 最下面一层填完了，缩小下边界</span>

        <span class="token comment">// 上</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> bottom<span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> top<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> num
            num<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        left<span class="token operator">++</span> <span class="token comment">// 最左边一层填完了，缩小左边界</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> matrix
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","59.html.vue"]]);export{r as default};
