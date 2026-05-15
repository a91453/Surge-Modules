const keyword = /(Adblock|blocking|deblocker|pagead)/g;
let body = $response.body;
const regex = /(<|%3C)script[\s\S]*?(>|%3E)[\s\S]*?(<|%3C)(\/|%2F)script[\s\S]*?(>|%3E)/g;
let scripttag = body?.match(regex) || [];
//console.log(scripttag);
scripttag = scripttag?.filter(x => x.match(keyword)) || [];
//console.log(scripttag);
for (const i in scripttag) {
	body = body.replace(scripttag[i], "");
	}
$done({body})