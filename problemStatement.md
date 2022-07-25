Q1-PT-WEB-04-BACKEND-EVALUATION
Create a Notes taking app using MERN stack.

It should be a multi user app where multiple users can have their own notes.

^ So have signup/login as well.

You can refer keep.google.com for inspiration. (But need not have all features as it's there, implement the features which are mentioned in this question first)

CREATE - Each note created by a user, should have - Title, Note and a Label For example,

Title - Masai

Note - So in this evaluation we need to build a MERN stack app......

Label - Evaluation

Store the data in Mongo Database (use Atlas)

READ - Each user only when logged in, should be able to see only his notes and not anyone else's notes.

UPDATE - A user should be able to update - Title OR/AND Note OR/AND Label of any of his notes.

DELETE - A user should be able to delete any of his notes.

Frontend

Create a React app, where a user can signup/login using the API created above.
Once logged in, redirect the user to "Notes" page.
In the "Notes" page, a user should be able to see all his notes.
A user should be able to create a new note, update and delete a note.
Optional : Have a filter in UI, to filter notes by label.
Deploy Backend on heroku (Optional, refer video - https://youtu.be/27GoRa4d15c), Frontend on Netlify.

Important : Record a video demonstrating whatever you have completed in a short video. Your evaluation will not be graded if you don't do this.

In Output.txt file, add the Video link(Mandatory) and Deployment links(Optional).

Bonus - a)Implementing Google Oauth b) Allowing images too as part of the notes (using Multer and Cloudinary etc - google them)