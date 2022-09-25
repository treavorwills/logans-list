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

const newListingFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.querySelector('#listing-name').value.trim();
  const productName = document.querySelector('#productName').value.trim();
  const description = document.querySelector('#listing-description').value.trim();
  const price = document.querySelector('#lisitng-price').value.trim();
  const category = document.querySelector('#lisitng-category').value.trim();

  const formData = new FormData();
  formData.append('file', imageBlob);
  formData.append('upload_preset', 'dtc4chabn');
  fetch(`https://api.cloudinary.com/v1_1/dtc4chabn/image/upload`, {
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data.secure_url)
    })
    .catch(err => console.error(err));
};


const deleteListing = async (event) => {
  event.preventDefault();

  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/listing/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete listing');
    }
  }
};

// const updateLisitng = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#listing-name').value.trim();
//   const description = document.querySelector('#listing-description').value.trim();
//   const price = document.querySelector('#lisitng-price').value.trim();
//   const category = document.querySelector('#lisitng-category').value.trim();

//   if () {
//     const response = await fetch(`/api/projects`, {
//       method: 'PUT',
//       body: JSON.stringify({}),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to update listing');
//     }
//   }
// };

document.getElementById('newListingForm').addEventListener('submit', newListingFormHandler);
// document.querySelector('#delete-listing').addEventListener('click', deleteListing);
// document.querySelector('#update-listing').addEventListener('click', updateLisitng);