import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const e={},t=p(`<h1 id="_2-两数相加" tabindex="-1"><a class="header-anchor" href="#_2-两数相加" aria-hidden="true">#</a> 2.两数相加</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token punctuation">(</span>next <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> next<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">addTwoNumbers</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> prehead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> prehead
    <span class="token comment">// 遍历两个链表进行相加</span>
    <span class="token keyword">let</span> p1 <span class="token operator">=</span> l1
    <span class="token keyword">let</span> p2 <span class="token operator">=</span> l2
    <span class="token keyword">let</span> plus <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 相加超过9就进1</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>p1 <span class="token operator">||</span> p2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> num1 <span class="token operator">=</span> p1 <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> p1<span class="token punctuation">.</span>val <span class="token operator">:</span> <span class="token number">0</span>
        <span class="token keyword">let</span> num2 <span class="token operator">=</span> p2 <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> p2<span class="token punctuation">.</span>val <span class="token operator">:</span> <span class="token number">0</span>
        <span class="token keyword">let</span> result <span class="token operator">=</span> num1 <span class="token operator">+</span> num2 <span class="token operator">+</span> plus
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>result <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span>
        plus <span class="token operator">=</span> result <span class="token operator">&gt;</span> <span class="token number">9</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span>

        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            p1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            p2 <span class="token operator">=</span> p2<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 最后再看有没有进1</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>plus <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> prehead<span class="token punctuation">.</span>next
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 输入：l1 = [2,4,3], l2 = [5,6,4]</span>
<span class="token comment">// 输出：[7,0,8]</span>
<span class="token comment">// 解释：342 + 465 = 807.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function c(l,i){return s(),a("div",null,o)}const u=n(e,[["render",c],["__file","2.html.vue"]]);export{u as default};
