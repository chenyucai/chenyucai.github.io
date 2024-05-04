import{_ as n,o as s,c as a,a as t}from"./app-5b0f25a8.js";const p={},e=t(`<h1 id="vuex的原理及实现" tabindex="-1"><a class="header-anchor" href="#vuex的原理及实现" aria-hidden="true">#</a> vuex的原理及实现</h1><h2 id="基本原理" tabindex="-1"><a class="header-anchor" href="#基本原理" aria-hidden="true">#</a> 基本原理</h2><h3 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h3><ol><li>store是如何被使用到各个组件上的？在每个组件都能使用this.$store进行访问</li><li>为什么state的数据是响应式的？修改state会自动更新视图</li><li>在组件中为什么用this.$store.dispch可以触发store的actions？</li><li>在组件中为什么用this.$store.commit可以触发store的mutations？</li><li>怎么实现state值只允许mutation修改，不允许直接修改？</li></ol><h3 id="解答" tabindex="-1"><a class="header-anchor" href="#解答" aria-hidden="true">#</a> 解答</h3><ul><li>通过vue的mixin对每个组件挂载this.$store</li><li>state响应式依靠的vue实例</li></ul><h2 id="vuex使用场景" tabindex="-1"><a class="header-anchor" href="#vuex使用场景" aria-hidden="true">#</a> vuex使用场景</h2><ol><li>组件之间需要共享状态</li><li>在实际项目中，ajax请求来的数据我也会放到store维护，因为这样数据逻辑和页面可以分离，页面不用关心如何加载和处理数据，只需要简单挂载。</li></ol><h2 id="vuex组成部分" tabindex="-1"><a class="header-anchor" href="#vuex组成部分" aria-hidden="true">#</a> vuex组成部分</h2><p>state：通过new Vue()实现数据响应式，通过mixin对每一个组件实现this.$store访问<br> getters：通过Object.defineProperty实现get取值<br> mutations：实现store.commit(type, payload)即可<br> actions：实现store.dispatch(type, payload)即可</p><h2 id="实现简单版vuex" tabindex="-1"><a class="header-anchor" href="#实现简单版vuex" aria-hidden="true">#</a> 实现简单版vuex</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// simpleVuex.js</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Store</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token punctuation">{</span> state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token operator">=</span> options

        <span class="token comment">// 是否正在commit</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_isCommitting <span class="token operator">=</span> <span class="token boolean">false</span>

        <span class="token comment">// 将state变成响应式数据，使得在改变state的时候可以自动更新视图</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    state
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// 监听state变化，只允许通过mutation修改，不允许直接修改</span>
                <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">sync</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否同步执行handler，必须为true，否则在commit之后的handler是异步执行的话，isCommitting值不准确</span>
                    <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                        <span class="token comment">// 不是通过commit修改的</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>_isCommitting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;state只能通过提交mutations修改&#39;</span><span class="token punctuation">)</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>_mutations <span class="token operator">=</span> mutations
        <span class="token keyword">this</span><span class="token punctuation">.</span>_actions <span class="token operator">=</span> actions

        <span class="token comment">// 用Object.defineProperty对getters进行劫持，使得可以通过store.getters.countText进行访问</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>getters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> getters<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> valueFn <span class="token operator">=</span> getters<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
            Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>getters<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token function">valueFn</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 通过store.state.count访问</span>
    <span class="token keyword">get</span> <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_vm<span class="token punctuation">.</span>state
    <span class="token punctuation">}</span>

    <span class="token comment">// commit mutation, 方法store.commit(type, payload)</span>
    <span class="token function">commit</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> committing <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_isCommitting
        <span class="token keyword">this</span><span class="token punctuation">.</span>_isCommitting <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">// 正在提交</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_mutations<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_isCommitting <span class="token operator">=</span> committing <span class="token comment">// 提交完成</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// dispatch action, 方法store.dispatch(type, payload)</span>
    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_actions<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">commit</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 注意绑定this上下文</span>
            <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
        <span class="token punctuation">}</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">countText</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token string">&#39;秒&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            state<span class="token punctuation">.</span>count <span class="token operator">+=</span> payload
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">setCountAsync</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit<span class="token punctuation">,</span> state <span class="token punctuation">}</span><span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;setCount&#39;</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 注册vuex插件</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> installVuex <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$store <span class="token operator">=</span> store
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// main.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>installVuex<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./simpleVuex&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>installVuex<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","vuex.html.vue"]]);export{r as default};
