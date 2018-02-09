var header = $('#header');
var headerName = $(HTMLheaderName);
var headerRole = $(HTMLheaderRole);
header.prepend(headerName);
headerName.after(HTMLheaderRole);
var HTMLContacts = [HTMLcontactGeneric, HTMLmobile, HTMLemail, HTMLtwitter, HTMLgithub, HTMLblog, HTMLlocation];
var HTMLBio = [HTMLbioPic, HTMLwelcomeMsg,HTMLskillsStart,HTMLskills];
var HTMLProjects = [HTMLprojectStart,HTMLprojectTitle,HTMLprojectDates,HTMLprojectDescription,HTMLprojectImage];
var HTMLExperience = [HTMLworkStart, HTMLworkEmployer + HTMLworkTitle, HTMLworkDates, HTMLworkLocation, HTMLworkDescription];
var HTMLEducation = [HTMLschoolStart,HTMLschoolName + HTMLschoolDegree,HTMLschoolDates,HTMLschoolLocation,HTMLschoolMajor];
var HTMLOnlineEducation = [HTMLonlineClasses,HTMLonlineTitle + HTMLonlineSchool,HTMLonlineDates,HTMLonlineURL];

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

var projects = $('#projects');
HTMLProjects.forEach(function(item){
	projects.append(item);
});

var education = $('#education');
console.log(education);
console.log(HTMLEducation);
HTMLEducation.forEach(function(item){
	console.log(item);
	education.append(item);
});

HTMLOnlineEducation.forEach(function(item){
	education.append(item);
});