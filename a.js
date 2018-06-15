const config = [
    {
        name:'1',
        url:'https://www.baidu.com',
        picUrl:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2920084749,2018893236&fm=58&s=39C718720E8EBE011B398BAC0300F024&bpow=121&bpoh=75',
        description:'1111'
    },
    {
        name:'2',
        url:'https://www.google.com',
        picUrl:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3809657168,2277874330&fm=58&s=AA72CC16C576EE334CDCD0CE020050B2',
        description:'2222'
    }
];
const cssConfig = {
    background:"ghostwhite",
    fontsize:"14",
    width:"60"
};

(()=>{
    let str=`<div style = "position:absolute;width:${cssConfig.width}px;height: ${config.length*cssConfig.width+4}px;
             background: ${cssConfig.background};border: 2px solid slategrey;right:0;top:200px;font-size: ${cssConfig.fontsize}px">`;
    for(item of config){
        str+=`<a style = "display: inline-block;width: ${cssConfig.width}; height:${cssConfig.width}"
             href = "${item.url}" target="_blank"><img src="${item.picUrl}" width = "${cssConfig.width}px" 
             height = "${cssConfig.width}px" title="${item.description}"></a>`;
    }
    str+=`</div>`;
    document.getElementById("_a").innerHTML = str;
})();