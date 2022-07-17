// 読込
function load() {
  let mydata = "";
  let data = ""
//   if(!localStorage.getItem('mydata')) {
//     mydata = "データがありません";
//   } 
//   else {
//     mydata = localStorage.getItem('mydata');
//   }
// }
  // log.innerHTML = mydata;
  for(i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i) //1.i番目のキーを取ってくる
    data = localStorage.getItem(key) //2.キーを使って値を取ってくる
    mydata += key + "　" + data + "<br>" //3.値を
  }
  log.innerHTML = mydata;
}

// 保存
function save() {
  let textarea = document.querySelector("#textarea").value;
  let dt = new Date();
  dt = "Date: "+dt.getDate()+
            "/"+(dt.getMonth()+1)+
            "/"+dt.getFullYear()+
            " "+dt.getHours()+
            ":"+dt.getMinutes()+
            ":"+dt.getSeconds();
  localStorage.setItem(dt, textarea); 

  load()
}

let send = document.querySelector("#send");
send.addEventListener("click", save);

let log = document.querySelector("#log");
load()


// localStorage.setItem('mydata'); //mydataキーからデータ取得して
// localStorage.setItem('mydata', textarea); //mydataキーでtextareaを登録して


