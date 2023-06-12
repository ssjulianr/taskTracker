I tried so many different things to get this API to work and after so much effort, it still does not work but I tried my best 

I can create POST requests to the server from Postman and they actually load in the tasks.json file in VsCode, but where I'm having an issue is connecting the requests to the front end to respond to onclick functions from the front end 

I have two javascript files, script.js and server.js. Script.js is my client-side js file which contains all of my onclick functions and local storage routes. My plan was to build an API based off of this file, to be used in conjunction with my server.js file, which contains all of the routing to and from the localhost server. 

I assumed this could be easily accomplished by wrapping the POST request in a function and evoking that function during the onclick event but that broke my code 

I thought maybe I could enter the html content as res.write on the HTML, but I couldn't get the POST request to work that way 

There were plenty of examples on youtube and udemy showing how to build this project that I could've easily followed along with, but each and every one used a bit of technology that was unfamiliar to me and I didn't feel comfortable utilizing (MongoDB, React.js, Next.js, Angular.js, etc.)

Plus, with our EPs needing back-end engineers, I figured it would benefit me to know and understand how to build this app without utilizing those resources. So back to the drawing board. 

I decided that as long as the task tracker was actually functional I should be alright, but it didn't stop me from striving to figure it out. Unfortunately, I was not able to utilize node for my CRUD operations (on the front end). However, I WAS able to at least read my html, js, and css into the localhost server. Over the next few days, I plan to break my code down again and figure out how to utilize the CRUD operations in NODE 