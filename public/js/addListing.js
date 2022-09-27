// Handles image submisson
let imageBlob;
document.getElementById("fileSubmit").onchange = (event) => {
    const image = document.getElementById('fileSubmit').files[0];
    const reader = new FileReader();

    reader.onload = () => {
        document.getElementById('display').src = reader.result;
    };
    console.log('image', image);
    imageBlob = image;
}

const imageHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', imageBlob);
    formData.append('upload_preset', 'dtc4chabn');
    fetch(`https://api.cloudinary.com/v1_1/dtc4chabn/image/upload`, {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then((data) => {
            const image_url = data.secure_url;
            newListingHandler(image_url);
        })
        .catch(err => console.error(err));
};

//Handles the creation of a new listing 
const newListingHandler = async (image_url) => {

    const name = document.querySelector('#listing-name').value.trim();
    const description = document.querySelector('#listing-description').value.trim();
    const price = document.querySelector('#lisitng-price').value.trim();
    const category = document.querySelector('#lisitng-category').value.trim();

    let category_id;

    if (category === 'Lamp') {
        category_id = 1
    }
    if (category === 'Live Animal') {
        category_id = 2
    }
    if (category === 'Ladder') {
        category_id = 3
    }
    if (category === 'Locomotive') {
        category_id = 4
    }
    if (category === 'Locks') {
        category_id = 5
    }
    if (category === 'Land') {
        category_id = 6
    }
    if (category === 'Lemonade') {
        category_id = 7
    }
    if (category === 'Lipstick') {
        category_id = 8
    }
    if (category === 'Laser pointer') {
        category_id = 9
    }

    const listingResponse = await fetch('/api/listing', {
        method: 'POST',
        body: JSON.stringify({ name, description, price, category_id, image_url }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (listingResponse.ok) {
        document.location.replace('/profile');
    } else {
        alert(listingResponse.statusText);
    }
};


document.getElementById('newListingForm').addEventListener('submit', imageHandler);
