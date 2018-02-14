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
		getName: function(){return this.name;},
		getRole: function(){return this.role;},
		getContacts: function(){return this.contacts;},
		getWelcomeMessage: function(){return this.welcomeMessage;},
		getSkills: function(){return this.skills;},
		getBiopic: function(){return this.biopic;},
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
		getSchools: function(){return this.schools;},
		getOnlineCourses: function(){this.onlineCourses;}
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
		getJobs: function(){return this.jobs;}
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
				description: 'This is a super-duper cool project',
				images: ['url 1', 'url 2',]
			},
		],
		getProjects: function(){return this.projects;}
	}

};

var control = {
	getName: function(){return model.bio.name;},
	getRole: function(){return model.bio.role;},
	getContacts: function(){return model.bio.contacts;},
	getWelcomeMessage: function(){return model.bio.welcomeMessage;},
	getSkills: function(){return model.bio.skills;},
	getBiopic: function(){return model.bio.biopic;},
};
//build header
var FormattedheaderName = HTMLheaderName.replace('%data%',model.bio.name);
var FormattedheaderRole = HTMLheaderRole.replace('%data%',model.bio.role);
var header = $('#header');
var headerName = $(FormattedheaderName);
var headerRole = $(FormattedheaderRole);
header.prepend(headerName);
headerName.after(FormattedheaderRole);

// build contacts
var Formattedmobile = HTMLmobile.replace('%data%',model.bio.contacts.mobile);
var Formattedemail = HTMLemail.replace('%data%',model.bio.contacts.email);
var Formattedgithub = HTMLgithub.replace('%data%',model.bio.contacts.github);
var Formattedlocation = HTMLlocation.replace('%data%',model.bio.contacts.location);
var FormattedContacts = [Formattedmobile, Formattedemail, Formattedgithub, Formattedlocation];
FormattedContacts.forEach(appendFormattedItems($('#topContacts')));

//build bio
var FormattedbioPic =  HTMLbioPic.replace('%data%',model.bio.biopic);
var FormattedwelcomeMsg = HTMLwelcomeMsg.replace('%data%',model.bio.welcomeMessage);
var FormattedBio = [FormattedbioPic, FormattedwelcomeMsg,FormattedskillsStart];
FormattedBio.forEach(appendFormattedItems(header));

//build skills
var FormattedskillsStart = HTMLskillsStart.replace('%data%','%data%');
var Formattedskills = model.bio.skills.map(function(item){ return HTMLskills.replace('%data%',item);});
Formattedskills.forEach(appendFormattedItems($('#skills')));


//build jobs
var Formattedjobs = [];
model.work.jobs.forEach(function(obj){
	var workStart = $(HTMLworkStart);
	workStart.append(HTMLworkEmployer.replace('%data%',obj.employer)+ HTMLworkTitle.replace('%data%', obj.title));
	workStart.append(HTMLworkDates.replace('%data%',obj.dates));
	workStart.append(HTMLworkLocation.replace('%data%',obj.location));
	workStart.append(HTMLworkDescription.replace('%data%',obj.description));
	Formattedjobs.push(workStart);
	});
Formattedjobs.forEach(appendFormattedItems($('#workExperience')));

//build projects
var Formattedprojects = [];
model.projects.projects.forEach(function(obj){
	var projectStart = $(HTMLprojectStart);
	projectStart.append(HTMLprojectTitle.replace('%data%',obj.title));
	projectStart.append(HTMLprojectDates.replace('%data%',obj.dates));
	projectStart.append(HTMLprojectDescription.replace('%data%',obj.description));
	obj.images.forEach(function(img){
		projectStart.append(HTMLprojectImage.replace('%data%',img));
	});
	Formattedprojects.push(projectStart);
});
Formattedprojects.forEach(appendFormattedItems($('#projects')));

// build schools
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
Formattedschools.forEach(appendFormattedItems($('#education')));

//build online schools
var Formattedonlineschools = [];
model.education.onlineCourses.forEach(function(obj){
	var onlineStart = $(HTMLonlineClasses);
	onlineStart.append(HTMLonlineTitle.replace('%data%',obj.title) + HTMLonlineSchool.replace('%data%',obj.school));
	onlineStart.append(HTMLonlineDates.replace('%data%',obj.dates));
	onlineStart.append(HTMLonlineURL.replace('%data%',obj.url));

	Formattedonlineschools.push(onlineStart);
});
Formattedonlineschools.forEach(appendFormattedItems($('#education')));




var FormattedMap = [internationalizeButton,googleMap];

function appendFormattedItems(elem){ 				// takes an Formatted element and returns a function									
	return function(item){elem.append(item);};  // return function takes an item and appends it to the element
}

FormattedMap.forEach(appendFormattedItems($('#mapDiv')));