1. jwt

想老师讲一下登录校验的一些常用方式，比如token和cookie之类的

created也可以哈

为什么Vue 实例 要用$mount（"#app"）而用 vue-cli 并没有

怎么打包之后 ，怎么自动上传到服务器？



Npm run build  dist包   



线上机器有一个nginx目录 

1. 前端要有一个部署机 jekins 跑build copy代码 上线 
2. push后，jekin点按钮，打包 ssh到机器上 解压
3. push之后，github或者gitlab的webhook  重新发布docker



面试，webpack会问哪些问题，老师简单说下



也不理解出了chainwebpack，configwebpack有什么存在必要吗





jwt

机器1                            机器2

前端                             后端

​           通过json交互(jwt) json web token

1. 用户登录  ===》  后端接受用户名密码，返回一个token （包含用户id，过期时间）
2. 登录成功，拿到token 存储storage
3. axios拦截器
   1. 每次发发请求钱，都获取storage里面的token，放在http 的header上
   2. 后端接受请求，会校验header 根据你接口的是否需要权限
      1. 需要权限，token过期，前端跳转
   3. 用户通过了，返回userInfo，包含用户名，路由权限表(addRouter)









1. node最佳实践

   1. Koa2 
   2. eggjs
      1. mvc分层
      2. 约定大于配置
      3. nginx+docker部署

2. react推荐用umi

3. 虚拟dom就是object对象 大的object独享，模拟树形结构

   1. <div>123</div>>

   2. createElement(div, {id:app},123)

   {

   ​	type:div,

   ​	props:{id:123},

   Children[

   ​	{type:组件}

   ]

   }



前端编译原理

​	开源项目： super-tiny-compiler

​	ast抽象语法树

​	codegen

加班

 	1. 年轻的时候要奋斗
 	2. 加班很多 一定要学习
      	1. 直播课希望大家都来
      	2. 第二天一定要看录播
      	3. 作业要做
      	4. 快速反馈+刻意练习 分章节 挨个训练
      	5. 利用周末 整块事件学习  架构+实战
      	6. 定位自己的水平
 	3. 如果你们真的996
      	1. 中午吃饭事件
      	2. 有时候效率低的会
      	3. 早起
      	4. 投入产出比比较高



学习阶段，明天讲 学习曲线



感谢大家的支持，今天没有测试题，只要求大家按照课上我演示的，尝试看下vuejs源码，下课后又和很多学员聊了点我前端学习的新路里程，感慨我早起遇见一个好的导师，让我在前端的路上进步速度较快， 也希望大家能掌握正确的学习方式，尽快在前端道路上都能达到自己满意的水平 ，明天下午我在公司，北京有兴趣来开课吧坐坐的可以过来 坐标西土城 正好过六一，大家晚安

