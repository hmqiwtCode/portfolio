
//Work JSON 
var work = {
	"jobs":[
		{
			"employer": "VNPT",
			"title": "Internship PHP Web Developer",
			"location": "21 Hồ Văn Huê, Phường 9, Phú Nhuận, Thành phố Hồ Chí Minh",
			"dates": "8/2020 - 9/2020",
			"description": "Building PHP small application with Zend Framework, approach to a project the company is working on with the Zend Framework."
		},
		{
			"employer": "College",
			"title": "Web-App Developer",
			"location": "Nguyen Van Bao, Go Vap",
			"dates": "10/2020 - Present",
			"description": "Building chat application similar to Zalo using Nodejs, Express, Socket.io.How to organize microservices, deploy, scale on AWS.Learn how to build a REST API with Nodejs, Express and Authen0.Building android apps get data from API and perform realtime chat with other users."
		}
	]
	
};
// Display work json info
work.display = function(){
	
	for (var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[job]["title"]))
								.append(HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]))
								.append(HTMLworkLocation.replace("%data%", work.jobs[job]["location"]))
								.append(HTMLworkDates.replace("%data%", work.jobs[job]["dates"]))
								.append(HTMLworkDescription.replace("%data%", work.jobs[job]["description"]));
	}
		
}
// Projects JSON
var projects = {
	"projects": [
		{
			"title": "BUVAPE Chat Application",
			"date worked": "October,2020 - Present",
			"description": "A real-time chat. This app is built with Socket.io, Node.js, Express and DynamoDb.",
			"github": "https://github.com/hmqiwtCode/Chat-Buvape",
			"demo": "http://chatbuvape.herokuapp.com/",
			"progress": 100
		}
	]

};
// Display project json info
projects.display = function(){
	var d3Div = new Array(projects.projects.length);
	var progressDiv = new Array(projects.projects.length);

	for (var project in projects.projects){

			$("#projects").append(HTMLprojectStart);

			$(".project-entry:last").append('<div id="div' + project + '"></div>')
										.append(HTMLprojectTitle.replace("%data%", projects.projects[project]["title"]))
										.append(HTMLprojectDates.replace("%data%", projects.projects[project]["date worked"]))
										.append(HTMLprojectDescription.replace("%data%", projects.projects[project]["description"]));
			// display demo or github json info if they exisit
			if (projects.projects[project]["demo"] != undefined )
				$(".project-entry:last").append(HTMLprojectDemo.replace("#", projects.projects[project]["demo"]));
			if (projects.projects[project]["github"] != undefined )
				$(".project-entry:last").append(HTMLprojectGithub.replace("#", projects.projects[project]["github"]));
			
			// call d3 progress chart function
			projects.progressChart(d3Div, progressDiv, project, 'div' + project, projects.projects[project]["progress"]);

	}

}
// project d3 progress chart function
projects.progressChart = function(d3Div, progressDiv, project, container, value) {

	d3Div[project] = d3.select(document.getElementById(container));

	progressDiv[project] = radialProgress(document.getElementById(container))
        .diameter(150)
        .value(value)
        .render();
};

//Bio JSON
var bio = {
	"first name": "HMQ",
	"last name": "",
	"role": "Android Developer",
	"welcome message": "I'm passionate about android application and web development. Feel free to check out my Github repositories and demo projects.",
	"bio pic": "",
	"contacts": 
		{
			"email": "huynhminhquy1999@gmail.com",
			"github username": "hmqiwtCode",
			"phone handle" : "(+84)838405444",
			"location": "120a Duong so 5, Phuong 17, Go Vap, HCM"
		},
	"skills": ["HTML", "CSS", "Javascript", "JQuery", "Java", "PHP", "MySQL, MongoDB"]

};
bio.display = function(){
	var formattedFName = HTMLheaderFName.replace("%data%", bio["first name"].toUpperCase());
	var formattedLName = HTMLheaderLName.replace("%data%", bio["last name"].toUpperCase());
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role.toUpperCase());
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github username"]);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["phone handle"]);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio["bio pic"]);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio["welcome message"]);

	
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedLName);
	$("#header").prepend(formattedFName);	
	$("#header").append(formattedWelcomeMsg);
	$("#topContacts ul").append(formattedEmail);
	$("#topContacts ul").append(formattedGithub);
	$("#topContacts ul").append(formattedTwitter);	
	$("#topContacts ul").append(formattedLocation);

}
//Education JSON
var education = {
	"schools": [
		{
			"name": "Industrial University Of Ho Chi Minh City",
			"location": "Nguyen Van Bao, Go Vap",
			"degree": "University degree",
			"majors": ["Software Engineering"],
			"dates": "July 2017 - Present",
			"url": "http://iuh.edu.vn/"
		}
	],
	"onlineCourses": [
		{
			"title": "Android",
			"school": "Udemy",
			"dates": 2020,
			"url": "https://www.udemy.com/"
		}
	],
};
// Display education json info
education.display = function(){
	for (var school in education.schools){	
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school]["dates"]))
									.append(HTMLschoolName.replace("%data%", education.schools[school]["name"]).replace("#", education.schools[school]["url"]))
									.append(HTMLschoolLocation.replace("%data%", education.schools[school]["location"]));
																											
		for(var major in education.schools[school].majors){
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school]["majors"][major]));
		}
	}
	$("#education").append(HTMLonlineClasses);
	// Display online courses
	for (var onlineCourse in education.onlineCourses){	
		var num = education.schools.length + parseInt(onlineCourse);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse]["dates"]))
									.append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse]["school"]))
									.append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse]["title"]))
									.append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse]["url"]));
	}
}
//Map
$("#mapDiv").append(googleMap);

// chartjs library from: http://www.chartjs.org/docs/#polar-area-chart
var polarData = [
  {
    value: 10,
    color:"#F7464A",
    highlight: "#FF5A5E",
    label: "HTML",
    labelcolor: "red"
  },
  {
    value: 5,
    color:"#F06613",
    highlight: "#FF5A5E",
    label: "CSS",
    labelcolor: "orange"
  },
  {
    value: 8,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Javascript",
    labelcolor: "green"
  },
  {
    value: 6,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "MEN stack",
    labelcolor: "yellow"
  },
  {
    value: 5,
    color: "#23582b",
    highlight: "#A8B3C5",
    label: "Git",
    labelcolor: "darker-green"
  },
  {
    value: 7,
    color: "#4D5360",
    highlight: "#616774",
    label: "Java",
    labelcolor: "darker-gray"
  }

  ];
// Display a list of skill labels
var skillsChartLabels = function(){
	for (skill in polarData){
	  var skillLabel = polarData[skill].label;
	  var skillLabelColor = polarData[skill].labelcolor;
	  var skillHTML = '<span class="label ' + skillLabelColor + '">' + skillLabel + '</span>';
	  $("#skills-list").append(skillHTML);
	}
}

// Call functions
window.onload = function(){
	var ctx = document.getElementById("skills-chart").getContext("2d");
	window.myPolarArea = new Chart(ctx).PolarArea(polarData, {
  		responsive:false
	});
	// Call skillsChartLabels function defined
	skillsChartLabels();
};
// Call bio, work, projects and education functions
bio.display();
work.display();
projects.display();
education.display();






