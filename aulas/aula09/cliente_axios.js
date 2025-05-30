import axios from "axios";

const url = "http://localhost:3000/tarefas";

axios
  .get(url)
  .then((response) => console.log(response.data))
  .catch((error) => console.log("Deu erro!!", error.message));
