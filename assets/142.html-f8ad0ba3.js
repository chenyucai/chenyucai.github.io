import{_ as n,o as s,c as a,a as e}from"./app-5b0f25a8.js";const t={},p=e(`<h1 id="_142-环形链表2" tabindex="-1"><a class="header-anchor" href="#_142-环形链表2" aria-hidden="true">#</a> 142.环形链表2</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) <span class="token punctuation">{</span>
 *     this.val = val;
 *     this.next = null;
 * <span class="token punctuation">}</span>
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">detectCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 快慢指针判断</span>
    <span class="token keyword">let</span> slow <span class="token operator">=</span> head
    <span class="token keyword">let</span> fast <span class="token operator">=</span> head
    <span class="token keyword">let</span> target <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>slow <span class="token operator">&amp;&amp;</span> fast <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 慢指针每次移动一格，快指针每次移动两格，如果有环一定会相遇</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
        <span class="token keyword">if</span> <span class="token punctuation">(</span>slow <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> slow <span class="token operator">===</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            target <span class="token operator">=</span> slow
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">detectCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 哈希表，节点是一个对象，可以用Set或者Map，不能用{}</span>
    <span class="token comment">// let visited = new Map()</span>
    <span class="token keyword">let</span> visited <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> head
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>visited<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> cur
        <span class="token punctuation">}</span>
        <span class="token comment">// visited.add(cur)</span>
        visited<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","142.html.vue"]]);export{r as default};
