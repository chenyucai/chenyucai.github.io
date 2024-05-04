import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const e="/images/link-list-1.png",t="/images/link-list-2.png",o="/images/link-list-3.png",c="/images/link-list-4.png",l={},i=p('<h1 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h1><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><p>链表又称单链表、链式存储结构，用于存储逻辑关系为“一对一”的数据。</p><p>使用链表存储数据，不强制要求数据在内存中集中存储，各个元素可以分散存储在内存中。</p><p>链表存储数据间逻辑关系的实现方案是：为每一个元素配置一个指针，每个元素的指针都指向自己的直接后继元素，如下图所示：</p><p><img src="'+e+'" alt="1"></p><h2 id="链表组成结构-节点-结点" tabindex="-1"><a class="header-anchor" href="#链表组成结构-节点-结点" aria-hidden="true">#</a> 链表组成结构：节点（结点）</h2><p>链表由节点构成，每个节点由两部分组成：数据域和指针域。</p><p>数据域用来存储元素的值，指针域用来存放指针。</p><p><img src="'+t+'" alt="2"></p><p>一个完整的链表应该由以下几部分构成：</p><ol><li>头指针：一个和结点类型相同的指针，它的特点是：永远指向链表中的第一个结点。上文提到过，我们需要记录链表中第一个元素的存储位置，就是用头指针实现。</li><li>结点：链表中的节点又细分为头结点、首元结点和其它结点： <ul><li>头结点：某些场景中，为了方便解决问题，会故意在链表的开头放置一个空结点，这样的结点就称为头结点。也就是说，头结点是位于链表开头、数据域为空（不利用）的结点。</li><li>首元结点：指的是链表开头第一个存有数据的结点。</li><li>其他节点：链表中其他的节点。</li></ul></li></ol><p>也就是说，一个完整的链表是由头指针和诸多个结点构成的。每个链表都必须有头指针，但头结点不是必须的。</p><p>例如，创建一个包含头结点的链表存储 {1,2,3}，如下图所示</p><p><img src="'+o+`" alt="3"></p><p>再次强调，头指针永远指向链表中的第一个结点。换句话说，如果链表中包含头结点，那么头指针指向的是头结点，反之头指针指向首元结点。</p><h2 id="js实现链表" tabindex="-1"><a class="header-anchor" href="#js实现链表" aria-hidden="true">#</a> JS实现链表</h2><p>需要注意链表的不同插入方法：尾部插入、头部插入、指定元素后面插入、指定元素前面插入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 头结点为空节点</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 从尾部插入节点</span>
    <span class="token function">append</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 空链表</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 找到尾节点</span>
            <span class="token keyword">let</span> lastNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next
            <span class="token keyword">while</span> <span class="token punctuation">(</span>lastNode<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                lastNode <span class="token operator">=</span> lastNode<span class="token punctuation">.</span>next
            <span class="token punctuation">}</span>
            lastNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 从头部插入</span>
    <span class="token function">appendFromHead</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> tmp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next
            <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode
            newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> tmp
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 从指定元素后面插入</span>
    <span class="token function">appendAfterElement</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 链表为空</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next <span class="token operator">=</span> node
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 遍历链表找到element元素</span>
            <span class="token keyword">let</span> target <span class="token operator">=</span> <span class="token keyword">null</span>
            <span class="token keyword">let</span> tmp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next
            <span class="token keyword">while</span> <span class="token punctuation">(</span>tmp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>tmp<span class="token punctuation">.</span>val <span class="token operator">===</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    target <span class="token operator">=</span> tmp
                    <span class="token keyword">break</span>
                <span class="token punctuation">}</span>
                tmp <span class="token operator">=</span> tmp<span class="token punctuation">.</span>next
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;未找到目标节点&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">let</span> next <span class="token operator">=</span> target<span class="token punctuation">.</span>next
            target<span class="token punctuation">.</span>next <span class="token operator">=</span> node
            node<span class="token punctuation">.</span>next <span class="token operator">=</span> next
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 从指定元素前面插入</span>
    <span class="token function">appendBeforeElement</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 链表为空</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next <span class="token operator">=</span> node
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 遍历链表找到element元素</span>
            <span class="token keyword">let</span> target <span class="token operator">=</span> <span class="token keyword">null</span>
            <span class="token keyword">let</span> tmp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next
            <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
            <span class="token keyword">while</span> <span class="token punctuation">(</span>tmp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>tmp<span class="token punctuation">.</span>val <span class="token operator">===</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    target <span class="token operator">=</span> tmp
                    <span class="token keyword">break</span>
                <span class="token punctuation">}</span>
                pre <span class="token operator">=</span> tmp
                tmp <span class="token operator">=</span> tmp<span class="token punctuation">.</span>next
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;未找到目标节点&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span>
            <span class="token punctuation">}</span>
            pre<span class="token punctuation">.</span>next <span class="token operator">=</span> node
            node<span class="token punctuation">.</span>next <span class="token operator">=</span> target
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 删除节点</span>
    <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> curr <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next
        <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
        <span class="token keyword">while</span> <span class="token punctuation">(</span>curr <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>curr<span class="token punctuation">.</span>val <span class="token operator">===</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                pre<span class="token punctuation">.</span>next <span class="token operator">=</span> curr<span class="token punctuation">.</span>next
                <span class="token keyword">return</span>
            <span class="token punctuation">}</span>
            pre <span class="token operator">=</span> curr
            curr <span class="token operator">=</span> curr<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;节点不存在&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 打印链表</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
        <span class="token keyword">do</span> <span class="token punctuation">{</span>
            arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
            node <span class="token operator">=</span> node<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> linkedList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
linkedList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
linkedList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
linkedList<span class="token punctuation">.</span><span class="token function">appendFromHead</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
linkedList<span class="token punctuation">.</span><span class="token function">appendAfterElement</span><span class="token punctuation">(</span><span class="token number">1.5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
linkedList<span class="token punctuation">.</span><span class="token function">appendBeforeElement</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

linkedList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

linkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="双向链表" tabindex="-1"><a class="header-anchor" href="#双向链表" aria-hidden="true">#</a> 双向链表</h2><p>单链表的每个结点再增加一个指向其前趋的指针域 pre，这样形成的链表有两条不同方向的链，称之为双向链表。</p><p>特点：</p><ol><li>双链表一般也由头指针head唯一确定。</li><li>每一结点均有： <ul><li>数据域(value)</li><li>左链域(pre)指向前趋结点.</li><li>右链域(next)指向后继。</li><li>是一种对称结构（既有前趋势，又有后继）</li></ul></li><li>双链表的前插和后插难度是一样的。</li></ol><p>缺点：指针数的增加会导致存储空间需求增加；二是添加和删除数据时需要改变更多指针的指向。</p><p><img src="`+c+`" alt="4"></p><p>节点结构</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),u=[i];function k(r,d){return s(),a("div",null,u)}const m=n(l,[["render",k],["__file","link-list.html.vue"]]);export{m as default};
