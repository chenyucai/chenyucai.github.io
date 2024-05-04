import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const e={},t=p(`<h1 id="_121-买卖股票的最佳时机" tabindex="-1"><a class="header-anchor" href="#_121-买卖股票的最佳时机" aria-hidden="true">#</a> 121.买卖股票的最佳时机</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">prices</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>

<span class="token comment">// 暴力解法，超时</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxProfit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">prices</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> max <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token comment">// 求每天买入的最大收入</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> profit <span class="token operator">=</span> prices<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> profit<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> max
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">var</span> <span class="token function-variable function">maxProfit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">prices</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 只需要遍历价格数组一遍，记录历史最低点，</span>
    <span class="token comment">// 然后在每一天考虑这么一个问题：如果我是在历史最低点买进的，那么我今天卖出能赚多少钱？</span>
    <span class="token comment">// 当考虑完所有天数之时，我们就得到了最好的答案</span>
    <span class="token keyword">var</span> minPrice <span class="token operator">=</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span>
    <span class="token keyword">var</span> maxprofit <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> minPrice<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            minPrice <span class="token operator">=</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 当天价格高的时候才卖出</span>
            maxprofit <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> minPrice<span class="token punctuation">,</span> maxprofit<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> maxprofit
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 示例 1：</span>
<span class="token comment">// 输入：[7,1,5,3,6,4]</span>
<span class="token comment">// 输出：5</span>
<span class="token comment">// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。</span>
<span class="token comment">//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">maxProfit</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 示例 2：</span>
<span class="token comment">// 输入：prices = [7,6,4,3,1]</span>
<span class="token comment">// 输出：0</span>
<span class="token comment">// 解释：在这种情况下, 没有交易完成, 所以最大利润为 0。</span>
<span class="token comment">// console.log(maxProfit([7, 6, 4, 3, 1]))</span>

<span class="token comment">// console.log(maxProfit([2, 4, 1]))</span>

<span class="token comment">// console.log(maxProfit([3,2,6,5,0,3]));</span>
<span class="token comment">// console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]))</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","121.html.vue"]]);export{r as default};
