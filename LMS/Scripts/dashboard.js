let data  = JSON.parse(localStorage.getItem("book-list"))||[]
console.log(data)

let filter = document.querySelector("#filter")
filter.addEventListener("change",()=>{
   data = data.filter(d=>d.category===filter.value)
   getData();
})



const getData = ()=>{
    let data  = JSON.parse(localStorage.getItem("book-list"))||[]
console.log(data.length)

let count = document.querySelector("#book-count")
count.innerText=data.length
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
     
        let Buy = document.createElement("td")
        Buy.style.backgroundColor="green"
        Buy.innerText= "Buy"
        Buy.addEventListener("click",()=>{
            handleBuy(ele);
        })
     
     //    let Addbtn = document.createElement("button")
     //    Addbtn.innerText= "Add"
        let Add = document.createElement("td")
        Add.style.backgroundColor="red"
        Add.innerText= "Add"
        Add.addEventListener("click",()=>{
            handleAdd(ele);
        })
     
        let price = document.createElement("td")
        price.innerText=ele.price
     
        let tr = document.createElement("tr")
        tr.append(name,author,desc,date,category,Buy,Add,price)
       
        tbody.append(tr)
     
     })


}
//  let st  = data.filter(d=>d.title!==t)
const handleBuy =(a)=>{
    let buydata = JSON.parse(localStorage.getItem("buy-list")) ||[]
    console.log(a)
    let nd  = data.filter(d=>d.name!==a.name.trim())
    localStorage.setItem("book-list",JSON.stringify(nd))
    getData()
    buydata.push(a)
    localStorage.setItem("buy-list",JSON.stringify(buydata))
}


const handleAdd =(a)=>{
    let buydata = JSON.parse(localStorage.getItem("bookmark-list")) ||[]
    console.log(a)
    let nd  = data.filter(d=>d.name!==a.name.trim())
    localStorage.setItem("book-list",JSON.stringify(nd))
    getData()
    buydata.push(a)
    localStorage.setItem("bookmark-list",JSON.stringify(buydata))
}

getData();
