var proData = JSON.parse(localStorage.getItem("purchase")) || [];
window.addEventListener("load",function (){
    append(proData);
})


function append(data){
    let container = document.getElementById("purchased_vouchers")
    data.forEach(function(el,index){
        let div = document.createElement("div")

        let img = document.createElement("img")
        img.setAttribute("class", "image")
        img.src = el.image

        let name = document.createElement("p")
        name.innerText = el.name

        let price = document.createElement("p")
        price.innerText = el.price

       

        div.append(img, name, price)

        container.append(div);
    });
}