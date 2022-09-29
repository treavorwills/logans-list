// search click
const searchBtn = async (event) => {
  event.preventDefault();


  let searchTerm = document.getElementById('parameters');

  document.location.replace(`/search/${searchTerm.value}`);

};

document.getElementById('button-addon3').addEventListener('click', searchBtn);
