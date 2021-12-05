/*************************
Loon:

[Script]
http-response ^https?://mp\.weixin\.qq\.com/s.+? tag=自动阅读, requires-body=true, script-path=https://raw.githubusercontent.com/yiyule10/loon_scripts/main/auto_read.js

[MITM]
hostname = mp.weixin.qq.com
*************************/

let body = $response.body.replace(/<\/script>/g, "setTimeout(()=>window.history.back(),7000);</script>");
$done({body});
