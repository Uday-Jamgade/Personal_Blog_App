
const selimg= document.getElementById("image");
const inputfile= document.getElementById("file");
const inputCategory = document.getElementById("category").value;
const inputheadline = document.getElementById("headline").value;
const inputDate= document.getElementById("date").value;
const inputtextarea= document.getElementById("textarea").value;
const Button= document.getElementById("button");
const container = document.getElementById("content");


console.log(inputCategory);


inputfile.onchange=function(){
    selimg.src= URL.createObjectURL(inputfile.files[0]);
    console.log("image")
    console.log(inputCategory.value);
}

Button.addEventListener("click" , function(){

    
    
const params = new URLSearchParams({ inputCategory, inputheadline , inputtextarea }).toString(); window.location.href = `index.html?${params}`


if (window.location.pathname.includes('index.html')) { const params = new URLSearchParams(window.location.search); const inputCategory = params.get('inputCatagory'); const inputheadline = params.get('inputheadline'); const inputtextarea = params.get('inputtextarea');}

    const post= document.createElement("div");
    post.classList.add="post-box ,tech";
    // const img = document.createElement("img");
    // img.src = inputfile;
    // img.classList.add= "post-img";

    const category = document.createElement("h1");
    category.classList.add= "category";
    category.innerText=  inputCategory;

    const headline = document.createElement("a");
    headline.classList.add ="post-title";
    headline.innertext= inputheadline;


    const description = document.createElement("p");
    description.classList.add = "post-description";
    description.innerText = inputtextarea;


    // post.appendChild(img);
    post.appendChild(category);
    post.appendChild(headline);
    post.appendChild(description);
    container.appendChild(post);
    
    console.log(error)

})



