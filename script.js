function handleFormSubmit(event){
    event.preventDefault();
    const expAmount = event.target.amount.value;
    const expDescription = event.target.description.value;
    const expType = event.target.type.value;

    let myObj = {
        expAmount,
        expDescription,
        expType
    };
    localStorage.setItem(expType,JSON.stringify(myObj));
    const div = document.querySelector('#list');
    const ul = document.querySelector('#list-ul');
    const newLi = document.createElement('li');
    newLi.className="text-success";
    newLi.innerHTML = `<b>&#x20b9;</b>${expAmount} - ${expDescription} - ${expType}`;
    div.appendChild(ul);
    ul.appendChild(newLi);

    

    const editBtn = document.createElement('button');
    const editBtnText = document.createTextNode('Edit');
    editBtn.type="button";
    editBtn.className="edit-btn m-1 bg-success";
    editBtn.appendChild(editBtnText);
    newLi.appendChild(editBtn);
    editBtn.onclick = () => {
        localStorage.removeItem(myObj.expType);
        ul.removeChild(newLi);
        document.getElementById('amount').value = expAmount;
        document.getElementById('description').value = expDescription;
        document.getElementById('type').value = expType;
    }
    const deleteBtn = document.createElement('button');
    const deleteBtnText = document.createTextNode('Delete');
    deleteBtn.type="button";
    deleteBtn.className="delete-btn bg-danger";
    deleteBtn.appendChild(deleteBtnText);
    newLi.appendChild(deleteBtn);  
    deleteBtn.onclick = () => {
        localStorage.removeItem(myObj.expType);
        ul.removeChild(newLi);
    }
      
}