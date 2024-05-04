import{_ as n,o as s,c as a,a as e}from"./app-5b0f25a8.js";const p={},t=e(`<h1 id="rollup处理js-ts" tabindex="-1"><a class="header-anchor" href="#rollup处理js-ts" aria-hidden="true">#</a> rollup处理js/ts</h1><h2 id="处理javascript" tabindex="-1"><a class="header-anchor" href="#处理javascript" aria-hidden="true">#</a> 处理Javascript</h2><p>1.安装rollup babel插件<br><code>pnpm i -D @rollup/plugin-babel</code></p><p>2.安装babel核心库<br><code>pnpm i -D @babel/core @babel/preset-env</code></p><p>3.配置插件和babel.config.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// rollup.config.js</span>
<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">commonjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">babel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">babelHelpers</span><span class="token operator">:</span> <span class="token string">&#39;bundled&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">]</span>

<span class="token comment">// babel.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;chrome&quot;</span><span class="token operator">:</span> <span class="token string">&quot;58&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;ie&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token number">3</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="处理typescript" tabindex="-1"><a class="header-anchor" href="#处理typescript" aria-hidden="true">#</a> 处理Typescript</h2><p>安装typescript，babel的ts插件，并tsc --init生成tsconfig，注意设置noEmit为true</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> i <span class="token parameter variable">-D</span> typescript @babel/preset-typescript
或
<span class="token function">pnpm</span> i <span class="token parameter variable">-D</span> rollup-plugin-typescript2
两者可以同时使用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="压缩js代码" tabindex="-1"><a class="header-anchor" href="#压缩js代码" aria-hidden="true">#</a> 压缩JS代码</h2><p>使用 <code>@rollup/plugin-terser</code> 插件</p>`,11),l=[t];function i(o,c){return s(),a("div",null,l)}const u=n(p,[["render",i],["__file","rollup-js-ts.html.vue"]]);export{u as default};
