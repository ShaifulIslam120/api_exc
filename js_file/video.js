// console.log("mara khamo mama mara khamo");
// load catagories
const loadCatagories=() =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCatagories(data.categories))
    .catch((error)=> console.log(error));
}
// load videos

// diplay catagories
const displayCatagories=(catagories) =>{
    const catagorieselement=document.getElementById("Catagories")
   catagories.forEach((item)=>{
    console.log(item);
//   create button
     const button= document.createElement("button")
     button.classList="btn"
     button.innerHTML=item.category
    //  add button
    catagorieselement.append(button)
   })
}
const loadVideos=() =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error)=> console.log(error));
}
function getstringtimes(time){
    const hour=parseInt(time/3600)
    let remainderSecond= time%3600
    const minitue =parseInt(remainderSecond/60)
    remainderSecond= remainderSecond%60
    return `${hour} hour ${minitue} minitue ${remainderSecond} second ago`
}
const displayVideos= (videos) =>{
    const videoContainer=document.getElementById("videos")
    videos.forEach((Video)=>{
        console.log(Video);
        const card=document.createElement("div")
        card.classList="card card-compact"
        card.innerHTML= `
        <figure class="h-[200px] relative">
    <img
      src=${Video.thumbnail
      }
      alt="Shoes" class="w-full h-full object-cover" />
      ${Video.others.posted_date?.length==0 ? "": `<span class="absolute bg-black text-white text-xs right-2 bottom-2">${ getstringtimes(Video.others.posted_date)}</span>`}
      
  </figure>
  <div class="px-0 py-2 gap-2 flex">
    <div >
    <img src=${Video.authors[0].profile_picture} alt="" class="h-10 w-10 rounded-full">
</div>
<div>
    <h2 class="font-bold text-xl">${Video.title}</h2>
    <div class="flex items-center gap-2" >
       <p>${Video.authors[0].profile_name}</p>
       ${Video.authors[0].
        verified == true?'<img src="https://img.icons8.com/?size=48&id=SRJUuaAShjVD&format=png" class="w-[20px] h-[20px]">' :''
        }
     
   
</div>
       <p>${Video.others.views}</p>
</div> 
  </div>
        `
        videoContainer.append(card)
    })
}

loadCatagories();
loadVideos()
