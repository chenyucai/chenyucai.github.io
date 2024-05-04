import{_ as n,o as s,c as a,a as e}from"./app-5b0f25a8.js";const p={},t=e(`<h1 id="js实现promise" tabindex="-1"><a class="header-anchor" href="#js实现promise" aria-hidden="true">#</a> JS实现Promise</h1><h2 id="promise概念" tabindex="-1"><a class="header-anchor" href="#promise概念" aria-hidden="true">#</a> Promise概念</h2><p>Promise 是异步编程的一种解决方案：从语法上讲，promise是一个对象，从它可以获取异步操作的消息；从本意上讲，它是承诺，承诺它过一段时间会给你一个结果。</p><p>promise有三种状态： <code>pending(等待态)</code>,<code>fulfiled(成功态)</code>,<code>rejected(失败态)</code>；状态一旦改变，就不会再变。创造promise实例后，它会立即执行。</p><h2 id="promise解决的问题" tabindex="-1"><a class="header-anchor" href="#promise解决的问题" aria-hidden="true">#</a> promise解决的问题</h2><ul><li>回调地狱，代码难以维护， 常常第一个的函数的输出是第二个函数的输入这种现象</li><li>promise可以支持多个并发的请求，获取并发请求中的数据</li><li>这个promise可以解决异步的问题，本身不能说promise是异步的.</li></ul><h2 id="分析promise" tabindex="-1"><a class="header-anchor" href="#分析promise" aria-hidden="true">#</a> 分析Promise</h2><p>如果我们想要封装promise就需要考虑以下几个问题</p><ul><li>如何让Promise变成一个微任务</li><li>如何管理Promise的状态</li><li>then方法的返回值问题</li><li>静态方法: resolve 、reject、all、race</li></ul><h2 id="promise中函数的执行顺序" tabindex="-1"><a class="header-anchor" href="#promise中函数的执行顺序" aria-hidden="true">#</a> Promise中函数的执行顺序</h2><p>使用示例：new Promise(fn).then(handler)</p><p>执行顺序是：new Promise() -&gt; 执行fn里的代码 -&gt; then()函数添加handler队列 -&gt; 异步resovle() -&gt; 在resolveHandler里接收resolve的结果</p><h2 id="手写promise" tabindex="-1"><a class="header-anchor" href="#手写promise" aria-hidden="true">#</a> 手写Promise</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 注意：promise本身不是异步的，它只是能处理异步
 */</span>
<span class="token keyword">class</span> <span class="token class-name">SimplePromise</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> fn <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;callback is not a function&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>fn <span class="token operator">=</span> fn

        <span class="token comment">// 初始化状态，pending fulfiled rejected,状态变更后不能再改变</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">&#39;pending&#39;</span>

        <span class="token comment">// resovle,reject回调函数队列</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>resovleQueue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>rejectQueue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

        <span class="token comment">// new Promise()后，里面的代码是立即执行的</span>
        <span class="token function">fn</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_resovle</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_reject</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token keyword">return</span> <span class="token keyword">this</span>
    <span class="token punctuation">}</span>

    <span class="token function">_resovle</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用完resolve()之后会走到then的resolveHandler函数</span>
        <span class="token comment">// 这里怎么能访问到resolveHandler呢？所以得提前在调用then方法的时候存起来</span>
        <span class="token comment">// then链式调用，后面的then会用到前面then的返回值</span>
        <span class="token comment">// 这里注意变成异步任务，否则resovle执行完了才会执行then函数添加handler，这样就访问不到handler了</span>
        <span class="token comment">// 正确的顺序应该是 new Promise() -&gt; then函数添加handler到队列 -&gt; resolve() -&gt; 执行handler()</span>
        <span class="token comment">// setTimeout是宏任务，所以不准确</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">!==</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 修改状态</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">&#39;fulfiled&#39;</span>
            <span class="token keyword">let</span> res <span class="token operator">=</span> value
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>resovleQueue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> handler <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>resovleQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                res <span class="token operator">=</span> <span class="token function">handler</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">_reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">!==</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">&#39;rejected&#39;</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> res <span class="token operator">=</span> value
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rejectQueue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> handler <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rejectQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                res <span class="token operator">=</span> <span class="token function">handler</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// then的本质是调用then()来接收结果</span>
    <span class="token comment">// 封装then方法，有resolveHandler,rejectHandler两个参数</span>
    <span class="token comment">// 注意理解，调用then()方法的时候里面的代码还不会执行，要等resovle()之后then里面的代码才会执行</span>
    <span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">resolveHandler<span class="token punctuation">,</span> rejectHandler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>resolveHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>resovleQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>resolveHandler<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>rejectHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>rejectQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>rejectHandler<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token keyword">this</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// catch本质是reject</span>
    <span class="token keyword">catch</span><span class="token punctuation">(</span>rejectHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> rejectHandler<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Promise.all([p1,p2...]).then([res1,res2...])</span>
    <span class="token comment">// 入参是迭代器，可以是Array,Map,Set</span>
    <span class="token comment">// 能使用then，所以Promise.all()会返回一个promise对象</span>
    <span class="token keyword">static</span> <span class="token function">all</span><span class="token punctuation">(</span><span class="token parameter">iterators</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> promises <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>iterators<span class="token punctuation">)</span> <span class="token comment">// 转为数组</span>
        <span class="token comment">// results是从p.then()接收的,注意顺序是对应的</span>
        <span class="token keyword">let</span> results <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>promises<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
        <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SimplePromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> promises<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                promises<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    results<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> res

                    <span class="token comment">// 什么时候resovle results呢？</span>
                    <span class="token comment">// 等所有结果响应的时候，所以需要一个计数器</span>
                    count<span class="token operator">++</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> promises<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token function">resolve</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>

                    <span class="token comment">// 注意return，否则链式调用then获取不到上一个then的结果</span>
                    <span class="token keyword">return</span> res
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Promise.race([p1,p2...]).then(firstRes)</span>
    <span class="token keyword">static</span> <span class="token function">race</span><span class="token punctuation">(</span><span class="token parameter">iterators</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> promises <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>iterators<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SimplePromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> p <span class="token keyword">of</span> promises<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 只要有一个结果响应了就resolve</span>
                    <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Promise.resolve(val).then()</span>
    <span class="token keyword">static</span> <span class="token function">resovle</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SimplePromise</span><span class="token punctuation">(</span><span class="token parameter">resovle</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">resovle</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Promise.reject(val).then()</span>
    <span class="token keyword">static</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resovle<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">reject</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// let p = new SimplePromise((resolve, reject) =&gt; {</span>
<span class="token comment">//     console.log(1)</span>
<span class="token comment">//     setTimeout(() =&gt; {</span>
<span class="token comment">//         resolve()</span>
<span class="token comment">//     }, 1000)</span>
<span class="token comment">// }).then(res =&gt; {</span>
<span class="token comment">//     console.log(2)</span>
<span class="token comment">//     return 3</span>
<span class="token comment">// }).then(res =&gt; {</span>
<span class="token comment">//     console.log(3)</span>
<span class="token comment">// })</span>

<span class="token keyword">let</span> p0 <span class="token operator">=</span> SimplePromise<span class="token punctuation">.</span><span class="token function">resovle</span><span class="token punctuation">(</span><span class="token string">&#39;p0&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimplePromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;p1&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimplePromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;p2&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> p3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimplePromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;p3&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// SimplePromise.all([p1, p2, p3]).then(results =&gt; {</span>
<span class="token comment">//     console.log(results);</span>
<span class="token comment">// })</span>

SimplePromise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p3<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p1<span class="token punctuation">,</span> p0<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","js-promise.html.vue"]]);export{r as default};
