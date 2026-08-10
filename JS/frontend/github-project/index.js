const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://api.github.com/users", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
