/**
 *
 * @param {String} method 请求方式  不区分大小写
 * @param {String} url    请求地址  协议（http）+ 域名+ 端口号 + 路径
 * @param {String} data   请求数据  key=value&key1=value1
 * @param {Function} cb     成功的回调函数 callback: 回调函数
 * @param {Boolean} isAsync 是否异步 true 是异步  false 代表同步
 */
 function Ajax (method, url, data, cb, isAsync) {
    // get   url + '?' + data
    // post
    var xhr = null;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
  
    // xhr.readyState    1 - 4  监听是否有响应
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          cb(JSON.parse(xhr.responseText));
        }
      }
    };
    method = method.toUpperCase();
    if (method == "GET") {
      xhr.open(method, url + "?" + data, isAsync);
      xhr.send();
    } else if (method == "POST") {
      xhr.open(method, url, isAsync);
      // key=value&key1=valu1
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send(data);
    }
  }
  










