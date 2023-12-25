let todolist=[
    {
        item:"Buy Milk",
        duedate:'22/12/23'
    },
    {
        item:"Go to",
        duedate:'22/12/23'
    }
];
displayitems();


function addtodo(){
    let inputelement=document.querySelector('#todo-input');
    let dateelement=document.querySelector('#todo-date');
    let todoitem=inputelement.value;
   let tododate=dateelement.value;

    todolist.push({item:todoitem,duedate:tododate});

    inputelement.value='';
    dateelement.value='';


    displayitems()
}



function displayitems(){
    let containerelement=document.querySelector('.todo-container');

    let newhtml=''
    for(let i=0;i<todolist.length;i++){
    
        let {item,duedate}=todolist[i]


        newhtml+=`
        
        <span>${item}</span>
        <span>${duedate}</span>
        <button class="btn-delete" onclick="todolist.splice(${i},1);
        displayitems();">Delete</button>
        
        `;
      
    }
    containerelement.innerHTML=newhtml;
    
    
}