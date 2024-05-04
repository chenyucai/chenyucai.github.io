import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const t={},e=p(`<h1 id="_236-二叉树的最近公共祖先" tabindex="-1"><a class="header-anchor" href="#_236-二叉树的最近公共祖先" aria-hidden="true">#</a> 236.二叉树的最近公共祖先</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
    <span class="token comment">// 1.先找到p，q各自路径上的所有节点</span>
    <span class="token comment">// 2.然后从路径上的节点找到最近公共祖先</span>
    <span class="token comment">// 这种解法内存超了没通过！</span>

    <span class="token keyword">const</span> pPath <span class="token operator">=</span> <span class="token function">findPath</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> p<span class="token punctuation">)</span> <span class="token comment">// p的路径</span>
    <span class="token keyword">const</span> qPath <span class="token operator">=</span> <span class="token function">findPath</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> q<span class="token punctuation">)</span> <span class="token comment">// q的路径</span>
    <span class="token comment">// console.log(pPath, qPath)</span>

    <span class="token comment">// 最近公共祖先，从后往前遍历</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> pPath<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> qPath<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>pPath<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>val <span class="token operator">===</span> qPath<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> pPath<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 查找target节点的路径</span>
<span class="token keyword">function</span> <span class="token function">findPath</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> target<span class="token punctuation">,</span> path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    path <span class="token operator">=</span> path <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 递归结束条件</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">===</span> target<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> path
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token function">findPath</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> target<span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 浅拷贝一下，否则就共用一个path了</span>
    <span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token function">findPath</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> target<span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> left <span class="token operator">||</span> right
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">p</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">q</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">lowestCommonAncestor</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 哈希表记录父节点</span>
    <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">function</span> <span class="token function">recordParent</span><span class="token punctuation">(</span><span class="token parameter">parent<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 递归结束条件</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> parent<span class="token punctuation">)</span>
        <span class="token function">recordParent</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> cur<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token function">recordParent</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> cur<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">recordParent</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span> <span class="token comment">// 根节点没有父节点，所以是null</span>
    <span class="token comment">// console.log(map)</span>

    <span class="token keyword">let</span> pPath <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// p节点的路径</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> p
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pPath<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        cur <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> qPath <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// q节点的路径</span>
    cur <span class="token operator">=</span> q
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        qPath<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        cur <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pPath<span class="token punctuation">,</span> qPath<span class="token punctuation">)</span>

    <span class="token comment">// 最近公共祖先，从后往前遍历</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> pPath<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> qPath<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>pPath<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>val <span class="token operator">===</span> qPath<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> pPath<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">p</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">q</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">lowestCommonAncestor</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 哈希表记录父节点</span>
    <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">function</span> <span class="token function">recordParent</span><span class="token punctuation">(</span><span class="token parameter">parent<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 递归结束条件</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> parent<span class="token punctuation">)</span>
        <span class="token function">recordParent</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> cur<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token function">recordParent</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> cur<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">recordParent</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span> <span class="token comment">// 根节点没有父节点，所以是null</span>
    <span class="token comment">// console.log(map)</span>

    <span class="token keyword">let</span> pPath <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// p节点的路径</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> p
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pPath<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        cur <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> pVisitedMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 记录p的祖先节点</span>
    <span class="token comment">// p节点从最近的祖先节点开始访问</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pVisitedMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// 记录访问过的祖先节点</span>
        p <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// q节点开始遍历祖先节点，找到pVisitedMap已经访问过的就是最近的祖先节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>q<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pVisitedMap<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> q
        <span class="token punctuation">}</span>
        q <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","236.html.vue"]]);export{k as default};
