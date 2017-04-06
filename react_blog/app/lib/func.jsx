/**
 * Created by lipeng on 17/3/25.
 */
import fetch from 'isomorphic-fetch';
import Config from '../config/app.example.jsx';
var Func = {
    getViewportSize:function () {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        };
    },
    //get url 拼接
    joinUrl:function (url,params) {
        let paramsArray = [];
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])));
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&');
        } else {
            url += '&' + paramsArray.join('&');
        }
        return url;
    },
    getFetch:function (url,callback,method,data) {
        //默认值参数
        callback = arguments[1] ? arguments[1] : function () {};
        method = arguments[2] ? arguments[2] : 'GET';
        data = arguments[3] ? arguments[3] : {};

        method = method.toUpperCase();
        let body;
        switch (method)
        {
            case 'GET': //get 请求 因为get请求没有body 所以需要 拼接url 传递参数
                url = this.joinUrl(url,data);
                body = undefined;
                break;
            case 'POST':
                body = JSON.stringify(data);
                break;
            default:
                url = this.joinUrl(url,data);
                body = undefined;
        }
        let header = {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Access-Token':window.sessionStorage.getItem('access-token'), //用户验证的 登陆验证的access-token
            // 'Access-Token':'lipeng', //用户验证的 登陆验证的access-token
            'Secret-Key':window.sessionStorage.getItem('secret-key'),     //用户请求连接验证的 secret-key
            'Channel':Config.channel                                      //用户渠道 利于后期数据来源统计
        };
        let params = {
            method:method,
            headers:header,
        };
        fetch(url,params,body)
            .then(function (response) {
                if(response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (res) {
                callback(res.datas);
            })
    }
};

module.exports=Func;