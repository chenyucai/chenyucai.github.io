import{_ as n,o as s,c as a,a as e}from"./app-5b0f25a8.js";const p={},t=e(`<h1 id="_160-相交链表" tabindex="-1"><a class="header-anchor" href="#_160-相交链表" aria-hidden="true">#</a> 160.相交链表</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) <span class="token punctuation">{</span>
 *     this.val = val;
 *     this.next = null;
 * <span class="token punctuation">}</span>
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">headA</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">headB</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">getIntersectionNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">headA<span class="token punctuation">,</span> headB</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 哈希表记录节点</span>
    <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> headA
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    cur <span class="token operator">=</span> headB
    <span class="token comment">// map中存在的第一个节点即为相交节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> cur
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">headA</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">headB</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token comment">// 内存优化，双指针</span>
<span class="token keyword">var</span> <span class="token function-variable function">getIntersectionNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">headA<span class="token punctuation">,</span> headB</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>headA <span class="token operator">||</span> <span class="token operator">!</span>headB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// a走完走b，b走完走a，他们会在公共点相遇，如果没有公共点，他们最后同时为null</span>
    <span class="token keyword">let</span> p1 <span class="token operator">=</span> headA
    <span class="token keyword">let</span> p2 <span class="token operator">=</span> headB
    <span class="token keyword">while</span> <span class="token punctuation">(</span>p1 <span class="token operator">!==</span> p2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        p1 <span class="token operator">=</span> p1 <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> headB <span class="token operator">:</span> p1<span class="token punctuation">.</span>next
        p2 <span class="token operator">=</span> p2 <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> headA <span class="token operator">:</span> p2<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> p1
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","160.html.vue"]]);export{r as default};
