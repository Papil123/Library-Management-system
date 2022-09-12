let data = JSON.parse(localStorage.getItem("book-list")) || []
 document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();   
     let name = document.querySelector("#name").value
    let author = document.querySelector("#author").value
    let disc = document.querySelector("#desc").value
    let date = document.querySelector("#added").valueAsDate
    let category = document.querySelector("#category").value
    let price = document.querySelector("#price").value
    let obj ={
        "name":name,
        "author":author,
        "disc":disc,
         "date":date,
         "category":category,
         "price":price
      }
      data.push(obj)
      localStorage.setItem("book-list",JSON.stringify(data))
      console.log(obj)
 })
