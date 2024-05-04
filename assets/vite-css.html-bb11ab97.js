import{_ as s,o as n,c as a,a as e}from"./app-5b0f25a8.js";const t={},p=e(`<h1 id="vite处理css" tabindex="-1"><a class="header-anchor" href="#vite处理css" aria-hidden="true">#</a> vite处理css</h1><h2 id="css-预处理器" tabindex="-1"><a class="header-anchor" href="#css-预处理器" aria-hidden="true">#</a> CSS 预处理器</h2><p>vite内置支持less、sass、stylus，无需安装特定插件，</p><p>如果使用的是单文件组件，可以通过 <code>&lt;style lang=&quot;sass&quot;&gt;</code>（或其他预处理器）自动开启。</p><h2 id="css-modules" tabindex="-1"><a class="header-anchor" href="#css-modules" aria-hidden="true">#</a> CSS Modules</h2><p>任何以 <code>.module.css</code> 为后缀名的 CSS 文件都被认为是一个 CSS modules 文件。导入这样的文件会返回一个相应的模块对象。</p><h2 id="css后处理" tabindex="-1"><a class="header-anchor" href="#css后处理" aria-hidden="true">#</a> CSS后处理</h2><p>安装postcss autoprefixer</p><p>然后配置postcss.config.js或在vite.config中配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.ts 增加如下的配置</span>
<span class="token keyword">import</span> autoprefixer <span class="token keyword">from</span> <span class="token string">&#39;autoprefixer&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 进行 PostCSS 配置</span>
    <span class="token literal-property property">postcss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">autoprefixer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token comment">// 指定目标浏览器</span>
          <span class="token literal-property property">overrideBrowserslist</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Chrome &gt; 40&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ff &gt; 31&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ie 11&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

# 或配置postcss<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
<span class="token keyword">const</span> autoprefixer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;autoprefixer&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">autoprefixer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">overrideBrowserslist</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;last 2 versions&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;&gt; 1%&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;iOS 7&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;last 3 iOS versions&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css打包" tabindex="-1"><a class="header-anchor" href="#css打包" aria-hidden="true">#</a> CSS打包</h2><p>默认情况下，dev模式css代码会通过style标签插入，生产模式css代码会单独打包成一个文件。</p><h2 id="config配置示例" tabindex="-1"><a class="header-anchor" href="#config配置示例" aria-hidden="true">#</a> config配置示例</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 进行CSS Modules配置</span>
    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 一般我们可以通过 generateScopedName 属性来对生成的类名进行自定义</span>
      <span class="token comment">// 其中，name 表示当前文件名，local 表示类名</span>
      <span class="token literal-property property">generateScopedName</span><span class="token operator">:</span> <span class="token string">&quot;[name]__[local]___[hash:base64:5]&quot;</span>    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 进行 CSS预处理配置</span>
    <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">scss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// additionalData 的内容会在每个 scss 文件的开头自动注入</span>
        <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@import &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>variablePath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;;</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">}</span>    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 进行 PostCSS 配置</span>
    <span class="token literal-property property">postcss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">autoprefixer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token comment">// 指定目标浏览器</span>
          <span class="token literal-property property">overrideBrowserslist</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Chrome &gt; 40&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ff &gt; 31&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ie 11&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span><span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[p];function i(c,l){return n(),a("div",null,o)}const u=s(t,[["render",i],["__file","vite-css.html.vue"]]);export{u as default};
