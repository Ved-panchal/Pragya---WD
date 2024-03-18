const taskInput = document.querySelector('.inputTextBox')
const taskRowsArea = document.querySelector('.taskRowsArea')
const addBtn = document.querySelector('.addButton')


function addBtnClicked(){
    if(taskInput.value === ''){
        alert('No task found')
    }
    else{
        const li = document.createElement('li')
        li.innerHTML = taskInput.value ;
        taskRowsArea.appendChild(li)
    }
}   




// const taskInput = document.querySelector('.inputTextBox')
// const taskRowsArea = document.querySelector('.taskRowsArea')
// const addBtn = document.querySelector('.addButton')


// addBtn.addEventListener('click' , function(){
//     if(taskInput.value === ''){
//         alert('No task found')
//     }
//     else{
//         const li = document.createElement('li')
//         li.innerHTML = taskInput.value
//         li.classList.add('listOfTask')
//         taskInput.value = ''
//         taskRowsArea.appendChild(li)
//     }
// })



// document.addEventListener('DOMContentLoaded', function() {
//     const taskInput = document.querySelector('.inputTextBox');
//     const taskRowsArea = document.querySelector('.taskRowsArea');
//     const addBtn = document.querySelector('.addButton');

//     addBtn.addEventListener('click', function(){
//         if(taskInput.value === ''){
//             alert('No task found');
//         }
//         else{
//             const li = document.createElement('li');
//             li.classList.add('listOfTask');

//             const leftCircle = document.createElement('div');
//             leftCircle.id = 'leftCircle';
//             leftCircle.innerHTML = '<i class="fa-solid fa-check"></i>';

//             const taskName = document.createElement('span');
//             taskName.id = 'taskName';
//             taskName.textContent = taskInput.value;

//             const rightCross = document.createElement('div');
//             rightCross.id = 'rightCross';
//             rightCross.innerHTML = '&#x00d7;';

//             li.appendChild(leftCircle);
//             li.appendChild(taskName);
//             li.appendChild(rightCross);

//             taskRowsArea.appendChild(li);
//         }
//     });
// });