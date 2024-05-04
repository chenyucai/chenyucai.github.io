import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const e={},t=p(`<h1 id="_297-二叉树的序列化与反序列化-hard" tabindex="-1"><a class="header-anchor" href="#_297-二叉树的序列化与反序列化-hard" aria-hidden="true">#</a> 297.二叉树的序列化与反序列化.hard</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">TreeNode</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Encodes a tree to a single string.
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">serialize</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">levelOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token comment">// console.log(res)</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Decodes your encoded data to tree.
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">data</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deserialize</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>data <span class="token operator">===</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> dataArr <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// console.log(data)</span>
    <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">levelOrderToTree</span><span class="token punctuation">(</span>dataArr<span class="token punctuation">)</span>
    <span class="token keyword">return</span> root
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 前序遍历，中左右
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">]</span>number<span class="token punctuation">}</span></span> <span class="token parameter">res</span> 
 */</span>
<span class="token keyword">function</span> <span class="token function">preorder</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res <span class="token operator">=</span> res <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;NULL&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>

    res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
    <span class="token function">preorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
    <span class="token function">preorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> res<span class="token punctuation">)</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 前序遍历转成树，再按前序遍历的顺序将节点恢复即可
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">]</span>number<span class="token punctuation">}</span></span> <span class="token parameter">arr</span> 
 */</span>
<span class="token keyword">function</span> <span class="token function">preorderToTree</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> val <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token string">&#39;NULL&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token comment">// 中</span>
    root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">preorderToTree</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">// 左</span>
    root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">preorderToTree</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">// 右</span>

    <span class="token keyword">return</span> root
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 中序遍历，左中右
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">]</span>number<span class="token punctuation">}</span></span> <span class="token parameter">res</span> 
 */</span>
<span class="token keyword">function</span> <span class="token function">inorder</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res <span class="token operator">=</span> res <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;NULL&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>
    <span class="token function">preorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
    <span class="token function">preorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> res<span class="token punctuation">)</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 层序遍历
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span> 
 */</span>
<span class="token keyword">function</span> <span class="token function">levelOrder</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token comment">// 第一层</span>

    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length <span class="token comment">// 每一层的节点数量</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node <span class="token operator">?</span> node<span class="token punctuation">.</span>val <span class="token operator">:</span> <span class="token string">&#39;NULL&#39;</span><span class="token punctuation">)</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
                queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 层序遍历转树
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">]</span>number<span class="token punctuation">}</span></span> <span class="token parameter">arr</span> 
 */</span>
<span class="token keyword">function</span> <span class="token function">levelOrderToTree</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> rootVal <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 根节点</span>
    <span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> left <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 左节点</span>
        <span class="token keyword">let</span> right <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 右节点</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token string">&#39;NULL&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            node<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> leftNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span>
            node<span class="token punctuation">.</span>left <span class="token operator">=</span> leftNode
            queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>leftNode<span class="token punctuation">)</span> <span class="token comment">// 加入队列</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">===</span> <span class="token string">&#39;NULL&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> rightNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span>
            node<span class="token punctuation">.</span>right <span class="token operator">=</span> rightNode
            queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>rightNode<span class="token punctuation">)</span> <span class="token comment">// 加入队列</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> root
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","297.html.vue"]]);export{r as default};
