import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const t={},e=p(`<h1 id="_88-合并两个有序数组" tabindex="-1"><a class="header-anchor" href="#_88-合并两个有序数组" aria-hidden="true">#</a> 88.合并两个有序数组</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">m</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums2</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify nums1 in-place instead.
 */</span>
<span class="token comment">// 双指针解法，每次从两个数组头部中取出比较小的数字放入结果中</span>
<span class="token keyword">var</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> m<span class="token punctuation">,</span> nums2<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> p1 <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">var</span> p2 <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">var</span> sortedArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> currIndex <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>p1 <span class="token operator">&lt;</span> m <span class="token operator">||</span> p2 <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 考虑两个数组不是等长</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p1 <span class="token operator">===</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sortedArr<span class="token punctuation">[</span>currIndex<span class="token punctuation">]</span> <span class="token operator">=</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span>
            p2<span class="token operator">++</span>
            currIndex<span class="token operator">++</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p2 <span class="token operator">===</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sortedArr<span class="token punctuation">[</span>currIndex<span class="token punctuation">]</span> <span class="token operator">=</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span>
            p1<span class="token operator">++</span>
            currIndex<span class="token operator">++</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sortedArr<span class="token punctuation">[</span>currIndex<span class="token punctuation">]</span> <span class="token operator">=</span> nums1<span class="token punctuation">[</span>p1<span class="token punctuation">]</span>
            p1<span class="token operator">++</span>
            currIndex<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            sortedArr<span class="token punctuation">[</span>currIndex<span class="token punctuation">]</span> <span class="token operator">=</span> nums2<span class="token punctuation">[</span>p2<span class="token punctuation">]</span>
            p2<span class="token operator">++</span>
            currIndex<span class="token operator">++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> sortedArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> sortedArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nums1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 先合并数组，再排序</span>
<span class="token keyword">var</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> m<span class="token punctuation">,</span> nums2<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nums1<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> nums1<span class="token punctuation">.</span>length <span class="token operator">-</span> m<span class="token punctuation">,</span> <span class="token operator">...</span>nums2<span class="token punctuation">)</span>
    nums1<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nums1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例 1：</span>
<span class="token comment">// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3</span>
<span class="token comment">// 输出：[1,2,2,3,5,6]</span>
<span class="token comment">// 解释：需要合并 [1,2,3] 和 [2,5,6] 。</span>
<span class="token comment">// 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。</span>
<span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

<span class="token comment">// 示例 2：</span>
<span class="token comment">// 输入：nums1 = [1], m = 1, nums2 = [], n = 0</span>
<span class="token comment">// 输出：[1]</span>
<span class="token comment">// 解释：需要合并 [1] 和 [] 。</span>
<span class="token comment">// 合并结果是 [1] 。</span>
<span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">// 示例 3：</span>
<span class="token comment">// 输入：nums1 = [0], m = 0, nums2 = [1], n = 1</span>
<span class="token comment">// 输出：[1]</span>
<span class="token comment">// 解释：需要合并的数组是 [] 和 [1] 。</span>
<span class="token comment">// 合并结果是 [1] 。</span>
<span class="token comment">// 注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。</span>
<span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,u){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","88.html.vue"]]);export{r as default};
