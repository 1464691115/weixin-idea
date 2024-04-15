# weixin-idea ⚡

通过命令行直接打开 uniapp、taro 编译好的项目

## 安装 (全局)

>需要在对应项目根目录下执行

``` cmd
yarn add -g weixin-idea
weixin-idea
```

or

## 安装（局部）

``` cmd
yarn add weixin-idea
yarn weixin-idea
```

### Usage

#### filepath 默认跟随当前 process.env.NODE_ENV 判断是 dist/dev/mp-weixin 还是 dist/build/mp-weixin

#### filepath 也可以指定要打开的编译好的目录

``` cmd
yarn weixin-idea
yarn weixin-idea [<filepath>]
yarn weixin-idea ./dist/xx
```
