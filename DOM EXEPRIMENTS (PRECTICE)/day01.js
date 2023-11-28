
       let no1 = document.getElementById("No1").value;
       let no2 = document.getElementById("No2").value;
      function add(){
        let total = (+no1) + (+no2);
        alert(total)
      }
      function sub(){
        let total = +no1 - no2;
        alert(total)
      }
      function multi(){
        let total = no1 * no2;
        alert(total)
      }
      function divid(){
        let total = no1 / no2;
        alert(total)
      }
      //document.getElementById("img").onclick = function () { alert("Img") }
      /*document.getElementById("img").addEventListener('click' ,function(e){
        console.log(e.clientX ,e.clientX ,e.altKey,encodeURI)
      })*/
      function plus() {
      let newh4 = document.createElement("h3");
      newh4.textContent = "five";
      let box = document.getElementById("div")
      box.appendChild(newh4)
      }