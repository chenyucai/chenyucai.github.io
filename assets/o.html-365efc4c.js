import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const e={},t=p(`<h1 id="算法复杂度" tabindex="-1"><a class="header-anchor" href="#算法复杂度" aria-hidden="true">#</a> 算法复杂度</h1><h2 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h2><p>用来定义描述算法的运行时间</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// O(1)</span>
<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>
i <span class="token operator">+=</span> <span class="token number">1</span>

<span class="token comment">// O(n)：一层循环，如果是 O(1) + O(n) 则还是 O(n)</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// O(n^2)： 等于O(n*n)，也就是双层循环，自此类推：O(n^3)...</span>
<span class="token comment">// 如果第二层循环换成j&lt;m,那就是O(n*m)</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 线性对数阶O(nlogN)：将时间复杂度为O(logn)的代码循环N遍的话，</span>
<span class="token comment">// 那么它的时间复杂度就是 n * O(logN)，也就是了O(nlogN)。</span>
<span class="token comment">// O(logn)</span>
<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    i <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//  n * O(logN)，也就是了O(nlogN)</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度" aria-hidden="true">#</a> 空间复杂度</h2><p>用来定义描述算法运行过程中临时占用的存储空间大小，占用越少，代码写得越好。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// O(1)：单个变量，所以占用永远是 O(1)</span>
<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>
i <span class="token operator">+=</span> <span class="token number">1</span>

<span class="token comment">// O(n)：声明一个数组， 添加 n 个值， 相当于占用了 n 个空间单元</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// O(n^2)：类似一个矩阵的概念，就是二维数组的意思</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","o.html.vue"]]);export{r as default};
