import{_ as n,o as s,c as a,a as e}from"./app-5b0f25a8.js";const t={},p=e(`<h1 id="_230-二叉树中第k小元素" tabindex="-1"><a class="header-anchor" href="#_230-二叉树中第k小元素" aria-hidden="true">#</a> 230.二叉树中第K小元素</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">kthSmallest</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 搜索二叉树的中序遍历一定是升序</span>

    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token comment">// 中序遍历(左中右)</span>
    <span class="token keyword">function</span> <span class="token function">inorder</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token function">inorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token comment">// 左</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token comment">// 中</span>
        <span class="token function">inorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token comment">// 右</span>
    <span class="token punctuation">}</span>

    <span class="token function">inorder</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token keyword">return</span> res<span class="token punctuation">[</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token comment">// 优化 使用常量</span>
<span class="token keyword">var</span> <span class="token function-variable function">kthSmallest</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 搜索二叉树的中序遍历一定是升序</span>

    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token comment">// 中序遍历(左中右)</span>
    <span class="token keyword">function</span> <span class="token function">inorder</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 递归结束条件</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 找到第k小值了，结束递归</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token function">inorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token comment">// 左</span>

        count<span class="token operator">++</span> <span class="token comment">// 中</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">===</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">=</span> root<span class="token punctuation">.</span>val
        <span class="token punctuation">}</span>

        <span class="token function">inorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token comment">// 右</span>
    <span class="token punctuation">}</span>

    <span class="token function">inorder</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","230.html.vue"]]);export{r as default};
