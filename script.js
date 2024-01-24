function saveToLocalStorage(event) {
    event.preventDefault();
  
    const myObj = {
      Title: event.target.noteTitle.value,
      desc: event.target.noteDesc.value,
    };
  
    const string = `${myObj.Title}  ${myObj.desc}`;
  
    const newLi = document.createElement('li');
    const newLiText = document.createTextNode(string);
    newLi.appendChild(newLiText);
    const list = document.querySelector("ul");
    list.appendChild(newLi);
  
    // const deleteBtn = document.createElement('button');
    // const deleteBtnText = document.createTextNode('Delete');
    // deleteBtn.appendChild(deleteBtnText);
    // deleteBtn.className = 'delete-btn';
    // newLi.appendChild(deleteBtn);
  
    // const editBtn = document.createElement('button');
    // const editBtnText = document.createTextNode('Edit');
    // editBtn.appendChild(editBtnText);
    // editBtn.className = 'edit-btn';
    // newLi.appendChild(editBtn);
  
    // deleteBtn.addEventListener('click', function (event) {
    //   const userToDelete = event.target.parentElement;
    //   userToDelete.remove();
    //   localStorage.removeItem(myObj.Title);
    // });
  
    // editBtn.addEventListener('click', function (event) {
    //   const userToEdit = event.target.parentElement;
    //   const [username, email, phone] = userToEdit.textContent.trim().split('  ');
  
    //   const userObj = { username, email, phone };
  
    //   userToEdit.remove();
  
    //   event.target.form.username.value = userObj.username;
    //   event.target.form.email.value = userObj.email;
    //   event.target.form.phone.value = userObj.phone;
  
    //   localStorage.removeItem(userObj.email);
    // });
  
    event.target.noteTitle.value = '';
    event.target.noteDesc.value = '';
    //event.target.phone.value = '';
    axios.post("https://crudcrud.com/api/350d42915c1745049628bff073e59461/notebook",myObj)
       .then((response)=>{
            console.log(response)
  
       })
  
       .catch((err)=>{
        document.body.innerHTML=document.body.innerHTML + "<h4> Something went wrong </h4>"
        console.log(err)
       })
   // localStorage.setItem(myObj.email, JSON.stringify(myObj));

   function displayOrders() {
    axios.get("https://crudcrud.com/api/350d42915c1745049628bff073e59461/notebook")
        .then((response) => {
            let length = Object.keys(response.data).length;

            for (let i = 0; i < length; i++) {
                const data = response.data[i];
                addOrder(data);
                count = data.id;
            }
            if (length == 0) {
                count = 1;
            } else {
                count++;
            }
        })
        .catch((error) => console.error("Error fetching data:", error));
}

window.addEventListener('load', () => {
    displayOrders();
});
}
  //module.exports = handleFormSubmit;