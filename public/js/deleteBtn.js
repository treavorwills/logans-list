let deleteBtn = async (event) => {
    event.preventDefault();

    const id = event.target.getAttribute('data-id');
    const btnResponse = await fetch('/api/listing/' + id, {
        method: 'DELETE'
    });
    if (btnResponse.ok) {
        document.location.replace('/profile');
    } else {
        alert(btnResponse.statusText);
    }
};

for (let i = 0; i < document.querySelectorAll('.deleteBtn').length; i++) {
    const element = document.querySelectorAll('.deleteBtn')[i];

    element.addEventListener('click', deleteBtn);
    console.log(element)
}