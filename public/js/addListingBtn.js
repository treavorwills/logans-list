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

document.getElementById('newListingBtn').addEventListener('click', newListingBtn);