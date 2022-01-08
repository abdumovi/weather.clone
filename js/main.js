let other = document.querySelector('.row');
let key = 'https://reqres.in/api/users';
let result = fetch(key,{
  method:'GET'
}).then((data)=> data.json()).then((data)=> render(data.data));

let obj = {id: 1, email: 'george.bluth@reqres.in', first_name: 'George', last_name: 'Bluth', avatar: 'https://reqres.in/img/faces/1-image.jpg'}
function render(item){
  console.log(item);
  for(let i of item){
    let div = document.createElement('div');
    div.className = 'col-md-4 col-sm-6 col-xs-12';
    div.innerHTML = `
    <div class="user list">
    <div class="user__block">
      <div class="user__img">
        <img src="${i.avatar}" alt="imf">
      </div>
      <p class="user__name">${i.first_name}</p>
    </div>
    <ul class="user__list"> 
      <li class="user__item">Last Name <b class='inn'>${i.last_name}</b></li>
      <li class="user__item">Email <span class='inn'>${i.email}</span></li>
    </ul>
    <button class="user__close">x</button>
    </div>`
    other.append(div);
  }
  let btns = document.querySelectorAll('.user__close');
  btns.forEach((item)=>{
    item.addEventListener('click',(e)=>{
      e.target.parentElement.parentElement.remove();
    });
  });
}
