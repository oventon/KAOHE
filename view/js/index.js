var add = document.querySelector('.add');
var okc = document.querySelector('.okc');
var gsw = document.querySelector('.gsw');
var num1 = document.querySelector('.num1');
var num2 = document.querySelector('.num2');
var length = gsw.querySelectorAll('li').length;
var removeAll = document.querySelector('.removeAll');
var reverse = document.querySelector('.reverse');
var order = document.querySelector('.order');
var addTop = document.querySelector('.add-top');
var tmpVal;
var arr = [];

reverse.addEventListener('click',function() {
  tmp = JSON.parse(localStorage.getItem('dt'));
    tmp = tmp.reverse();
    localStorage.dt = JSON.stringify(tmp);
    // console.log(tmp);
    console.log(typeof tmp)
    gsw.innerHTML = '';
    okc.innerHTML = '';
    for(var i = 0 ; i < tmp.length; i++){
      createThing(okc,tmp[i],num1);
    }
    if(reverse.innerText == '时间倒序'){
      reverse.innerText = '时间正序';
    }else if(reverse.innerText == '时间正序'){
      reverse.innerText = '时间倒序';
    }
})



removeAll.addEventListener('click',function() {
  // console.log(123);
  gsw.innerHTML = '';
  okc.innerHTML = '';
  localStorage.clear();
  tmp = [];
})

if(!localStorage.getItem('dt')){
  var len = okc.querySelectorAll('li').length;
  var data = [];
}else{
  var data = JSON.parse(localStorage.getItem('dt'));
  var len = JSON.parse(localStorage.getItem('dt')).length;
}
var temVal;

add.onkeydown = function(e) {
  var e = e || window.event;
  var val = add.value;
  if(add.value != '' && add.value != ' '){
    if(e.keyCode == 13){
      data.push(val);
      localStorage.setItem('dt',JSON.stringify(data));
      tmpVal = JSON.parse(localStorage.getItem('dt'));
      tmp = JSON.parse(localStorage.getItem('dt'));
      createThing(okc,val,num1);
      len++;
      add.value = '';
    }
  }
  num1.innerHTML = len;
}

var tmp = JSON.parse(localStorage.getItem('dt'));
if(tmp){
  for(var i = 0 ; i < tmp.length; i++){
    createThing(okc,tmp[i],num1);
  }
}

if(arr){
  for(var i = 0 ; i < arr.length ; i++){
    createThing(gsw,arr[i],num1);
  }
}




console.log(typeof tmp);
console.log(tmp);

function createThing(dom,val,n) {
  var x = 1;
  var clickFinish = document.createElement('div');
  var li = document.createElement('li');
  var span = document.createElement('span');
  var del = document.createElement('div');
  clickFinish.className = 'clickFinish';
  function again(span) {
    span.addEventListener('click',function() {
    var inputs = document.createElement('input');
    inputs.focus();

    inputs.type = 'text';
    this.parentNode.replaceChild(inputs,this);
    inputs.onkeydown = function(e) {
      var e = e || window.event;
      var valu = inputs.value;
      if(valu != '' && valu != ' '){
        if(e.keyCode == 13){
          var spans = document.createElement('span');
          spans.innerHTML = valu;
          val = valu;
          this.parentNode.replaceChild(spans,this);
          again(spans);
        }
      }
    }
  })
  }
  again(span);
  span.className = 'val';
  span.innerHTML = val;
  del.className = 'del';
  li.appendChild(clickFinish);
  li.appendChild(span);
  li.appendChild(del);
  dom.appendChild(li);
  del.addEventListener('click',function() {
    this.parentNode.parentNode.removeChild(this.parentNode);
    len--;
    n.innerHTML = len;
    console.log(tmp)
    for(var i in tmp){
      if(tmp[i] == val){
        tmp.splice(i,1);
      }
    }
    console.log(tmp);
    localStorage.dt = JSON.stringify(tmp);
  });

  clickFinish.addEventListener('click',function() {
    this.parentNode.parentNode.removeChild(this.parentNode);
    len--;
    n.innerHTML = len;
    length++;
    num2.innerHTML = length;
    var x = 1;
    var clickFinish = document.createElement('div');
    var li = document.createElement('li');
    var span = document.createElement('span');
    var del = document.createElement('div');
    clickFinish.className = 'clickFinish';
    span.className = 'val';
    span.innerHTML = val;
    del.className = 'del';
    li.appendChild(clickFinish);
    li.appendChild(span);
    li.appendChild(del);
    again(span);
    gsw.appendChild(li);
    arr.push(val);
    for(var i in tmp){
      if(tmp[i] == val){
        tmp.splice(i,1);
      }
    }
    console.log(tmp);
    localStorage.dt = JSON.stringify(tmp);
    localStorage.arrFinish = JSON.stringify(arr);
    del.addEventListener('click',function() {
      for(var i in tmp){
        if(tmp[i] == val){
          tmp.splice(i,1);
          arr.splice(i,1);
        }
      }
      localStorage.arrFinish = JSON.stringify(arr);
      localStorage.dt = JSON.stringify(tmp);
      this.parentNode.parentNode.removeChild(this.parentNode);
      length--;
      num2.innerHTML = length;
    })
    clickFinish.onclick = function() {
      for(var i in tmp){
        if(arr[i] == val){
          arr.splice(i,1);
          tmp.push(val);
        }
      }
      localStorage.arrFinish = JSON.stringify(arr);
      localStorage.dt = JSON.stringify(tmp);

      this.parentNode.parentNode.removeChild(this.parentNode);

      length--;
      num2.innerHTML = length;
      len++;
      num1.innerHTML = len;
      createThing(okc,val,num1);
    }
  })
}
