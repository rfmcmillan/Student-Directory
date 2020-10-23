/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
// give two parameters to the function: list (from data.js file) and page 
function showPage (list, page) {
   const itemsPerPage = 9;
   // create startIdx variable = (page parameter * items per page) - items per page
   let startIdx = (page * itemsPerPage) - itemsPerPage;
   // create endIdx variable = page parameter * items per page
   let endIdx = (page * itemsPerPage);
   // create new variable and assign the UL element with a class of 'student-list' to it
   let studentList = document.querySelector('.student-list');
   // set the innerHTML of the above variable to empty string to wipe out previously displayed students at page reload
   studentList.innerHTML = '';
   // for loop over the list parameter
   for (let i = 0; i < list.length; i++) {
   //    if statement: check if the i is greater or less than startIdx and EndIdx
      if (i >= startIdx && i < endIdx) {
   //       run the below insertStudent helper function
         let currStudent = list[i]; 
         insertStudent(currStudent)
      // end if
      }
   // end for
   }


   // Create the insertStudent helper function 
   function insertStudent (student) {
   // create li and give a className of "student-item cf"
      const studentLI = document.createElement('li');
      studentLI.className = 'student-item cf';
   // append the li in the ul in the html file
      studentList.appendChild(studentLI);
   // create div and give a className of "student-details"
      const studentDetails = document.createElement('div');
      studentDetails.className = 'student-details';
   // append the div in the li
      studentLI.appendChild(studentDetails);
   // create an img and give className of "avatar", give a src and alt as well
      const studentImage = document.createElement('img');
      studentImage.className = 'avatar';
      studentImage.src = student.picture.medium
      studentImage.alt = 'Picture of Student'
   // append img in the div
      studentDetails.appendChild(studentImage);
   // create h3 and change text Content to a student name
      const studentName = document.createElement('h3');
      studentName.textContent = `${student.name.title} ${student.name.first} ${student.name.last}`
   // append to the div
      studentDetails.appendChild(studentName); 
   // create a span and set text content to student's email address 
      const studentEmail = document.createElement('span');
      studentEmail.textContent = student.email;
   // append the span to the div
      studentDetails.appendChild(studentEmail);

   // create another div to contain the 'joined' info
      const joinedDate = document.createElement('div'); 
   // give div a class of "joined-details"
      joinedDate.className = 'joined-details';
   // append the div in the li
      studentLI.appendChild(joinedDate);
   // create span
      const joinedSpan = document.createElement('span');
   // give span a class of "date"
      joinedSpan.className = 'date';
   // change span's textContent to the student's join date
      joinedSpan.textContent = student.registered.date;
   // append span in div
      joinedDate.appendChild(joinedSpan);
   }
}
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
// function accepts single list parameter
function addPagination (list) {
   //create variable to store number of pagination buttons needed
   const itemsPerPage = 9;
   const numberOfButtons = Math.ceil(data.length/itemsPerPage);
   // create variable to store UL with classname 'link-list'
   const paginationList = document.querySelector('.link-list');
   // set innerHTML to empty string to clear out any previous pagination buttons
   paginationList.innerHTML = '';
   // for loop over the variable for the number of pagination buttons
   for (let i = 0; i < numberOfButtons; i++) {
   //    create li
      const buttonLI = document.createElement('li');
   //    append the li to the ul
      paginationList.appendChild(buttonLI);
   //    create button
      const paginationButton = document.createElement('button');
   //    set button type to 'button'
      paginationButton.type = 'button';
   //    set button textContent to i
      paginationButton.textContent = i+1;
   //    append button to the li
      buttonLI.appendChild(paginationButton);
   // end for
   }
   // select first button
   
   // give className of 'active'
   
   // create eventListener to listen for clicks on the link-list variable
      // if click target is a pagination button
         // remove 'active' class from any other pagination button
         // add 'active' class to click target
         // call showPage function passing 'data' as the list argument and the button's text content as the page argument
}



// Call functions
showPage(data, 1)
addPagination(data);