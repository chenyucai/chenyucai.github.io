import{_ as n,o as s,c as a,a as e}from"./app-5b0f25a8.js";const t={},o=e(`<h1 id="_226-翻转二叉树" tabindex="-1"><a class="header-anchor" href="#_226-翻转二叉树" aria-hidden="true">#</a> 226.翻转二叉树</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">invertTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 从上往下翻转</span>
    <span class="token keyword">let</span> temp <span class="token operator">=</span> root<span class="token punctuation">.</span>left
    root<span class="token punctuation">.</span>left <span class="token operator">=</span> root<span class="token punctuation">.</span>right
    root<span class="token punctuation">.</span>right <span class="token operator">=</span> temp

    <span class="token function">invertTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    <span class="token function">invertTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>

    <span class="token keyword">return</span> root
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 
 * 我们从根节点开始，递归地对树进行遍历，并从叶子节点先开始翻转。
 * 如果当前遍历到的节点root的左右两棵子树都已经翻转，
 * 那么我们只需要交换两棵子树的位置，即可完成以root为根节点的整棵子树的翻转。
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">invertTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">const</span> leftTree <span class="token operator">=</span> <span class="token function">invertTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    <span class="token keyword">const</span> rightTree <span class="token operator">=</span> <span class="token function">invertTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    root<span class="token punctuation">.</span>left <span class="token operator">=</span> rightTree
    root<span class="token punctuation">.</span>right <span class="token operator">=</span> leftTree

    <span class="token keyword">return</span> root
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[o];function p(c,l){return s(),a("div",null,i)}const u=n(t,[["render",p],["__file","226.html.vue"]]);export{u as default};
