// const API_URL='http://127.0.0.1:8080/api/data';


// async function fetchLoad() {
//     try{
//         const response=await fetch(API_URL);
//         if(!response.ok){
//             throw new Error('Network response was not ok'+response.status);
//         }
//         else{
//             const data=await response.json();
//             const dataString=data.join(', ');
//             const h1Element=document.getElementById('data-display');
//             h1Element.textContent=`Data from server: ${dataString}`;
//         }
//     }
//     catch(error){
//         console.log('Fetch failed:',error);
//         document.getElementById('data-display').textContent='Failed to load data';
//     };
// }
// fetchLoad();

// git config --global user.email "you@example.com"
//   git config --global user.name "Your Name"

// let shivajiEl=document.getElementById('shivaji');

// let url='http://127.0.0.1:8080/api/numbers';

// fetch(url)
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     let listEl=document.createElement('ul');
//     listEl.style.listStyleType='none';
//     listEl.style.fontSize='30px';
//     listEl.style.fontWeight='bold';
//     for(let eke of data){
//         let itemEl=document.createElement('li');
//         itemEl.textContent=JSON.stringify(eke);
//         console.log(eke);
//         listEl.appendChild(itemEl);
//     }
//     shivajiEl.appendChild(listEl);
// });

let homeSectionEl=document.getElementById('homeSection');
let administratorLoginSectionEl=document.getElementById('administratorLoginSection');
let loginSectionEl=document.getElementById('loginSection');

function administratorLogin(){
    homeSectionEl.classList.add('d-none');
    administratorLoginSectionEl.classList.remove('d-none');
}
function searchSection(){
    homeSectionEl.classList.add('d-none');
    document.getElementById('searchSection').classList.remove('d-none');
}
function login(){
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    if(username==='' && password===''){
        administratorLoginSectionEl.classList.add('d-none');
        loginSectionEl.classList.remove('d-none');
        return;
    }
    else{
        alert('Invalid Credentials');
        return;
    }
}
function homePage(){
    administratorLoginSectionEl.classList.add('d-none');
    homeSectionEl.classList.remove('d-none');
}

function findByNumber(){
    let number=document.getElementById('search').value;
    if(number===''){
        alert('Please enter a number');
        document.getElementById('data').textContent='';
        return;
    }
    else{
        let API_URL='https://unflamboyant-oswaldo-unsubservient.ngrok-free.dev/api/numbers/'+number;
        fetch(API_URL)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                document.getElementById('data').textContent=JSON.stringify(data);
            })
            .catch(function(error){
                console.log('Fetch failed:',error);
                alert('Failed to load data');
            });
    }
}
function findByNumberBack(){
    document.getElementById('searchSection').classList.add('d-none');
    homeSectionEl.classList.remove('d-none');
    document.getElementById('search').value='';
    document.getElementById('data').textContent='';
}

function loginSectionBack(){
    loginSectionEl.classList.add('d-none');
    homeSectionEl.classList.remove('d-none');
}

function getAllData(){
    document.getElementById('getAllDataSection').classList.remove('d-none');
    loginSectionEl.classList.add('d-none');
    let API_URL='https://unflamboyant-oswaldo-unsubservient.ngrok-free.dev/api/numbers';
    fetch(API_URL)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let allDataEl=document.getElementById('allData');
            let listEl=document.createElement('ul');
            listEl.style.listStyleType='none';
            listEl.style.fontSize='20px';
            listEl.style.fontWeight='bold';
            for(let eke of data){
                let itemEl=document.createElement('li');
                itemEl.textContent=JSON.stringify(eke);
                console.log(eke);
                listEl.appendChild(itemEl);
            }  
            allDataEl.appendChild(listEl);
        })
        .catch(function(error){
            console.log('Fetch failed:',error);
            alert('Failed to load data');
        });
}
function getAllDataBack(){
    document.getElementById('getAllDataSection').classList.add('d-none');
    loginSectionEl.classList.remove('d-none');
    document.getElementById('allData').innerHTML='<h1>All Data</h1>';
}
function addDataSection(){
    document.getElementById('loginSection').classList.add('d-none');
    document.getElementById('addDataSection').classList.remove('d-none');
}
function addData(){
    let nameEl=document.getElementById('name');
    let maleEl=document.getElementById('male');
    let femaleEl=document.getElementById('female');
    let ageEl=document.getElementById('age');
    let numberEl=document.getElementById('number');
    let addressEl=document.getElementById('address');

    let API_URL='https://unflamboyant-oswaldo-unsubservient.ngrok-free.dev/api/numbers';
    let name='';
    if (!nameEl.value.trim()) {
        alert("Full name is required");
        return;
    }
    else name=nameEl.value;
    let data={
        fullname:name,
        gender:(maleEl.checked)?"Male":"Female",
        age:parseInt(ageEl.value),
        mobile:numberEl.value,
        details:addressEl.value
    }
    let options={
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            Accept:'application/json'
        },
        body : JSON.stringify(data)
    };
    fetch(API_URL,options)
        .then(function(response){   
            return response.json();
        })
        .then(function(jsonData){
            alert(jsonData);
            nameEl.value='';
            maleEl.checked=true;
            femaleEl.checked=false;
            ageEl.value='';
            numberEl.value='';
            addressEl.value='';
            console.log(jsonData);
        });
}
function addDataBack(){
    document.getElementById('addDataSection').classList.add('d-none');
    loginSectionEl.classList.remove('d-none');
}
function putDataSection(){
    let putDataSectionEl=document.getElementById('putDataSection');
    putDataSectionEl.classList.remove('d-none');
    document.getElementById('loginSection').classList.add('d-none');
}
function putData(){
    let nameEl=document.getElementById('name1');
    let maleEl=document.getElementById('male1');
    let femaleEl=document.getElementById('female1');
    let ageEl=document.getElementById('age1');
    let numberEl=document.getElementById('number1');
    let addressEl=document.getElementById('address1');

    let API_URL=`https://unflamboyant-oswaldo-unsubservient.ngrok-free.dev/api/numbers/${numberEl.value}`;
    let name='';
    if (!nameEl.value.trim()) {
        alert("Full name is required");
        return;
    }
    else name=nameEl.value;
    let data={
        fullname:name,
        gender:(maleEl.checked)?"Male":"Female",
        age:parseInt(ageEl.value),
        mobile:numberEl.value,
        details:addressEl.value
    }
    let options={
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            Accept:'application/json'
        },
        body : JSON.stringify(data)
    };
    fetch(API_URL,options)
        .then(function(response){   
            return response.json();
        })
        .then(function(jsonData){
            alert(jsonData);
            nameEl.value='';
            maleEl.checked=true;
            femaleEl.checked=false;
            ageEl.value='';
            numberEl.value='';
            addressEl.value='';
            console.log(jsonData);
        });
}
function putDataBack(){
    document.getElementById('putDataSection').classList.add('d-none');
    loginSectionEl.classList.remove('d-none');
}

let deleteDataSectionEl=document.getElementById('deleteDataSection');

function deleteDataSection(){
    loginSectionEl.classList.add('d-none');
    deleteDataSectionEl.classList.remove('d-none');
}

function deleteData(){
    let number=document.getElementById('deleteNumber');
    let API_URL=`https://unflamboyant-oswaldo-unsubservient.ngrok-free.dev/api/numbers/${number.value}`;
    let options={
        method: "DELETE"
    };
    fetch(API_URL,options) 
        .then(function(response){
            console.log(response);
            alert(response);
        });
}
function deleteDataBack(){
    loginSectionEl.classList.remove('d-none');
    deleteDataSectionEl.classList.add('d-none');
}
