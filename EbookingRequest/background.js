window.setInterval(function(){getRequestsCount();},10000);
chrome.extension.onMessage.addListener(function(request,send,senderResponse){
	switch(request.type)
	{
		case "get-List":
		
	
			 var uri='http://localhost/mywebapi/api/ApprovedRequests/Requests';
			 $.getJSON(uri).done(function(data){
				// //alert(JSON.stringify(data));
				 senderResponse(data);
			 });
			 return true;
			//getRequestsCount();
		break;
		
	}
});
//chrome.runtime.onStartup.addListener(function(){
	
//});

var getRequestsCount=function(){
	var uri = 'http://localhost/mywebapi/api/ApprovedRequests/Requests';
	
            // Send an AJAX request
        $.getJSON(uri)
            .done(function (data) {
               chrome.browserAction.setBadgeText({text:data.length.toString()});
                // On success, 'data' contains a list of products.
                //$.each(data, function (key, item) {
                //    // Add a list item for the product.
                //    $('<li>', { text: formatItem(item) }).appendTo($('#products'));
               // });
            });
        
}