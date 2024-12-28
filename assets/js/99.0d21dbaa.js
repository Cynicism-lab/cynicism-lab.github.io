(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{464:function(s,t,a){"use strict";a.r(t);var e=a(7),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-多表查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-多表查询"}},[s._v("#")]),s._v(" 1. 多表查询")]),s._v(" "),t("h3",{attrs:{id:"_1-1-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-介绍"}},[s._v("#")]),s._v(" 1.1 介绍")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("语法")]),s._v("：select 字段列表  from 表1, 表2;"),t("br"),s._v(" "),t("strong",[s._v("笛卡尔积")]),s._v("：笛卡尔乘积是指在数学中，两个集合(A集合和B集合)的所有组合情况")])]),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20221207155509696.22vkezy6jujk.webp",width:"70%"}}),s._v(" "),t("blockquote",[t("p",[s._v("在多表查询时，需要消除无效的笛卡尔积，只保留表关联部分的数据 (使用"),t("strong",[s._v("where")]),s._v("判断)")])]),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20220901093756992.k2g38tn4uv4.webp",width:"70%"}}),s._v(" "),t("p",[t("strong",[s._v("分类：")])]),s._v(" "),t("ol",[t("li",[t("p",[s._v("连接查询")]),s._v(" "),t("ul",[t("li",[s._v("内连接：相当于查询A、B交集部分数据")])])]),s._v(" "),t("li",[t("p",[s._v("外连接")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("左外连接：查询左表所有数据(包括两张表交集部分数据)")])]),s._v(" "),t("li",[t("p",[s._v("右外连接：查询右表所有数据(包括两张表交集部分数据)")])])])]),s._v(" "),t("li",[t("p",[s._v("子查询")])])]),s._v(" "),t("h3",{attrs:{id:"_1-2-内连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-内连接"}},[s._v("#")]),s._v(" 1.2 内连接")]),s._v(" "),t("p",[s._v("① 隐式内连接语法：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("  字段列表   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("   表"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 表"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v("  条件 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("② 显式内连接语法：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("  字段列表   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("   表"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("inner")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" 表"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v("  连接条件 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_1-3-外连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-外连接"}},[s._v("#")]),s._v(" 1.3 外连接")]),s._v(" "),t("p",[s._v("① "),t("strong",[s._v("左外连接")]),s._v("语法结构（更偏向）：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("  字段列表   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("   表"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("left")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("outer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" 表"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v("  连接条件 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("② "),t("strong",[s._v("右外连接")]),s._v("语法结构：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("  字段列表   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("   表"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("right")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("outer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" 表"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v("  连接条件 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_1-4-子查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-子查询"}},[s._v("#")]),s._v(" 1.4 子查询")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("   t1   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("  column1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("  column1  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("  t2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("子查询外部的语句可以是insert / update / delete / select 的任何一个，最常见的是 select")])]),s._v(" "),t("p",[t("strong",[s._v("根据子查询结果的不同分为：")])]),s._v(" "),t("ol",[t("li",[t("p",[s._v("标量子查询（子查询结果为单个值[一行一列]）")])]),s._v(" "),t("li",[t("p",[s._v("列子查询（子查询结果为一列，但可以是多行）")])]),s._v(" "),t("li",[t("p",[s._v("行子查询（子查询结果为一行，但可以是多列）")])]),s._v(" "),t("li",[t("p",[s._v("表子查询（子查询结果为多行多列[相当于子查询结果是一张表]）")])])]),s._v(" "),t("p",[t("strong",[s._v("子查询可以书写的位置：")])]),s._v(" "),t("ol",[t("li",[s._v("where之后")]),s._v(" "),t("li",[s._v("from之后")]),s._v(" "),t("li",[s._v("select之后")])]),s._v(" "),t("h2",{attrs:{id:"_2-事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-事务"}},[s._v("#")]),s._v(" 2. 事务")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v(" 事务是一组操作的集合，它是一个不可分割的工作单位。事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。"),t("br"),s._v("\n 事务作用：保证在一个事务中多次操作数据库表中数据时，要么全都成功,要么全都失败。")])]),s._v(" "),t("h3",{attrs:{id:"_2-1-操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-操作"}},[s._v("#")]),s._v(" 2.1 操作")]),s._v(" "),t("p",[s._v("MYSQL中有两种方式进行事务的操作：")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("自动提交")]),s._v("事务：即执行一条sql语句提交一次事务。（默认MySQL的事务是自动提交）")]),s._v(" "),t("li",[t("strong",[s._v("手动提交")]),s._v("事务：先开启，再提交")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("SQL语句")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("start transaction;  /  begin ;")]),s._v(" "),t("td",[s._v("开启手动控制事务")])]),s._v(" "),t("tr",[t("td",[s._v("commit;")]),s._v(" "),t("td",[s._v("提交事务")])]),s._v(" "),t("tr",[t("td",[s._v("rollback;")]),s._v(" "),t("td",[s._v("回滚事务")])])])]),s._v(" "),t("blockquote",[t("p",[s._v("手动提交事务使用步骤：")]),s._v(" "),t("ul",[t("li",[s._v("第1种情况：开启事务  =>  执行SQL语句   =>  成功  =>  提交事务")]),s._v(" "),t("li",[s._v("第2种情况：开启事务  =>  执行SQL语句   =>  失败  =>  回滚事务")])])]),s._v(" "),t("h3",{attrs:{id:"_2-2-四大特性-acid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-四大特性-acid"}},[s._v("#")]),s._v(" 2.2 四大特性（ACID）")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("原子性（Atomicity）")]),s._v(" ：原子性是指事务包装的一组sql是一个不可分割的工作单元，事务中的操作要么全部成功，要么全部失败。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("一致性（Consistency）")]),s._v("：一个事务完成之后数据都必须处于一致性状态。\n-- 如果事务成功的完成，那么数据库的所有变化将生效。\n-- ​如果事务执行出现错误，那么数据库的所有变化将会被回滚(撤销)，返回到原始状态。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("隔离性（Isolation）")]),s._v("：多个用户并发的访问数据库时，一个用户的事务不能被其他用户的事务干扰，多个并发的事务之间要相互隔离。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("持久性（Durability）")]),s._v("：一个事务一旦被提交或回滚，它对数据库的改变将是永久性的，哪怕数据库发生异常，重启之后数据亦然存在。")])])]),s._v(" "),t("h3",{attrs:{id:"_2-3-spring事务管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-spring事务管理"}},[s._v("#")]),s._v(" 2.3 Spring事务管理")]),s._v(" "),t("p",[t("code",[s._v("@Transactional")]),s._v("注解：就是在当前这个方法执行开始之前来开启事务，方法执行完毕之后提交事务。如果在这个方法执行的过程当中出现了异常，就会进行事务的回滚操作。"),t("br"),s._v(" "),t("strong",[s._v("注解书写位置")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("service层方法\n"),t("ul",[t("li",[s._v("当前方法交给spring进行事务管理")])])]),s._v(" "),t("li",[s._v("service层类\n"),t("ul",[t("li",[s._v("当前类中所有的方法都交由spring进行事务管理")])])]),s._v(" "),t("li",[s._v("service层接口\n"),t("ul",[t("li",[s._v("接口下所有的实现类当中所有的方法都交给spring 进行事务管理")])])])]),s._v(" "),t("h3",{attrs:{id:"_2-4-spring事务进阶"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-spring事务进阶"}},[s._v("#")]),s._v(" 2.4 Spring事务进阶")]),s._v(" "),t("blockquote",[t("p",[s._v("描述@Transactional注解当中的两个常见的属性")])]),s._v(" "),t("h4",{attrs:{id:"_2-4-1-异常回滚的属性-rollbackfor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-1-异常回滚的属性-rollbackfor"}},[s._v("#")]),s._v(" 2.4.1 异常回滚的属性：rollbackFor")]),s._v(" "),t("blockquote",[t("p",[s._v("PS: 默认情况下，只有出现"),t("strong",[s._v("RuntimeException")]),s._v("(运行时异常)才会回滚事务。\n作用：指定出现何种异常类型回滚事务。")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Transactional")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rollbackFor"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_2-4-2-事务传播行为-propagation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-2-事务传播行为-propagation"}},[s._v("#")]),s._v(" 2.4.2 事务传播行为：propagation")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("事务传播行为")]),s._v(" "),t("p",[s._v("就是当一个事务方法被另一个事务方法调用时，这个事务方法应该如何进行事务控制")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[s._v("属性值")])]),s._v(" "),t("th",[t("strong",[s._v("含义")])])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[s._v("REQUIRED")])]),s._v(" "),t("td",[s._v("【默认值】需要事务，已有则加入，无则创建新事务")])]),s._v(" "),t("tr",[t("td",[t("strong",[s._v("REQUIRES_NEW")])]),s._v(" "),t("td",[s._v("需要新事务，无论有无，总是创建新事务")])]),s._v(" "),t("tr",[t("td",[s._v("SUPPORTS")]),s._v(" "),t("td",[s._v("支持事务，有则加入，无则在无事务状态中运行")])]),s._v(" "),t("tr",[t("td",[s._v("NOT_SUPPORTED")]),s._v(" "),t("td",[s._v("不支持事务，在无事务状态下运行,如果当前存在已有事务,则挂起当前事务")])]),s._v(" "),t("tr",[t("td",[s._v("MANDATORY")]),s._v(" "),t("td",[s._v("必须有事务，否则抛异常")])]),s._v(" "),t("tr",[t("td",[s._v("NEVER")]),s._v(" "),t("td",[s._v("必须没事务，否则抛异常")])]),s._v(" "),t("tr",[t("td",[s._v("…")]),s._v(" "),t("td")])])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Transactional")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("propagation "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Propagation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("REQUIRES_NEW")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_3-索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-索引"}},[s._v("#")]),s._v(" 3. 索引")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("帮助数据库高效获取数据的数据结构")])]),s._v(" "),t("h3",{attrs:{id:"_3-1-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-介绍"}},[s._v("#")]),s._v(" 3.1 介绍")]),s._v(" "),t("p",[t("strong",[s._v("优点：")])]),s._v(" "),t("ol",[t("li",[s._v("提高数据查询的效率，降低数据库的IO成本。")]),s._v(" "),t("li",[s._v("通过索引列对数据进行排序，降低数据排序的成本，降低CPU消耗。")])]),s._v(" "),t("p",[t("strong",[s._v("缺点：")])]),s._v(" "),t("ol",[t("li",[s._v("索引会占用存储空间。")]),s._v(" "),t("li",[s._v("索引大大提高了查询效率，同时却也降低了insert、update、delete的效率。")])]),s._v(" "),t("h3",{attrs:{id:"_3-2-结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-结构"}},[s._v("#")]),s._v(" 3.2 结构")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("索引结构有很多，如：Hash索引、B+Tree索引、Full-Text索引等。我们平常所说的索引，如果没有特别指明，都是指默认的 B+Tree 结构组织的索引")])]),s._v(" "),t("p",[t("strong",[s._v("B+Tree(多路平衡搜索树)结构")]),s._v(":\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/B+tree.77a0dc6coydc.webp"}})]),s._v(" "),t("ul",[t("li",[s._v("每一个节点，可以存储多个key（有n个key，就有n个指针）")]),s._v(" "),t("li",[s._v("节点分为：叶子节点、非叶子节点\n"),t("ul",[t("li",[s._v("叶子节点，就是最后一层子节点，所有的数据都存储在叶子节点上")]),s._v(" "),t("li",[s._v("非叶子节点，不是树结构最下面的节点，用于索引数据，存储的的是：key+指针")])])]),s._v(" "),t("li",[s._v("为了提高范围查询效率，叶子节点形成了一个双向链表，便于数据的排序及区间范围查询")])]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("拓展：")])]),s._v(" "),t("p",[s._v("非叶子节点都是由key+指针域组成的，一个key占8字节，一个指针占6字节，而一个节点总共容量是16KB，那么可以计算出一个节点可以存储的元素个数：16*1024字节 / (8+6)=1170个元素。")]),s._v(" "),t("ul",[t("li",[s._v("查看mysql索引节点大小：show global status like 'innodb_page_size';    -- 节点大小：16384")])]),s._v(" "),t("p",[s._v("当根节点中可以存储1170个元素，那么根据每个元素的地址值又会找到下面的子节点，每个子节点也会存储1170个元素，那么第二层即第二次IO的时候就会找到数据大概是：1170*1170=135W。也就是说B+Tree数据结构中只需要经历两次磁盘IO就可以找到135W条数据。")]),s._v(" "),t("p",[s._v("对于第二层每个元素有指针，那么会找到第三层，第三层由key+数据组成，假设key+数据总大小是1KB，而每个节点一共能存储16KB，所以一个第三层一个节点大概可以存储16个元素(即16条记录)。那么结合第二层每个元素通过指针域找到第三层的节点，第二层一共是135W个元素，那么第三层总元素大小就是：135W*16结果就是2000W+的元素个数。")]),s._v(" "),t("p",[s._v("结合上述分析B+Tree有如下优点：")]),s._v(" "),t("ul",[t("li",[s._v("千万条数据，B+Tree可以控制在小于等于3的高度")]),s._v(" "),t("li",[s._v("所有的数据都存储在叶子节点上，并且底层已经实现了按照索引进行排序，还可以支持范围查询，叶子节点是一个双向链表，支持从小到大或者从大到小查找")])])]),s._v(" "),t("h3",{attrs:{id:"_3-3-语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-语法"}},[s._v("#")]),s._v(" 3.3 语法")]),s._v(" "),t("p",[t("strong",[s._v("① 创建索引")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unique")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" 索引名 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v("  表名 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("字段名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("在创建表时，如果添加了主键和唯一约束，就会默认创建：主键索引、唯一约束")])]),s._v(" "),t("p",[t("strong",[s._v("② 查看索引")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("  表名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("③ 删除索引")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v("  索引名  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v("  表名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);