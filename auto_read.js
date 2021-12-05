/*************************
 * 自动阅读脚本（理论上来说全部阅读平台通用）
 * 
 * 测试了番茄看看，微信扫码注册：https://raw.githubusercontent.com/yiyule10/loon_scripts/main/sharecode/%E7%95%AA%E8%8C%84%E7%9C%8B%E7%9C%8B.jpg
 * 
 * 只测试了loon
 * surge和QX自行测试
 * QX似乎直接添加到重写就行
Loon:
[Script]
http-response ^https?://mp\.weixin\.qq\.com/s.+? tag=自动阅读, requires-body=true, script-path=https://raw.githubusercontent.com/yiyule10/loon_scripts/main/auto_read.js

[MITM]
hostname = mp.weixin.qq.com

Surge:
[Script]
自动阅读 = type=http-request,requires-body=1,pattern=^https?://mp\.weixin\.qq\.com/s.+?,script-path=https://raw.githubusercontent.com/yiyule10/loon_scripts/main/auto_read.js

[MITM]
hostname = mp.weixin.qq.com

QX:
[rewrite_local]
^https?://mp\.weixin\.qq\.com/s.+? url response-body </script>response-body setTimeout(()=>window.history.back(),10000);</script>

[mitm]
hostname=mp.weixin.qq.com
*************************/

let body = $response.body.replace(/<\/script>/g, "setTimeout(()=>window.history.back(),10000);</script>");
$done({body});
