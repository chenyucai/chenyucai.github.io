import{_ as n,o as s,c as a,a as t}from"./app-5b0f25a8.js";const p={},e=t(`<h1 id="_1026-节点与其祖先的最大差值" tabindex="-1"><a class="header-anchor" href="#_1026-节点与其祖先的最大差值" aria-hidden="true">#</a> 1026.节点与其祖先的最大差值</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxAncestorDiff</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 找差值就是找到最小值和最大值</span>
    <span class="token comment">// 找经过每个节点时的最大值和最小值，我们使用层序遍历</span>

    <span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 每一层的节点</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 每经过一个节点时的最大和最小值 [[min,max]]</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>root<span class="token punctuation">.</span>val<span class="token punctuation">,</span> root<span class="token punctuation">.</span>val<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 初始化,经过root节点时的最大值最小值</span>

    <span class="token keyword">let</span> ans <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 最大差值</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length <span class="token comment">// 每一层的节点数</span>
        <span class="token comment">// 遍历每一层节点</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 当前节点</span>
            <span class="token keyword">let</span> <span class="token punctuation">[</span>min<span class="token punctuation">,</span> max<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 当前节点的最大最小值</span>
            ans <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>max <span class="token operator">-</span> min<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 更新最大差值</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
                arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
                    Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">.</span>val<span class="token punctuation">,</span> min<span class="token punctuation">)</span><span class="token punctuation">,</span>
                    Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">.</span>val<span class="token punctuation">,</span> max<span class="token punctuation">)</span>
                <span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
                arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
                    Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">.</span>val<span class="token punctuation">,</span> min<span class="token punctuation">)</span><span class="token punctuation">,</span>
                    Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">.</span>val<span class="token punctuation">,</span> max<span class="token punctuation">)</span>
                <span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> ans
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxAncestorDiff</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 记录经过每个节点时的最大最小值</span>
    <span class="token comment">// 使用深度遍历</span>

    <span class="token keyword">let</span> ans <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> min<span class="token punctuation">,</span> max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 递归结束条件</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 当前节点的最大最小值</span>
        min <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">,</span> min<span class="token punctuation">)</span>
        max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">,</span> max<span class="token punctuation">)</span>
        <span class="token comment">// 更新最大差值</span>
        ans <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>max <span class="token operator">-</span> min<span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> min<span class="token punctuation">,</span> max<span class="token punctuation">)</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> min<span class="token punctuation">,</span> max<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> root<span class="token punctuation">.</span>val<span class="token punctuation">,</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>

    <span class="token keyword">return</span> ans
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","1026.html.vue"]]);export{k as default};
