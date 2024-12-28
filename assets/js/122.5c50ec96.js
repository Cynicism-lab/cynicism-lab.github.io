(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{488:function(_,v,t){"use strict";t.r(v);var a=t(7),s=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"_1-分布式事务问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-分布式事务问题"}},[_._v("#")]),_._v(" 1. 分布式事务问题")]),_._v(" "),v("h3",{attrs:{id:"_1-1-本地事务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-本地事务"}},[_._v("#")]),_._v(" 1.1 本地事务")]),_._v(" "),v("p",[_._v("本地事务，也就是传统的"),v("strong",[_._v("单机事务")]),_._v("。在传统数据库事务中，必须要满足四个原则：\n"),v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210724165045186.7kc9voowgxkw.webp",alt:""}})]),_._v(" "),v("h3",{attrs:{id:"_1-2-分布式事务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-分布式事务"}},[_._v("#")]),_._v(" 1.2 分布式事务")]),_._v(" "),v("p",[v("strong",[_._v("分布式事务")]),_._v("，就是指不是在单个服务或单个数据库架构下，产生的事务，例如：")]),_._v(" "),v("ul",[v("li",[_._v("跨数据源的分布式事务")]),_._v(" "),v("li",[_._v("跨服务的分布式事务")]),_._v(" "),v("li",[_._v("综合情况")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210724165338958.26d7gmftw4qo.webp",alt:""}})]),_._v(" "),v("p",[_._v("完成上面的操作需要访问三个不同的微服务和三个不同的数据库,订单的创建、库存的扣减、账户扣款在每一个服务和数据库内是一个本地事务，可以保证ACID原则。")]),_._v(" "),v("p",[_._v('但是当我们把三件事情看做一个"业务"，要满足保证“业务”的原子性，要么所有操作全部成功，要么全部失败，不允许出现部分成功部分失败的现象，这就是'),v("strong",[_._v("分布式系统下的事务")]),_._v("了。")]),_._v(" "),v("p",[v("mark",[_._v("此时ACID难以满足，这是分布式事务要解决的问题")])]),_._v(" "),v("h2",{attrs:{id:"_2-理论基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-理论基础"}},[_._v("#")]),_._v(" 2. 理论基础")]),_._v(" "),v("blockquote",[v("p",[_._v("解决分布式事务问题，需要一些分布式系统的基础知识作为理论指导。")])]),_._v(" "),v("h3",{attrs:{id:"_2-1-cap定理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-cap定理"}},[_._v("#")]),_._v(" 2.1 CAP定理")]),_._v(" "),v("p",[_._v("1998年，加州大学的计算机科学家 Eric Brewer 提出，分布式系统有三个指标。")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("Consistency")]),_._v("（一致性）:用户访问分布式系统中的任意节点，得到的数据必须一致")]),_._v(" "),v("li",[v("strong",[_._v("Availability")]),_._v("（可用性）:用户访问集群中的任意健康节点，必须能得到响应，而不是超时或拒绝")]),_._v(" "),v("li",[v("strong",[_._v("Partition tolerance")]),_._v(" （分区容错性）:\n"),v("ul",[v("li",[v("strong",[_._v("Partition（分区）")]),_._v("：因为网络故障或其它原因导致分布式系统中的部分节点与其它节点失去连接，形成独立分区")]),_._v(" "),v("li",[v("strong",[_._v("Tolerance（容错）")]),_._v("：在集群出现分区时，整个系统也要持续对外提供服务")])])])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210724170517944.59tpp80dnvgg.webp",alt:""}}),_._v("\n🔎 Eric Brewer 说，这三个指标"),v("strong",[_._v("不可能同时做到")]),_._v("。这个结论就叫做 "),v("strong",[_._v("CAP 定理")])]),_._v(" "),v("h3",{attrs:{id:"_2-2-base理论"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-base理论"}},[_._v("#")]),_._v(" 2.2 BASE理论")]),_._v(" "),v("p",[_._v("BASE理论是对CAP的一种解决思路，包含三个思想：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("Basically Available")]),_._v(" "),v("strong",[_._v("（基本可用）")]),_._v("：分布式系统在出现故障时，允许损失部分可用性，即"),v("strong",[_._v("保证核心可用")]),_._v("。")]),_._v(" "),v("li",[v("strong",[_._v("Soft State（软状态")]),_._v("：在一定时间内，允许出现中间状态，比如"),v("strong",[_._v("临时")]),_._v("的不一致状态。")]),_._v(" "),v("li",[v("strong",[_._v("Eventually Consistent（最终一致性）")]),_._v("：虽然无法保证强一致性，但是在软状态结束后，"),v("strong",[_._v("最终")]),_._v("达到数据一致。")])]),_._v(" "),v("h3",{attrs:{id:"_2-3-解决分布式事务的思路"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-解决分布式事务的思路"}},[_._v("#")]),_._v(" 2.3 解决分布式事务的思路")]),_._v(" "),v("blockquote",[v("p",[_._v("分布式事务最大的问题是各个子事务的一致性问题，因此可以借鉴CAP定理和BASE理论，有两种解决思路：")])]),_._v(" "),v("ul",[v("li",[_._v("AP模式：各子事务分别执行和提交，允许出现结果不一致，然后采用弥补措施恢复数据即可，实现"),v("strong",[_._v("最终一致")]),_._v("。")]),_._v(" "),v("li",[_._v("CP模式：各个子事务执行后互相等待，同时提交，同时回滚，达成强一致。但事务等待过程中，处于"),v("strong",[_._v("弱可用状态")]),_._v("。")])]),_._v(" "),v("p",[_._v("但不管是哪一种模式，都需要在子系统事务之间互相通讯，协调事务状态，也就是需要一个"),v("strong",[_._v("事务协调者(TC)")]),_._v("：\n"),v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210724172123567.3o5az9eu1i9s.webp",alt:""}}),_._v("\n这里的子系统事务，称为"),v("strong",[_._v("分支事务")]),_._v("；有关联的各个分支事务在一起称为"),v("strong",[_._v("全局事务")])]),_._v(" "),v("h2",{attrs:{id:"_3-初识seata"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-初识seata"}},[_._v("#")]),_._v(" 3. 初识Seata")]),_._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[_._v("概念")]),_._v(" "),v("p",[_._v("Seata是 2019 年 1 月份蚂蚁金服和阿里巴巴共同开源的分布式事务解决方案。致力于提供高性能和简单易用的分布式事务服务，为用户打造一站式的分布式解决方案")])]),_._v(" "),v("h3",{attrs:{id:"_3-1-seata的架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-seata的架构"}},[_._v("#")]),_._v(" 3.1 Seata的架构")]),_._v(" "),v("p",[_._v("Seata事务管理中有三个重要的角色：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("TC (Transaction Coordinator) -")]),_._v(" 事务协调者：维护全局和分支事务的状态，协调全局事务提交或回滚。")]),_._v(" "),v("li",[v("strong",[_._v("TM (Transaction Manager) -")]),_._v(" 事务管理器：定义全局事务的范围、开始全局事务、提交或回滚全局事务。")]),_._v(" "),v("li",[v("strong",[_._v("RM (Resource Manager) -")]),_._v(" 资源管理器：管理分支事务处理的资源，与TC交谈以注册分支事务和报告分支事务的状态，并驱动分支事务提交或回滚")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210724172326452.42n5wtaaub28.webp",alt:""}})]),_._v(" "),v("blockquote",[v("p",[_._v("Seata基于上述架构提供了四种不同的分布式事务解决方案：")])]),_._v(" "),v("ul",[v("li",[_._v("XA模式：强一致性分阶段事务模式，牺牲了一定的可用性，无业务侵入")]),_._v(" "),v("li",[_._v("TCC模式：最终一致的分阶段事务模式，有业务侵入")]),_._v(" "),v("li",[_._v("AT模式：最终一致的分阶段事务模式，无业务侵入，也是Seata的默认模式")]),_._v(" "),v("li",[_._v("SAGA模式：长事务模式，有业务侵入")])]),_._v(" "),v("p",[v("mark",[_._v("无论哪种方案，都离不开TC，也就是事务的协调者")])]),_._v(" "),v("h3",{attrs:{id:"_3-2-xa模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-xa模式"}},[_._v("#")]),_._v(" 3.2 XA模式")]),_._v(" "),v("p",[_._v("Seata对原始的XA模式做了简单的封装和改造，以适应自己的事务模型，基本架构如图:\n"),v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210724174424070.4m31o2i19mo0.webp",alt:""}}),_._v(" "),v("strong",[_._v("RM一阶段的工作")]),_._v("：\n​\t① 注册分支事务到TC\n​\t② 执行分支业务sql但"),v("strong",[_._v("不提交")]),_._v("\n​\t③ 报告执行状态到TC")]),_._v(" "),v("p",[v("strong",[_._v("TC二阶段的工作")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("TC检测各分支事务执行状态\na.如果都成功，通知所有RM提交事务\nb.如果有失败，通知所有RM回滚事务")])]),_._v(" "),v("p",[v("strong",[_._v("RM二阶段的工作")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("接收TC指令，提交或回滚事务")])]),_._v(" "),v("p",[v("strong",[_._v("XA模式的优点是什么？")])]),_._v(" "),v("ul",[v("li",[_._v("事务的强一致性，满足ACID原则。")]),_._v(" "),v("li",[_._v("常用数据库都支持，实现简单，并且没有代码侵入")])]),_._v(" "),v("p",[v("strong",[_._v("XA模式的缺点是什么？")])]),_._v(" "),v("ul",[v("li",[_._v("因为一阶段需要锁定数据库资源，等待二阶段结束才释放，性能较差")]),_._v(" "),v("li",[_._v("依赖关系型数据库实现事务")])]),_._v(" "),v("h3",{attrs:{id:"_3-3-at模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-at模式"}},[_._v("#")]),_._v(" 3.3 AT模式")]),_._v(" "),v("blockquote",[v("p",[_._v("AT模式同样是分阶段提交的事务模型，不过弥补了XA模型中资源锁定周期过长的缺陷")])]),_._v(" "),v("h4",{attrs:{id:"_3-3-1-基本流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-基本流程"}},[_._v("#")]),_._v(" 3.3.1 基本流程")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210724175327511.535usui8f9q8.webp",alt:""}}),_._v(" "),v("strong",[_._v("阶段一RM的工作")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("注册分支事务")]),_._v(" "),v("li",[_._v("记录undo-log（"),v("strong",[_._v("数据快照")]),_._v("）")]),_._v(" "),v("li",[_._v("执行业务sql并"),v("strong",[_._v("提交")])]),_._v(" "),v("li",[_._v("报告事务状态")])]),_._v(" "),v("p",[v("strong",[_._v("阶段二提交时RM的工作")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("删除undo-log即可")])]),_._v(" "),v("p",[v("strong",[_._v("阶段二回滚时RM的工作")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("根据undo-log恢复数据到更新前")])]),_._v(" "),v("h4",{attrs:{id:"_3-3-2-at与xa的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-at与xa的区别"}},[_._v("#")]),_._v(" 3.3.2 AT与XA的区别")]),_._v(" "),v("p",[_._v("简述AT模式与XA模式最大的区别是什么？")]),_._v(" "),v("ul",[v("li",[_._v("XA模式一阶段不提交事务，锁定资源；AT模式一阶段直接提交，不锁定资源。")]),_._v(" "),v("li",[_._v("XA模式依赖数据库机制实现回滚；AT模式利用数据快照实现数据回滚。")]),_._v(" "),v("li",[_._v("XA模式强一致；AT模式最终一致")])]),_._v(" "),v("h4",{attrs:{id:"_3-3-3-脏写问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-脏写问题"}},[_._v("#")]),_._v(" 3.3.3 脏写问题")]),_._v(" "),v("p",[_._v("🔎 在多线程并发访问AT模式的分布式事务时，有可能出现脏写问题，如图:\n"),v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210724181541234.c11vtg65xl.webp",alt:""}}),_._v("\n🏷️ 解决思路就是引入了全局锁的概念。在释放DB锁之前，先拿到全局锁。避免同一时刻有另外一个事务来操作当前数据。\n"),v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210724181843029.4thajr0hjlkw.webp",alt:""}})]),_._v(" "),v("h4",{attrs:{id:"_3-3-4-优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-4-优缺点"}},[_._v("#")]),_._v(" 3.3.4 优缺点")]),_._v(" "),v("p",[_._v("AT模式的优点：")]),_._v(" "),v("ul",[v("li",[_._v("一阶段完成直接提交事务，释放数据库资源，性能比较好")]),_._v(" "),v("li",[_._v("利用全局锁实现读写隔离")]),_._v(" "),v("li",[_._v("没有代码侵入，框架自动完成回滚和提交")])]),_._v(" "),v("p",[_._v("AT模式的缺点：")]),_._v(" "),v("ul",[v("li",[_._v("两阶段之间属于软状态，属于最终一致")]),_._v(" "),v("li",[_._v("框架的快照功能会影响性能，但比XA模式要好很多")])]),_._v(" "),v("h3",{attrs:{id:"_3-4-tcc模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-tcc模式"}},[_._v("#")]),_._v(" 3.4 TCC模式")]),_._v(" "),v("h4",{attrs:{id:"_3-4-1-基础流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-1-基础流程"}},[_._v("#")]),_._v(" 3.4.1 基础流程")]),_._v(" "),v("blockquote",[v("p",[_._v("TCC模式与AT模式非常相似，每阶段都是独立事务，不同的是TCC通过人工编码来实现数据恢复。需要实现三个方法：")]),_._v(" "),v("ul",[v("li",[_._v("Try：资源的检测和预留；")]),_._v(" "),v("li",[_._v("Confirm：完成资源操作业务；要求 Try 成功 Confirm 一定要能成功。")]),_._v(" "),v("li",[_._v("Cancel：预留资源释放，可以理解为try的反向操作")])])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210724182937713.3k42jgym7ybk.webp",alt:""}}),_._v("\n举例，一个扣减用户余额的业务。假设账户A原来余额是100，需要余额扣减30元。")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("阶段一（ Try ）")]),_._v("：检查余额是否充足，如果充足则冻结金额增加30元，可用余额扣除30")]),_._v(" "),v("li",[v("strong",[_._v("阶段二（Confirm)")]),_._v("：假如要提交（Confirm），则冻结金额扣减30")]),_._v(" "),v("li",[v("strong",[_._v("阶段二(Canncel)")]),_._v("：如果要回滚（Cancel），则冻结金额扣减30，可用余额增加30")])]),_._v(" "),v("h4",{attrs:{id:"_3-4-2-优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-2-优缺点"}},[_._v("#")]),_._v(" 3.4.2 优缺点")]),_._v(" "),v("p",[_._v("TCC的优点是什么？")]),_._v(" "),v("ul",[v("li",[_._v("一阶段完成直接提交事务，释放数据库资源，性能好")]),_._v(" "),v("li",[_._v("相比AT模型，无需生成快照，无需使用全局锁，性能最强")]),_._v(" "),v("li",[_._v("不依赖数据库事务，而是依赖补偿操作，可以用于非事务型数据库")])]),_._v(" "),v("p",[_._v("TCC的缺点是什么？")]),_._v(" "),v("ul",[v("li",[_._v("有代码侵入，需要人为编写try、Confirm和Cancel接口，太麻烦")]),_._v(" "),v("li",[_._v("软状态，事务是最终一致")]),_._v(" "),v("li",[_._v("需要考虑Confirm和Cancel的失败情况，做好"),v("strong",[_._v("幂等")]),_._v("处理")])]),_._v(" "),v("h4",{attrs:{id:"_3-4-3-事务悬挂和空回滚"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-3-事务悬挂和空回滚"}},[_._v("#")]),_._v(" 3.4.3 事务悬挂和空回滚")]),_._v(" "),v("h5",{attrs:{id:"_1-空回滚"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-空回滚"}},[_._v("#")]),_._v(" 1）空回滚")]),_._v(" "),v("p",[_._v("当某分支事务的try阶段"),v("strong",[_._v("阻塞")]),_._v("时，可能导致全局事务超时而触发二阶段的cancel操作。在未执行try操作时先执行了cancel操作，这时cancel不能做回滚，就是"),v("strong",[_._v("空回滚")]),_._v("。\n"),v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210724183426891.13md6kupk59c.webp",alt:""}}),_._v("\n💡 因而执行cancel操作时，应当判断try是否已经执行，如果尚未执行，则应该空回滚")]),_._v(" "),v("h5",{attrs:{id:"_2-业务悬挂"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-业务悬挂"}},[_._v("#")]),_._v(" 2）业务悬挂")]),_._v(" "),v("p",[_._v("对于已经空回滚的业务，之前被阻塞的try操作恢复，继续执行try，就永远不可能confirm或cancel ，事务一直处于中间状态，这就是"),v("strong",[_._v("业务悬挂")]),_._v("。")]),_._v(" "),v("p",[_._v("💡 执行try操作时，应当判断cancel是否已经执行过了，如果已经执行，应当阻止空回滚后的try操作，避免悬挂")]),_._v(" "),v("h3",{attrs:{id:"_3-5-saga-模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-saga-模式"}},[_._v("#")]),_._v(" 3.5 Saga 模式")]),_._v(" "),v("p",[_._v("在 Saga 模式下，分布式事务内有多个参与者，每一个参与者都是一个冲正补偿服务，需要用户根据业务场景实现其正向操作和逆向回滚操作。")]),_._v(" "),v("p",[_._v("分布式事务执行过程中，依次执行各参与者的正向操作，如果所有正向操作均执行成功，那么分布式事务提交。如果任何一个正向操作执行失败，那么分布式事务会去退回去执行前面各参与者的逆向回滚操作，回滚已提交的参与者，使分布式事务回到初始状态。")]),_._v(" "),v("p",[_._v("Saga也分为两个阶段：")]),_._v(" "),v("ul",[v("li",[_._v("一阶段：直接提交本地事务")]),_._v(" "),v("li",[_._v("二阶段：成功则什么都不做；失败则通过编写补偿业务来回滚")])]),_._v(" "),v("p",[_._v("优点：")]),_._v(" "),v("ul",[v("li",[_._v("事务参与者可以基于事件驱动实现异步调用，吞吐高")]),_._v(" "),v("li",[_._v("一阶段直接提交事务，无锁，性能好")]),_._v(" "),v("li",[_._v("不用编写TCC中的三个阶段，实现简单")])]),_._v(" "),v("p",[_._v("缺点：")]),_._v(" "),v("ul",[v("li",[_._v("软状态持续时间不确定，时效性差")]),_._v(" "),v("li",[_._v("没有锁，没有事务隔离，会有脏写")])]),_._v(" "),v("h3",{attrs:{id:"_3-6-四种模式对比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-四种模式对比"}},[_._v("#")]),_._v(" 3.6 四种模式对比")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210724185021819.csmq2vk9h3k.webp",alt:""}})])])}),[],!1,null,null,null);v.default=s.exports}}]);