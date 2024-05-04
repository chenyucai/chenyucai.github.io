import{_ as s,o as n,c as a,a as p}from"./app-5b0f25a8.js";const e={},t=p(`<h1 id="webpack处理css" tabindex="-1"><a class="header-anchor" href="#webpack处理css" aria-hidden="true">#</a> webpack处理css</h1><p>在 Webpack 中处理 CSS，通常需要下面的loader和plugin</p><ul><li>预处理less/sass/stylus：把less代码转成css代码，让css-loader解析</li><li>后处理postcss：对写的css代码进行后处理，如添加浏览器前缀</li><li>css-loader：把css文件编译成模块让 webpack 理解，支持css module</li><li>style-loader：css代码打包到js代码里，通过<code>&lt;style&gt;</code>标签插入html</li><li>mini-css-extract-plugin：单独抽离成css文件进行加载，并且该库含plugin+loader，需同时使用</li><li>使用 CssMinimizerWebpackPlugin 压缩 CSS</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// &#39;style-loader&#39;,</span>
          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">importLoaders</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">postcssOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;autoprefixer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">&#39;less-loader&#39;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
 <span class="token punctuation">]</span><span class="token punctuation">,</span>
      
<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>postcss通常结合autoprefixer使用，补全浏览器前缀</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">postcssOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;autoprefixer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

#或配置postcss<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：css插件执行顺序很重要：<br> (*webpack插件顺序是从数组最后一项开始执行)<br> less-loader -&gt; postcss-loader -&gt; css-loader -&gt; style-loader/mini-css-extract-plugin</p></blockquote>`,7),o=[t];function l(i,c){return n(),a("div",null,o)}const u=s(e,[["render",l],["__file","webpack-css.html.vue"]]);export{u as default};
