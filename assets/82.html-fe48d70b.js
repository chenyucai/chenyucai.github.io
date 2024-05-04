import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const t={},e=p(`<h1 id="_82-删除排序链表中的重复元素" tabindex="-1"><a class="header-anchor" href="#_82-删除排序链表中的重复元素" aria-hidden="true">#</a> 82.删除排序链表中的重复元素</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token punctuation">(</span>next <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> next<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deleteDuplicates</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 哈希表记录重复次数</span>
    <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> head
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token comment">// 定义一个空头，因为原链表的头可能也是重复的，所以不好在原链表上直接修改</span>
    <span class="token keyword">let</span> prehead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    cur <span class="token operator">=</span> prehead
    <span class="token comment">// 删除元素</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> count <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        <span class="token comment">// 只留下出现次数为1的元素</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>
        head <span class="token operator">=</span> head<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> prehead<span class="token punctuation">.</span>next
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deleteDuplicates</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 因为原链表头可能是重复的，所以定义一个空头</span>
    <span class="token keyword">let</span> prehead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    prehead<span class="token punctuation">.</span>next <span class="token operator">=</span> head
    <span class="token keyword">let</span> cur <span class="token operator">=</span> prehead
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 下一个元素是重复元素</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">===</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 找到重复元素结束的节点</span>
            <span class="token keyword">let</span> val <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val
            <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                cur<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 不是重复元素</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> prehead<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","82.html.vue"]]);export{k as default};
