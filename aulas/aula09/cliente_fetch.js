const url = "http://localhost:3000/tarefas";

// obter as tarefas - GET /
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Deu ruim!", error.message));

// obter uma tarefa - GET /id
fetch(`${url}/1a2b`)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Deu ruim!", error.message));

// adicionar uma tarefa = POST /
fetch(url, {
  method: "POST",
  body: JSON.stringify({ nome: "Praticar React Native", concluida: false }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Deu ruim!", error.message));

// alterar uma tarefa = PUT /id
fetch(`${url}/2db3`, {
  method: "PUT",
  body: JSON.stringify({ nome: "Revisar React", concluida: true }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Deu ruim!", error.message));

// alterar uma tarefa = PATCH /id
fetch(`${url}/2db3`, {
  method: "PATCH",
  body: JSON.stringify({ concluida: false }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Deu ruim!", error.message));


  fetch(`${url}/2db3`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Deu ruim!", error.message));