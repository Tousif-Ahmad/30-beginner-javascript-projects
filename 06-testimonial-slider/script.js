const tetimonials = [
    {
        name : "Sam",
        url : "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias nobis a nam beatae, explicabo autem. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Quaerat, enim"
    },
    {
        name : "Uffexx",
        url : "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias nobis a nam beatae, explicabo autem. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Quaerat, enim"
    },
    {
        name : "Khan",
        url : "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias nobis a nam beatae, explicabo autem. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Quaerat, enim"
    },
]

const textEl = document.querySelector(".text");
const imgEl = document.querySelector("img");
const userName = document.querySelector(".user-name");


updateTestimonials();
let idx = 0;
function updateTestimonials(){
    const {name, url, text} = tetimonials[idx];
    imgEl.src = url;
    textEl.innerText = text;
    userName.innerText = name;
    
    idx++;
    setTimeout(() => {
        updateTestimonials();
    }, 2000);

}