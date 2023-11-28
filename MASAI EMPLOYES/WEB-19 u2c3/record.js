document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // i found that function on net to make it dont refreash on form submiting
  
    let name = document.getElementById("name").value;
    let id = document.getElementById("employeeID").value;
    let dep = document.getElementById("department").value;
    let exp = document.getElementById("exp").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mbl").value;


    let newrow = document.createElement('tr');
    let name1 = document.createElement('td');
    let empid = document.createElement('td');
    let dep1 = document.createElement('td');
    let exp1 = document.createElement('td');
    let email1 = document.createElement('td');
    let mobile1 = document.createElement('td');
    let role = document.createElement("td")
    let deleteb = document.createElement("button")
    let role2 = ""
    let db ="delete"
    if(exp >= 5){
        role2 = "Senior"
    }else if(exp < 5 && exp > 2 ){
        role2 ="Junior"
    }else if(exp >= 1){
        role2 ="Fresher"
    }

    name1.textContent = name;
    empid.textContent = id;
    dep1.textContent = dep;
    exp1.textContent = exp;
    email1.textContent = email;
    mobile1.textContent = mobile;
    role.textContent = role2
    deleteb.innerText = db

    newrow.appendChild(name1);
    newrow.appendChild(empid);
    newrow.appendChild(dep1);
    newrow.appendChild(exp1);
    newrow.appendChild(email1);
    newrow.appendChild(mobile1);
    newrow.appendChild(role)
    newrow.appendChild(deleteb)
  
    let table = document.querySelector("table tbody");
    table.appendChild(newrow);
    
    deleteb.addEventListener('click' , function (){
        table.removeChild(newrow)
    })
    
    document.querySelector('form').reset();

    });
   