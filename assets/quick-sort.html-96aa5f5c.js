import{_ as n,o as s,c as a,a as t}from"./app-5b0f25a8.js";const p="/images/quick-sort-1.png",e={},c=t('<h1 id="快速排序" tabindex="-1"><a class="header-anchor" href="#快速排序" aria-hidden="true">#</a> 快速排序</h1><h2 id="out-place-空间复杂度高" tabindex="-1"><a class="header-anchor" href="#out-place-空间复杂度高" aria-hidden="true">#</a> Out-Place（空间复杂度高）</h2><h3 id="out-place实现原理" tabindex="-1"><a class="header-anchor" href="#out-place实现原理" aria-hidden="true">#</a> Out-Place实现原理</h3><p>易理解，但空间复杂度高</p><p>快速排序用的是分治的思想</p><ol><li>首先设定一个分界值，通过该分界值将数组分成左右两部分。</li><li>将大于或等于分界值的数据集中到数组右边，小于分界值的数据集中到数组的左边。此时，左边部分中各元素都小于或等于分界值，而右边部分中各元素都大于或等于分界值。</li><li>然后，左边和右边的数据可以独立排序。对于左侧的数组数据，又可以取一个分界值，将该部分数据分成左右两部分，同样在左边放置较小值，右边放置较大值。右侧的数组数据也可以做类似处理。</li><li>重复上述过程，可以看出，这是一个递归定义。通过递归将左侧部分排好序后，再递归排好右侧部分的顺序。当左、右两个部分各数据排序完成后，整个数组的排序也就完成了。</li></ol><p><img src="'+p+`" alt="1"></p><h3 id="out-place代码实现" tabindex="-1"><a class="header-anchor" href="#out-place代码实现" aria-hidden="true">#</a> Out-Place代码实现</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 快速排序
 */</span>
<span class="token keyword">function</span> <span class="token function">quickSortOutPlace</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">function</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 递归终止条件</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 先找分界值，然后比分界值小的放左边数组，大的放右边</span>
        <span class="token keyword">let</span> x <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 分界值</span>
        <span class="token comment">// 定义了两个数组，空间复杂度较大</span>
        <span class="token keyword">let</span> leftArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> 
        <span class="token keyword">let</span> rightArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                leftArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                rightArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token function">sort</span><span class="token punctuation">(</span>leftArr<span class="token punctuation">)</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token function">sort</span><span class="token punctuation">(</span>rightArr<span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">quickSortOutPlace</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="in-place-空间复杂度低" tabindex="-1"><a class="header-anchor" href="#in-place-空间复杂度低" aria-hidden="true">#</a> In-Place（空间复杂度低）</h2><h3 id="in-place实现原理" tabindex="-1"><a class="header-anchor" href="#in-place实现原理" aria-hidden="true">#</a> In-place实现原理</h3><p>所谓快速排序，就是分为三步走：</p><p>第一步：选择第一个数字分离出来为基数</p><p>第二步：然后将序列中大于基数的放在基数右边，小于基数的放在基数的左边</p><p>第三步：然后对基数的左边和右边两个序列重复第二步和第三步</p><h3 id="in-place代码实现" tabindex="-1"><a class="header-anchor" href="#in-place代码实现" aria-hidden="true">#</a> In-Place代码实现</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 快速排序
 * in-place，空间复杂度低
 */</span>
<span class="token keyword">function</span> <span class="token function">quickSortInPlace</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 对区间[start, end]排序</span>
    <span class="token keyword">function</span> <span class="token function">sortInPlace</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&gt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 递归结束条件</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 1.选择第一个数作为基数</span>
        <span class="token keyword">let</span> x <span class="token operator">=</span> nums<span class="token punctuation">[</span>start<span class="token punctuation">]</span>
        <span class="token comment">// 2.定义两根指针</span>
        <span class="token keyword">let</span> i <span class="token operator">=</span> start
        <span class="token keyword">let</span> j <span class="token operator">=</span> end
        <span class="token comment">// 3.注意一定是j先移动，j遇到比基数小的元素就停下来，然后把元素值赋给i的元素；</span>
        <span class="token comment">// 然后i移动，遇到比基数大的元素就停下来，然后把元素值赋给j；</span>
        <span class="token comment">// 然后j移动...以此类推</span>
        <span class="token comment">// 到i==j时，这个位置就是基数的位置</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 注意一定是j先移动，遇到比基数小的元素就停下来</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                j<span class="token operator">--</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 把元素值赋给i的元素</span>
            nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span>

            <span class="token comment">// 然后到i移动</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                i<span class="token operator">++</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 把元素值赋给j的元素</span>
            nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 最后i==j时，就是基数的位置</span>
        nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> x

        <span class="token comment">// 然后把基数左右两部分继续递归排序</span>
        <span class="token function">sortInPlace</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> start<span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 基数左边部分</span>
        <span class="token function">sortInPlace</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span> <span class="token comment">// 基数右边部分</span>

        <span class="token keyword">return</span> nums
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">sortInPlace</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[c];function i(l,u){return s(),a("div",null,o)}const k=n(e,[["render",i],["__file","quick-sort.html.vue"]]);export{k as default};
