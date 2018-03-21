"use strict"
/*
API // CRUD
http://fecore.net.ua/rest/?action=4 
http://fecore.net.ua/rest/?action=3&id=1 - удаление
http://fecore.net.ua/rest/?action=2&id=1&name=Hey1&score=13 -изменение
http://fecore.net.ua/rest/?action=1&name=Mark&score=100  - добавление
http://fecore.net.ua/rest/

  Написать функцию post, которая используя
  REST сервис по адресу http://fecore.net.ua/rest/
  посылает post запрос с именем введенным в input.
  
  Результатом fetch будет ответ от сервера со статусом
  операции записи, вывести ОК или ERROR в поле result.
*/

const input = document.querySelector("input");
const postBtn = document.querySelector("#js-post");
const result = document.querySelector(".result");
const getusers = document.querySelector("#getusers");



/*
  @param {FormEvent} evt
*/

getusers.addEventListener("click", getUsers);


/*function getUsers(event){
  event.preventDefault();
  let url = "http://fecore.net.ua/rest/";

  fetch(url)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(data =>{
      console.log(data);
      result.textContent = JSON.stringify(data);
    }) 
    .catch(error => {
      console.error("Error: ", error);
    });
}*/

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
