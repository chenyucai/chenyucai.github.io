import{_ as n,o as s,c as a,a as t}from"./app-5b0f25a8.js";const e={},p=t(`<h1 id="_21-合并两个有序链表" tabindex="-1"><a class="header-anchor" href="#_21-合并两个有序链表" aria-hidden="true">#</a> 21.合并两个有序链表</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>

<span class="token keyword">function</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token punctuation">(</span>next <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> next<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">list1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">list2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mergeTwoLists</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">list1<span class="token punctuation">,</span> list2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> prehead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> prev <span class="token operator">=</span> prehead
    <span class="token keyword">while</span><span class="token punctuation">(</span>list1 <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">||</span> list2<span class="token operator">!==</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>list1 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            prev<span class="token punctuation">.</span>next <span class="token operator">=</span> list2
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>list2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            prev<span class="token punctuation">.</span>next <span class="token operator">=</span> list1
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>list1<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> list2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            prev<span class="token punctuation">.</span>next <span class="token operator">=</span> list1
            list1 <span class="token operator">=</span> list1<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            prev<span class="token punctuation">.</span>next <span class="token operator">=</span> list2
            list2 <span class="token operator">=</span> list2<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>
        prev <span class="token operator">=</span> prev<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> prehead<span class="token punctuation">.</span>next
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">mergeTwoLists</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">list1<span class="token punctuation">,</span> list2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>list1 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> list2
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>list2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> list1
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>list1<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span>list2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        list1<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>list1<span class="token punctuation">.</span>next<span class="token punctuation">,</span> list2<span class="token punctuation">)</span>
        <span class="token keyword">return</span> list1
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        list2<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>list1<span class="token punctuation">,</span> list2<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
        <span class="token keyword">return</span> list2
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 输入：l1 = [1,2,4], l2 = [1,3,4]</span>
<span class="token comment">// 输出：[1,1,2,3,4,4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function l(c,i){return s(),a("div",null,o)}const r=n(e,[["render",l],["__file","21.html.vue"]]);export{r as default};
