const newListingFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#listing-name').value.trim();
    const description = document.querySelector('#listing-description').value.trim();
    const price = document.querySelector('#lisitng-price').value.trim();
    const category = document.querySelector('#lisitng-category').value.trim();

    if () {
        const response = await fetch(`/api/lisitng`, {
          method: 'POST',
          body: JSON.stringify({  }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          alert('Failed to create listing');
        }
      }
}

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

const updateLisitng = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#listing-name').value.trim();
    const description = document.querySelector('#listing-description').value.trim();
    const price = document.querySelector('#lisitng-price').value.trim();
    const category = document.querySelector('#lisitng-category').value.trim();

    if () {
        const response = await fetch(`/api/projects`, {
          method: 'PUT',
          body: JSON.stringify({  }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          alert('Failed to update listing');
        }
      }
};

document.querySelector('.new-listing-form').addEventListener('submit', newListingFormHandler);
document.querySelector('#delete-listing').addEventListener('click', deleteListing);
document.querySelector('#update-listing').addEventListener('click', updateLisitng);