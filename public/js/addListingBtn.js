const newListingBtn = async (event) => {
    event.preventDefault();
    const btnResponse = await fetch("/add", {
        method: 'GET'
    });
    if (btnResponse.ok) {
        document.location.replace('/add');
    } else {
        alert(btnResponse.statusText);
    }
};

const profilePic = async (event) => {
    event.preventDefault();

    const pic = document.querySelector('#profilePicsC').value;
    let profile_pic;

    if (pic === '1') {
        profile_pic = 'https://www.placecage.com/300/200'
    }
    if (pic === '2') {
        profile_pic = 'https://www.placecage.com/g/200/300'
    }
    if (pic === '3') {
        profile_pic = 'https://www.placecage.com/c/600/600'
    }
    if (pic === '4') {
        profile_pic = 'https://www.fillmurray.com/300/200'
    }
    if (pic === '5') {
        profile_pic = 'https://www.fillmurray.com/g/600/500'
    }
    if (pic === '6') {
        profile_pic = 'https://www.stevensegallery.com/140/200'
    }
    console.log(profile_pic)
    const picRes = await fetch('/api/user/pic', {
        method: 'PUT',
        body: JSON.stringify({ profile_pic }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (picRes.ok) {
        document.location.replace('/profile');
    } else {
        alert(picRes.statusText);
    }

}


document.getElementById('newListingBtn').addEventListener('click', newListingBtn);
document.getElementById('profilePics').addEventListener('submit', profilePic);