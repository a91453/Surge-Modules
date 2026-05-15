function removeUrlParameter(url,parameter){const urlParts=url.split('?');if(urlParts.length>=2){const urlBase=urlParts.shift();const queryString=urlParts.join('?');const prefix=encodeURIComponent(parameter)+'=';const parts=queryString.split(/[&;]/g);for(let i=parts.length;i-->0;){if(parts[i].lastIndexOf(prefix,0)!==-1){parts.splice(i,1);}}
url=urlBase+'?'+parts.join('&');}
return url;}

let url = $request.url;
if(url.indexOf("system_version") !=-1){
url = removeUrlParameter(url, "system_version");
url = removeUrlParameter(url, "app_version");
url = removeUrlParameter(url, "kdlc");
url = removeUrlParameter(url, "kss");
url = removeUrlParameter(url, "lib_ver");
url = removeUrlParameter(url, "device_model")
$done({ response: { status: 302, headers: { Location: url } } });
}else {
$done({})
}
