// 存储服务
var { Query, User } = AV;


//初始化
var APP_ID = 'Y96sLtb9gvaPaAJwcU6ESDSR-gzGzoHsz';
var APP_KEY = 'nehCcFS4235hEdRMT0RBfhbv';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


// 测试
let myForm = document.querySelector('form');
myForm.addEventListener("submit",function(e){
    e.preventDefault();
    let name = myForm.querySelector('input[name=name]').value;
    let content = myForm.querySelector('input[name=content]').value;
 
    var LeaveWord = AV.Object.extend('LeaveWord');
    var leaveWord  = new LeaveWord ();
    leaveWord.save({
        'name': name,
        'content': content
    }).then(function(object) {
        let messageLi = document.createElement('li')
        messageLi.textContent = object.attributes.name + ':' + object.attributes.content;
        messageol.appendChild(messageLi);
        myForm.querySelector('input[name=name]').value='';
        myForm.querySelector('input[name=content]').value='';
    })
})


//获取服务器数据
var query = new AV.Query('LeaveWord');

let messageol = document.querySelector('#messageol')

query.find().then(function (todos) {
  todos.forEach(function(todo) {
    let messageLi = document.createElement('li')
    messageLi.textContent = todo.attributes.name + ':' + todo.attributes.content;
    messageol.appendChild(messageLi);
  });
  return AV.Object.saveAll(todos);
})