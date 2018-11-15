let http= require('http');
let cheerio= require('cheerio');
let request= require('request');

var url= 'https://sjz.lianjia.com/ershoufang/'

request(url, (error, response, html)=>{
    if(!error && response.statusCode == 200){
        let $= cheerio.load(html)
        let unitPrice = $('.unitPrice>span').text();
        console.log(unitPrice);
    }
})
