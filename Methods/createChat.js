const fetch = require('node-fetch');
require('colors');

module.exports = async function(arg){
	if(!arg || !Array.isArray(arg) || !arg.length) throw Error ("clear-chat: createChat() function first argument must be an array of cleared messages contains atleast 1 message".brightYellow);
	let data = await fetch("https://logs.chat/api/clear", {
		method: "POST",
		body: JSON.stringify({"messages": arg}),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(res => res.json());
	if(data.error){
		throw Error (data.message);
	}else{
		return data;
	}
}