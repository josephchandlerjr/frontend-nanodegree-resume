var model = {
	bio : { 
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
	},

	education : {
		schools: [ 
			{ 	name: 'University of Pennsylvania',
				location: 'Philadelphia, PA',
				degree: 'BA',
				majors: ['Psychology',],
				dates: 'August 1997- May 2001',
				url: 'https://www.upenn.edu/'
			},
			{	name: 'Towson University',
				location: 'Towson, MD',
				degree: 'BA',
				majors: ['German',],
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
	},

	work : {
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
	},

	projects : { 
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
	}

};

var FormattedheaderName = HTMLheaderName.replace('%data%',model.bio.name);
var FormattedheaderRole = HTMLheaderRole.replace('%data%',model.bio.role);
var Formattedmobile = HTMLmobile.replace('%data%',model.bio.contacts.mobile);
var Formattedemail = HTMLemail.replace('%data%',model.bio.contacts.email);
var Formattedgithub = HTMLgithub.replace('%data%',model.bio.contacts.github);
var Formattedlocation = HTMLlocation.replace('%data%',model.bio.contacts.location);

var FormattedbioPic =  HTMLbioPic.replace('%data%',model.bio.biopic);
var FormattedwelcomeMsg = HTMLwelcomeMsg.replace('%data%',model.bio.welcomeMessage);

var FormattedskillsStart = HTMLskillsStart.replace('%data%','%data%');
var Formattedskills = model.bio.skills.map(function(item){ return HTMLskills.replace('%data%',item);});

var FormattedworkStart = HTMLworkStart;
var Formattedjobs = [];
model.work.jobs.forEach(function(obj){
	var workStart = $(HTMLworkStart);
	workStart.append(HTMLworkEmployer.replace('%data%',obj.employer)+ HTMLworkTitle.replace('%data%', obj.title));
	workStart.append(HTMLworkDates.replace('%data%',obj.dates));
	workStart.append(HTMLworkLocation.replace('%data%',obj.location));
	workStart.append(HTMLworkDescription.replace('%data%',obj.description));
	Formattedjobs.push(workStart);
	});


var Formattedprojects = [];
model.projects.projects.forEach(function(obj){
	var projectStart = $(HTMLprojectStart);
	projectStart.append(HTMLprojectTitle.replace('%data%','%data%'));
	projectStart.append(HTMLprojectDates.replace('%data%','%data%'));
	projectStart.append(HTMLprojectDescription.replace('%data%','%data%'));
	projectStart.append(HTMLprojectImage.replace('%data%','%data%'));
	Formattedprojects.push(projectStart);
});

var Formattedschools = [];
model.education.schools.forEach(function(obj){
	var schoolStart = $(HTMLschoolStart); 
	schoolStart.append(HTMLschoolName.replace('%data%',obj.name) + HTMLschoolDegree.replace('%data%',obj.degree));
	schoolStart.append(HTMLschoolLocation.replace('%data%',obj.location));
	obj.majors.forEach(function(major){ 
		schoolStart.append(HTMLschoolMajor.replace('%data%',major));
	});

	Formattedschools.push(schoolStart);
});

var Formattedonlineschools = [];

model.education.onlineCourses.forEach(function(obj){
	var onlineStart = $(HTMLonlineClasses);
	onlineStart.append(HTMLonlineTitle.replace('%data%',obj.title) + HTMLonlineSchool.replace('%data%',obj.school));
	onlineStart.append(HTMLonlineDates.replace('%data%',obj.dates));
	onlineStart.append(HTMLonlineURL.replace('%data%',obj.url));

	Formattedonlineschools.push(onlineStart);
});

var FormattedonlineClasses = HTMLonlineClasses.replace('%data%','%data%');
var FormattedonlineTitle = HTMLonlineTitle.replace('%data%','%data%');
var FormattedonlineSchool = HTMLonlineSchool.replace('%data%','%data%');
var FormattedonlineDates = HTMLonlineDates.replace('%data%','%data%');
var FormattedonlineURL = HTMLonlineURL.replace('%data%','%data%');

//build header
var header = $('#header');
var headerName = $(FormattedheaderName);
var headerRole = $(FormattedheaderRole);
header.prepend(headerName);
headerName.after(FormattedheaderRole);

//build other sections
var FormattedContacts = [Formattedmobile, Formattedemail, Formattedgithub, Formattedlocation];
var FormattedBio = [FormattedbioPic, FormattedwelcomeMsg,FormattedskillsStart];

//var FormattedEducation = [FormattedschoolStart,FormattedschoolName + FormattedschoolDegree,FormattedschoolDates,FormattedschoolLocation,FormattedschoolMajor];
var FormattedOnlineEducation = [FormattedonlineClasses,FormattedonlineTitle + FormattedonlineSchool,FormattedonlineDates,FormattedonlineURL];
var FormattedMap = [internationalizeButton,googleMap];

appendFormattedItems = function(elem){ 				// takes an Formatted element and returns a function									
	return function(item){elem.append(item);};  // return function takes an item and appends it to the element
}

FormattedContacts.forEach(appendFormattedItems($('#topContacts')));
FormattedBio.forEach(appendFormattedItems(header));
Formattedskills.forEach(appendFormattedItems($('#skills')));
Formattedjobs.forEach(appendFormattedItems($('#workExperience')));
Formattedprojects.forEach(appendFormattedItems($('#projects')));
//FormattedEducation.forEach(appendFormattedItems($('#education')));
Formattedschools.forEach(appendFormattedItems($('#education')));
Formattedonlineschools.forEach(appendFormattedItems($('#education')));
FormattedMap.forEach(appendFormattedItems($('#mapDiv')));