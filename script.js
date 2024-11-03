
const selimg= document.getElementById("image");
const inputfile= document.getElementById("file");
const inputCategory = document.getElementById("category").value;
const inputheadline = document.getElementById("headline").value;
const inputDate= document.getElementById("date").value;
const inputtextarea= document.getElementById("textarea").value;
const Button= document.getElementById("button");
const container = document.getElementById("content");
const show=document.getElementById("show");


const toggle = false;
show.addEventListener("click", function(){
    const form=document.getElementById("section1");
    if (form.style.display === 'none' || form.style.display === '') { form.style.display = 'block'; } else { form.style.display = 'none'; }
})






inputCategory.onchange=function(){
    console.log(inputCategory.value )
}

inputfile.onchange=function(){
    selimg.src= URL.createObjectURL(inputfile.files[0]);
    console.log("image")
    console.log(inputCategory.value);
}

Button.addEventListener("click" , function(){
    const selimg= document.getElementById("image");
const inputfile= document.getElementById("file");
    const inputCategory = document.getElementById("category").value;
    const inputheadline = document.getElementById("headline").value;
const inputDate= document.getElementById("date").value;
const inputtextarea= document.getElementById("textarea").value;
const container = document.getElementById("content");


    const post= document.createElement("div");
    post.classList.add("post-box");
    // post.classList.add(`${inputCategory}`)
    const img = document.createElement("img");
    img.src = URL.createObjectURL(inputfile.files[0]);
    img.classList.add("post-img");

    const category = document.createElement("h2");
    category.classList.add("category");
    category.textContent=  inputCategory;
    

    

    const headline = document.createElement("h1");
    headline.href ="#"
    headline.classList.add("post-title");
    headline.textContent= inputheadline;

    const date = document.createElement("p");
    date.classList.add("post-date");
    date.innerText= inputDate;


    const description = document.createElement("p");
    description.classList.add("post-description");
    description.innerText = inputtextarea;

    const button= document.createElement("div")
    button.classList.add("profile")

    const btn=document.createElement("button");
    const a= document.createElement("a");
    a.textContent="Read More";


    post.appendChild(img);
    post.appendChild(category);
    post.appendChild(headline);
    post.appendChild(date);
    post.appendChild(description);
    btn.appendChild(a);
    button.appendChild(btn);
    post.appendChild(button);
    container.appendChild(post);

    console.log(date.textContent);
    console.log(date);


    document.getElementById("category").value= " ";
    document.getElementById("headline").value="";
    document.getElementById("textarea").value="";
    document.getElementById("image").src="https://image.freepik.com/free-vector/input_53876-25528.jpg";
    document.getElementById("date").value="";
    document.getElementById("file");


    const form=document.getElementById("section1");
    form.style.display="none"

})


let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})






