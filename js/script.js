function del(id) {
    //console.log(id);
    $.ajax({
        "async": true,  
        "crossDomain": true,  
        "url":"http://developer.digitalcube.rs:8999/api/contacts/id_contact/"+id,
        "method": "DELETE",  
        "headers": {    
            "authorization": " s00000UrSu6W42O76OopkSVPQCmq5LBctYZIFc3szdVxhe2fbIpeSPuNVd9g6oJT",  
        },
        success: function(data){
			console.log(data);
            if(data!=""){
                $('#content').append("you have deleted contact").css({"margin-bottom": "10px", "border-bottom": "1px solid blue"});
            }else{
               $('#content').append("can't delete the row").css({"margin-bottom": "20px", "padding-bottom": "10px", "border-bottom": "1px solid blue"})
            }
        }
    });
}

function getContact(id) {
	//console.log(id);
    $.ajax({
        "async": true,  
        "crossDomain": true,  
        "url": "http://developer.digitalcube.rs:8999/api/contacts/id_contact/"+id,  
        "method": "GET",  
        "headers": {    
            "authorization": " s00000UrSu6W42O76OopkSVPQCmq5LBctYZIFc3szdVxhe2fbIpeSPuNVd9g6oJT",  
        },
        success: function(response){
        	console.log(response);

var tst = JSON.parse(response);

response = tst.contact;
console.dir(response);

 var trHTML = '';


 $('<div>').html(
        '<td>' + response.id + '</br>' + 
		response.first_name + '</br>' + 
		response.last_name + '</br>' + 
		response.emails + '</br>' + 
		response.phones + '</br>' + 
		response.country + '</br>' + 
		response.city + '</br>' + 
		response.zip + '</br').appendTo('#joca');
             
          

        $('#content').append(response);
        }
    });
}

function edit(id) {

}
