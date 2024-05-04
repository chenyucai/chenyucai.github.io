import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const t={},e=p(`<h1 id="_108-将有序数组转成二叉搜索树" tabindex="-1"><a class="header-anchor" href="#_108-将有序数组转成二叉搜索树" aria-hidden="true">#</a> 108.将有序数组转成二叉搜索树</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">TreeNode</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> left<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token punctuation">(</span>right <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token comment">// 此解法只能得到二叉搜索树，不能得到高度平衡二叉树。应使用递归找中间点为根节点不断分割左右子树</span>
<span class="token keyword">var</span> <span class="token function-variable function">sortedArrayToBST</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 先找到nums的中点，将nums分为左右子树，中点即为根节点</span>
    <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token comment">// 遍历nums往root插入节点</span>
    <span class="token comment">// 注意：这种插入解法符合二叉搜素树，但是不符合高度平衡二叉树</span>
    <span class="token comment">// 高度平衡二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。</span>
    <span class="token comment">// 举例：输入[0,1,2,3,4,5]，这种解法的结果[3,0,4,null,1,null,5,null,2]，左子树有两棵子树高度差大于1了。</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!==</span> mid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 插入节点,bst二叉树：左节点&lt;父节点&lt;右节点</span>
            <span class="token keyword">let</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">let</span> cur <span class="token operator">=</span> root
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>newNode<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> root
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 层序遍历
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span> 
 */</span>
<span class="token keyword">function</span> <span class="token function">levelOrder</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 每一层的节点</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token comment">// 第一层</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length <span class="token comment">// 当前层节点数</span>
        <span class="token comment">// 遍历每一层，取出节点</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// node有可能为null</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node <span class="token operator">?</span> node<span class="token punctuation">.</span>val <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token comment">// 添加下一层的节点到队列</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
                queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sortedArrayToBST</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 先找到nums的中点，将nums分为左右子树，中点即为根节点</span>
    <span class="token comment">// 再从左子树和右子树的nums里分别找到左子树的根节点和右子树的根节点，同理中点即为根节点</span>
    <span class="token comment">// 再从分出的更小的左子树和右子树里找根节点</span>
    <span class="token comment">// ......</span>
    <span class="token comment">// 以此类推，其实是一个递归的过程</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 递归结束条件</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> leftNums <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> mid<span class="token punctuation">)</span> <span class="token comment">// 左子树的节点</span>
    <span class="token keyword">let</span> rightNums <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 右子树的节点</span>
    root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">sortedArrayToBST</span><span class="token punctuation">(</span>leftNums<span class="token punctuation">)</span> <span class="token comment">// root的左节点即为左子树的根节点</span>
    root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">sortedArrayToBST</span><span class="token punctuation">(</span>rightNums<span class="token punctuation">)</span> <span class="token comment">// root的右节点即为右子树的根节点</span>

    <span class="token keyword">return</span> root
<span class="token punctuation">}</span>

<span class="token comment">// let root = sortedArrayToBST([-10, -3, 0, 5, 9])</span>
<span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token function">sortedArrayToBST</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">levelOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","108.html.vue"]]);export{k as default};
