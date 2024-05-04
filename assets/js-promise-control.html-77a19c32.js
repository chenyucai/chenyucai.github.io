import{_ as n,o as s,c as a,a as p}from"./app-5b0f25a8.js";const t={},e=p(`<h1 id="如何控制promise并发数" tabindex="-1"><a class="header-anchor" href="#如何控制promise并发数" aria-hidden="true">#</a> 如何控制promise并发数</h1><p>思路：</p><ol><li>先发送3个，3个中哪个先响应了，立即发送第4个，第4个和前面没响应的两个中哪个先响应了，立即发送第5个，直到10个发送完</li><li>利用Promise.race()获取最先响应的请求</li><li>利用array.reduce实现队列执行</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> time<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">loadData</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">await</span> <span class="token function">sleep</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>time<span class="token punctuation">)</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>info<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> urls <span class="token operator">=</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token literal-property property">info</span><span class="token operator">:</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">time</span><span class="token operator">:</span><span class="token number">2000</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">info</span><span class="token operator">:</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">time</span><span class="token operator">:</span><span class="token number">2000</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">info</span><span class="token operator">:</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">time</span><span class="token operator">:</span><span class="token number">2000</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">info</span><span class="token operator">:</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">time</span><span class="token operator">:</span><span class="token number">2000</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">info</span><span class="token operator">:</span><span class="token string">&#39;5&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">time</span><span class="token operator">:</span><span class="token number">3000</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">info</span><span class="token operator">:</span><span class="token string">&#39;6&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">time</span><span class="token operator">:</span><span class="token number">1000</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">info</span><span class="token operator">:</span><span class="token string">&#39;7&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">time</span><span class="token operator">:</span><span class="token number">2000</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">info</span><span class="token operator">:</span><span class="token string">&#39;8&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">time</span><span class="token operator">:</span><span class="token number">2000</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">info</span><span class="token operator">:</span><span class="token string">&#39;9&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">time</span><span class="token operator">:</span><span class="token number">3000</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">info</span><span class="token operator">:</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">time</span><span class="token operator">:</span><span class="token number">1000</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 先发送3个，3个中哪个先响应了，立即发送第4个，</span>
<span class="token comment">// 第4个和前面没响应的两个中哪个先响应了，立即发送第5个，直到10个发送完</span>
<span class="token keyword">function</span> <span class="token function">limitLoad</span><span class="token punctuation">(</span><span class="token parameter">urls<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> limit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将数组拷贝一份</span>
    <span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>urls<span class="token punctuation">)</span>
    <span class="token keyword">let</span> promises <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token comment">// 首先并发3个</span>
    promises <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> limit<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">handler</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 用Promise.race找到先影响的脚标，下个请求插入到这个脚标位置来请求</span>
            <span class="token keyword">return</span> index
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 剩下的数组以队列的形式来执行</span>
    queue<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">p<span class="token punctuation">,</span> url</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">index</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            promises<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">handler</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> index <span class="token comment">// 继续返回脚标</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">limitLoad</span><span class="token punctuation">(</span>urls<span class="token punctuation">,</span> loadData<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","js-promise-control.html.vue"]]);export{r as default};