// add pageTitle
const pageTitle = 'My Shopping List'
// add groceries
const groceries = ['book', 'shirt', 'skirt', 'dress', 'fruit', 'chips', 'candy', 'juice', 'flower', 'veggies']
/**
 * This function will get a reference to the title and set its text to the value
 * of the pageTitle variable that was set above.
 */
  function setPageTitle(){
    const getTitle= document.querySelector('#title');
  }

/**
 * This function will loop over the array of groceries that was set above and add them to the DOM.
 */
function displayGroceries() {
  let ul= document.getElementById("groceries");
  groceries.forEach((grocery )=>{
    let li= document.createElement("li");
    li.innerText=grocery;
    ul.appendChild(li);
  })
}
/**
 * This function will be called when the button is clicked. You will need to get a reference
 * to every list item and add the class completed to each one
 */
function markCompleted() {
  let ul= document.getElementById("groceries");
  let childrenLi= ul.children;
  for(let i=0;i<childrenLi.length;i++){
    childrenLi[i].className="completed";
  }
}
setPageTitle();
displayGroceries();
// Don't worry too much about what is going on here, we will cover this when we discuss events.
document.addEventListener('DOMContentLoaded', () => {
  // When the DOM Content has loaded attach a click listener to the button
  const button = document.querySelector('.btn');
  button.addEventListener('click', markCompleted);
});

