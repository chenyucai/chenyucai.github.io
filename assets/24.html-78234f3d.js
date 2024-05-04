import{_ as n,o as s,c as a,a as e}from"./app-5b0f25a8.js";const p={},t=e(`<h1 id="_24-两两交换链表中的节点" tabindex="-1"><a class="header-anchor" href="#_24-两两交换链表中的节点" aria-hidden="true">#</a> 24.两两交换链表中的节点</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token punctuation">(</span>next <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> next<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">swapPairs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> prehead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> pre <span class="token operator">=</span> prehead
    <span class="token keyword">let</span> cur <span class="token operator">=</span> head
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 注意有三条链</span>
        <span class="token keyword">let</span> node1 <span class="token operator">=</span> cur
        <span class="token keyword">let</span> node2 <span class="token operator">=</span> cur<span class="token punctuation">.</span>next

        pre<span class="token punctuation">.</span>next <span class="token operator">=</span> node2
        node1<span class="token punctuation">.</span>next <span class="token operator">=</span> node2<span class="token punctuation">.</span>next
        node2<span class="token punctuation">.</span>next <span class="token operator">=</span> node1

        pre <span class="token operator">=</span> node1
        cur <span class="token operator">=</span> node1<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> prehead<span class="token punctuation">.</span>next
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token comment">// 这样交换更好理解</span>
<span class="token keyword">var</span> <span class="token function-variable function">swapPairs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> prehead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    prehead<span class="token punctuation">.</span>next <span class="token operator">=</span> head
    <span class="token keyword">let</span> cur <span class="token operator">=</span> prehead
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 交换两个节点</span>
        <span class="token keyword">let</span> node1 <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
        <span class="token keyword">let</span> node2 <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next

        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> node2
        node1<span class="token punctuation">.</span>next <span class="token operator">=</span> node2<span class="token punctuation">.</span>next
        node2<span class="token punctuation">.</span>next <span class="token operator">=</span> node1

        cur <span class="token operator">=</span> node1
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> prehead<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token comment">// 试试递归</span>
<span class="token keyword">var</span> <span class="token function-variable function">swapPairs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head
    <span class="token punctuation">}</span>
    <span class="token comment">// 需要交换的两个节点</span>
    <span class="token keyword">let</span> node1 <span class="token operator">=</span> head
    <span class="token keyword">let</span> node2 <span class="token operator">=</span> head<span class="token punctuation">.</span>next

    <span class="token keyword">let</span> next <span class="token operator">=</span> node2<span class="token punctuation">.</span>next
    node2<span class="token punctuation">.</span>next <span class="token operator">=</span> node1
    node1<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">swapPairs</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span>

    <span class="token keyword">return</span> node2
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function c(l,i){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","24.html.vue"]]);export{u as default};
