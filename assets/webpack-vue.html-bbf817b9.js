import{_ as n,o as s,c as a,a as e}from"./app-5b0f25a8.js";const t={},p=e(`<h1 id="webpack处理vue" tabindex="-1"><a class="header-anchor" href="#webpack处理vue" aria-hidden="true">#</a> webpack处理vue</h1><p>使用vue-loader，vue-loader含loader和plugin，需同时使用。</p><p>vue-loader会把.vue文件编译成html、css、js/ts 3个部分，再让ts-loader,css-loader等去进一步编译。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> VueLoaderPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-loader&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue-loader&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">VueLoaderPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">templateContent</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;title&gt;Webpack App&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;app&quot; /&gt;
  &lt;/body&gt;
&lt;/html&gt;
    </span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，使用ts时ts-loader无法识别vue文件，需要添加声明文件<code>src/shims-vue.d.ts</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>declare module <span class="token string">&#39;*.vue&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ComponentOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">const</span> <span class="token literal-property property">componentOptions</span><span class="token operator">:</span> ComponentOptions
  <span class="token keyword">export</span> <span class="token keyword">default</span> componentOptions
<span class="token punctuation">}</span>

declare module <span class="token string">&#39;vue/types/vue&#39;</span> <span class="token punctuation">{</span>
  <span class="token comment">// import VueRouter, { Route } from &#39;vue-router&#39;;</span>
  <span class="token keyword">interface</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
    <span class="token comment">// $router: VueRouter; // 这表示this下有这个东西</span>
    <span class="token comment">// $route: Route;</span>
    <span class="token literal-property property">$http</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
    <span class="token literal-property property">$Message</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
    <span class="token literal-property property">$Modal</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function l(c,i){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","webpack-vue.html.vue"]]);export{u as default};
