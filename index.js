let lists = [
    {
        Task : 'Buy',
        On : '7/4/24',
    },
    {
        Task : 'spend',
        On : '5/6/24',
    }
];
display();

function addElements(){
    let getElement = document.querySelector('#task');
    let getDate = document.querySelector('#input_date');
    let gotElement = getElement.value;
    let gotDate = getDate.value;
    lists.push({Task : gotElement, On : gotDate});
    getElement.value = '';
    getDate.value = '';
    display();
}



function display(){
    let get = document.querySelector('.displaying_items');
    let newHTML = '';
    for(let i=0;i<lists.length;i++){
        let {Task,On} = lists[i];
        newHTML += `
            <span>${Task}</span>
            <span>${On}</span>
         <button class="btn-delete" onclick = "lists.splice(${i},1);  
                        display();
                    ">delete</button>
        `;
    }
    get.innerHTML = newHTML;
}

