import{_ as n,o as s,c as a,a as e}from"./app-5b0f25a8.js";const p={},t=e(`<h1 id="_707-设计链表" tabindex="-1"><a class="header-anchor" href="#_707-设计链表" aria-hidden="true">#</a> 707.设计链表</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token punctuation">(</span>next <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> next<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">MyLinkedList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">index</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyLinkedList</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> cur<span class="token punctuation">.</span>val
        <span class="token punctuation">}</span>
        i<span class="token operator">++</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyLinkedList</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">addAtHead</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
    node<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyLinkedList</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">addAtTail</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        <span class="token keyword">return</span> 
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">index</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyLinkedList</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">addAtIndex</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在链头添加</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addAtHead</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">&gt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 在链尾添加</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">===</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addAtTail</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
            pre<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode
            newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> cur
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        i<span class="token operator">++</span>
        pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">index</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyLinkedList</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">deleteAtIndex</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 删除表头</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pre<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        i<span class="token operator">++</span>
        pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">MyLinkedList</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">size</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">while</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
        len<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> len
<span class="token punctuation">}</span>

<span class="token class-name">MyLinkedList</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">print</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */</span>
<span class="token comment">// const myLinkedList = new MyLinkedList();</span>
<span class="token comment">// myLinkedList.addAtHead(1);</span>
<span class="token comment">// myLinkedList.print()</span>
<span class="token comment">// myLinkedList.addAtTail(3);</span>
<span class="token comment">// myLinkedList.print()</span>
<span class="token comment">// myLinkedList.addAtIndex(1, 2);    // 链表变为 1-&gt;2-&gt;3</span>
<span class="token comment">// myLinkedList.print()</span>
<span class="token comment">// myLinkedList.addAtIndex(3, 4);    // 链表变为 1-&gt;2-&gt;3-&gt;4</span>
<span class="token comment">// myLinkedList.print()</span>
<span class="token comment">// console.log(myLinkedList.get(1));              // 返回 2</span>
<span class="token comment">// myLinkedList.deleteAtIndex(1);    // 现在，链表变为 1-&gt;3</span>
<span class="token comment">// myLinkedList.print()</span>
<span class="token comment">// console.log(myLinkedList.get(1));              // 返回 3</span>

<span class="token comment">// const myLinkedList = new MyLinkedList();</span>
<span class="token comment">// myLinkedList.addAtHead(5)</span>
<span class="token comment">// myLinkedList.addAtIndex(1,2)</span>
<span class="token comment">// myLinkedList.print()</span>
<span class="token comment">// console.log(myLinkedList.get(1))</span>
<span class="token comment">// myLinkedList.addAtHead(6)</span>
<span class="token comment">// myLinkedList.addAtTail(2)</span>
<span class="token comment">// myLinkedList.print()</span>
<span class="token comment">// console.log(myLinkedList.get(3))</span>

<span class="token keyword">const</span> myLinkedList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyLinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myLinkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
myLinkedList<span class="token punctuation">.</span><span class="token function">addAtTail</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
myLinkedList<span class="token punctuation">.</span><span class="token function">addAtTail</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
myLinkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myLinkedList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","707.html.vue"]]);export{k as default};
