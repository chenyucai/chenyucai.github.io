import{_ as n,o as s,c as a,a as t}from"./app-5b0f25a8.js";const p={},e=t(`<h1 id="js实现koa" tabindex="-1"><a class="header-anchor" href="#js实现koa" aria-hidden="true">#</a> JS实现Koa</h1><h2 id="中间件原理" tabindex="-1"><a class="header-anchor" href="#中间件原理" aria-hidden="true">#</a> 中间件原理</h2><p>koa最核心的原理就是中间件原理：过程中通过next对下一个中间件函数的调用，利用这个特性在 next 之前对 request 进行处理，在 next 函数之后对 response 处理。</p><blockquote><p>Koa 的中间件模型可以非常方便的实现后置处理逻辑。</p></blockquote><h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">&#39;Hello, Koa&#39;</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3001</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;启动成功&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：1 3 body 4 2<br> 代码执行顺序可以这么理解：<br> next()前面的代码放到一个队列：[1, 3, body]，先进先出<br> next()后面的代码放到一个栈：[2, 4]，后进先出<br> 所以执行顺序就是 1 3 body 4 2</p><h2 id="js实现中间件原理" tabindex="-1"><a class="header-anchor" href="#js实现中间件原理" aria-hidden="true">#</a> JS实现中间件原理</h2><blockquote><p>本质上是递归调用</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Koa</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 中间件队列</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>middlewareQueue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 注册中间件，格式(ctx, next) =&gt; {}</span>
    <span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">middileware</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>middlewareQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>middileware<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 包装每一个中间件，实现洋葱模型</span>
    <span class="token function">compose</span><span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// next()其实就是dispatch函数</span>
        <span class="token keyword">const</span> <span class="token function-variable function">dispatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// 递归结束条件</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>middlewareQueue<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// 第i个中间件函数</span>
            <span class="token keyword">const</span> middlewareFn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>middlewareQueue<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
            <span class="token comment">// 包装下一个中间件</span>
            <span class="token keyword">const</span> <span class="token function-variable function">next</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token comment">// 执行当前中间件</span>
            <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">middlewareFn</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> next<span class="token punctuation">)</span>
            <span class="token comment">// 返回结果给上一个中间件,这里使用Promise返回，中间件就可以定义成异步函数了</span>
            <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 从第一个中间件开始执行</span>
        <span class="token keyword">return</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 测试洋葱模型</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>middlewareQueue<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compose</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> nextResult <span class="token operator">=</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> nextResult<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">&#39;middle 1&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> nextResult <span class="token operator">=</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> nextResult<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">&#39;middle 2&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="koa原理" tabindex="-1"><a class="header-anchor" href="#koa原理" aria-hidden="true">#</a> Koa原理</h2><p>koa的组成部分</p><ol><li>中间件：app.use进行注册，compose实现洋葱模型</li><li>启动http服务：app.listen，内部调用http.createServer，同时创建context</li><li>context对象：挂载ctx.req、ctx.res</li><li>request对象：通过ctx.req访问，原理是http.createServer((req, res) =&gt; {})的req</li><li>response对象：通过ctx.res访问，原理是http.createServer((req, res) =&gt; {})的res</li></ol><p>koa执行流程：创建服务http.CreateServer -&gt; 创建上下文createContext -&gt; 执行中间件compose() -&gt; 监听端口server.listen(3000)</p><h2 id="js实现koa-1" tabindex="-1"><a class="header-anchor" href="#js实现koa-1" aria-hidden="true">#</a> JS实现Koa</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Koa</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 中间件队列</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>middlewareQueue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token comment">// 上下文</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 创建上下文</span>
    <span class="token function">createContext</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token operator">=</span> <span class="token punctuation">{</span>
            req<span class="token punctuation">,</span> <span class="token comment">// request对象</span>
            res <span class="token comment">// response对象</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 注册中间件，格式(ctx, next) =&gt; {}</span>
    <span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">middileware</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>middlewareQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>middileware<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 执行中间件</span>
    <span class="token function">compose</span><span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// next()其实就是dispatch函数，实现洋葱模型</span>
        <span class="token keyword">const</span> <span class="token function-variable function">dispatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// 递归结束条件</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>middlewareQueue<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// 第i个中间件函数</span>
            <span class="token keyword">const</span> middlewareFn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>middlewareQueue<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
            <span class="token comment">// 包装下一个中间件</span>
            <span class="token keyword">const</span> <span class="token function-variable function">next</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token comment">// 执行当前中间件</span>
            <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">middlewareFn</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> next<span class="token punctuation">)</span>
            <span class="token comment">// 返回结果给上一个中间件,这里使用Promise返回，中间件就可以定义成异步函数了</span>
            <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 从第一个中间件开始执行</span>
        <span class="token keyword">return</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 启动http服务</span>
    <span class="token function">listen</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token function-variable function">requestHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;request coming&#39;</span><span class="token punctuation">)</span>
            <span class="token comment">// 创建上下文</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
            <span class="token comment">// 执行中间件</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compose</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>requestHandler<span class="token punctuation">)</span>
        <span class="token keyword">return</span> server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> nextResult <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> nextResult<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">&#39;middle 1&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> nextResult <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> nextResult<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">&#39;middle 2&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span>res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;okk&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;request end&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3002</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;start server&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","js-koa.html.vue"]]);export{k as default};
