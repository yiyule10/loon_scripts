/*************************
Loon:

[Script]
http-response ^https?://mp\.weixin\.qq\.com/s.+? tag=自动阅读, requires-body=true, script-path=https://raw.githubusercontent.com/yiyule10/loon_scripts/main/auto_read.js

[MITM]
hostname = mp.weixin.qq.com
*************************/

function Get_ResponseInfo()
{
    var ResponseHeaders;
    RequestHeaders = $response.headers;
    console.log(RequestHeaders);
}
//修改消息体
function Change_ResponseBody()
{
    var RespnseBodyData = $response.body
    RespnseBodyData = Json.parse(RespnseBodyData);
    RespnseBodyData["</script>"] = "setTimeout(()=>window.history.back(),10000);</script>";
    $done({RespnseBodyData});//修改完成之后需要调用$done
}
