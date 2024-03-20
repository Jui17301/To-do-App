

document.getElementById('input-btn').addEventListener('click',function(){
  
  const inputField = document.getElementById('input-value');
  const inputValue = inputField.value;
  const mainContainer = document.getElementById('content-container');
  const count = mainContainer.childElementCount;
  const div =document.createElement('tr')
  div.innerHTML=`
  <th scope="row">${count+1}</th>
  <td>${inputValue}</th>
  <td>
   <button class="btn btn-danger delete-btn" >Delete</button>
   <button class="btn btn-success done-btn">Done</button>
  </td>  
  `
  mainContainer.appendChild(div);
  inputField.value="";

  const deleteBtn = document.getElementsByClassName('delete-btn');
  for(let button of deleteBtn){
    button.addEventListener('click',function(event){
event.target.parentNode.parentNode.style.display = "none";
    })
  }

  const doneBtn = document.getElementsByClassName('done-btn');
  for(let button of doneBtn){
    button.addEventListener('click',function(event){
event.target.parentNode.parentNode.style.textDecoration="line-through";
    })
  }


  const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click',function(event){
// console.log(event.target.parentNode);
mainContainer.style.display="none";
    })
})