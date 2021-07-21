import users from "./sampleData.js";

const userGroup = document.querySelector(".list-group");


(function () {
    
    if (users) {
        for (let user of users) {
            userGroup.innerHTML+=`<li class="list-group-item">${user.lname.charAt(0).toUpperCase() + user.lname.slice(1)}, ${user.fname.charAt(0).toUpperCase() + user.fname.slice(1)}</li>`
        }
    }
    const userNames = document.querySelectorAll(".list-group-item").forEach(user => {
        user.addEventListener("mouseover", function () {
            this.classList.add("active");
        });
        user.addEventListener("mouseout", function () {
            this.classList.remove("active")
        })
    })
   
})();


