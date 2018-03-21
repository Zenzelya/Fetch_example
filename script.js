"use strict"
/*
API // CRUD
http://fecore.net.ua/rest/?action=4 
http://fecore.net.ua/rest/?action=3&id=1 - удаление
http://fecore.net.ua/rest/?action=2&id=1&name=Hey1&score=13 -изменение
http://fecore.net.ua/rest/?action=1&name=Mark&score=100  - добавление
http://fecore.net.ua/rest/

*/

const add_name = document.querySelector("#addname"),
      add_score = document.querySelector("#addscore"),

      remove_user_id = document.querySelector("#removeUserid"),
      remove_user = document.querySelector('#removeUser'),

      id_updateUser = document.querySelector("#id-changeUser"),
      name_updateUser = document.querySelector("#name-changeUser"),
      score_updateUser = document.querySelector("#score-changeUser"),
      btn_updateuser = document.querySelector('#changeUser'),

      result = document.querySelector(".result"),
      getusers = document.querySelector("#getusers"),
      add_User = document.querySelector("#addUser");



getusers.addEventListener("click", getUsers);
add_User.addEventListener("click", addUser);
remove_user.addEventListener("click", removeUser);
btn_updateuser.addEventListener("click", updateUser);


function getUsers(event) {
  event.preventDefault();
  
  fetch(`http://fecore.net.ua/rest/`)
        .then(response => {
          if (response.ok) return response.json();
          throw new Error("Error fetching data");
      })
        .then(data => {
          let tamplate = `
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Score</th>
                          </tr>
                        </thead>
                        <tbody>
                        ${data.map((item, i) => `
                        <tr>
                          <th scope="row">${i+1}</th>
                          <td>${item.id}</td>
                          <td>${item.name}</td>
                          <td>${item.score}</td>
                        </tr>`
                        ).reverse().join('')}
                         </tbody>
                    </table>
                    `;
          result.innerHTML = tamplate; 
          
     }) 
        .catch(error => {
          console.error("Error: ", error);
    });
       
}

function addUser(event){
  event.preventDefault();
  const url =`http://fecore.net.ua/rest/?action=1&name=${add_name.value}&score=${add_score.value}`;

  fetch(url)
        .then(response => {
          if (response.ok) return response.json();
          throw new Error("Error fetching data");
      })
        .catch(error => {
          console.error("Error: ", error);
    });

}

function removeUser(event){
  event.preventDefault();
  const url = `http://fecore.net.ua/rest/?action=3&id=${remove_user_id.value}`;

  fetch(url)
        .then(response => {
          if (response.ok) return response.json();
          throw new Error("Error fetching data");
      })
        .catch(error => {
          console.error("Error: ", error);
    });
}


function updateUser(event){
  event.preventDefault();
  const url = `http://fecore.net.ua/rest/?action=2&id=${id_updateUser.value}&name=${name_updateUser.value}&score=${score_updateUser.value}`;

  fetch(url)
          .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
          .catch(error => {
            console.error("Error: ", error);
      });
  }
