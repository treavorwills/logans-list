// Profile click
const profileOrLoginBtn = async (event) => {
  event.preventDefault();

  const profileResponse = await fetch('/profile', {
    method: 'GET',
  });

  if (profileResponse.ok) {
    document.location.replace('/profile')
  } else {
    alert(profileResponse.statusText);
  }
};

const homeBtn = async (event) => {
  event.preventDefault();

  const btnResponse = await fetch('/', {
    method: 'GET',
  });
  if (btnResponse.ok) {
    document.location.replace('/')
  } else {
    alert(btnResponse.statusText);
  }
};

document.getElementById('profile-button').addEventListener('click', profileOrLoginBtn);
document.getElementById('home-btn').addEventListener('click', homeBtn);