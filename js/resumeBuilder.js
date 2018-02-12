var bio = { 
	name : 'Joseph Chandler',
	role : 'Technical Support Representative',
	contacts : {
		mobile: '484-620-5051',
		email: 'josephalanchandlerjr@gmail.com', 
		github: 'https://github.com/josephchandlerjr',
		location: 'Aston, PA' 
	},
	welcomeMessage: 'Hello, fellow humans!', 
	skills: ['coding','troubleshooting','other such stuff'],
	biopic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-u46WdmwHcqdSqJ1Z030m68SVGHE-toGZfpxkSZvqBUXYsKb',
	display: function(){console.log('bio display'); }
};

var education = {
	schools: [ 
		{ 	name: 'University of Pennsylvania',
			location: 'Philadelphia, PA',
			degree: 'BA',
			majors: ['Psychology'],
			dates: 'Augus 1997- May 2001',
			url: 'https://www.upenn.edu/'
		},
		{	name: 'Towson University',
			location: 'Towson, MD',
			degree: 'BA',
			majors: ['German','Spanish'],
			dates: 'August 2006 – May 2007',
			url: 'https://www.towson.edu/'
		}
	],
    onlineCourses: [ 
		{	title: 'CS101',
			school: 'Udacity',
			dates: 'something - something',
			url: 'http://udacity.com'
		},
		{	title: 'CS5555',
			school: 'Udacity',
			dates: 'something - something',
			url: 'http://udacity.com'
		}
	],
	display: function (){console.log('education display');}
};

var work = {
	jobs :[ 
		{
			employer: 'Clarivate Analytics', 
			title: 'Technical Support Representative',
			location: 'Philadelphia, PA',
			dates: 'May 2016 - Present',
			description: 'Provide direct technical support for EndNote, a research and reference manager used most prominently by researchers, medical professionals and academics.'	 
		},
		{
			employer: 'Lincoln Educational Services ', 
			title:  'Financial Literacy Advisor Oversight Manager',
			location: 'King of Prussia, PA', 
			dates: 'July 2014 – June 2015',
			description: 'Led, assessed and trained 33 Financial Literacy Advisors based throughout the U.S.' 
		}
	],
  display: function(){console.log('work display');}
};

var projects = { 
	projects : [
		{	
			title: 'project 1' ,
			dates: 'sometime - sometime',
			description: 'This is a super cool project',
			images: ['url 1', 'url 2',]
		},
		{	
			title: 'project 2' ,
			dates: 'sometime - sometime',
			description: 'This is a super-dupercool project',
			images: ['url 1', 'url 2',]
		},
	],
    display: function(){console.log('projects display');}
};



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