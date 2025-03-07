(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{576:function(t,e,s){"use strict";s.r(e);var _=s(7),i=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_1-好友关注-feed流实现方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-好友关注-feed流实现方案"}},[t._v("#")]),t._v(" 1. 好友关注-Feed流实现方案")]),t._v(" "),e("blockquote",[e("p",[t._v("当我们关注了用户后，这个用户发了动态，那么我们应该把这些数据推送给用户，这个需求，其实我们又把他叫做Feed流，关注推送也叫做Feed流，直译为投喂。为用户持续的提供“沉浸式”的体验，通过无限下拉刷新获取新的信息")])]),t._v(" "),e("p",[t._v("对于传统的模式的内容解锁：我们是需要用户去通过搜索引擎或者是其他的方式去解锁想要看的内容")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/_Redis%E5%AE%9E%E6%88%98%E7%AF%87.assets_1653808641260.12nlwi8bi500.webp",alt:""}})]),t._v(" "),e("p",[t._v("对于新型的Feed流的的效果：不需要我们用户再去推送信息，而是系统分析用户到底想要什么，然后直接把内容推送给用户，从而使用户能够更加的节约时间，不用主动去寻找。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/_Redis%E5%AE%9E%E6%88%98%E7%AF%87.assets_1653808993693.7eylg4fns4jk.webp",alt:""}})]),t._v(" "),e("p",[t._v("Feed流产品有两种常见模式：\n"),e("strong",[t._v("Timeline")]),t._v("：不做内容筛选，简单的按照内容发布时间排序，常用于好友或关注。例如朋友圈")]),t._v(" "),e("ul",[e("li",[t._v("优点：信息全面，不会有缺失。并且实现也相对简单")]),t._v(" "),e("li",[t._v("缺点：信息噪音较多，用户不一定感兴趣，内容获取效率低")])]),t._v(" "),e("p",[e("strong",[t._v("智能排序")]),t._v("：利用智能算法屏蔽掉违规的、用户不感兴趣的内容。推送用户感兴趣信息来吸引用户")]),t._v(" "),e("ul",[e("li",[t._v("优点：投喂用户感兴趣信息，用户粘度很高，容易沉迷")]),t._v(" "),e("li",[t._v("缺点：如果算法不精准，可能起到反作用\n本例中的个人页面，是基于关注的好友来做Feed流，因此采用Timeline的模式。该模式的实现方案有三种：")])]),t._v(" "),e("p",[e("strong",[t._v("① 拉模式")]),t._v("：也叫做读扩散\n该模式的核心含义就是：当张三和李四和王五发了消息后，都会保存在自己的邮箱中，假设赵六要读取信息，那么他会从读取他自己的收件箱，此时系统会从他关注的人群中，把他关注人的信息全部都进行拉取，然后在进行排序")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/_Redis%E5%AE%9E%E6%88%98%E7%AF%87.assets_1653809450816.13kw0gsmmnls.webp",alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("推模式")]),t._v("：也叫做写扩散。\n推模式是没有写邮箱的，当张三写了一个内容，此时会主动的把张三写的内容发送到他的粉丝收件箱中去，假设此时李四再来读取，就不用再去临时拉取了")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/_Redis%E5%AE%9E%E6%88%98%E7%AF%87.assets_1653809875208.2ukijs8cux8g.webp",alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("推拉结合模式")]),t._v("：也叫做读写混合，兼具推和拉两种模式的优点。")]),t._v(" "),e("p",[t._v("推拉模式是一个折中的方案，站在发件人这一段，如果是个普通的人，那么我们采用写扩散的方式，直接把数据写入到他的粉丝中去，因为普通的人他的粉丝关注量比较小，所以这样做没有压力，如果是大V，那么他是直接将数据先写入到一份到发件箱里边去，然后再直接写一份到活跃粉丝收件箱里边去，现在站在收件人这端来看，如果是活跃粉丝，那么大V和普通的人发的都会直接写入到自己收件箱里边来，而如果是普通的粉丝，由于他们上线不是很频繁，所以等他们上线时，再从发件箱里边去拉信息。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/_Redis%E5%AE%9E%E6%88%98%E7%AF%87.assets_1653812346852.6d3uqq6226io.webp",alt:""}})]),t._v(" "),e("p",[e("mark",[t._v("Feed流中的数据会不断更新，所以数据的角标也在变化，因此不能采用传统的分页模式。")])]),t._v(" "),e("blockquote",[e("p",[t._v("Feed流的滚动分页:要求我们需要记录每次操作的最后一条，然后从这个位置开始去读取数据")])]),t._v(" "),e("h2",{attrs:{id:"_2-附近商户-geo数据结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-附近商户-geo数据结构"}},[t._v("#")]),t._v(" 2. 附近商户——GEO数据结构")]),t._v(" "),e("p",[t._v("GEO就是Geolocation的简写形式，代表地理坐标。Redis在3.2版本中加入了对GEO的支持，允许存储地理坐标信息，帮助我们根据经纬度来检索数据。常见的命令有：")]),t._v(" "),e("ul",[e("li",[t._v("GEOADD：添加一个地理空间信息，包含：经度（longitude）、纬度（latitude）、值（member）")]),t._v(" "),e("li",[t._v("GEODIST：计算指定的两个点之间的距离并返回")]),t._v(" "),e("li",[t._v("GEOHASH：将指定member的坐标转为hash字符串形式并返回")]),t._v(" "),e("li",[t._v("GEOPOS：返回指定member的坐标")]),t._v(" "),e("li",[t._v("GEORADIUS：指定圆心、半径，找到该圆内包含的所有member，并按照与圆心之间的距离排序后返回。"),e("strong",[t._v("6.以后已废弃")])]),t._v(" "),e("li",[t._v("GEOSEARCH：在指定范围内搜索member，并按照与指定点之间的距离排序后返回。范围可以是圆形或矩形。"),e("strong",[t._v("6.2.新功能")])]),t._v(" "),e("li",[t._v("GEOSEARCHSTORE：与GEOSEARCH功能一致，不过可以把结果存储到一个指定的key。 "),e("strong",[t._v("6.2.新功能")])])]),t._v(" "),e("h2",{attrs:{id:"_3-用户签到-bitmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-用户签到-bitmap"}},[t._v("#")]),t._v(" 3. 用户签到——BitMap")]),t._v(" "),e("blockquote",[e("p",[t._v("我们按月来统计用户签到信息，签到记录为1，未签到则记录为0。把每一个bit位对应当月的每一天，形成了映射关系。用0和1标示业务状态，这种思路就称为位图（BitMap）。这样我们就用极小的空间，来实现了大量数据的表示")])]),t._v(" "),e("p",[t._v("🔎Redis中是利用string类型数据结构实现BitMap，因此最大上限是512M，转换为bit则是 2^32个bit位。")]),t._v(" "),e("p",[e("strong",[t._v("BitMap的操作命令有：")])]),t._v(" "),e("ul",[e("li",[t._v("SETBIT：向指定位置（offset）存入一个0或1")]),t._v(" "),e("li",[t._v("GETBIT ：获取指定位置（offset）的bit值")]),t._v(" "),e("li",[t._v("BITCOUNT ：统计BitMap中值为1的bit位的数量")]),t._v(" "),e("li",[t._v("BITFIELD ：操作（查询、修改、自增）BitMap中bit数组中的指定位置（offset）的值")]),t._v(" "),e("li",[t._v("BITFIELD_RO ：获取BitMap中bit数组，并以十进制形式返回")]),t._v(" "),e("li",[t._v("BITOP ：将多个BitMap的结果做位运算（与 、或、异或）")]),t._v(" "),e("li",[t._v("BITPOS ：查找bit数组中指定范围内第一个0或1出现的位置")])]),t._v(" "),e("h3",{attrs:{id:"_3-1-补充-关于使用bitmap来解决缓存穿透的方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-补充-关于使用bitmap来解决缓存穿透的方案"}},[t._v("#")]),t._v(" 3.1 补充：关于使用bitmap来解决缓存穿透的方案")]),t._v(" "),e("p",[t._v("我们可以将数据库的数据，所对应的id写入到一个list集合中，当用户过来访问的时候，我们直接去判断list中是否包含当前的要查询的数据，如果说用户要查询的id数据并不在list集合中，则直接返回，如果list中包含对应查询的id数据，则说明不是一次缓存穿透数据，则直接放行。\n"),e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Cynicism-lab/MyResource@gh-pages/image/_Redis%E5%AE%9E%E6%88%98%E7%AF%87.assets_1653836416586.3rntxaww13ls.webp",alt:""}})]),t._v(" "),e("p",[t._v("我们可以把list数据抽象成一个非常大的bitmap，我们不再使用list，而是将db中的id数据利用哈希思想，比如：")]),t._v(" "),e("p",[t._v("id % bitmap.size  = 算出当前这个id对应应该落在bitmap的哪个索引上，然后将这个值从0变成1，然后当用户来查询数据时，此时已经没有了list，让用户用他查询的id去用相同的哈希算法， 算出来当前这个id应当落在bitmap的哪一位，然后判断这一位是0，还是1，如果是0则表明这一位上的数据一定不存在，  采用这种方式来处理，需要重点考虑一个事情，就是误差率，所谓的误差率就是指当发生哈希冲突的时候，产生的误差。")]),t._v(" "),e("h2",{attrs:{id:"_4-uv统计-hyperloglog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-uv统计-hyperloglog"}},[t._v("#")]),t._v(" 4. UV统计-HyperLogLog")]),t._v(" "),e("ul",[e("li",[t._v("UV：全称Unique Visitor，也叫独立访客量，是指通过互联网访问、浏览这个网页的自然人。1天内同一个用户多次访问该网站，只记录1次。")]),t._v(" "),e("li",[t._v("PV：全称Page View，也叫页面访问量或点击量，用户每访问网站的一个页面，记录1次PV，用户多次打开页面，则记录多次PV。往往用来衡量网站的流量。")])]),t._v(" "),e("blockquote",[e("p",[t._v("UV统计在服务端做会比较麻烦，因为要判断该用户是否已经统计过了，需要将统计过的用户信息保存。但是如果每个访问的用户都保存到Redis中，数据量会非常恐怖，那怎么处理呢？")])]),t._v(" "),e("p",[e("strong",[t._v("Hyperloglog(HLL)")]),t._v(" 是从Loglog算法派生的概率算法，用于确定非常大的集合的基数，而不需要存储其所有值。相关算法原理大家可以参考：https://juejin.cn/post/6844903785744056333#heading-0")]),t._v(" "),e("p",[t._v("Redis中的HLL是基于string结构实现的，单个HLL的内存"),e("strong",[t._v("永远小于16kb")]),t._v("，"),e("strong",[t._v("内存占用低")]),t._v("的令人发指！作为代价，其测量结果是概率性的，"),e("strong",[t._v("有小于0.81％的误差")]),t._v("。不过对于UV统计来说，这完全可以忽略。")])])}),[],!1,null,null,null);e.default=i.exports}}]);