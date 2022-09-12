let data  = JSON.parse(localStorage.getItem("buy-list"))||[]
console.log(data)


const getData = ()=>{
   
    let tbody= document.querySelector("tbody")
       tbody.innerHTML=null
        data.map((ele)=>{
            
            let name = document.createElement("td")
            name.innerText=ele.name
         
            let author =  document.createElement("td")
            author.innerText=ele.author
         
            let desc= document.createElement("td")
            desc.innerText=ele.disc
         
            let date = document.createElement("td")
            date.innerText=ele.date
         
            let category = document.createElement("td")
            category.innerText=ele.category
         
         //    let Buybtn = document.createElement("button")
         //    Buybtn.innerText= "Buy"
         
            // let Buy = document.createElement("td")
            // Buy.style.backgroundColor="green"
            // Buy.innerText= "Buy"
            // Buy.addEventListener("click",()=>{
            //     handleBuy(ele);
            // })
         
         //    let Addbtn = document.createElement("button")
         //    Addbtn.innerText= "Add"
            // let Add = document.createElement("td")
            // Add.style.backgroundColor="red"
            // Add.innerText= "Add"
            // Add.addEventListener("click",()=>{
            //     handleAdd(ele);
            // })
         
            let price = document.createElement("td")
            price.innerText=ele.price
         
            let tr = document.createElement("tr")
            tr.append(name,author,desc,date,category,price)
           
            tbody.append(tr)
         
         })
    
    
    }
    getData();