$httpClient.get('https://dns.google/resolve?name='+$domain,function(error,response,data){if(error){$done({address:'0.0.0.0'});}else{try{const answer=JSON.parse(data).Answer
const A_record=answer.filter(item=>item.type==1)
$done({addresses:Array.from(A_record,x=>x.data)});}catch(e){$done({address:'0.0.0.0'});}}});