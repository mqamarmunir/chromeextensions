window.addEventListener('DOMContentLoaded', function () {
	chrome.runtime.sendMessage({type:"get-List"},displayList);
});
// window.onload=function(){

		// chrome.runtime.sendMessage({type:"get-List"},displayList);
		
	
// }
function displayList(data){
	//alert(data);
	$('#requests').append('<tr>');
	$.each(data, function (key, item) {
			// add a list item for the product.
			
			$('#requests').append('<tr><td>'+formatItem(item)+'</td></tr>');
			//$('<li>', { text: formatItem(item) }).appendTo($('#requests'));
        });
		$('#requests').append('</tr>');
};
 function formatItem(item) {
	 //alert(JSON.stringify(item));
	 //var xyz='Journey Request('+ item.BookingNumber + ') of '+item.PatientName;
	// alert(item.LastStatusdBy);
	 return 'Journey Request<strong>('+ item.BookingNumber + ')</strong> of <strong>' + item.PatientName+' ' + (item.LastStatusId==2?' Accepted':'Rejected') +'</strong> by <strong>' +item.LastStatusdBy+'</strong>'; 	 
            //return item.PatientName + ' request Approved by: ' + item.ApprovedBy +' At: '+item.ApprovedAt ;
        }