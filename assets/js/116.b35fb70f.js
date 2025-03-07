(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{473:function(t,a,s){"use strict";s.r(a);var e=s(7),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-nacos配置管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-nacos配置管理"}},[t._v("#")]),t._v(" 1. Nacos配置管理")]),t._v(" "),a("blockquote",[a("p",[t._v("Nacos除了可以做注册中心，同样可以做配置管理来使用")])]),t._v(" "),a("h3",{attrs:{id:"_1-1-统一配置管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-统一配置管理"}},[t._v("#")]),t._v(" 1.1 统一配置管理")]),t._v(" "),a("p",[t._v("Nacos一方面可以将配置集中管理，另一方可以在配置变更时，及时通知微服务，实现配置的热更新\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210714164426792.5wp9lt8urpfk.webp",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_1-2-配置热更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-配置热更新"}},[t._v("#")]),t._v(" 1.2 配置热更新")]),t._v(" "),a("blockquote",[a("p",[t._v("修改nacos中的配置后，微服务中无需重启即可让配置生效，也就是"),a("strong",[t._v("配置热更新")])])]),t._v(" "),a("h3",{attrs:{id:"_1-3-配置共享"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-配置共享"}},[t._v("#")]),t._v(" 1.3 配置共享")]),t._v(" "),a("p",[t._v("其实微服务启动时，会去nacos读取多个配置文件，例如：")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("[spring.application.name]-[spring.profiles.active].yaml")]),t._v("，例如：userservice-dev.yaml")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("[spring.application.name].yaml")]),t._v("，例如：userservice.yaml")])])]),t._v(" "),a("p",[t._v("而"),a("code",[t._v("[spring.application.name].yaml")]),t._v("不包含环境，因此可以被多个环境共享。")]),t._v(" "),a("p",[a("mark",[t._v("配置共享优先级：当nacos、服务本地同时出现相同属性时，优先级有高低之分")]),t._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210714174623557.2frj2c7jfby8.webp",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_2-feign远程调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-feign远程调用"}},[t._v("#")]),t._v(" 2. Feign远程调用")]),t._v(" "),a("h3",{attrs:{id:"_2-1-自定义配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-自定义配置"}},[t._v("#")]),t._v(" 2.1 自定义配置")]),t._v(" "),a("p",[t._v("Feign可以支持很多的自定义配置，如下表所示：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("作用")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("feign.Logger.Level")])]),t._v(" "),a("td",[t._v("修改日志级别")]),t._v(" "),a("td",[t._v("包含四种不同的级别：NONE、BASIC、HEADERS、FULL")])]),t._v(" "),a("tr",[a("td",[t._v("feign.codec.Decoder")]),t._v(" "),a("td",[t._v("响应结果的解析器")]),t._v(" "),a("td",[t._v("http远程调用的结果做解析，例如解析json字符串为java对象")])]),t._v(" "),a("tr",[a("td",[t._v("feign.codec.Encoder")]),t._v(" "),a("td",[t._v("请求参数编码")]),t._v(" "),a("td",[t._v("将请求参数编码，便于通过http请求发送")])]),t._v(" "),a("tr",[a("td",[t._v("feign. Contract")]),t._v(" "),a("td",[t._v("支持的注解格式")]),t._v(" "),a("td",[t._v("默认是SpringMVC的注解")])]),t._v(" "),a("tr",[a("td",[t._v("feign. Retryer")]),t._v(" "),a("td",[t._v("失败重试机制")]),t._v(" "),a("td",[t._v("请求失败的重试机制，默认是没有，不过会使用Ribbon的重试")])])])]),t._v(" "),a("p",[t._v("一般情况下，默认值就能满足我们使用，如果要自定义时，只需要创建自定义的@Bean覆盖默认Bean即可。")]),t._v(" "),a("h3",{attrs:{id:"_2-2-feign使用优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-feign使用优化"}},[t._v("#")]),t._v(" 2.2 Feign使用优化")]),t._v(" "),a("p",[t._v("Feign底层发起http请求，依赖于其它的框架。其底层客户端实现包括：")]),t._v(" "),a("p",[t._v("•URLConnection：默认实现，不支持连接池")]),t._v(" "),a("p",[t._v("•Apache HttpClient ：支持连接池")]),t._v(" "),a("p",[t._v("•OKHttp：支持连接池")]),t._v(" "),a("p",[t._v("因此提高Feign的性能主要手段就是使用"),a("strong",[t._v("连接池")]),t._v("代替默认的URLConnection。")]),t._v(" "),a("h3",{attrs:{id:"_2-3-最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-最佳实践"}},[t._v("#")]),t._v(" 2.3 最佳实践")]),t._v(" "),a("h4",{attrs:{id:"_2-3-1-继承方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-继承方式"}},[t._v("#")]),t._v(" 2.3.1 继承方式")]),t._v(" "),a("p",[t._v("一样的代码可以通过继承来共享：\n1）定义一个API接口，利用定义方法，并基于SpringMVC注解做声明。\n2）Feign客户端和Controller都集成改接口")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210714190640857.6z4s8s4r95ds.webp",alt:""}})]),t._v(" "),a("p",[t._v("优点：")]),t._v(" "),a("ul",[a("li",[t._v("简单")]),t._v(" "),a("li",[t._v("实现了代码共享")])]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ul",[a("li",[t._v("服务提供方、服务消费方紧耦合")]),t._v(" "),a("li",[t._v("参数列表中的注解映射并不会继承，因此Controller中必须再次声明方法、参数列表、注解")])]),t._v(" "),a("h4",{attrs:{id:"_2-3-2-抽取方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-抽取方式"}},[t._v("#")]),t._v(" 2.3.2 抽取方式")]),t._v(" "),a("p",[t._v("将Feign的Client抽取为独立模块，并且把接口有关的POJO、默认的Feign配置都放到这个模块中，提供给所有消费者使用。")]),t._v(" "),a("p",[t._v("例如，将UserClient、User、Feign的默认配置都抽取到一个feign-api包中，所有微服务引用该依赖包，即可直接使用。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210714214041796.71b2a7poc3nk.webp",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("常见报错")]),t._v("：\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210714205623048.3q2iwmic0aio.webp",alt:""}})]),t._v(" "),a("p",[t._v("这是因为UserClient现在在cn.itcast.feign.clients包下，而order-service的@EnableFeignClients注解是在cn.itcast.order包下，不在同一个包，无法扫描到UserClient。")]),t._v(" "),a("p",[a("strong",[t._v("解决扫描包问题")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("方式一：")])]),t._v(" "),a("p",[t._v("指定Feign应该扫描的包：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableFeignClients")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("basePackages "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cn.itcast.feign.clients"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("方式二：")])]),t._v(" "),a("p",[t._v("指定需要加载的Client接口：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableFeignClients")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clients "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"_3-gateway服务网关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-gateway服务网关"}},[t._v("#")]),t._v(" 3. Gateway服务网关")]),t._v(" "),a("h3",{attrs:{id:"_3-1-功能特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-功能特性"}},[t._v("#")]),t._v(" 3.1 功能特性")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210714210131152.33n7vkhn52io.webp",alt:""}}),t._v(" "),a("strong",[t._v("权限控制")]),t._v("：网关作为微服务入口，需要校验用户是是否有请求资格，如果没有则进行拦截。")]),t._v(" "),a("p",[a("strong",[t._v("路由和负载均衡")]),t._v("：一切请求都必须先经过gateway，但网关不处理业务，而是根据某种规则，把请求转发到某个微服务，这个过程叫做路由。当然路由的目标服务有多个时，还需要做负载均衡。")]),t._v(" "),a("p",[a("strong",[t._v("限流")]),t._v("：当请求流量过高时，在网关中按照下流的微服务能够接受的速度来放行请求，避免服务压力过大。")]),t._v(" "),a("p",[t._v("在SpringCloud中网关的实现包括两种：")]),t._v(" "),a("ul",[a("li",[t._v("gateway")]),t._v(" "),a("li",[t._v("zuul")])]),t._v(" "),a("p",[t._v("Zuul是基于Servlet的实现，属于阻塞式编程。而SpringCloudGateway则是基于Spring5中提供的WebFlux，属于响应式编程的实现，具备更好的性能。")]),t._v(" "),a("h3",{attrs:{id:"_3-2-网关路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-网关路由"}},[t._v("#")]),t._v(" 3.2 网关路由")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210714211742956.3rcpderlqlc0.webp",alt:""}})]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10010")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 网关端口")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gateway "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务名称")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nacos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server-addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8848")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nacos地址")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gateway")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 网关路由配置")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 路由id，自定义，只要唯一即可")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# uri: http://127.0.0.1:8081 # 路由的目标地址 http就是固定地址")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//userservice "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 路由的目标地址 lb就是负载均衡，后面跟服务名称")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 路由断言，也就是判断请求是否符合路由规则的条件")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Path=/user/"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("**")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这个是按照路径匹配，只要以/user/开头就符合要求")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("h3",{attrs:{id:"_3-3-断言工厂"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-断言工厂"}},[t._v("#")]),t._v(" 3.3 断言工厂")]),t._v(" "),a("blockquote",[a("p",[t._v("我们在配置文件中写的断言规则只是字符串，这些字符串会被Predicate Factory读取并处理，转变为路由判断的条件")])]),t._v(" "),a("p",[t._v("例如Path=/user/**是按照路径匹配，这个规则是由")]),t._v(" "),a("p",[a("code",[t._v("org.springframework.cloud.gateway.handler.predicate.PathRoutePredicateFactory")]),t._v("类来")]),t._v(" "),a("p",[t._v("处理的，像这样的断言工厂在SpringCloudGateway还有十几个:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("名称")])]),t._v(" "),a("th",[a("strong",[t._v("说明")])]),t._v(" "),a("th",[a("strong",[t._v("示例")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("After")]),t._v(" "),a("td",[t._v("是某个时间点后的请求")]),t._v(" "),a("td",[t._v("-  After=2037-01-20T17:42:47.789-07:00[America/Denver]")])]),t._v(" "),a("tr",[a("td",[t._v("Before")]),t._v(" "),a("td",[t._v("是某个时间点之前的请求")]),t._v(" "),a("td",[t._v("-  Before=2031-04-13T15:14:47.433+08:00[Asia/Shanghai]")])]),t._v(" "),a("tr",[a("td",[t._v("Between")]),t._v(" "),a("td",[t._v("是某两个时间点之前的请求")]),t._v(" "),a("td",[t._v("-  Between=2037-01-20T17:42:47.789-07:00[America/Denver],  2037-01-21T17:42:47.789-07:00[America/Denver]")])]),t._v(" "),a("tr",[a("td",[t._v("Cookie")]),t._v(" "),a("td",[t._v("请求必须包含某些cookie")]),t._v(" "),a("td",[t._v("- Cookie=chocolate, ch.p")])]),t._v(" "),a("tr",[a("td",[t._v("Header")]),t._v(" "),a("td",[t._v("请求必须包含某些header")]),t._v(" "),a("td",[t._v("- Header=X-Request-Id, \\d+")])]),t._v(" "),a("tr",[a("td",[t._v("Host")]),t._v(" "),a("td",[t._v("请求必须是访问某个host（域名）")]),t._v(" "),a("td",[t._v("-  Host="),a("strong",[t._v(".somehost.org,")]),t._v(".anotherhost.org")])]),t._v(" "),a("tr",[a("td",[t._v("Method")]),t._v(" "),a("td",[t._v("请求方式必须是指定方式")]),t._v(" "),a("td",[t._v("- Method=GET,POST")])]),t._v(" "),a("tr",[a("td",[t._v("Path")]),t._v(" "),a("td",[t._v("请求路径必须符合指定规则")]),t._v(" "),a("td",[t._v("- Path=/red/{segment},/blue/**")])]),t._v(" "),a("tr",[a("td",[t._v("Query")]),t._v(" "),a("td",[t._v("请求参数必须包含指定参数")]),t._v(" "),a("td",[t._v("- Query=name, Jack或者-  Query=name")])]),t._v(" "),a("tr",[a("td",[t._v("RemoteAddr")]),t._v(" "),a("td",[t._v("请求者的ip必须是指定范围")]),t._v(" "),a("td",[t._v("- RemoteAddr=192.168.1.1/24")])]),t._v(" "),a("tr",[a("td",[t._v("Weight")]),t._v(" "),a("td",[t._v("权重处理")]),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"_3-4-过滤器工厂"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-过滤器工厂"}},[t._v("#")]),t._v(" 3.4 过滤器工厂")]),t._v(" "),a("p",[t._v("GatewayFilter是网关中提供的一种过滤器，可以对进入网关的请求和微服务返回的响应做处理：\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210714212312871.11vjnszpicu8.webp",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("过滤器的作用是什么？")]),t._v("\n① 对路由的请求或响应做加工处理，比如添加请求头\n② 配置在路由下的过滤器只对当前路由的请求生效\ndefaultFilters的作用是什么？\n① 对所有路由都生效的过滤器")]),t._v(" "),a("h3",{attrs:{id:"_3-5-全局过滤器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-全局过滤器"}},[t._v("#")]),t._v(" 3.5 全局过滤器")]),t._v(" "),a("blockquote",[a("p",[t._v("全局过滤器的作用也是处理一切进入网关的请求和微服务响应，与"),a("code",[t._v("GatewayFilter")]),t._v("的作用一样。区别在于"),a("code",[t._v("GatewayFilter")]),t._v("通过配置定义，处理逻辑是固定的；而"),a("code",[t._v("GlobalFilter")]),t._v("的逻辑需要自己写代码实现。")])]),t._v(" "),a("p",[t._v("在filter中编写自定义逻辑，可以实现下列功能：")]),t._v(" "),a("ul",[a("li",[t._v("登录状态判断")]),t._v(" "),a("li",[t._v("权限校验")]),t._v(" "),a("li",[t._v("请求限流等")])]),t._v(" "),a("h4",{attrs:{id:"_3-5-1-过滤器执行顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-1-过滤器执行顺序"}},[t._v("#")]),t._v(" 3.5.1 过滤器执行顺序")]),t._v(" "),a("p",[t._v("请求进入网关会碰到三类过滤器：当前路由的过滤器、DefaultFilter、GlobalFilter")]),t._v(" "),a("p",[t._v("请求路由后，会将当前路由过滤器和DefaultFilter、GlobalFilter，合并到一个过滤器链（集合）中，排序后依次执行每个过滤器：\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/image-20210714214228409.1iplbcn4mzog.webp",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("排序的规则是什么呢？")])]),t._v(" "),a("ul",[a("li",[t._v("每一个过滤器都必须指定一个int类型的order值，"),a("strong",[t._v("order值越小，优先级越高，执行顺序越靠前")]),t._v("。")]),t._v(" "),a("li",[t._v("GlobalFilter通过实现Ordered接口，或者添加@Order注解来指定order值，由我们自己指定")]),t._v(" "),a("li",[t._v("路由过滤器和defaultFilter的order由Spring指定，默认是按照声明顺序从1递增。")]),t._v(" "),a("li",[t._v("当过滤器的order值一样时，会按照 defaultFilter > 路由过滤器 > GlobalFilter的顺序执行。")])]),t._v(" "),a("h3",{attrs:{id:"_3-6-跨域问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-跨域问题"}},[t._v("#")]),t._v(" 3.6 跨域问题")]),t._v(" "),a("p",[t._v("跨域：域名不一致就是跨域，主要包括：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("域名不同： www.taobao.com 和 www.taobao.org 和 www.jd.com 和 miaosha.jd.com")])]),t._v(" "),a("li",[a("p",[t._v("域名相同，端口不同：localhost:8080和localhost8081")])])]),t._v(" "),a("p",[t._v("跨域问题：浏览器禁止请求的发起者与服务端发生跨域ajax请求，请求被浏览器拦截的问题")]),t._v(" "),a("p",[t._v("解决方案：CORS ，查看：https://www.ruanyifeng.com/blog/2016/04/cors.html")])])}),[],!1,null,null,null);a.default=r.exports}}]);