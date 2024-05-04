import{_ as n,o as s,c as a,a as e}from"./app-5b0f25a8.js";const p={},t=e(`<h1 id="_143-重排链表" tabindex="-1"><a class="header-anchor" href="#_143-重排链表" aria-hidden="true">#</a> 143.重排链表</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token punctuation">(</span>next <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> next<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify head in-place instead.
 */</span>
<span class="token comment">// 长度为n的链表</span>
<span class="token comment">// 重排后 L0 → Ln-1 → L1 → Ln - 2 → L2 → Ln - 3 → …</span>
<span class="token keyword">var</span> <span class="token function-variable function">reorderList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 先把节点用数组存起来，方便拿取</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">let</span> cur <span class="token operator">=</span> head
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token comment">// console.log(arr)</span>

    <span class="token comment">// 开始重排</span>
    <span class="token comment">// 只需要遍历len/2次就行，因为有一半的节点会从后面插入到前面</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">let</span> half <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>len <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> half<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>next <span class="token operator">=</span> arr<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span>
        arr<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span><span class="token punctuation">.</span>next <span class="token operator">=</span> arr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 最后一个指向null，否则就变成环形链表</span>
    arr<span class="token punctuation">[</span>half<span class="token punctuation">]</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token keyword">return</span> head
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify head in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reorderList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注意到目标链表是由 左半端节点 和 反转后的右半端节点 错位合并的结果</span>
    <span class="token comment">// 1.找到链表的中间点，把链表分成左右两半</span>
    <span class="token comment">// 2.对右半端子链进行反转</span>
    <span class="token comment">// 3.左半端子链和反转后的右半端子链进行错位合并</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head
    <span class="token punctuation">}</span>

    <span class="token comment">// 获取中间节点</span>
    <span class="token keyword">let</span> middle <span class="token operator">=</span> <span class="token function">getMiddleNode</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>

    <span class="token comment">// 将链表分割成左右子链</span>
    <span class="token keyword">let</span> <span class="token punctuation">[</span>left<span class="token punctuation">,</span> right<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">divideLeftAndRight</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> middle<span class="token punctuation">)</span>

    <span class="token comment">// 反转右半端子链</span>
    <span class="token keyword">let</span> reversedRight <span class="token operator">=</span> <span class="token function">reverseNodes</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span>

    <span class="token comment">// 左半端子链和反转的右半端子链 错位合并</span>
    head <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> reversedRight<span class="token punctuation">)</span>

    <span class="token keyword">return</span> head
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 获取链表中间节点
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span> 
 */</span>
<span class="token keyword">function</span> <span class="token function">getMiddleNode</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 可以巧妙的使用快慢指针，快指针一次两步，慢指针一次一步</span>
    <span class="token comment">// 2slow = fast，等fast访问到链尾，slow刚好访问到中点</span>
    <span class="token keyword">let</span> slow <span class="token operator">=</span> head
    <span class="token keyword">let</span> fast <span class="token operator">=</span> head
    <span class="token keyword">while</span> <span class="token punctuation">(</span>slow <span class="token operator">&amp;&amp;</span> fast <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> slow
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 将链表按中间节点分割成左右子链
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">mid</span> 
 */</span>
<span class="token keyword">function</span> <span class="token function">divideLeftAndRight</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> middle</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> head
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next <span class="token operator">!==</span> middle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token comment">// 左子链尾巴置为null，和右子链断开</span>
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token keyword">let</span> left <span class="token operator">=</span> head
    <span class="token keyword">let</span> right <span class="token operator">=</span> middle
    <span class="token keyword">return</span> <span class="token punctuation">[</span>left<span class="token punctuation">,</span> right<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 反转链表
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span> 
 */</span>
<span class="token keyword">function</span> <span class="token function">reverseNodes</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> head
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre

        pre <span class="token operator">=</span> cur
        cur <span class="token operator">=</span> next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> pre
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 错位合并两个链表
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head1</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head2</span> 
 */</span>
<span class="token keyword">function</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token parameter">head1<span class="token punctuation">,</span> head2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> l1 <span class="token operator">=</span> head1
    <span class="token keyword">let</span> l2 <span class="token operator">=</span> head2
    <span class="token comment">// console.log(head1)</span>
    <span class="token comment">// console.log(head2)</span>

    <span class="token comment">// 因为按中点分割，head2长度肯定大于等于head1</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> l1Next <span class="token operator">=</span> l1<span class="token punctuation">.</span>next
        <span class="token keyword">let</span> l2Next <span class="token operator">=</span> l2<span class="token punctuation">.</span>next
        l1<span class="token punctuation">.</span>next <span class="token operator">=</span> l2
        <span class="token comment">// l2比l1长</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>l1Next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            l2<span class="token punctuation">.</span>next <span class="token operator">=</span> l1Next
        <span class="token punctuation">}</span>

        l1 <span class="token operator">=</span> l1Next
        l2 <span class="token operator">=</span> l2Next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> head1
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> head
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
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
<span class="token comment">// console.log(&#39;mid&#39;, getMiddleNode(head))</span>
<span class="token comment">// const reverHead = reverseNodes(head)</span>
<span class="token comment">// print(reverHead)</span>

<span class="token keyword">const</span> newHead <span class="token operator">=</span> <span class="token function">reorderList</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span>newHead<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","143.html.vue"]]);export{r as default};
