var header = $('#header');
var headerName = $(HTMLheaderName);
var headerRole = $(HTMLheaderRole);
header.prepend(headerName);
headerName.after(HTMLheaderRole);

var topContacts = $('#topContacts');
[HTMLcontactGeneric, HTMLmobile, HTMLemail, HTMLtwitter, HTMLgithub, HTMLblog, HTMLlocation].forEach(function(item){
	topContacts.append(item);
});
[HTMLbioPic, HTMLwelcomeMsg,HTMLskillsStart,HTMLskills].forEach(function(item){
	header.append(item);
});

var workExperience = $('#workExperience');
[HTMLworkStart, HTMLworkEmployer, HTMLworkTitle, HTMLworkDates, HTMLworkLocation, HTMLworkDescription].forEach(function(item){
	workExperience.append(item)
});