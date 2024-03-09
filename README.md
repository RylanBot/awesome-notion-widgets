# awesome-notion-widgets

## 🌷 效果预览

[![Live Demo](https://img.shields.io/badge/Live%20Demo-点击查看-lightseagreen?style=for-the-badge&logo=vercel)](https://notion-widgets.rylan.cn/)

> [!Tip]  
> **更多内容可查看我的[博客文章](https://rylan.cn/article/notion-widgets)**

## 🧙🏻 快速上手

> [!Important]  
> **参数均是可选，不传参则调用默认值**

### 🔮 随机诗句

#### 🎁 致谢 [今日诗词](https://www.wxhi.cn/) 开放 API

```
https://notion-widgets.rylan.cn/poem
```

| 参数    | 含义             | 备注                                              |
| :------ | :--------------- | :------------------------------------------------ |
| theme   | 诗歌主题         | 参考 https://open.saintic.com/sentence.html       |
| catalog | 诗歌子分类       | 同上，使用拼音（比如子分类夏天，传入 xiatian）    |
| author  | 是否显示作者     | true（默认）/ false                               |
| name    | 是否显示诗名     | true（默认）/ false                               |
| color   | 字体颜色         | 英文字符串 或者 16 进制（其中 # 号使用 %23 代替） |
| size    | 字体大小         | 传入数字即可（对应单位 px）                       |

### 🔮 英文引言

#### 🎁 致谢 [Quotable](https://docs.quotable.io/) 和 [Unsplash](https://unsplash.com/) 开放 API

```
https://notion-widgets.rylan.cn/quote
```

| 参数      | 含义         | 备注                                              |
| :-------- | :----------- | :------------------------------------------------ |
| author    | 引言作者     | 比如 爱因斯坦 对应 Albert Einstein                |
| tags      | 引言类型     | 比如 business, education, faith, friendship...    |
| minLength | 句子最短长度 | 数字（一个字母长度算 1，太短可能查不到）          |
| maxLength | 句子最长长度 |                                                   |
| width     | 卡片宽度     | 传入数字即可（对应单位 px）                       |
| size      | 字体大小     | 传入数字即可（对应单位 px）                       |
| keys      | 背景图片类型 | 任意英文字符串，使用逗号连接（默认 nature,water） |

> [!Note]  
> **引言[作者](https://docs.quotable.io/docs/api/281e25991b4ea-list-authors)和[类型](https://docs.quotable.io/docs/api/b1e970ddae827-list-tags)的完整可选值可调用 API 接口测试查询**

### 🔮 音乐播放器

#### 🎁 致谢 [MetingJS](https://github.com/xizeyoupan/Meting-API/) 和 [Aplayer](https://github.com/DIYgod/APlayer) 库

```
https://notion-widgets.rylan.cn/music
```

| 参数            | 含义               | 备注                                                                                   |
| :-------------- | :----------------- | :------------------------------------------------------------------------------------- |
| server          | 服务来源           | netease （默认，网易云）/ tencent （QQ）/ kugou （酷狗）/ xiami（虾米） / baidu (百度) |
| type            | 类型               | playlist （歌单）/ song （单曲）/ album（专辑）/ artist（歌手）                        |
| id              | 标识               |                                                                                        |
| url             | 直接使用文件链接   |                                                                                        |
| name            | 补充链接的对应歌名 |                                                                                        |
| artist          | 补充链接的对应歌手 |                                                                                        |
| cover           | 补充链接的对应封面 |                                                                                        |
| lrc             | 显示歌词           | 0 （隐藏）/ 1 （默认）                                                                 |
| autoplay        | 自动播放           | true / false（默认）                                                                   |
| theme           | 播放器颜色         | 英文字符串 或者 16 进制（其中 # 号使用 %23 代替）                                      |
| loop            | 循环模式           | none（默认，所有播完后停止） / all（所有播放后从头开始）/ one（单曲循环）              |
| order           | 播放顺序           | list（默认，按列表）/ random（随机）                                                           |
| volume          | 初始音量           | 0 - 1（默认 0.7）                                                                      |
| mutex           | 同时只播放一个音频 | true（默认）/ false                                                                    |
| list-folded     | 是否播放列表展开   | true（默认）/ false                                                                    |
| list-max-height | 播放列表最大高度   | （默认 160px）                                                                         |
