import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const t={},e=p(`<h1 id="ext-2-实现二叉排序树" tabindex="-1"><a class="header-anchor" href="#ext-2-实现二叉排序树" aria-hidden="true">#</a> ext-2.实现二叉排序树</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">BstNode</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> left <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val
        <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> left
        <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> right
    <span class="token punctuation">}</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 二叉搜索树，左节点 &lt; 父节点 &lt; 右节点</span>
<span class="token keyword">class</span> <span class="token class-name">BinarySearchTree</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// 根节点</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 插入节点</span>
    <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BstNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> node
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 遍历，通过比较val大小找到合适的位置插入新节点</span>
        <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 比父节点小时，新节点位置一定在父节点左侧</span>
            <span class="token comment">// 比父节点大时，新节点位置一定在父节点右侧</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&lt;</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    cur<span class="token punctuation">.</span>left <span class="token operator">=</span> node
                    <span class="token keyword">break</span>
                <span class="token punctuation">}</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left <span class="token comment">// 继续往左侧找</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    cur<span class="token punctuation">.</span>right <span class="token operator">=</span> node
                    <span class="token keyword">break</span>
                <span class="token punctuation">}</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>right <span class="token comment">// 继续往右侧找</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 查找节点</span>
    <span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> cur
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&lt;</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&gt;</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>right
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 查找节点，递归实现</span>
    <span class="token function">find2</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> node<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> node
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&lt;</span> node<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">find2</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&gt;</span> node<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">find2</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 删除节点</span>
    <span class="token comment">// 1.如果待删除的节点是叶子节点，那么只需要将它的父节点指向null</span>
    <span class="token comment">// 2.如果待删除的节点包含一个子节点，那么将它的父节点指向它的子节点</span>
    <span class="token comment">// 3.如果待删除的节点包含两个子节点，那么我们可以采用两种方式，一种是查找待删除节点左子树上的最大值，一种是查找待删除节点右子树上的最小值。</span>
    <span class="token comment">//   我们采取后者，找到最小值后，将这个最小值节点的值赋给待删除节点，然后再删除这个最小值节点（采用递归）</span>
    <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 先寻找待删除节点</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&lt;</span> node<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            node<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
            <span class="token keyword">return</span> node
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&gt;</span> node<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
            <span class="token keyword">return</span> node
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> node<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 找到待删除的节点了</span>
            <span class="token comment">// 如果是叶子节点</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token keyword">null</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 只含左节点</span>
                <span class="token keyword">return</span> node<span class="token punctuation">.</span>left
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 只含右节点</span>
                <span class="token keyword">return</span> node<span class="token punctuation">.</span>right
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 含两个子节点</span>
                <span class="token comment">// 找到右子树的最小值</span>
                <span class="token keyword">let</span> tempNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getMin</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
                <span class="token comment">// 将最小值节点</span>
                node<span class="token punctuation">.</span>val <span class="token operator">=</span> tempNode<span class="token punctuation">.</span>val
                <span class="token comment">// 然后删除这个最小值节点</span>
                node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> tempNode<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
                <span class="token keyword">return</span> node
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 前序遍历,中左右</span>
    <span class="token function">preOrder</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            node<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 中</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">preOrder</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token comment">// 左</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">preOrder</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token comment">// 右</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 中序遍历，左中右</span>
    <span class="token function">inOrder</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">inOrder</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token comment">// 左</span>
            node<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 中</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">inOrder</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token comment">// 右</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 后序遍历，左右中</span>
    <span class="token function">postOrder</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">postOrder</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token comment">// 左</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">postOrder</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token comment">// 右</span>
            node<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 中</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 广度优先遍历，利用队列实现</span>
    <span class="token function">levelOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 从队列头取出节点</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
            <span class="token comment">// 从队尾插入子节点</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>
    <span class="token function">levelOrder2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length <span class="token comment">// 当前层的节点数</span>
            <span class="token comment">// 循环把当前层的节点拿出来，再把左节点和右节点插入队列</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>
    <span class="token comment">// 获取最小值,在左子树最后一层最左边的节点</span>
    <span class="token function">getMin</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node <span class="token operator">=</span> node <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root
        <span class="token keyword">let</span> curr <span class="token operator">=</span> node
        <span class="token keyword">while</span> <span class="token punctuation">(</span>curr<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            curr <span class="token operator">=</span> curr<span class="token punctuation">.</span>left
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> curr
    <span class="token punctuation">}</span>
    <span class="token comment">// 用递归实现</span>
    <span class="token function">getMin2</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node <span class="token operator">=</span> node <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> node
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getMin2</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 获取最大值，在右子树最后一层最右边的节点</span>
    <span class="token function">getMax</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node <span class="token operator">=</span> node <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root
        <span class="token keyword">let</span> curr <span class="token operator">=</span> node
        <span class="token keyword">while</span> <span class="token punctuation">(</span>curr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>curr<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> curr
            <span class="token punctuation">}</span>
            curr <span class="token operator">=</span> curr<span class="token punctuation">.</span>right
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 树的深度</span>
    <span class="token function">getDeep</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> deep</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        deep <span class="token operator">=</span> deep <span class="token operator">||</span> <span class="token number">0</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> deep
        <span class="token punctuation">}</span>
        deep<span class="token operator">++</span>
        <span class="token keyword">let</span> leftDeep <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDeep</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> deep<span class="token punctuation">)</span> <span class="token comment">// 左子树深度</span>
        <span class="token keyword">let</span> rightDeep <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDeep</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> deep<span class="token punctuation">)</span> <span class="token comment">// 右子树深度</span>
        <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>leftDeep<span class="token punctuation">,</span> rightDeep<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 非递归</span>
    <span class="token function">getDeep2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length <span class="token comment">// 当前层的节点数</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            count<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> count
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BinarySearchTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
tree<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
tree<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
tree<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
tree<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
tree<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
tree<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>
tree<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
tree<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">// console.log(tree);</span>
<span class="token comment">// tree.inOrder(tree.root)</span>
<span class="token comment">// tree.preOrder(tree.root)</span>
<span class="token comment">// tree.postOrder(tree.root)</span>
<span class="token comment">// console.log(tree.getMin())</span>
<span class="token comment">// console.log(tree.getMax())</span>
<span class="token comment">// console.log(tree.getDeep(tree.root))</span>
<span class="token comment">// console.log(tree.find(5))</span>
tree<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>tree<span class="token punctuation">.</span>root<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tree<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","ext-2.html.vue"]]);export{k as default};
