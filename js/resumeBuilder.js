var header = $('#header');
var headerName = $(HTMLheaderName);
var headerRole = $(HTMLheaderRole);
header.prepend(headerName);
headerName.after(HTMLheaderRole);

var topContacts = $('#topContacts');
contactTypes = [HTMLcontactGeneric, HTMLmobile, HTMLemail, HTMLtwitter, HTMLgithub, HTMLblog, HTMLlocation];
contactTypes.forEach(function(item){
	topContacts.append(item);
});
 
