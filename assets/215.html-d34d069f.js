import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const t={},e=p(`<h1 id="_215-数组中的第k个最大元素" tabindex="-1"><a class="header-anchor" href="#_215-数组中的第k个最大元素" aria-hidden="true">#</a> 215.数组中的第K个最大元素</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findKthLargest</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 基于桶排序</span>
    <span class="token keyword">const</span> sorted <span class="token operator">=</span> <span class="token function">bucketSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
    <span class="token keyword">return</span> sorted<span class="token punctuation">[</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 桶排序，时间复杂度O(n)
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span> 
 */</span>
<span class="token keyword">function</span> <span class="token function">bucketSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 1.确定桶容量</span>
    <span class="token keyword">const</span> bucketSize <span class="token operator">=</span> arr<span class="token punctuation">.</span>length

    <span class="token comment">// 2.确定最小值最大值</span>
    <span class="token keyword">const</span> min <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span>
    <span class="token keyword">const</span> max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span>

    <span class="token comment">// 3.确定桶数量</span>
    <span class="token keyword">const</span> bucketCount <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>max <span class="token operator">-</span> min<span class="token punctuation">)</span> <span class="token operator">/</span> bucketSize<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">const</span> buckets <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>bucketCount<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token comment">// 4.确定每个元素放到哪个桶</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> pos <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> min<span class="token punctuation">)</span> <span class="token operator">/</span> bucketSize<span class="token punctuation">)</span>
        buckets<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 5.对每个桶进行排序，这里升序</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> buckets<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        buckets<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 6.合并桶</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> buckets<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>buckets<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 这里结果要降序</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findKthLargest</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 基于快速排序</span>
    <span class="token comment">// 我们知道快速排序基准值q将数组a[l...r]划分成左右两个子数组，a[l...q-1]和a[q+1...r]</span>
    <span class="token comment">// 每次划分都能确定基准值q的最终位置，所以我们只需要在某次划分的时候基准值q为倒数第k个下标的时候，我们就找到答案了。</span>
    <span class="token comment">// q的下标小于nums.length-k时在基准值右边的数组找，大于nums.length-k时在左边的数组找</span>

    <span class="token comment">// 定义区间[start, end]，在区间找目标数</span>
    <span class="token keyword">function</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&gt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 递归结束条件</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 取第一个数作为基数，然后把区间划分为左右两部分</span>
        <span class="token keyword">let</span> x <span class="token operator">=</span> nums<span class="token punctuation">[</span>start<span class="token punctuation">]</span>
        <span class="token comment">// 定义两根指针，把比基数小的放到左边，把比基数大的放到右边</span>
        <span class="token keyword">let</span> i <span class="token operator">=</span> start
        <span class="token keyword">let</span> j <span class="token operator">=</span> end
        <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 一定是j先移动，遇到比基数小的元素就停止</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                j<span class="token operator">--</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 然后把元素值赋给i</span>
            nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span>

            <span class="token comment">// 然后到i移动，遇到比基数大的元素就停止</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                i<span class="token operator">++</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 然后把元素值赋给j</span>
            nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 最后i==j，这个位置就是基数的下标</span>
        <span class="token keyword">let</span> index <span class="token operator">=</span> i <span class="token comment">// 基数的下标</span>
        nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> x

        <span class="token comment">// 第k大数就是倒数第k个元素</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// q小了，就往右边找</span>
            <span class="token keyword">return</span> <span class="token function">search</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// q大了，就往左边找</span>
            <span class="token keyword">return</span> <span class="token function">search</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))</span>
<span class="token comment">// console.log(findKthLargest([1], 1))</span>
<span class="token comment">// console.log(findKthLargest([99, 99], 1))</span>
<span class="token comment">// console.log(findKthLargest([2, 1], 2))</span>
<span class="token comment">// console.log(findKthLargest([5, 2, 4, 1, 3, 6, 0], 4))</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">findKthLargest</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","215.html.vue"]]);export{k as default};
