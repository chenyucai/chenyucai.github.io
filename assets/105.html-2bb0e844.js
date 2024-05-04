import{_ as n,o as s,c as a,a as e}from"./app-5b0f25a8.js";const p={},t=e(`<h1 id="_105-从前序与中序遍历序列中构造二叉树" tabindex="-1"><a class="header-anchor" href="#_105-从前序与中序遍历序列中构造二叉树" aria-hidden="true">#</a> 105.从前序与中序遍历序列中构造二叉树</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">TreeNode</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> left<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token punctuation">(</span>right <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 *
原理：
1.前序遍历(中左右)的根节点在第一位
2.后序遍历(左右中)的根节点在最后一位
3.中序遍历(左中右)的根节点在中间某个位置，并将结果分为左右两棵子树的中序遍历

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
首先根据 preorder 找到根节点是 3
    
然后根据根节点将 inorder 分成左子树和右子树
左子树
left_inorder [9]

右子树
right_inorder [15,20,7]

把相应的前序遍历的数组也加进来
左子树
left_preorder:[9] 等于preorder的 root_index+1 到 root_index+1+left_inorder.length 的区间
left_inorder: [9]

右子树
right_preorder:[20 15 7] 等于preorder的 root_index+left_inorder.length+1 到 末尾 的区间
right_inorder: [15,20,7]

现在我们只需要构造左子树和右子树即可，成功把大问题化成了小问题
然后重复上边的步骤继续划分，直到 preorder 和 inorder 都为空，返回 null 即可

 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">preorder</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">inorder</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">buildTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">preorder<span class="token punctuation">,</span> inorder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 递归结束条件</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>preorder<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 前序遍历结果的第一项就是根节点</span>
    <span class="token keyword">const</span> rootVal <span class="token operator">=</span> preorder<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">)</span>

    <span class="token comment">// 根据root把中序遍历分为左右两棵子树</span>
    <span class="token keyword">let</span> rootIndex
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> inorder<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>inorder<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            rootIndex <span class="token operator">=</span> i
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> leftInorder <span class="token operator">=</span> inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> rootIndex<span class="token punctuation">)</span> <span class="token comment">// 左子树的中序遍历</span>
    <span class="token keyword">const</span> rightInorder <span class="token operator">=</span> inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>rootIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 右子树的中序遍历</span>
    <span class="token keyword">const</span> leftPreorder <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 左子树的前序遍历</span>
    <span class="token keyword">const</span> rightPreorder <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 右子树的前序遍历</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> preorder<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>leftInorder<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>preorder<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 左子树的节点</span>
            leftPreorder<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>preorder<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>rightInorder<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>preorder<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 右子树的节点</span>
            rightPreorder<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>preorder<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 继续往下构造左右子树</span>
    root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>leftPreorder<span class="token punctuation">,</span> leftInorder<span class="token punctuation">)</span> <span class="token comment">// 左子树</span>
    root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>rightPreorder<span class="token punctuation">,</span> rightInorder<span class="token punctuation">)</span> <span class="token comment">// 右子树</span>

    <span class="token keyword">return</span> root
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">preorder</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">inorder</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token comment">// 优化版本</span>
<span class="token keyword">var</span> <span class="token function-variable function">buildTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">preorder<span class="token punctuation">,</span> inorder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 先用哈希表把inorder的值记录下来，key为inorder的值，value为下标，就不用每次递归都遍历一遍找根节点</span>
    <span class="token keyword">let</span> inorderMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> inorder<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        inorderMap<span class="token punctuation">[</span>inorder<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> i
    <span class="token punctuation">}</span>

    <span class="token comment">// 递归构建树</span>
    <span class="token keyword">function</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">preorderStartIndex<span class="token punctuation">,</span> preorderEndIndex<span class="token punctuation">,</span> inorderStartIndex<span class="token punctuation">,</span> inorderEndIndex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 递归结束条件</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>preorderStartIndex <span class="token operator">&gt;</span> preorderEndIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 前序遍历第一个节点就是根节点</span>
        <span class="token keyword">const</span> preorderRootIndex <span class="token operator">=</span> preorderStartIndex
        <span class="token comment">// 在中序遍历中定位根节点</span>
        <span class="token keyword">const</span> inorderRootIndex <span class="token operator">=</span> inorderMap<span class="token punctuation">[</span>preorder<span class="token punctuation">[</span>preorderRootIndex<span class="token punctuation">]</span><span class="token punctuation">]</span>

         <span class="token comment">// 创建根节点</span>
        <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>preorder<span class="token punctuation">[</span>preorderRootIndex<span class="token punctuation">]</span><span class="token punctuation">)</span>

        <span class="token comment">// 得到左子树节点数目</span>
        <span class="token keyword">const</span> leftSubTreeSize <span class="token operator">=</span> inorderRootIndex <span class="token operator">-</span> inorderStartIndex

        <span class="token comment">// 把inorder分成左右两棵子树</span>
        <span class="token keyword">const</span> leftInorderStartIndex <span class="token operator">=</span> inorderStartIndex <span class="token comment">// inorder左子树开始下标</span>
        <span class="token keyword">const</span> leftInorderEndIndex <span class="token operator">=</span> inorderRootIndex <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">// inorder左子树结束下标</span>
        <span class="token keyword">const</span> rightInorderStartIndex <span class="token operator">=</span> inorderRootIndex <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">// inorder右子树开始下标</span>
        <span class="token keyword">const</span> rightInorderEndIndex <span class="token operator">=</span> inorderEndIndex <span class="token comment">// inorder右子树结束下标</span>

        <span class="token comment">// 根据root找出preorder的左右子树</span>
        <span class="token keyword">const</span> leftPreorderStartIndex <span class="token operator">=</span> preorderRootIndex <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">// preorder左子树开始下标</span>
        <span class="token keyword">const</span> leftPreorderEndIndex <span class="token operator">=</span> <span class="token punctuation">(</span>leftPreorderStartIndex <span class="token operator">+</span> leftSubTreeSize<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">// preorder左子树结束下标</span>
        <span class="token keyword">const</span> rightPreorderStartIndex <span class="token operator">=</span> leftPreorderEndIndex <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">// preorder右子树开始下标</span>
        <span class="token keyword">const</span> rightPreorderEndIndex <span class="token operator">=</span> preorderEndIndex <span class="token comment">// preorder右子树结束下标</span>

        <span class="token comment">// 构建左右子树</span>
        root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">build</span><span class="token punctuation">(</span>leftPreorderStartIndex<span class="token punctuation">,</span> leftPreorderEndIndex<span class="token punctuation">,</span> leftInorderStartIndex<span class="token punctuation">,</span> leftInorderEndIndex<span class="token punctuation">)</span>
        root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">build</span><span class="token punctuation">(</span>rightPreorderStartIndex<span class="token punctuation">,</span> rightPreorderEndIndex<span class="token punctuation">,</span> rightInorderStartIndex<span class="token punctuation">,</span> rightInorderEndIndex<span class="token punctuation">)</span>

        <span class="token keyword">return</span> root
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> n <span class="token operator">=</span> preorder<span class="token punctuation">.</span>length
    <span class="token keyword">return</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function c(l,i){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","105.html.vue"]]);export{u as default};
