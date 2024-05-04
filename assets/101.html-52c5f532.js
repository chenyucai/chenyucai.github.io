import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const t={},e=p(`<h1 id="_101-对称二叉树" tabindex="-1"><a class="header-anchor" href="#_101-对称二叉树" aria-hidden="true">#</a> 101.对称二叉树</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isSymmetric</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 先层序遍历，拿到每一层的节点数，再比较</span>
    <span class="token keyword">let</span> levelArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 二维数组，每一项代表每一层的节点数组</span>
    <span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length <span class="token comment">// 每一层的节点数</span>
        <span class="token keyword">let</span> levelNodes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token comment">// 注意记录null节点</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                levelNodes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                levelNodes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
                queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
                queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        levelArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>levelNodes<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>levelArr<span class="token punctuation">)</span>
    <span class="token comment">// 比较每一层的节点是否对称</span>
    levelArr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 根节点不用比较</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> levelArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> nodes <span class="token operator">=</span> levelArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token comment">// 每次从头尾取出节点进行比较</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>nodes<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> head <span class="token operator">=</span> nodes<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">let</span> tail <span class="token operator">=</span> nodes<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">!==</span> tail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 迭代</span>
<span class="token keyword">var</span> <span class="token function-variable function">check</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">u<span class="token punctuation">,</span> v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 思路：左子树的左节点==右子树的右节点，左子树的右节点==右子树的左节点</span>
    <span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 将两个结点的左右子结点按相反的顺序插入队列中</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        u <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        v <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>u <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">!</span>u <span class="token operator">||</span> <span class="token operator">!</span>v<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>u<span class="token punctuation">.</span>val <span class="token operator">!==</span> v<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 一对节点</span>
        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>right<span class="token punctuation">)</span>

        <span class="token comment">// 另一对节点</span>
        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token function-variable function">isSymmetric</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">check</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> root<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">// 递归</span>
<span class="token comment">// 两根指针</span>
<span class="token keyword">var</span> <span class="token function-variable function">check</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">p<span class="token punctuation">,</span> q</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>p <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>q<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 遍历完了，没发现不同节点，所以返回true</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>p <span class="token operator">||</span> <span class="token operator">!</span>q<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> p<span class="token punctuation">.</span>val <span class="token operator">===</span> q<span class="token punctuation">.</span>val <span class="token operator">&amp;&amp;</span> <span class="token function">check</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>left<span class="token punctuation">,</span> q<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">check</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>right<span class="token punctuation">,</span> q<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token function-variable function">isSymmetric</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">check</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> root<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","101.html.vue"]]);export{k as default};
