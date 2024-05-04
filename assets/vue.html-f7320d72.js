import{_ as n}from"./mvvm-4-9723b1d5.js";import{_ as s,o as a,c as t,a as p}from"./app-5b0f25a8.js";const e={},o=p('<h1 id="手写一个vue" tabindex="-1"><a class="header-anchor" href="#手写一个vue" aria-hidden="true">#</a> 手写一个vue</h1><h2 id="整体结构" tabindex="-1"><a class="header-anchor" href="#整体结构" aria-hidden="true">#</a> 整体结构</h2><p><img src="'+n+`" alt="mvvm图"></p><p>三个组成部分</p><ul><li>Observer：数据处理，通过Object.defineProperty把数据变成响应式，收集观察者，在数据变化时通知观察者。</li><li>Compiler：模板编译，编译模板挂载数据，并生成观察者，在数据变化时接收通知，然后更新视图。</li><li>Dep/Watcher：观察者模式。</li></ul><h2 id="手写代码" tabindex="-1"><a class="header-anchor" href="#手写代码" aria-hidden="true">#</a> 手写代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">SimpleVue</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$el <span class="token operator">=</span> <span class="token keyword">typeof</span> options<span class="token punctuation">.</span>el <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span>
            <span class="token operator">?</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>el<span class="token punctuation">)</span>
            <span class="token operator">:</span> options<span class="token punctuation">.</span>el
        <span class="token keyword">this</span><span class="token punctuation">.</span>$data <span class="token operator">=</span> options<span class="token punctuation">.</span>data
        <span class="token keyword">this</span><span class="token punctuation">.</span>methods <span class="token operator">=</span> options<span class="token punctuation">.</span>methods

        <span class="token comment">// 把data的属性都挂载到vm实例上，方便vm.msg这样调用，这一步是非必需的，可以不看</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_proxyDataToVm</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span>

        <span class="token comment">// 把data变成响应式数据，数据变化时通知观察者</span>
        <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span>
        <span class="token comment">// 编译模板挂载数据，并生成观察者，在数据变化时接收通知，然后更新视图</span>
        <span class="token keyword">new</span> <span class="token class-name">Compiler</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">_proxyDataToVm</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">!==</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> newVal
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 劫持数据，全部属性变为响应式</span>
    <span class="token function">observe</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// 不能在get()里直接return data[key]，否则会造成死循环</span>
            <span class="token keyword">let</span> value <span class="token operator">=</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
            <span class="token keyword">let</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// if(!Dep.depMap[key]) {</span>
                    <span class="token comment">//     Dep.depMap[key] = new Dep()</span>
                    <span class="token comment">// }</span>
                    <span class="token comment">// 通过targetWatcher中间变量添加warcher，注意看watcher的addSelfToSub方法</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>targetWatcher<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;add watcher&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        dep<span class="token punctuation">.</span><span class="token function">addSub</span><span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>targetWatcher<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                    <span class="token keyword">return</span> value
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">let</span> oldVal <span class="token operator">=</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>oldVal <span class="token operator">!==</span> newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        value <span class="token operator">=</span> newVal
                        <span class="token comment">// 通知观察者更新视图</span>
                        <span class="token comment">// Dep.depMap[key].notify(newVal)</span>
                        dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译模板</span>
<span class="token comment">// 1.编译初始化模板数据，第一次挂载页面</span>
<span class="token comment">// 2.生成观察者，接收数据变化的通知，然后更新视图</span>
<span class="token keyword">class</span> <span class="token class-name">Compiler</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>el <span class="token operator">=</span> vm<span class="token punctuation">.</span>$el
        <span class="token keyword">this</span><span class="token punctuation">.</span>vm <span class="token operator">=</span> vm
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">)</span>

        <span class="token comment">// 创建文档碎片，减少页面重排重绘，这一步不是必须的</span>
        <span class="token comment">// const fragment = document.createDocumentFragment();</span>
        <span class="token comment">// while (el.firstChild) {</span>
        <span class="token comment">//     fragment.appendChild(el.firstChild)</span>
        <span class="token comment">// }</span>
        <span class="token comment">//this.el.appenChild(fragment)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 编译模板</span>
    <span class="token function">compile</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> childNodes <span class="token operator">=</span> el<span class="token punctuation">.</span>childNodes
        childNodes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">node</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isElementNode</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compileElementNode</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isTextNode</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compileTextNode</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 递归处理子节点</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>childNodes <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>childNodes<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 判断是否元素节点，如div标签，但div里面的文本属于文本节点</span>
    <span class="token function">isElementNode</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> node<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 判断是否文本节点</span>
    <span class="token function">isTextNode</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> node<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token number">3</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 编译文本节点</span>
    <span class="token function">compileTextNode</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1.匹配{{msg}}</span>
        <span class="token keyword">const</span> text <span class="token operator">=</span> node<span class="token punctuation">.</span>textContent
        <span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\{\\{(.+?)\\}\\}</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span><span class="token comment">// 匹配{{xx}},{{xx.xx}}的正则</span>
        <span class="token comment">// 如果是 {{}} 的文本节点，下面的代码只做原理实现</span>
        <span class="token comment">// {{obj.name}}这种格式的取值的时候需要用reduce构造出this.vm.$data[&#39;obj&#39;][&#39;name&#39;]才行</span>
        <span class="token comment">// 赋值时要构造出\`this.vm.$data[&#39;obj&#39;][&#39;name&#39;]=newVal\`字符串，然后用eval()强制执行</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 2.渲染msg数据</span>
            <span class="token keyword">let</span> key <span class="token operator">=</span> RegExp<span class="token punctuation">.</span>$1<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            node<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">.</span>$data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
            <span class="token comment">// 3.添加观察者，在msg改变的时候通知观察者更新视图，这里实现比较巧妙！注意看wathcer的addSelfToDep方法</span>
            <span class="token keyword">let</span> watcher <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;cb&#39;</span><span class="token punctuation">,</span> newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
                node<span class="token punctuation">.</span>textContent <span class="token operator">=</span> newVal
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token comment">// Dep.depMap[key].addSub(watcher)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 编译元素节点,处理指令v-text,v-html</span>
    <span class="token function">compileElementNode</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>attributes<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>attributes<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>attributes<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">attr</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>attr<span class="token punctuation">.</span>nodeName<span class="token punctuation">,</span> attr<span class="token punctuation">.</span>nodeValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> attrName <span class="token operator">=</span> attr<span class="token punctuation">.</span>name
            <span class="token keyword">let</span> attrValue <span class="token operator">=</span> attr<span class="token punctuation">.</span>value
            <span class="token keyword">if</span> <span class="token punctuation">(</span>attrName <span class="token operator">===</span> <span class="token string">&#39;v-text&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                node<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">.</span>$data<span class="token punctuation">[</span>attrValue<span class="token punctuation">]</span>
                <span class="token comment">// 添加观察者</span>
                <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">,</span> attrValue<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;cb&#39;</span><span class="token punctuation">,</span> newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    node<span class="token punctuation">.</span>textContent <span class="token operator">=</span> newVal
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>attrName <span class="token operator">===</span> <span class="token string">&#39;v-html&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                node<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">.</span>$data<span class="token punctuation">[</span>attrValue<span class="token punctuation">]</span>
                <span class="token comment">// 添加观察者</span>
                <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">,</span> attrValue<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;cb&#39;</span><span class="token punctuation">,</span> newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    node<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> newVal
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// v-model，本质上是input事件</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>attrName <span class="token operator">===</span> <span class="token string">&#39;v-model&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 初始值赋给输入框</span>
                node<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">.</span>$data<span class="token punctuation">[</span>attrValue<span class="token punctuation">]</span>
                <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">,</span> attrValue<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;cb&#39;</span><span class="token punctuation">,</span> newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    node<span class="token punctuation">.</span>value <span class="token operator">=</span> newVal
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
                node<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">.</span>$data<span class="token punctuation">[</span>attrValue<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// v-on:click</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>attrName<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;v-on&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> event<span class="token punctuation">]</span> <span class="token operator">=</span> attrName<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;:&#39;</span><span class="token punctuation">)</span>
                node<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">.</span>methods<span class="token punctuation">[</span>attrValue<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dep</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token function">addSub</span><span class="token punctuation">(</span><span class="token parameter">sub</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">notify</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">sub</span> <span class="token operator">=&gt;</span> sub<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
Dep<span class="token punctuation">.</span>depMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Dep<span class="token punctuation">.</span>targetWatcher <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>vm <span class="token operator">=</span> vm
        <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key
        <span class="token keyword">this</span><span class="token punctuation">.</span>callback <span class="token operator">=</span> callback

        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addSelfToDep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">addSelfToDep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;add self to dep&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 把当前watcher挂载到中间变量上</span>
        Dep<span class="token punctuation">.</span>targetWatcher <span class="token operator">=</span> <span class="token keyword">this</span>
        <span class="token comment">// 通过访问来触发get方法，在get方法中调用addSub,通过targetWatcher中间变量把当前watcher添加到dep中</span>
        <span class="token keyword">let</span> oldValue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">.</span>$data<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>key<span class="token punctuation">]</span>
        Dep<span class="token punctuation">.</span>targetWatcher <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token comment">// 这种方法比较巧妙，如果不理解也可以定义一个全局的depMap[key],然后在new Watcher的时候通过depMap[key].addSub添加。</span>
    <span class="token punctuation">}</span>
    <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">callback</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleVue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pager</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// setInterval(() =&gt; {</span>
<span class="token comment">//     vm.$data.msg++</span>
<span class="token comment">//     // console.log(vm.$data.msg);</span>
<span class="token comment">// }, 1000)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[o];function l(i,u){return a(),t("div",null,c)}const d=s(e,[["render",l],["__file","vue.html.vue"]]);export{d as default};
