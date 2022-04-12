var getdataBtn = document.getElementById("getBtn");
var del = document.getElementById("ClearData");
var field = document.getElementById("content");

del.addEventListener("click", deleteData);
getdataBtn.addEventListener("click", getData);

//function to get the data from the api
function getData() {
  field.classList.remove("remove");

  url = "https://api.github.com/users";

  //using fetch api
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i <= data.length; i++) {
        console.log(data[i]);
        var name = document.createElement("div");
        field.appendChild(name);
        name.innerHTML = `<div class="user"><h2> name : </h2> <p>${JSON.stringify(
          data[i].login
        )}</p></div>
        <div class=user>
       <h2> id :</h2> <p> ${JSON.stringify(data[i].id)} </p></div>
     `;
      }
    });
}

//deleting the data function
function deleteData() {
  console.log("dlete is running");
  field.classList.add("remove");
}
