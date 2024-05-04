import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const t={},e=p(`<h1 id="_450-删除二叉搜索树中的节点" tabindex="-1"><a class="header-anchor" href="#_450-删除二叉搜索树中的节点" aria-hidden="true">#</a> 450.删除二叉搜索树中的节点</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">key</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deleteNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 二叉搜索树特点</span>
    <span class="token comment">// 1.左节点&lt;父节点&lt;右节点</span>
    <span class="token comment">// 2.根节点大于左子树的所有节点</span>
    <span class="token comment">// 3.根节点小于右子树的所有节点</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">===</span> key <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 直接删除根节点</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 先找到要删除的节点</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> root
    <span class="token keyword">let</span> parent <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// 父节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">&lt;</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            parent <span class="token operator">=</span> cur
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">&gt;</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            parent <span class="token operator">=</span> cur
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>right
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 找到了</span>
            <span class="token comment">// 有3种情况</span>

            <span class="token comment">// 1.待删除节点为叶子节点：只需把父节点原来指向该节点的链指向null。</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>parent <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// parent为null，说明删除的是根节点</span>
                    <span class="token keyword">return</span> <span class="token keyword">null</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> parent<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    parent<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">null</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    parent<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">null</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">break</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// 2.待删除节点的左节点或右节点为null：只需把父节点原来指向该节点的链指向剩下的左节点或右节点。</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 左节点为null</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>parent <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// parent为null，说明删除的是根节点</span>
                    <span class="token keyword">return</span> cur<span class="token punctuation">.</span>right <span class="token comment">// 直接返回右子树</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> parent<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    parent<span class="token punctuation">.</span>left <span class="token operator">=</span> cur<span class="token punctuation">.</span>right
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    parent<span class="token punctuation">.</span>right <span class="token operator">=</span> cur<span class="token punctuation">.</span>right
                <span class="token punctuation">}</span>
                <span class="token keyword">break</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 右节点为null</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>parent <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// parent为null，说明删除的是根节点</span>
                    <span class="token keyword">return</span> cur<span class="token punctuation">.</span>left <span class="token comment">// 直接返回左子树</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> parent<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    parent<span class="token punctuation">.</span>left <span class="token operator">=</span> cur<span class="token punctuation">.</span>left
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    parent<span class="token punctuation">.</span>right <span class="token operator">=</span> cur<span class="token punctuation">.</span>left
                <span class="token punctuation">}</span>
                <span class="token keyword">break</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// 3.待删除节点的左右节点都存在：</span>
            <span class="token comment">// (1)找到该节点的左子树的最大值节点 或 右子树的最小值节点，下面以右子树最小值为例</span>
            <span class="token comment">// (2)把最小值赋值给该节点</span>
            <span class="token comment">// (3)删除最小值节点</span>
            <span class="token comment">// (4)删除最小值节点后，右子树的根节点可能发生变化，当前节点要重新连接右子树的根节点</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> minNode <span class="token operator">=</span> <span class="token function">getMinNode</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token comment">// 找到右子树最小值节点</span>
                cur<span class="token punctuation">.</span>val <span class="token operator">=</span> minNode<span class="token punctuation">.</span>val <span class="token comment">// 最小值先存起来</span>
                cur<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">,</span> minNode<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token comment">// 删除最小值节点</span>
                <span class="token keyword">break</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> root
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">key</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deleteNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 递归结束条件</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 递归找到待删除的节点然后删除</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">&lt;</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 往左子树找，删除节点后左子树的根节点可能发生变化，所以需要把当前节点连接新的左子树根节点</span>
        root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
        <span class="token keyword">return</span> root
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">&gt;</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 往右子树找，删除节点后右子树的根节点可能发生变化，所以需要重新连接新的右子树根节点</span>
        root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
        <span class="token keyword">return</span> root
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 找到了</span>
        <span class="token comment">// 3种情况</span>
        <span class="token comment">// 第1种：待删除节点为叶子节点，只需把父节点指向该节点的链指向null</span>
        <span class="token comment">// 第2种：待删除节点左节点或右节点为null，只需把父节点指向该节点的链指向剩下的左子树或右子树</span>
        <span class="token comment">// 第3种：待删除节点的左右节点都存在</span>
        <span class="token comment">// (1)找到待删除节点 左子树的最大值节点 或 右子树的最小值节点；以右子树最小值节点为例</span>
        <span class="token comment">// (2)将最小值节点的val赋值给当前节点</span>
        <span class="token comment">// (3)然后删除最小值节点(采用递归)</span>
        <span class="token comment">// (4)删除最小值节点后，右子树根节点可能发生变化，当前节点应重新连接新的右子树根节点</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> root<span class="token punctuation">.</span>right
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> root<span class="token punctuation">.</span>left
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> minNode <span class="token operator">=</span> <span class="token function">getMinNode</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
            root<span class="token punctuation">.</span>val <span class="token operator">=</span> minNode<span class="token punctuation">.</span>val
            root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> minNode<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
            <span class="token keyword">return</span> root
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 获取最小值节点
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span> 
 */</span>
<span class="token keyword">function</span> <span class="token function">getMinNode</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 最小值在最左下角</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> root
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cur
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","450.html.vue"]]);export{r as default};
