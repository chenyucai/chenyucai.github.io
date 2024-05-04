import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const t={},e=p(`<h1 id="_113-路径总和2" tabindex="-1"><a class="header-anchor" href="#_113-路径总和2" aria-hidden="true">#</a> 113.路径总和2</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">targetSum</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">pathSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> targetSum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token comment">// 深度优先遍历</span>
    <span class="token keyword">function</span> <span class="token function">deepOrder</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> target<span class="token punctuation">,</span> pathNodes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 注意需要浅拷贝，否则同一个数组内存地址相同，最后pathNodes是全部节点</span>
        <span class="token keyword">let</span> nodes <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>pathNodes <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 路径上的节点</span>
        nodes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>

        <span class="token comment">// 找到与差值相同的叶子节点</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>val <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 继续往下找差值</span>
        <span class="token function">deepOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> target <span class="token operator">-</span> root<span class="token punctuation">.</span>val<span class="token punctuation">,</span> nodes<span class="token punctuation">)</span>
        <span class="token function">deepOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> target <span class="token operator">-</span> root<span class="token punctuation">.</span>val<span class="token punctuation">,</span> nodes<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">deepOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> targetSum<span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">targetSum</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">pathSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> targetSum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 使用广度优先遍历+哈希表记录每个节点的父节点方便回溯</span>
    <span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 每一层的节点</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>

    <span class="token keyword">let</span> sumQueue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 路径sum队列</span>
    sumQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token comment">// 刚开始经过root的路径和</span>

    <span class="token keyword">let</span> pathLastNodes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 每一条符合targetSum的最后一个节点集合</span>

    <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// key是节点，value是父节点</span>
    map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// 根节点的父节点为null</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length <span class="token comment">// 当前层的节点数</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 当前节点</span>
            <span class="token keyword">let</span> sum <span class="token operator">=</span> sumQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 当前节点的路径和</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> sum <span class="token operator">===</span> targetSum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                pathLastNodes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
                map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> node<span class="token punctuation">)</span> <span class="token comment">// 记录父节点</span>
                sumQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sum <span class="token operator">+</span> node<span class="token punctuation">.</span>left<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token comment">// 访问左节点后的路径和</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
                map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> node<span class="token punctuation">)</span> <span class="token comment">// 记录父节点</span>
                sumQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sum <span class="token operator">+</span> node<span class="token punctuation">.</span>right<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token comment">// 访问右节点的路径和</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// console.log(pathLastNodes)</span>
    <span class="token comment">// map记录了每个节点的父节点，我们可以进行回溯，找出从叶子节点到根节点的整个path</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> pathLastNodes<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">let</span> node <span class="token operator">=</span> pathLastNodes<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token comment">// 根节点的父节点是null，遍历到根节点停止循环</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>node <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            path<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token comment">// 从前面插入</span>
            node <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","113.html.vue"]]);export{k as default};
