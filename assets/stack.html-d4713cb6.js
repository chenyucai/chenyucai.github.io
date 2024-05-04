import{_ as n,o as s,c as a,a as t}from"./app-5b0f25a8.js";const e="/images/stack-1.png",p={},c=t('<h1 id="栈" tabindex="-1"><a class="header-anchor" href="#栈" aria-hidden="true">#</a> 栈</h1><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><p>栈是一种后进先出(LIFO，Last In First Out)的数据结构。只用 <code>pop</code> 和 <code>push</code> 完成增删的“数组”。</p><p>栈只有一边开口存取数据，称开口的那一端为“栈顶”，封死的那一端为“栈底”（类似于盛水的木桶，从哪进去的最后还得从哪出来）。</p><p><img src="'+e+`" alt="1"></p><h2 id="后进先出-原则" tabindex="-1"><a class="header-anchor" href="#后进先出-原则" aria-hidden="true">#</a> “后进先出”原则</h2><p>使用栈存储数据元素，对数据元素的“存”和“取”有严格的规定：数据按一定的顺序存储到栈中，当需要调取栈中某数据元素时，需要将在该数据元素之后进栈的先出栈，该数据元素才能从栈中提取出来。</p><h2 id="栈操作数据元素的方法" tabindex="-1"><a class="header-anchor" href="#栈操作数据元素的方法" aria-hidden="true">#</a> 栈操作数据元素的方法</h2><p>栈操作数据元素只有两种动作：</p><ol><li>数据元素用栈的数据结构存储起来，称为“入栈”，也叫“压栈”。</li><li>数据元素由于某种原因需要从栈结构中提取出来，称为“出栈”，也叫“弹栈”。</li></ol><h2 id="js实现栈" tabindex="-1"><a class="header-anchor" href="#js实现栈" aria-hidden="true">#</a> JS实现栈</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Stack</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>dataStore <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>    
    <span class="token punctuation">}</span>
    <span class="token comment">// 进栈</span>
    <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>dataStore<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>    
    <span class="token punctuation">}</span>
    <span class="token comment">// 出栈</span>
    <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dataStore<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    
    <span class="token punctuation">}</span>
    <span class="token comment">// 返回栈顶元素</span>
    <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dataStore<span class="token punctuation">[</span>dataStore<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>    
    <span class="token punctuation">}</span>
    <span class="token comment">// 是否为空栈</span>
    <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dataStore<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span>    
    <span class="token punctuation">}</span>
    <span class="token comment">// 获取栈结构的长度</span>
    <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dataStore<span class="token punctuation">.</span>length    
    <span class="token punctuation">}</span>
    <span class="token comment">// 清除所有元素</span>
    <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>dataStore <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>    
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[c];function i(l,u){return s(),a("div",null,o)}const r=n(p,[["render",i],["__file","stack.html.vue"]]);export{r as default};
