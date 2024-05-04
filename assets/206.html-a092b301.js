import{_ as n,o as s,c as a,a as e}from"./app-5b0f25a8.js";const t={},c=e(`<h1 id="_206-反转链表" tabindex="-1"><a class="header-anchor" href="#_206-反转链表" aria-hidden="true">#</a> 206.反转链表</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">let</span> curr <span class="token operator">=</span> head
    <span class="token keyword">while</span><span class="token punctuation">(</span>curr <span class="token operator">!==</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> next <span class="token operator">=</span> curr<span class="token punctuation">.</span>next
        curr<span class="token punctuation">.</span>next <span class="token operator">=</span> prev
        prev <span class="token operator">=</span> curr
        curr <span class="token operator">=</span> next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> prev
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[c];function i(l,o){return s(),a("div",null,p)}const d=n(t,[["render",i],["__file","206.html.vue"]]);export{d as default};
