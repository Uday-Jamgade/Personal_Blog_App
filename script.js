
const selimg= document.getElementById("image");
const inputfile= document.getElementById("file");
const inputCategory = document.getElementById("category").value;
const inputheadline = document.getElementById("headline").value;
const inputDate= document.getElementById("date").value;
const inputtextarea= document.getElementById("textarea").value;
const Button= document.getElementById("button");
const container = document.getElementById("content");


console.log(inputCategory);


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
    post.classList.add="post-box ,tech";
    const img = document.createElement("img");
    img.src = URL.createObjectURL(inputfile.files[0]);
    img.classList.add= "post-img";

    const category = document.createElement("h1");
    category.classList.add= "category";
    category.textContent=  inputCategory;

    const headline = document.createElement("h1");
    headline.href ="#"
    headline.classList.add ="post-title";
    headline.textContent= inputheadline;

    const date = document.createElement("p");
    date.classList.add="post-date";
    date.innerText= inputDate;


    const description = document.createElement("p");
    description.classList.add = "post-description";
    description.innerText = inputtextarea;


    post.appendChild(img);
    post.appendChild(category);
    post.appendChild(headline);
    post.appendChild(description);
    container.appendChild(post);

    console.log(date.textContent);
    console.log(date);


    document.getElementById("category").value= " ";
    document.getElementById("headline").value="";
    document.getElementById("textarea").value="";
    document.getElementById("image").src="";
    document.getElementById("file");
})




