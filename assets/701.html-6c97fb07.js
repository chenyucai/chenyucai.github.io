import{_ as n,o as s,c as a,a as e}from"./app-5b0f25a8.js";const p={},t=e(`<h1 id="_701-二叉搜索树中的插入操作" tabindex="-1"><a class="header-anchor" href="#_701-二叉搜索树中的插入操作" aria-hidden="true">#</a> 701.二叉搜索树中的插入操作</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>

<span class="token keyword">function</span> <span class="token function">TreeNode</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> left<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token punctuation">(</span>right <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">insertIntoBST</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        root <span class="token operator">=</span> newNode
        <span class="token keyword">return</span> root
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> root
    <span class="token comment">// 左节点&lt;父节点&lt;右节点，根据这个规律找到合适的叶子节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&lt;</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                cur<span class="token punctuation">.</span>left <span class="token operator">=</span> newNode
                <span class="token keyword">break</span>
            <span class="token punctuation">}</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                cur<span class="token punctuation">.</span>right <span class="token operator">=</span> newNode
                <span class="token keyword">break</span>
            <span class="token punctuation">}</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>right
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> root
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","701.html.vue"]]);export{r as default};
