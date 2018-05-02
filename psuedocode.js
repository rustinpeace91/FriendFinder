//https://upenn.bootcampcontent.com/upenn-bootcamp/UPENN201801FSF4-Class-Repository-FSF/blob/master/01-Class-Content/13-express/02-Homework/Instructions/homework_instructions.md

//basic structure of app 
	//displays two webpages. a homepage and a survey
		//homepage is just a jumbotron with a button to go to the survey
		//survey asks 10 questions, the user rates each one 1-5 (strongly agree strongly disagree)
		//on submit, the page displays the best matching, based on the answers to the questions

//FRONTEND
//Front Page
	//bootstrap 4 tempalte with jumbotron
	//button with font awesome icon 
	//link to github and API? (raw data)

//survey 
	//10 survey questions to answer and a submit button for the questions 
		//bootstrap 4 forms and submit button
		//https://getbootstrap.com/docs/4.0/components/forms/
	//displays most matched user
		//https://getbootstrap.com/docs/4.0/components/modal/

//BACKEND

//server.js
	//require all packages
	//basic connection and listen to server 
	//export to other files

//html.js
	//GET route to home (/) that will display the homepage
	//GET route to /survey which will display the page


//MIDDLEWARE

//apiRoutes.js
	//GET route with /api/friends as a JSON array
	//POST routes /api/friends. Handle incoming survey results and (compatibility logic)?

//friends.js 
	//array of friend objects 
		//holds "name", "photo",  and "scores"(array) key value pairs. 


