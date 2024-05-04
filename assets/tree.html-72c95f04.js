import{_ as i,o as e,c as a,a as r}from"./app-5b0f25a8.js";const l="/images/tree-1.png",t="/images/tree-2.png",p="/images/tree-3.png",s="/images/tree-4.png",n="/images/tree-5.png",h="/images/tree-6.png",d="/images/tree-7.png",c="/images/tree-8.png",o={},_=r('<h1 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树" aria-hidden="true">#</a> 二叉树</h1><h2 id="树的基本概念" tabindex="-1"><a class="header-anchor" href="#树的基本概念" aria-hidden="true">#</a> 树的基本概念</h2><p>树是由n(n&gt;0)个有限节点组成的一个具有层次关系的集合，它具有以下的特点：</p><ul><li>每个节点有0个或多个结点</li><li>没有父节点的节点叫做根节点</li><li>每个非根节点有且只有一个父节点</li><li>除了根节点外，每个子节点可以分为多个不相交的子树</li></ul><p><img src="'+l+'" alt="1"></p><p>节点的度： 节点拥有的子树个数，可以理解为节点的子节点个数，例如图中节点A的度为2，节点H的度为1</p><p>树的度： 树的度即为最大节点的度，例如图中最大的节点B的度为3，所以树的度为3</p><p>叶子节点： 度为0的节点，可以理解为没有子节点的节点，图中K，J，F，L，O，P都是叶节点</p><p>父节点： 一个含有子节点的节点。图中A节点就是B 和 C的父节点</p><p>子节点： 一个含有子树的根节点的节点，把子树的根节点叫做该节点的该节点的子节点，图中节点G和节点H为节点C的子节点</p><p>兄弟节点： 具有相同父节点的节点，节点B和节点C就是兄弟节点</p><p>祖先节点： 从根到该节点所经分支的所有节点，图中节点A，B，E是节点J的祖先节点</p><p>子孙节点： 以某节点为根节点的子树中所有节点，图中节点D、E、F、J、K、I是节点B的子孙节点</p><p>节点层次： 以根开始，根为第一层，根的子节点为第二层…，如果一个节点在第n层，则它的子树的根节点在n+1层</p><p>深度或高度： 树中节点的最大层次</p><p>森林： 由n棵互不相交的树的集合，例如图中节点A去掉，以节点B为根的树和以节点C为根的树组成的集合就叫做森林</p><h2 id="二叉树-1" tabindex="-1"><a class="header-anchor" href="#二叉树-1" aria-hidden="true">#</a> 二叉树</h2><h3 id="二叉树的基本概念" tabindex="-1"><a class="header-anchor" href="#二叉树的基本概念" aria-hidden="true">#</a> 二叉树的基本概念</h3><p>二叉树是每个节点最多只有两个子树(子节点)的树结构，所以子节点也可能是0个或1个，这两种子树通常叫做左子树和右子树，具有左右次序，不能颠倒</p><h3 id="满二叉树" tabindex="-1"><a class="header-anchor" href="#满二叉树" aria-hidden="true">#</a> 满二叉树</h3><p>如果一棵二叉树，除叶子节点外，所有的节点都存在左节点和右节点，并且所有叶子节点都在同一层上，那这棵二叉树称为满二叉树。如图所示： <img src="'+t+'" alt="2"></p><p>满二叉树的特点：</p><ul><li>满二叉树第i层有2^(i-1)个节点</li><li>深度为k的满二叉树总共有 2^k - 1 个节点</li></ul><h3 id="完全二叉树" tabindex="-1"><a class="header-anchor" href="#完全二叉树" aria-hidden="true">#</a> 完全二叉树</h3><p>完全二叉树的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2^(h-1) 个节点。<strong>堆就是一棵完全二叉树。</strong><img src="'+p+'" alt="4"></p><h3 id="二叉搜索树-bst" tabindex="-1"><a class="header-anchor" href="#二叉搜索树-bst" aria-hidden="true">#</a> 二叉搜索树（BST）</h3><p>前面介绍的树，都没有数值的，而二叉搜索树是有数值的了，二叉搜索树又称二叉排序树。</p><ul><li>若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值；</li><li>若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；</li><li>它的左、右子树也分别为二叉排序树</li></ul><p>下面这两棵都是搜索树 <img src="'+s+'" alt="4"></p><h3 id="平衡二叉搜索树" tabindex="-1"><a class="header-anchor" href="#平衡二叉搜索树" aria-hidden="true">#</a> 平衡二叉搜索树</h3><p>平衡二叉搜索树：又被称为AVL（Adelson-Velsky and Landis）树，且具有以下性质：它是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。如图： <img src="'+n+'" alt="5"> 最后一棵 不是平衡二叉树，因为它的左右两个子树的高度差的绝对值超过了1。</p><h2 id="二叉树的存储方式" tabindex="-1"><a class="header-anchor" href="#二叉树的存储方式" aria-hidden="true">#</a> 二叉树的存储方式</h2><p><strong>二叉树可以链式存储，也可以顺序存储。</strong></p><p>那么链式存储方式就用指针， 顺序存储的方式就是用数组。</p><p>顾名思义就是顺序存储的元素在内存是连续分布的，而链式存储则是通过指针把分布在各个地址的节点串联一起。</p><p>链式存储如图： <img src="'+h+'" alt="6"></p><p>顺序存储的方式是按树的一层一层来存，如图： <img src="'+d+'" alt="7"></p><p>用数组来存储二叉树如何遍历的呢？<br> 如果父节点的数组下标是 i，那么它的左孩子就是 i * 2 + 1，右孩子就是 i * 2 + 2。<br> 但是用链式表示的二叉树，更有利于我们理解，所以一般我们都是用链式存储二叉树。<br> 所以大家要了解，用数组依然可以表示二叉树。</p><h2 id="二叉树的遍历方式" tabindex="-1"><a class="header-anchor" href="#二叉树的遍历方式" aria-hidden="true">#</a> 二叉树的遍历方式</h2><p>二叉树主要有两种遍历方式：</p><ol><li>深度优先遍历：先往深走，遇到叶子节点再往回走。 <ul><li>前序遍历（递归法，迭代法）</li><li>中序遍历（递归法，迭代法）</li><li>后序遍历（递归法，迭代法）</li></ul></li><li>广度优先遍历：一层一层的去遍历。 <ul><li>层次遍历（迭代法）</li></ul></li></ol><p>深度优先遍历的前中后，其实指的就是中间节点的遍历顺序，只要记住，前中后指的是中间节点的位置就可以了。</p><ul><li>前序遍历：中左右</li><li>中序遍历：左中右</li><li>后序遍历：左右中</li></ul><p><img src="'+c+'" alt="8"></p><blockquote><p>注意：</p><ul><li>前序遍历的根节点在第一个</li><li>后序遍历的根节点再最后一个</li><li>中序遍历的根节点在遍历结果中间某个位置，并将结果分割为左右子树的中序遍历</li><li>二叉搜索树「中序遍历」得到的值构成的序列一定是升序的。</li></ul></blockquote>',45),u=[_];function m(g,b){return e(),a("div",null,u)}const x=i(o,[["render",m],["__file","tree.html.vue"]]);export{x as default};