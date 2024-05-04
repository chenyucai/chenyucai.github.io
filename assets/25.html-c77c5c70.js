import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const e={},t=p(`<h1 id="_25-k个一组翻转链表-hard" tabindex="-1"><a class="header-anchor" href="#_25-k个一组翻转链表-hard" aria-hidden="true">#</a> 25.K个一组翻转链表.hard</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token punctuation">(</span>next <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> next<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseKGroup</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 数组记录每轮要翻转的节点</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token comment">// 从head就要开始翻转，所以要定义一个空头</span>
    <span class="token keyword">let</span> dummyHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    dummyHead<span class="token punctuation">.</span>next <span class="token operator">=</span> head

    <span class="token keyword">let</span> cur <span class="token operator">=</span> dummyHead
    <span class="token keyword">let</span> pre <span class="token operator">=</span> dummyHead <span class="token comment">// 前一轮最后一个节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 加入数组，如果数组长度等于k，就可以翻转数组里的节点</span>
        arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">===</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 先把最后一个节点的next拿出来，等下第一个节点要链过去</span>
            <span class="token keyword">let</span> tailNext <span class="token operator">=</span> arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>next
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>next <span class="token operator">=</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 第一个节点</span>
            arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>next <span class="token operator">=</span> tailNext
            <span class="token comment">// 最后一个节点和前一轮的节点连起来</span>
            pre<span class="token punctuation">.</span>next <span class="token operator">=</span> arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
            <span class="token comment">// 更新pre，等待与下一轮的节点连接</span>
            pre <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
            <span class="token comment">// 下一轮开始节点</span>
            cur <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
            <span class="token comment">// 情况数组，进行下一轮</span>
            arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> dummyHead<span class="token punctuation">.</span>next
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseKGroup</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 从head就要开始翻转，所以要定义一个空头</span>
    <span class="token keyword">let</span> dummyHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    dummyHead<span class="token punctuation">.</span>next <span class="token operator">=</span> head
    <span class="token keyword">let</span> pre <span class="token operator">=</span> dummyHead

    <span class="token keyword">while</span> <span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> tail <span class="token operator">=</span> pre
        <span class="token comment">// 找出tail的位置</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tail <span class="token operator">=</span> tail<span class="token punctuation">.</span>next
            <span class="token comment">// 长度不够</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>tail <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> dummyHead<span class="token punctuation">.</span>next
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 开始翻转</span>
        <span class="token keyword">const</span> next <span class="token operator">=</span> tail<span class="token punctuation">.</span>next
        <span class="token keyword">let</span> <span class="token punctuation">[</span>newHead<span class="token punctuation">,</span> newTail<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">reverse</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> tail<span class="token punctuation">)</span>
        <span class="token comment">// 把子链表重新接回原链表</span>
        pre<span class="token punctuation">.</span>next <span class="token operator">=</span> newHead
        newTail<span class="token punctuation">.</span>next <span class="token operator">=</span> next
        pre <span class="token operator">=</span> newTail
        head <span class="token operator">=</span> newTail<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dummyHead<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 翻转节点
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span> 起始位置
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">tail</span> 结束位置
 */</span>
<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> tail</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> prev <span class="token operator">=</span> tail<span class="token punctuation">.</span>next
    <span class="token keyword">let</span> cur <span class="token operator">=</span> head
    <span class="token keyword">while</span> <span class="token punctuation">(</span>prev <span class="token operator">!==</span> tail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> prev

        prev <span class="token operator">=</span> cur
        cur <span class="token operator">=</span> next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>tail<span class="token punctuation">,</span> head<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> n1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> n2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> n3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> n4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
head<span class="token punctuation">.</span>next <span class="token operator">=</span> n1
n1<span class="token punctuation">.</span>next <span class="token operator">=</span> n2
n2<span class="token punctuation">.</span>next <span class="token operator">=</span> n3
n3<span class="token punctuation">.</span>next <span class="token operator">=</span> n4
<span class="token function">print</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>

<span class="token keyword">const</span> newHead <span class="token operator">=</span> <span class="token function">reverseKGroup</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> head
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">print</span><span class="token punctuation">(</span>newHead<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","25.html.vue"]]);export{r as default};
