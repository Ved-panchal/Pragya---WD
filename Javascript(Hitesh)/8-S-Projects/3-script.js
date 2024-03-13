const taskInput = document.querySelector('.inputTextBox')
const taskRowsArea = document.querySelector('.taskRowsArea')
const addBtn = document.querySelector('.addButton')


addBtn.addEventListener('click' , function(){
    if(taskInput.value === ''){
        alert('No task found')
    }
    else{
        const li = document.createElement('li')
        li.innerHTML = taskInput.value
        taskRowsArea.appendChild(li)
    }
})