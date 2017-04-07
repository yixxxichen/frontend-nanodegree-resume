/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"contacts":[{"location": "Evanston, Illinois"}]
};
var education = {
	"schools" :[
	{
		"location" :"Evanston, Illinois"
	},
	{
		"location" :"Chengdu, China"
	}]
};
$("#header").append(HTMLheaderName);
$("#header").append(HTMLheaderRole);
$("#topContacts").append(HTMLmobile);
$("#topContacts").append(HTMLemail);
$("#topContacts").append(HTMLgithub);
$("#topContacts").append(HTMLlocation);
$("#header").append(HTMLbioPic);
$("#header").append(HTMLskillsStart);
$("#header").append(HTMLskills);
$("#header").append(HTMLskills2);
$("#header").append(HTMLskills3);
$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(HTMLworkEmployer+HTMLworkTitle);
$(".work-entry").append(HTMLworkDates);
$(".work-entry").append(HTMLworkLocation);
$(".work-entry").append(HTMLworkDescription);
$("#projects").append(HTMLprojectStart);
$("#project1").append(HTMLprojectTitle);
$("#project1").append(HTMLprojectDates);
$("#project1").append(HTMLprojectDescription);
$("#project1").parent().append(HTMLproject2Start)
$("#project2").append(HTMLproject2Title);
$("#project2").append(HTMLproject2Dates);
$("#project2").append(HTMLproject2Description);
$("#project2").parent().append(HTMLproject3Start)
$("#project3").append(HTMLproject3Title);
$("#project3").append(HTMLproject3Dates);
$("#project3").append(HTMLproject3Description);
$("#education").append(HTMLschool1Start);
$("#education1").append(HTMLschool1Name);
$("#education1").append(HTMLschool1Degree);
$("#education1").append(HTMLschool1Dates);
$("#education1").append(HTMLschool1Location);
$("#education1").append(HTMLschool1Major);
$("#education").append(HTMLschool2Start);
$("#education1").append(HTMLschool2Name);
$("#education1").append(HTMLschool2Degree);
$("#education1").append(HTMLschool2Dates);
$("#education1").append(HTMLschool2Location);
$("#education1").append(HTMLschool2Major);
$("#mapDiv").append(googleMap);
$("#mapDiv").append(internationalizeButton);