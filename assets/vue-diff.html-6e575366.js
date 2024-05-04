import{_ as t,r as p,o as e,c as o,b as n,d as s,e as c,a as l}from"./app-5b0f25a8.js";const u="/images/vue-diff-1.png",i={},d=l('<h1 id="vue的diff算法原理" tabindex="-1"><a class="header-anchor" href="#vue的diff算法原理" aria-hidden="true">#</a> vue的diff算法原理</h1><h2 id="同层比较-广度优先-层序遍历" tabindex="-1"><a class="header-anchor" href="#同层比较-广度优先-层序遍历" aria-hidden="true">#</a> 同层比较（广度优先，层序遍历）</h2><p>Diff算法是逐层进行比较，只比较同一层次的节点，不会跨层次比较，大大降低了复杂度，算法复杂度为<strong>O(n)</strong></p><h2 id="同层节点由两边向中间比较" tabindex="-1"><a class="header-anchor" href="#同层节点由两边向中间比较" aria-hidden="true">#</a> 同层节点由两边向中间比较</h2><ul><li>oldStart 和 newStart 进行比较sameVnode(oldStart, newStart)，如果相同，继续oldStart++,newStart++比较</li><li>oldStart 和 newEnd 进行比较sameVnode(oldStart, newEnd)，如果相同，说明newEnd前面的节点都是新的</li><li>oldEnd 和 newStart 进行比较sameVnode(oldEnd, newStart)，如果相同，说明newStart后面的节点都是新的</li><li>oldEnd 和 newEnd 进行比较sameVnode(oldE, newE)，如果相同，继续oldEnd-- newEnd-- 比较</li></ul><h2 id="不同类型节点的比较" tabindex="-1"><a class="header-anchor" href="#不同类型节点的比较" aria-hidden="true">#</a> 不同类型节点的比较</h2><p>如果发现新旧两个节点类型不同时，Diff算法会直接删除旧的节点及其子节点并插入新的节点，这是由于前面提出的不同组件产生的DOM结构一般是不同的，所以可以不用浪费时间去比较。注意的是，删除节点意味着彻底销毁该节点，并不会将该节点去与后面的节点相比较。</p><h2 id="相同类型节点的比较" tabindex="-1"><a class="header-anchor" href="#相同类型节点的比较" aria-hidden="true">#</a> 相同类型节点的比较</h2><p>若是两个节点类型相同时，Diff算法会重新设置该节点的属性，从而实现节点的更新。</p><h2 id="列表节点的比较" tabindex="-1"><a class="header-anchor" href="#列表节点的比较" aria-hidden="true">#</a> 列表节点的比较</h2><p>列表节点的操作一般包括添加、删除和排序，列表节点需要我们给它一个key才能进行高效的比较。<br> 不带key的节点删除重新创建，带key，key相同就可以复用节点。</p><h2 id="diff对比流程" tabindex="-1"><a class="header-anchor" href="#diff对比流程" aria-hidden="true">#</a> Diff对比流程</h2><p><img src="'+u+`" alt="流程"></p><h2 id="核心对比代码" tabindex="-1"><a class="header-anchor" href="#核心对比代码" aria-hidden="true">#</a> 核心对比代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">updateChildren</span><span class="token punctuation">(</span><span class="token parameter">parentElm<span class="token punctuation">,</span> oldCh<span class="token punctuation">,</span> newCh</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> oldStartIdx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> newStartIdx <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> oldEndIdx <span class="token operator">=</span> oldCh<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token keyword">let</span> oldStartVnode <span class="token operator">=</span> oldCh<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> oldEndVnode <span class="token operator">=</span> oldCh<span class="token punctuation">[</span>oldEndIdx<span class="token punctuation">]</span>
  <span class="token keyword">let</span> newEndIdx <span class="token operator">=</span> newCh<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token keyword">let</span> newStartVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> newEndVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span>newEndIdx<span class="token punctuation">]</span>
  <span class="token keyword">let</span> oldKeyToIdx
  <span class="token keyword">let</span> idxInOld
  <span class="token keyword">let</span> elmToMove
  <span class="token keyword">let</span> before
  <span class="token keyword">while</span> <span class="token punctuation">(</span>oldStartIdx <span class="token operator">&lt;=</span> oldEndIdx <span class="token operator">&amp;&amp;</span> newStartIdx <span class="token operator">&lt;=</span> newEndIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>oldStartVnode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      oldStartVnode <span class="token operator">=</span> oldCh<span class="token punctuation">[</span><span class="token operator">++</span>oldStartIdx<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>oldEndVnode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      oldEndVnode <span class="token operator">=</span> oldCh<span class="token punctuation">[</span><span class="token operator">--</span>oldEndIdx<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>newStartVnode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      newStartVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span><span class="token operator">++</span>newStartIdx<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>newEndVnode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      newEndVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span><span class="token operator">--</span>newEndIdx<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">sameVnode</span><span class="token punctuation">(</span>oldStartVnode<span class="token punctuation">,</span> newStartVnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">patchVnode</span><span class="token punctuation">(</span>oldStartVnode<span class="token punctuation">,</span> newStartVnode<span class="token punctuation">)</span>
      oldStartVnode <span class="token operator">=</span> oldCh<span class="token punctuation">[</span><span class="token operator">++</span>oldStartIdx<span class="token punctuation">]</span>
      newStartVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span><span class="token operator">++</span>newStartIdx<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">sameVnode</span><span class="token punctuation">(</span>oldEndVnode<span class="token punctuation">,</span> newEndVnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">patchVnode</span><span class="token punctuation">(</span>oldEndVnode<span class="token punctuation">,</span> newEndVnode<span class="token punctuation">)</span>
      oldEndVnode <span class="token operator">=</span> oldCh<span class="token punctuation">[</span><span class="token operator">--</span>oldEndIdx<span class="token punctuation">]</span>
      newEndVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span><span class="token operator">--</span>newEndIdx<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">sameVnode</span><span class="token punctuation">(</span>oldStartVnode<span class="token punctuation">,</span> newEndVnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">patchVnode</span><span class="token punctuation">(</span>oldStartVnode<span class="token punctuation">,</span> newEndVnode<span class="token punctuation">)</span>
      api<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> oldStartVnode<span class="token punctuation">.</span>el<span class="token punctuation">,</span> api<span class="token punctuation">.</span><span class="token function">nextSibling</span><span class="token punctuation">(</span>oldEndVnode<span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">)</span>
      oldStartVnode <span class="token operator">=</span> oldCh<span class="token punctuation">[</span><span class="token operator">++</span>oldStartIdx<span class="token punctuation">]</span>
      newEndVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span><span class="token operator">--</span>newEndIdx<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">sameVnode</span><span class="token punctuation">(</span>oldEndVnode<span class="token punctuation">,</span> newStartVnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">patchVnode</span><span class="token punctuation">(</span>oldEndVnode<span class="token punctuation">,</span> newStartVnode<span class="token punctuation">)</span>
      api<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> oldEndVnode<span class="token punctuation">.</span>el<span class="token punctuation">,</span> oldStartVnode<span class="token punctuation">.</span>el<span class="token punctuation">)</span>
      oldEndVnode <span class="token operator">=</span> oldCh<span class="token punctuation">[</span><span class="token operator">--</span>oldEndIdx<span class="token punctuation">]</span>
      newStartVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span><span class="token operator">++</span>newStartIdx<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 使用key时的比较</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>oldKeyToIdx <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        oldKeyToIdx <span class="token operator">=</span> <span class="token function">createKeyToOldIdx</span><span class="token punctuation">(</span>oldCh<span class="token punctuation">,</span> oldStartIdx<span class="token punctuation">,</span> oldEndIdx<span class="token punctuation">)</span> <span class="token comment">// 有key生成index表</span>
      <span class="token punctuation">}</span>
      idxInOld <span class="token operator">=</span> oldKeyToIdx<span class="token punctuation">[</span>newStartVnode<span class="token punctuation">.</span>key<span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>idxInOld<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        api<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> <span class="token function">createEle</span><span class="token punctuation">(</span>newStartVnode<span class="token punctuation">)</span><span class="token punctuation">.</span>el<span class="token punctuation">,</span> oldStartVnode<span class="token punctuation">.</span>el<span class="token punctuation">)</span>
        newStartVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span><span class="token operator">++</span>newStartIdx<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">else</span> <span class="token punctuation">{</span>
        elmToMove <span class="token operator">=</span> oldCh<span class="token punctuation">[</span>idxInOld<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>elmToMove<span class="token punctuation">.</span>sel <span class="token operator">!==</span> newStartVnode<span class="token punctuation">.</span>sel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          api<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> <span class="token function">createEle</span><span class="token punctuation">(</span>newStartVnode<span class="token punctuation">)</span><span class="token punctuation">.</span>el<span class="token punctuation">,</span> oldStartVnode<span class="token punctuation">.</span>el<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token function">patchVnode</span><span class="token punctuation">(</span>elmToMove<span class="token punctuation">,</span> newStartVnode<span class="token punctuation">)</span>
          oldCh<span class="token punctuation">[</span>idxInOld<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span>
          api<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> elmToMove<span class="token punctuation">.</span>el<span class="token punctuation">,</span> oldStartVnode<span class="token punctuation">.</span>el<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        newStartVnode <span class="token operator">=</span> newCh<span class="token punctuation">[</span><span class="token operator">++</span>newStartIdx<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>oldStartIdx <span class="token operator">&gt;</span> oldEndIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    before <span class="token operator">=</span> newCh<span class="token punctuation">[</span>newEndIdx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> newCh<span class="token punctuation">[</span>newEndIdx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>el
    <span class="token function">addVnodes</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> before<span class="token punctuation">,</span> newCh<span class="token punctuation">,</span> newStartIdx<span class="token punctuation">,</span> newEndIdx<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>newStartIdx <span class="token operator">&gt;</span> newEndIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">removeVnodes</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> oldCh<span class="token punctuation">,</span> oldStartIdx<span class="token punctuation">,</span> oldEndIdx<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),r={href:"https://www.jianshu.com/p/c673a50e9976",target:"_blank",rel:"noopener noreferrer"};function k(v,m){const a=p("ExternalLinkIcon");return e(),o("div",null,[d,n("blockquote",null,[n("p",null,[s("本文写的较为粗糙，只是方便笔者自己理解，详细"),n("a",r,[s("参考"),c(a)])])])])}const b=t(i,[["render",k],["__file","vue-diff.html.vue"]]);export{b as default};