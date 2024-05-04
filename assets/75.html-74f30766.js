import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const t={},e=p(`<h1 id="_75-颜色分类" tabindex="-1"><a class="header-anchor" href="#_75-颜色分类" aria-hidden="true">#</a> 75.颜色分类</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify nums in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sortColors</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 快速排序</span>
    <span class="token keyword">function</span> <span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> x <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 分界值</span>
        <span class="token keyword">let</span> leftArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">let</span> rightArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                leftArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                rightArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token function">quickSort</span><span class="token punctuation">(</span>leftArr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token function">quickSort</span><span class="token punctuation">(</span>rightArr<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 插入排序</span>
    <span class="token keyword">function</span> <span class="token function">insertSort</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 假设第一个数是排好序的</span>
        <span class="token comment">// 未排序的对已经排序的数从后往前扫，找合适位置插入</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> cur <span class="token operator">=</span> i
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 交换位置</span>
                    <span class="token keyword">let</span> temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
                    nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>cur<span class="token punctuation">]</span>
                    nums<span class="token punctuation">[</span>cur<span class="token punctuation">]</span> <span class="token operator">=</span> temp
                    cur <span class="token operator">=</span> j
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 插入</span>
                    <span class="token keyword">break</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> nums
    <span class="token punctuation">}</span>

    <span class="token function">insertSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
    <span class="token keyword">return</span> nums
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 单指针</span>
<span class="token keyword">var</span> <span class="token function-variable function">sortColors</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> temp <span class="token operator">=</span> a
        a <span class="token operator">=</span> b
        b <span class="token operator">=</span> temp
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token comment">// 分两次循环</span>
    <span class="token comment">// 第一次循环把所有的0放到头部</span>
    <span class="token comment">// 第二次循环把所有的1放到0的后面，那么2自然就会在尾部了</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>p<span class="token punctuation">]</span>
            nums<span class="token punctuation">[</span>p<span class="token punctuation">]</span> <span class="token operator">=</span> temp
            p<span class="token operator">++</span> <span class="token comment">// 向后扩充一个位置</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> p<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>p<span class="token punctuation">]</span>
            nums<span class="token punctuation">[</span>p<span class="token punctuation">]</span> <span class="token operator">=</span> temp
            p<span class="token operator">++</span> <span class="token comment">// 向后扩充一个位置</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> nums
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sortColors</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","75.html.vue"]]);export{k as default};
