(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{456:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-数据模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据模型"}},[t._v("#")]),t._v(" 1. 数据模型")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("关系型数据库（RDBMS）")]),t._v(" "),s("p",[t._v("概念：建立在关系模型基础上，由多张相互连接的"),s("strong",[t._v("二维表")]),t._v("组成的数据库")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/%E5%85%B3%E7%B3%BB%E6%A8%A1%E5%9E%8B.q48z4gqmg5c.webp",alt:"关系模型"}})]),t._v(" "),s("h2",{attrs:{id:"_2-sql简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-sql简介"}},[t._v("#")]),t._v(" 2. SQL简介")]),t._v(" "),s("h3",{attrs:{id:"_2-1-通用语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-通用语法"}},[t._v("#")]),t._v(" 2.1 通用语法")]),t._v(" "),s("ul",[s("li",[t._v("SQL语句可以单行或多行书写，以分号结尾；")]),t._v(" "),s("li",[t._v("SQL语句可以使用空格/缩进来增强语句的可读性；")]),t._v(" "),s("li",[t._v("MySQL数据库的SQL语句不区分大小写；")]),t._v(" "),s("li",[t._v("注释：\n"),s("ul",[s("li",[t._v("单行注释：-- 注释内容   或   # 注释内容(MySQL特有)")]),t._v(" "),s("li",[t._v("多行注释： /* 注释内容 */")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-2-分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-分类"}},[t._v("#")]),t._v(" 2.2 分类")]),t._v(" "),s("p",[t._v("💡SQL语句根据其功能被分为四大类："),s("code",[t._v("DDL")]),t._v("、"),s("code",[t._v("DML")]),t._v("、"),s("code",[t._v("DQL")]),t._v("、"),s("code",[t._v("DCL")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("分类")])]),t._v(" "),s("th",[s("strong",[t._v("全称")])]),t._v(" "),s("th",[s("strong",[t._v("说明")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("DDL")]),t._v(" "),s("td",[t._v("Data Definition  Language")]),t._v(" "),s("td",[t._v("数据定义语言，用来定义数据库对象(数据库，表，字段)")])]),t._v(" "),s("tr",[s("td",[t._v("DML")]),t._v(" "),s("td",[t._v("Data Manipulation  Language")]),t._v(" "),s("td",[t._v("数据操作语言，用来对数据库表中的数据进行增删改")])]),t._v(" "),s("tr",[s("td",[t._v("DQL")]),t._v(" "),s("td",[t._v("Data Query Language")]),t._v(" "),s("td",[t._v("数据查询语言，用来查询数据库中表的记录")])]),t._v(" "),s("tr",[s("td",[t._v("DCL")]),t._v(" "),s("td",[t._v("Data Control  Language")]),t._v(" "),s("td",[t._v("数据控制语言，用来创建数据库用户、控制数据库的访问权限")])])])]),t._v(" "),s("h2",{attrs:{id:"_3-数据库设计-ddl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据库设计-ddl"}},[t._v("#")]),t._v(" 3. 数据库设计 - DDL")]),t._v(" "),s("h3",{attrs:{id:"_3-1-数据库操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-数据库操作"}},[t._v("#")]),t._v(" 3.1 数据库操作")]),t._v(" "),s("p",[t._v("💡DDL中数据库的常见操作："),s("code",[t._v("查询")]),t._v("、"),s("code",[t._v("创建")]),t._v("、"),s("code",[t._v("使用")]),t._v("、"),s("code",[t._v("删除")]),s("br"),t._v(" "),s("strong",[t._v("① 查询：")])]),t._v(" "),s("ul",[s("li",[t._v("所有数据库："),s("code",[t._v("show databases;")])]),t._v(" "),s("li",[t._v("当前数据库："),s("code",[t._v("select database();")])])]),t._v(" "),s("p",[s("strong",[t._v("② 创建：")]),s("code",[t._v("create database [ if not exists ] 数据库名;")]),s("br"),t._v(" "),s("strong",[t._v("③ 使用：")]),s("code",[t._v("use 数据库名;")]),s("br"),t._v(" "),s("strong",[t._v("④ 删除：")]),s("code",[t._v("drop database [ if exists ] 数据库名;")])]),t._v(" "),s("blockquote",[s("p",[t._v("说明：上述语法中的database，也可以替换成 schema")])]),t._v(" "),s("h3",{attrs:{id:"_3-2-表操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-表操作"}},[t._v("#")]),t._v(" 3.2 表操作")]),t._v(" "),s("p",[t._v("💡表结构的操作："),s("code",[t._v("创建")]),t._v("、"),s("code",[t._v("查询")]),t._v("、"),s("code",[t._v("修改")]),t._v("、"),s("code",[t._v("删除")]),s("br"),t._v(" "),s("strong",[t._v("① 创建：")])]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v("  表名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("类型 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("约束"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v("  字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("注释 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("  字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("类型 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("约束"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v("  字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("注释 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t字段n  字段n类型 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("约束"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v("  字段n注释 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v("  表注释 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("blockquote",[s("p",[t._v("[ ] 中的内容为可选参数； 最后一个字段后面没有逗号; 在MySQL数据库当中，提供了以下5种约束：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("约束")])]),t._v(" "),s("th",[s("strong",[t._v("描述")])]),t._v(" "),s("th",[s("strong",[t._v("关键字")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("非空约束")]),t._v(" "),s("td",[t._v("限制该字段值不能为null")]),t._v(" "),s("td",[t._v("not null")])]),t._v(" "),s("tr",[s("td",[t._v("唯一约束")]),t._v(" "),s("td",[t._v("保证字段的所有数据都是唯一、不重复的")]),t._v(" "),s("td",[t._v("unique")])]),t._v(" "),s("tr",[s("td",[t._v("主键约束")]),t._v(" "),s("td",[t._v("主键是一行数据的唯一标识，要求非空且唯一")]),t._v(" "),s("td",[t._v("primary key")])]),t._v(" "),s("tr",[s("td",[t._v("默认约束")]),t._v(" "),s("td",[t._v("保存数据时，如果未指定该字段值，则采用默认值")]),t._v(" "),s("td",[t._v("default")])]),t._v(" "),s("tr",[s("td",[t._v("外键约束")]),t._v(" "),s("td",[t._v("让两张表的数据建立连接，保证数据的一致性和完整性")]),t._v(" "),s("td",[t._v("foreign key")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("注意：约束是作用于表中字段上的，可以在创建表/修改表的时候添加约束。\n主键自增：auto_increment(从1开始)")])]),t._v(" "),s("p",[s("strong",[t._v("② 查询：")])]),t._v(" "),s("ul",[s("li",[t._v("查询所有表："),s("code",[t._v("show tables;")])]),t._v(" "),s("li",[t._v("查看表结构："),s("code",[t._v("desc 表名 ;")])]),t._v(" "),s("li",[t._v("查询建表语句："),s("code",[t._v("show create table 表名 ;")])])]),t._v(" "),s("p",[s("strong",[t._v("③ 修改：")])]),t._v(" "),s("ul",[s("li",[t._v("添加字段："),s("code",[t._v("alter table 表名 add 字段名 类型(长度) [comment 注释] [约束];")])]),t._v(" "),s("li",[t._v("修改数据类型："),s("code",[t._v("alter table 表名 modify 字段名 新数据类型(长度);")])]),t._v(" "),s("li",[t._v("删除字段："),s("code",[t._v("alter table 表名 drop 字段名;")])]),t._v(" "),s("li",[t._v("修改表名："),s("code",[t._v("rename table 表名 to 新表名;")])])]),t._v(" "),s("p",[s("strong",[t._v("④ 删除：")])]),t._v(" "),s("ul",[s("li",[t._v("删除表："),s("code",[t._v("drop table [ if exists ] 表名;")])])]),t._v(" "),s("h2",{attrs:{id:"_4-数据库操作-dml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-数据库操作-dml"}},[t._v("#")]),t._v(" 4. 数据库操作 - DML")]),t._v(" "),s("h3",{attrs:{id:"_4-1-增加-insert"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-增加-insert"}},[t._v("#")]),t._v(" 4.1 增加（INSERT）")]),t._v(" "),s("ul",[s("li",[t._v("向指定字段添加数据"),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" 表名 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("字段名"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 字段名"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[t._v("全部字段添加数据"),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" 表名 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[t._v("批量添加数据（指定字段）"),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" 表名 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("字段名"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 字段名"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[t._v("批量添加数据（全部字段）"),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" 表名 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])]),t._v(" "),s("h3",{attrs:{id:"_4-2-修改-update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-修改-update"}},[t._v("#")]),t._v(" 4.2 修改（UPDATE）")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" 表名 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" 字段名"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 字段名"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" 条件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"_4-3-删除-delete"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-删除-delete"}},[t._v("#")]),t._v(" 4.3 删除（DELETE）")]),t._v(" "),s("div",{staticClass:"language-SQL line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" 表名  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v("  条件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"_5-数据库操作-dql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-数据库操作-dql"}},[t._v("#")]),t._v(" 5. 数据库操作 - DQL")]),t._v(" "),s("h3",{attrs:{id:"_5-1-单表操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-单表操作"}},[t._v("#")]),t._v(" 5.1 单表操作")]),t._v(" "),s("h4",{attrs:{id:"_5-1-1-基本查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-1-基本查询"}},[t._v("#")]),t._v(" 5.1.1 基本查询")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("查询多个字段")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" 字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  表名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("查询所有字段（通配符）")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  表名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("设置别名")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" 字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" 别名"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" 别名"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  表名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("去除重复记录")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("distinct")]),t._v(" 字段列表 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  表名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])]),t._v(" "),s("h4",{attrs:{id:"_5-1-2-条件查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-2-条件查询"}},[t._v("#")]),t._v(" 5.1.2 条件查询")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v("  字段列表  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("   表名   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v("   条件列表 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("比较运算符")])]),t._v(" "),s("th",[s("strong",[t._v("功能")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v(">")]),t._v(" "),s("td",[t._v("大于")])]),t._v(" "),s("tr",[s("td",[t._v(">=")]),t._v(" "),s("td",[t._v("大于等于")])]),t._v(" "),s("tr",[s("td",[t._v("<")]),t._v(" "),s("td",[t._v("小于")])]),t._v(" "),s("tr",[s("td",[t._v("<=")]),t._v(" "),s("td",[t._v("小于等于")])]),t._v(" "),s("tr",[s("td",[t._v("=")]),t._v(" "),s("td",[t._v("等于")])]),t._v(" "),s("tr",[s("td",[t._v("<> 或 !=")]),t._v(" "),s("td",[t._v("不等于")])]),t._v(" "),s("tr",[s("td",[t._v("between ...  and ...")]),t._v(" "),s("td",[t._v("在某个范围之内(含最小、最大值)")])]),t._v(" "),s("tr",[s("td",[t._v("in(...)")]),t._v(" "),s("td",[t._v("在in之后的列表中的值，多选一")])]),t._v(" "),s("tr",[s("td",[t._v("like 占位符")]),t._v(" "),s("td",[t._v("模糊匹配(_匹配单个字符, %匹配任意个字符)")])]),t._v(" "),s("tr",[s("td",[t._v("is null")]),t._v(" "),s("td",[t._v("是null")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("逻辑运算符")])]),t._v(" "),s("th",[s("strong",[t._v("功能")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("and 或 &&")]),t._v(" "),s("td",[t._v("并且 (多个条件同时成立)")])]),t._v(" "),s("tr",[s("td",[t._v("or 或 ||")]),t._v(" "),s("td",[t._v("或者 (多个条件任意一个成立)")])]),t._v(" "),s("tr",[s("td",[t._v("not 或 !")]),t._v(" "),s("td",[t._v("非 , 不是")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("聚合函数")])]),t._v(" "),s("th",[s("strong",[t._v("功能")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("count")]),t._v(" "),s("td",[t._v("统计数量")])]),t._v(" "),s("tr",[s("td",[t._v("max")]),t._v(" "),s("td",[t._v("最大值")])]),t._v(" "),s("tr",[s("td",[t._v("min")]),t._v(" "),s("td",[t._v("最小值")])]),t._v(" "),s("tr",[s("td",[t._v("avg")]),t._v(" "),s("td",[t._v("平均值")])]),t._v(" "),s("tr",[s("td",[t._v("sum")]),t._v(" "),s("td",[t._v("求和")])])])]),t._v(" "),s("h4",{attrs:{id:"_5-1-3-分组查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-3-分组查询"}},[t._v("#")]),t._v(" 5.1.3 分组查询")]),t._v(" "),s("blockquote",[s("p",[t._v("分组其实就是按列进行分类(指定列下相同的数据归为一类)，然后可以对分类完的数据进行合并计算。")]),t._v(" "),s("p",[t._v("分组查询通常会使用聚合函数进行计算。")])]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v("  字段列表  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  表名  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" 条件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" 分组字段名  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("having")]),t._v(" 分组后过滤条件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("p",[t._v("💡 执行顺序：where > 聚合函数 > having")])]),t._v(" "),s("p",[s("strong",[t._v("where与having区别（面试题）")])]),t._v(" "),s("ul",[s("li",[t._v("执行时机不同：where是分组之前进行过滤，不满足where条件，不参与分组；而having是分组之后对结果进行过滤。")]),t._v(" "),s("li",[t._v("判断条件不同：where不能对聚合函数进行判断，而having可以。")])]),t._v(" "),s("h4",{attrs:{id:"_5-1-4-排序查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-4-排序查询"}},[t._v("#")]),t._v(" 5.1.4 排序查询")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v("  字段列表  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("   表名   \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v("  条件列表"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v("  分组字段 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("order")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v("  字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  排序方式"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("  排序方式"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" … "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("ul",[s("li",[s("p",[s("strong",[t._v("排序方式")]),t._v("：")]),t._v(" "),s("ul",[s("li",[t._v("ASC ：升序（默认值）")]),t._v(" "),s("li",[t._v("DESC：降序")])])])]),t._v(" "),s("h4",{attrs:{id:"_5-1-5-分页查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-5-分页查询"}},[t._v("#")]),t._v(" 5.1.5 分页查询")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v("  字段列表  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("   表名  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit")]),t._v("  起始索引"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 查询记录数 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("ol",[s("li",[t._v("起始索引从"),s("strong",[t._v("0")]),t._v("开始。 计算公式 ：   起始索引 = （查询页码 - 1）* 每页显示记录数")]),t._v(" "),s("li",[t._v("如果查询的是第一页数据，起始索引可以省略，直接简写为 limit  条数")])])]),t._v(" "),s("h3",{attrs:{id:"_5-2-多表操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-多表操作"}},[t._v("#")]),t._v(" 5.2 多表操作")]),t._v(" "),s("h4",{attrs:{id:"_5-2-1-一对多"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-1-一对多"}},[t._v("#")]),t._v(" 5.2.1 一对多")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("一对多关系实现")]),t._v("：在数据库表中多的一方，添加字段，来关联属于一这方的主键。\n"),s("strong",[t._v("外键约束")]),t._v("：让两张表的数据建立连接，保证数据的一致性和完整性。"),s("code",[t._v("foreign key")]),t._v("\n外键约束的语法：")])]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 创建表时指定")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" 表名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t字段名    数据类型"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constraint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("外键名称"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreign")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("外键字段名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("references")]),t._v("   主表 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("主表列名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 建完表后，添加外键")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v("  表名  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constraint")]),t._v("  外键名称  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreign")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("外键字段名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("references")]),t._v(" 主表"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("主表列名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[s("strong",[t._v("物理外键和逻辑外键")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("物理外键")]),t._v(" "),s("ul",[s("li",[t._v("概念：使用foreign key定义外键关联另外一张表。")]),t._v(" "),s("li",[t._v("缺点：\n"),s("ul",[s("li",[t._v("影响增、删、改的效率（需要检查外键关系）。")]),t._v(" "),s("li",[t._v("仅用于单节点数据库，不适用与分布式、集群场景。")]),t._v(" "),s("li",[t._v("容易引发数据库的死锁问题，消耗性能。")])])])])]),t._v(" "),s("li",[s("p",[t._v("逻辑外键")]),t._v(" "),s("ul",[s("li",[t._v("概念：在业务层逻辑中，解决外键关联。")]),t._v(" "),s("li",[t._v("通过逻辑外键，就可以很方便的解决上述问题。")])])])]),t._v(" "),s("h4",{attrs:{id:"_5-2-2-一对一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-2-一对一"}},[t._v("#")]),t._v(" 5.2.2 一对一")]),t._v(" "),s("blockquote",[s("p",[t._v("一对一 ：在任意一方加入外键，关联另外一方的主键，并且设置外键为唯一的(UNIQUE)")])]),t._v(" "),s("h4",{attrs:{id:"_5-2-3-多对多"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-3-多对多"}},[t._v("#")]),t._v(" 5.2.3 多对多")]),t._v(" "),s("p",[t._v("多对多的关系在开发中属于也比较常见的。比如：学生和老师的关系，一个学生可以有多个授课老师，一个授课老师也可以有多个学生。在比如：学生和课程的关系，一个学生可以选修多门课程，一个课程也可以供多个学生选修。")])])}),[],!1,null,null,null);s.default=e.exports}}]);