


const url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;

async function getData(){
    try{
        let res = await fetch(url);

        let data = await res.json();
        append(data[0].vouchers)

        console.log(data[0].vouchers)
        
    }
    catch(err){
        console.log(err)
    }   
 }
getData()

function append(data){
    let container = document.getElementById("voucher_list")
    data.forEach(function(el,index){
        let div = document.createElement("div")

        let img = document.createElement("img")
        img.setAttribute("class", "image")
        img.src = el.image

        let name = document.createElement("p")
        name.innerText = el.name

        let price = document.createElement("p")
        price.innerText = el.price

        var btn=document.createElement("button");
        btn.innerText="buy";
        btn.addEventListener("click", function () {
        addToCart(el);
        });

        div.append(img, name, price, btn)

        container.append(div);
    });

    
}


function addToCart(el){
    var proData=JSON.parse(localStorage.getItem("purchase"))||[];
    console.log(proData);
    proData.push(el);
    localStorage.setItem("purchase",JSON.stringify(proData));
    alert("item added into the cart");
  }

  function purchase(){
    window.location.href="purchase.html";
}