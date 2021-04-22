function loadScript(url, callback) {

	if (url instanceof Array) {
		
		 let urlWithoutCopy = url.filter((item, index) => {
   			 return url.indexOf(item) === index
			});

	urlWithoutCopy.forEach(item => {
		let element = document.createElement("script");
		element = "text/javascript";
		element.src = item;
		element.onload = callback;
		document.body.appendChild(element);
	})

		} else {
		
			let element = document.createElement("script");
			element = "text/javascript";
			element.src = url;
			element.onload = callback;
			document.body.appendChild(element);	
		}   
}