# NodeSpider
## 准备    
下载request模块 使用它发起http请求    
```cnpm install request --save```    
下载cheerio模块 使用它解析DOM 可以把它看成Node 版的jQuery    
```cnpm install cheerio --save```    
## 爬取北京链家二手房房价
```
let cheerio= require('cheerio');
let request= require('request');

var url= 'https://bj.lianjia.com/ershoufang/'

request(url, (error, response, html)=>{
    if(!error && response.statusCode == 200){
        let $= cheerio.load(html)
        let unitPrice = $('.unitPrice>span').text();
        console.log(unitPrice);
    }
})

```
然后看结果：    
![61542249002_.pic.jpg](https://upload-images.jianshu.io/upload_images/7072486-b68380368c3fcb89.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





参考资料：    
[手把手教你做爬虫---基于NodeJs](https://blog.csdn.net/yezhenxu1992/article/details/50820629)    
[cheerio](https://npm.taobao.org/package/cheerio)    
[request](https://npm.taobao.org/package/request)    
