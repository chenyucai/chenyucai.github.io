import{_ as n,o as s,c as a,a as e}from"./app-5b0f25a8.js";const t={},p=e(`<h1 id="_92-反转链表2" tabindex="-1"><a class="header-anchor" href="#_92-反转链表2" aria-hidden="true">#</a> 92.反转链表2</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">left</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">right</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseBetween</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 分成三部分，前面部分，中间反转部分，后面部分</span>
    <span class="token comment">// 找出left到right的节点进行反转，再和前后两段拼接</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> cur <span class="token operator">=</span> head
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">let</span> leftNode
    <span class="token keyword">let</span> rightNode
    <span class="token keyword">let</span> prePartTail <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">let</span> nextPartHead <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            prePartTail <span class="token operator">=</span> cur
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            leftNode <span class="token operator">=</span> cur
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            rightNode <span class="token operator">=</span> cur
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            nextPartHead <span class="token operator">=</span> cur
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
        count<span class="token operator">++</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> tail <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token keyword">let</span> cur <span class="token operator">=</span> head
        <span class="token keyword">let</span> pre <span class="token operator">=</span> tail
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre
            pre <span class="token operator">=</span> cur
            cur <span class="token operator">=</span> next
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> pre
    <span class="token punctuation">}</span>

    rightNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// 切断连接</span>
    <span class="token keyword">let</span> midPartHead <span class="token operator">=</span> <span class="token function">reverse</span><span class="token punctuation">(</span>leftNode<span class="token punctuation">)</span>
    <span class="token keyword">let</span> midPartTail <span class="token operator">=</span> midPartHead
    <span class="token keyword">while</span> <span class="token punctuation">(</span>midPartTail<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        midPartTail <span class="token operator">=</span> midPartTail<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> resHead
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prePartTail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        prePartTail<span class="token punctuation">.</span>next <span class="token operator">=</span> midPartHead
        resHead <span class="token operator">=</span> head
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        resHead <span class="token operator">=</span> midPartHead <span class="token comment">// 说明从head开始就要反转</span>
    <span class="token punctuation">}</span>

    midPartTail<span class="token punctuation">.</span>next <span class="token operator">=</span> nextPartHead

    <span class="token keyword">return</span> resHead
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[p];function o(i,c){return s(),a("div",null,l)}const u=n(t,[["render",o],["__file","92.html.vue"]]);export{u as default};
