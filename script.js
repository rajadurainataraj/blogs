const url = "https://apis.scrimba.com/jsonplaceholder/posts"
const blogList = document.getElementById('blogList')
const form = document.getElementById('myForm')
const title = document.getElementById('title')
const textBody= document.getElementById('textBody')
let postArray =[]
fetch(url)
.then ( res => res.json() )
.then ( data =>{
    postArray = (data.slice(0,5)) 
    renderArray(postArray)
})

const renderArray = postArray => {
let html =''
    postArray.map(data => {
    html += `<div id="container">
    <h3 id="searchTitle"> ${data.title} </h3> 
    <div> ${data.body} </div> 
    <div >    <i id='btn-like' class="fa-regular fa-heart"></i> </div>
    <hr> </div>
    `
    })
    blogList.innerHTML =  html
    colors()
}

function colors() {
    const btn = document.querySelectorAll('#btn-like')
   btn.forEach(btn => {
    btn.addEventListener('click',function(e){
      btn.classList.toggle('red')
    console.log(btn)
    })
   } )
}

form.addEventListener('submit',function(e){
    e.preventDefault()
let data = {
title:title.value,
body : textBody.value
}
const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json"
    }
}

fetch('https://apis.scrimba.com/jsonplaceholder/posts',options)
.then (res => res.json())
    .then(post => {
      if(title.value &&  textBody.value !== '') {
         postArray.unshift(post)
         renderArray(postArray)
          }
         title.value = ""
         textBody.value = ""
     
        })
        
 })
 document.getElementById('search').addEventListener('keydown',function(e){
 const blog =  document.querySelectorAll('#container')
    const searchTitle = document.querySelectorAll('#searchTitle')
    console.log(e.target.value)
    searchTitle.forEach((data,i) => {
       if(data.innerText.toLowerCase().includes(e.target.value)){
        blog[i].style.display= 'block'
       }else{
        blog[i].style.display= 'none'
       }
    })

 })

 let btnDark =document.getElementById('switch')
 btnDark.addEventListener("click",function(e){
    document.body.classList.toggle('dark')
 })


