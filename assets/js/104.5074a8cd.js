(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{462:function(t,a,_){"use strict";_.r(a);var v=_(7),e=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-aop基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-aop基础"}},[t._v("#")]),t._v(" 1. AOP基础")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("定义")]),t._v(" "),a("p",[t._v("AOP英文全称：Aspect Oriented Programming（面向切面编程、面向方面编程），其实说白了，面向切面编程就是面向特定方法编程。")])]),t._v(" "),a("h3",{attrs:{id:"_1-1-典型应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-典型应用场景"}},[t._v("#")]),t._v(" 1.1 典型应用场景")]),t._v(" "),a("ul",[a("li",[t._v("记录系统的操作日志")]),t._v(" "),a("li",[t._v("权限控制")]),t._v(" "),a("li",[t._v("事务管理：我们前面所讲解的Spring事务管理，底层其实也是通过AOP来实现的，只要添加@Transactional注解之后，AOP程序自动会在原始方法运行前先来开启事务，在原始方法运行完毕之后提交或回滚事务")])]),t._v(" "),a("h3",{attrs:{id:"_1-2-核心概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-核心概念"}},[t._v("#")]),t._v(" 1.2 核心概念")]),t._v(" "),a("p",[t._v("① "),a("mark",[t._v("连接点：JoinPoint")])]),t._v(" "),a("blockquote",[a("p",[t._v("连接点指的是可以被aop控制的方法")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20230112160708474.40h6i4c0rj28.webp",alt:""}})]),t._v(" "),a("p",[t._v("② "),a("mark",[t._v("通知：Advice")])]),t._v(" "),a("blockquote",[a("p",[t._v("指哪些重复的逻辑，也就是共性功能（最终体现为一个方法）")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20230112160852883.5q2e5g8pgfwg.webp",alt:""}})]),t._v(" "),a("p",[t._v("③ "),a("mark",[t._v("切入点：PointCut")])]),t._v(" "),a("blockquote",[a("p",[t._v("匹配连接点的条件，通知仅会在切入点方法执行时被应用")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20230112161131937.76i8riafp08w.webp",alt:""}})]),t._v(" "),a("p",[t._v("④ "),a("mark",[t._v("切面：Aspect")])]),t._v(" "),a("blockquote",[a("p",[t._v("描述通知"),a("strong",[t._v("Advice")]),t._v("与切入点"),a("strong",[t._v("PointCut")]),t._v("的对应关系（通知+切入点）\n切面所在的类，我们一般称为"),a("strong",[t._v("切面类")]),t._v("（被@Aspect注解标识的类）\n描述当前aop程序需要针对于哪个原始方法，在什么时候执行什么样的操作。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20230112161335186.3d4e9vvlhmv4.webp",alt:""}})]),t._v(" "),a("p",[t._v("④ "),a("mark",[t._v("目标对象：Target")])]),t._v(" "),a("blockquote",[a("p",[t._v("目标对象指的就是通知所应用的对象，我们就称之为目标对象")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20230112161821401.2dk9kqeght8g.webp",alt:""}})]),t._v(" "),a("p",[t._v("Spring的AOP底层是基于"),a("mark",[t._v("动态代理技术")]),t._v("来实现的，也就是说在程序运行的时候，会自动的基于动态代理技术为目标对象生成一个对应的代理对象。在代理对象当中就会对目标对象当中的原始方法进行功能的增强")]),t._v(" "),a("h2",{attrs:{id:"_2-aop进阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-aop进阶"}},[t._v("#")]),t._v(" 2. AOP进阶")]),t._v(" "),a("h3",{attrs:{id:"_2-1-通知类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-通知类型"}},[t._v("#")]),t._v(" 2.1 通知类型")]),t._v(" "),a("p",[a("strong",[t._v("Spring中AOP的通知类型：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("@Around")]),t._v("：环绕通知，此注解标注的通知方法在目标方法前、后都被执行")]),t._v(" "),a("li",[a("code",[t._v("@Before")]),t._v("：前置通知，此注解标注的通知方法在目标方法前被执行")]),t._v(" "),a("li",[a("code",[t._v("@After")]),t._v(" ：后置通知，此注解标注的通知方法在目标方法后被执行，无论是否有异常都会执行")]),t._v(" "),a("li",[a("code",[t._v("@AfterReturning")]),t._v(" ： 返回后通知，此注解标注的通知方法在目标方法后被执行，有异常不会执行")]),t._v(" "),a("li",[a("code",[t._v("@AfterThrowing")]),t._v(" ： 异常后通知，此注解标注的通知方法发生异常后执行")])]),t._v(" "),a("p",[a("strong",[t._v("在使用通知时的注意事项：")])]),t._v(" "),a("ul",[a("li",[t._v("@Around环绕通知需要自己调用 "),a("code",[t._v("ProceedingJoinPoint.proceed()")]),t._v(" 来让原始方法执行，其他通知不需要考虑目标方法执行")]),t._v(" "),a("li",[t._v("@Around环绕通知方法的返回值，必须指定为"),a("code",[t._v("Object")]),t._v("，来接收原始方法的返回值，否则原始方法执行完毕，是获取不到返回值的。")]),t._v(" "),a("li",[a("code",[t._v("@PointCut")]),t._v("注解，该注解的作用是将公共的切入点表达式抽取出来，需要用到时引用该切入点表达式即")])]),t._v(" "),a("h3",{attrs:{id:"_2-2-通知顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-通知顺序"}},[t._v("#")]),t._v(" 2.2 通知顺序")]),t._v(" "),a("p",[t._v("在不同切面类中，默认按照切面类的"),a("strong",[t._v("类名字母排序")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("目标方法前的通知方法：字母排名靠前的先执行")]),t._v(" "),a("li",[t._v("目标方法后的通知方法：字母排名靠前的后执行")])]),t._v(" "),a("blockquote",[a("p",[t._v("使用Spring提供的@Order注解来调整顺序")])]),t._v(" "),a("h3",{attrs:{id:"_2-3-切入点表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-切入点表达式"}},[t._v("#")]),t._v(" 2.3 切入点表达式")]),t._v(" "),a("blockquote",[a("p",[t._v("作用：主要用来决定项目中的哪些方法需要加入通知")])]),t._v(" "),a("h4",{attrs:{id:"_2-3-1-execution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-execution"}},[t._v("#")]),t._v(" 2.3.1 execution")]),t._v(" "),a("p",[t._v("execution主要根据方法的返回值、包名、类名、方法名、方法参数等信息来匹配，语法为：(其中带"),a("code",[t._v("?")]),t._v("的表示可以省略的部分)")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("访问修饰符"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("  返回值  包名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("类名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("?方法名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("方法参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" 异常"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("可以使用"),a("strong",[t._v("通配符")]),t._v("描述切入点")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("*")]),t._v(" ：单个独立的任意符号，可以通配任意返回值、包名、类名、方法名、任意类型的一个参数，也可以通配包、类、方法名的一部分")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("..")]),t._v(" ：多个连续的任意符号，可以通配任意层级的包，或任意类型、任意个数的参数")])])]),t._v(" "),a("p",[a("strong",[t._v("注意事项")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("根据业务需要，可以使用 且（&&）、或（||）、非（!） 来组合比较复杂的切入点表达式。")])]),t._v(" "),a("h4",{attrs:{id:"_2-3-2-annotation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-annotation"}},[t._v("#")]),t._v(" 2.3.2 @annotation")]),t._v(" "),a("blockquote",[a("p",[t._v("匹配多个无规则的方法，比如：list()和 delete()这两个方法")])]),t._v(" "),a("h4",{attrs:{id:"_2-3-3-对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-对比"}},[t._v("#")]),t._v(" 2.3.3 对比")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("execution切入点表达式")]),t._v(" "),a("ul",[a("li",[t._v("根据我们所指定的方法的描述信息来匹配切入点方法，这种方式也是最为常用的一种方式")]),t._v(" "),a("li",[t._v("如果我们要匹配的切入点方法的方法名不规则，或者有一些比较特殊的需求，通过execution切入点表达式描述比较繁琐")])])]),t._v(" "),a("li",[a("strong",[t._v("annotation 切入点表达式")]),t._v(" "),a("ul",[a("li",[t._v("基于注解的方式来匹配切入点方法。这种方式虽然多一步操作，我们需要自定义一个注解，但是相对来比较灵活。我们需要匹配哪个方法，就在方法上加上对应的注解就可以了")])])])]),t._v(" "),a("h3",{attrs:{id:"_2-4-连接点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-连接点"}},[t._v("#")]),t._v(" 2.4 连接点")]),t._v(" "),a("p",[t._v("在Spring中用JoinPoint抽象了连接点，用它可以获得方法执行时的相关信息，如目标类名、方法名、方法参数等。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("对于@Around通知，获取连接点信息只能使用ProceedingJoinPoint类型")])]),t._v(" "),a("li",[a("p",[t._v("对于其他四种通知，获取连接点信息只能使用JoinPoint，它是ProceedingJoinPoint的父类型")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/QQ%E6%88%AA%E5%9B%BE20230412161003.2smlt13479c0.webp",alt:""}})])])}),[],!1,null,null,null);a.default=e.exports}}]);