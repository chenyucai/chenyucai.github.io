import{_ as n,o as s,c as a,a as e}from"./app-5b0f25a8.js";const t={},p=e(`<h1 id="new运算符原理" tabindex="-1"><a class="header-anchor" href="#new运算符原理" aria-hidden="true">#</a> new运算符原理</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">simpleNew</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.创建一个空对象，并把原型对象指向fn.prototype</span>
    <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> fn<span class="token punctuation">.</span>prototype
    <span class="token comment">// Object.create(fn.prototype) // 或者使用Object.create创建对象</span>

    <span class="token comment">// 2.执行fn，传入this上下文，使fn的熟悉挂载到obj对象上</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

    <span class="token comment">// 3.如果构造函数执行后返回一个“对象”，则会取代整个new出来的结果；如果没有返回对象，则返回new出来的对象</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> result <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> result
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> obj
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 对于第3点原理</span>
<span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;nic&#39;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// { a: 1 }</span>

<span class="token keyword">function</span> <span class="token function">Foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;nic&#39;</span>
    <span class="token keyword">return</span> <span class="token string">&#39;a&#39;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Foo {name: &#39;nic&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","js-new.html.vue"]]);export{r as default};
