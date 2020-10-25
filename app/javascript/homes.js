window.addEventListener("DOMContentLoaded", function(){
  
  function addingRegister(registers, register){
    if(register == ""){
      return;
    }
    else{
      registers.push(register)
      console.log(registers.length);
      var elm_add = document.createElement('span');
      elm_add.classList.add('text-info');
      elm_add.id = "register" + registers.length;
      elm_add.dataset.index = registers.length;
      elm_add.dataset.name = register;
      elm_add.textContent = register + "さん　";
  
      registersWrap.appendChild(elm_add);
      document.getElementById("register-name").value = '';
      if (registers.length % 3 == 0){
        registersWrap.appendChild(document.createElement('br'));
      }  
    }
  }
  
  function addingRegisterBtn(registers){
    
    var elm_btn = document.createElement('input');
    elm_btn.id = "register-btn";
    elm_btn.type = "submit";
    elm_btn.classList.add("btn-outline-success");
    elm_btn.classList.add("btn");
    elm_btn.classList.add("btn-lg");
    elm_btn.classList.add("btn-block");
    elm_btn.value = registers.length + "人を組分け！！";

    regitsterBtnWrap.innerHTML = '';
    regitsterBtnWrap.appendChild(elm_btn);
  }

  //監視1
  var target1 = document.getElementById('register-btn-wrap');
  var mo = new MutationObserver(afterAddingRegisterBtn);
  mo.observe(target1, {childList: true});

  function afterAddingRegisterBtn(){
    document.getElementById('register-btn').addEventListener("click", function(){
      //部屋数
      document.getElementById('rooms-wrap').innerHTML = '';

      var numberOfRooms = Math.floor(registers.length / 2);

      for(var i = 0; i < numberOfRooms; i++) {
        var elm_room = document.createElement('div');
        elm_room.dataset.index = i;
        elm_room.textContent = 'room'+ i;
        elm_room.id = 'room'+ i;
        elm_room.classList.add('room');
        elm_room.classList.add('card');
        elm_room.classList.add('text-white');
        elm_room.classList.add('bg-dark');
        document.getElementById('rooms-wrap').appendChild(elm_room);
      }
    });
  }

  //監視2
  var target2 = document.getElementById('rooms-wrap');
  var mo = new MutationObserver(afterAddingRooms);
  mo.observe(target2, {childList: true});
  
  function afterAddingRooms(){
    //配列の順番を入れ替え
    for(var i = registers.length - 1; i > 0; i--){
      var rand = Math.floor(Math.random() * (i + 1));
      [registers[i], registers[rand]] = [registers[rand], registers[i]];
    }
    //registerごとにroomへappend
    for(var i = 0; i < registers.length; i++){
      var register = registers[i]
      var roomNumber = Math.floor((i / 2));
      var room = document.getElementById("room"+roomNumber);

      var elm_register = document.createElement('p');
      elm_register.textContent = register;
      elm_register.classList.add ("register-in-room");
      if(room == null){
        var randomNumber = Math.floor( Math.random() * (Math.floor(registers.length / 2)) ) ;
        var newroom = document.getElementById("room"+randomNumber);
        console.log(newroom);
        newroom.appendChild(elm_register);
      }else{
        room.appendChild(elm_register);
      }
    }
  }
  
  //変数
  var submit = document.getElementById("submit")
  var registersWrap = document.getElementById("registers-wrap");
  var regitsterBtnWrap = document.getElementById("register-btn-wrap");

  let registers = new Array();

  //スタート
  submit.addEventListener("click", function(event){
    event.preventDefault();

    register = document.getElementById("register-name").value;
    addingRegister(registers, register);
    addingRegisterBtn(registers);
  });
},false);