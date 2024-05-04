import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const t={},e=p(`<h1 id="_235-二叉搜索树的最近公共祖先" tabindex="-1"><a class="header-anchor" href="#_235-二叉搜索树的最近公共祖先" aria-hidden="true">#</a> 235.二叉搜索树的最近公共祖先</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val) <span class="token punctuation">{</span>
 *     this.val = val;
 *     this.left = this.right = null;
 * <span class="token punctuation">}</span>
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">p</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">q</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">lowestCommonAncestor</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 先找到p q的所有祖先节点</span>
    <span class="token keyword">function</span> <span class="token function">getGrands</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 从根节点到该节点路径上的所有节点（包括自身），即为祖先节点集合</span>
        <span class="token keyword">let</span> grands <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">let</span> cur <span class="token operator">=</span> root
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            grands<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>n<span class="token punctuation">.</span>val <span class="token operator">===</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> grands
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>n<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>n<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>right
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> g1 <span class="token operator">=</span> <span class="token function">getGrands</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> p<span class="token punctuation">)</span>
    <span class="token keyword">let</span> g2 <span class="token operator">=</span> <span class="token function">getGrands</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> q<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g1<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> e<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">,</span> g2<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> e<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 找到最近的相同节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>g1<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> node <span class="token operator">=</span> g1<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> g2<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>val <span class="token operator">===</span> g2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> node
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","235.html.vue"]]);export{r as default};
