let form = document.querySelector(".form")
let input = document.querySelector("#text")
let submit = document.querySelector("#submit-btn");
let content = document.querySelector("#content")
let alert = document.querySelector(".alert");
let clearBtn = document.querySelector("#clear");
let editFlag = false;
let editID = "";
let editElement;
form.addEventListener("submit", function(e){
    e.preventDefault();
    let value = input.value;
    let id = new Date().getTime().toString();
    if(value && !editFlag)
    {
        let li = document.createElement("li");
        li.innerHTML = `${value} <div style="display:inline-block"><button class="edit">Edit</button>
        <button class="delete">Delete</button></div> `;
        let deleteBtn = li.querySelector(".delete");
        let editBtn = li.querySelector(".edit");
        deleteBtn.addEventListener("click", deleteFunction)
        editBtn.addEventListener("click", editFunction)
        li.setAttribute("dataid", id);
        console.log(id);
        content.append(li);
        displayAlert("Item added Succesfully");
        setToDefault();
    }
    else if(value && editFlag)
    {
        editElement.textContent = text.value;
        setToDefault();
    }
    else
    {
        displayAlert("Please enter Input")
    }

})

clearBtn.addEventListener("click", function(){
    content.innerHTML = "";
    setToDefault();
})
function displayAlert(text)
{
    alert.innerText = text;

    setTimeout(function(){
        alert.innerText = "";
    }, 1000)
}
function setToDefault()
{
    text.value = "";
    editFlag = false;
    editID = ""
    submit.textContent = "submit"
}
function deleteFunction(e)
{
    e.currentTarget.parentElement.parentElement.remove();
    setToDefault();
    console.log()
}
function editFunction(e) {
    text.value = e.currentTarget.parentElement.parentElement.firstChild.textContent;
    editFlag = true;
    editElement = e.currentTarget.parentElement.parentElement.firstChild;
    editID = e.currentTarget.parentElement.parentElement.getAttribute('dataid');
    submit.textContent = "Edit"
    console.log(e.currentTarget.parentElement.parentElement.getAttribute('dataid'));
  }
  
