var header = $('#header');
var headerName = $(HTMLheaderName);
var headerRole = $(HTMLheaderRole);
header.prepend(headerName);
headerName.after(HTMLheaderRole);
var HTMLContacts = [HTMLcontactGeneric, HTMLmobile, HTMLemail, HTMLtwitter, HTMLgithub, HTMLblog, HTMLlocation];
var HTMLProjects = [HTMLprojectStart,HTMLprojectTitle,HTMLprojectDates,HTMLprojectDescription,HTMLprojectImage];
var HTMLExperience = [HTMLworkStart, HTMLworkEmployer, HTMLworkTitle, HTMLworkDates, HTMLworkLocation, HTMLworkDescription];
var HTMLBio = [HTMLbioPic, HTMLwelcomeMsg,HTMLskillsStart,HTMLskills];
var topContacts = $('#topContacts');
HTMLContacts.forEach(function(item){
	topContacts.append(item);
});
HTMLBio.forEach(function(item){
	header.append(item);
});

var workExperience = $('#workExperience');
HTMLExperience.forEach(function(item){
	workExperience.append(item)
});

