//build header
var header = $('#header');
var headerName = $(HTMLheaderName);
var headerRole = $(HTMLheaderRole);
header.prepend(headerName);
headerName.after(HTMLheaderRole);

//build other sections
var HTMLContacts = [HTMLcontactGeneric, HTMLmobile, HTMLemail, HTMLtwitter, HTMLgithub, HTMLblog, HTMLlocation];
var HTMLBio = [HTMLbioPic, HTMLwelcomeMsg,HTMLskillsStart,HTMLskills];
var HTMLProjects = [HTMLprojectStart,HTMLprojectTitle,HTMLprojectDates,HTMLprojectDescription,HTMLprojectImage];
var HTMLExperience = [HTMLworkStart, HTMLworkEmployer + HTMLworkTitle, HTMLworkDates, HTMLworkLocation, HTMLworkDescription];
var HTMLEducation = [HTMLschoolStart,HTMLschoolName + HTMLschoolDegree,HTMLschoolDates,HTMLschoolLocation,HTMLschoolMajor];
var HTMLOnlineEducation = [HTMLonlineClasses,HTMLonlineTitle + HTMLonlineSchool,HTMLonlineDates,HTMLonlineURL];
var HTMLMap = [internationalizeButton,googleMap];

appendHTMLItems = function(elem){ 				// takes an html element and returns a function									
	return function(item){elem.append(item);};  // return function takes an item and appends it to the element
}

HTMLContacts.forEach(appendHTMLItems($('#topContacts')));
HTMLBio.forEach(appendHTMLItems(header));
HTMLExperience.forEach(appendHTMLItems($('#workExperience')));
HTMLProjects.forEach(appendHTMLItems($('#projects')));
HTMLEducation.forEach(appendHTMLItems($('#education')));
HTMLOnlineEducation.forEach(appendHTMLItems($('#education')));
HTMLMap.forEach(appendHTMLItems($('#mapDiv')));