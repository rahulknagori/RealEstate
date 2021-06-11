let corouselImage = document.querySelectorAll(".corousel-image");
let price = document.querySelector(".price");
let title = document.querySelector(".title");
let bed = document.querySelector(".beds");
let bath = document.querySelector(".baths")
let desc = document.querySelector(".desc")
let sqft = document.querySelector(".sq-ft")
let currentTargetValue = localStorage.getItem("currentTargetlocalStorage")

let content = [{
    id: "0",
    img1:"../images/featured-img3.jpg",
    img2: "../images/show-page-images/main-home-image1.jpg",
    img3: "../images/show-page-images/main-home-image2.jpg",
    price: "£1000000",
    title: "3 bedroom house for sale",
    beds: "3 beds",
    baths: "2 baths",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam nam molestias nisi doloremque voluptate ipsum culpa rerum natus consequatur.",
    sqft: "4000 sq ft"
},
{
    id: "1",
    img1:"../images/featured-img1.jpg",
    img2: "../images/show-page-images/2nd-home/2nd-home-image1.jpg",
    img3: "../images/show-page-images/2nd-home/2nd-home-image2.jpg",
    price: "£500000",
    title: "2 bedroom house for sale",
    beds: "2 beds",
    baths: "2 baths",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam nam molestias nisi doloremque voluptate ipsum culpa rerum natus consequatur.",
    sqft: "1400 sq ft"
},
{
    id: "2",
    img1:"../images/featured-img2.jpg",
    img2: "../images/show-page-images/3rd-home/3rd-home-image1.jpg",
    img3: "../images/show-page-images/3rd-home/3rd-home-image2.jpg",
    price: "£250000",
    title: "1 bedroom house for sale",
    beds: "1 bed",
    baths: "1 bath",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam nam molestias nisi doloremque voluptate ipsum culpa rerum natus consequatur.",
    sqft: "1,031 sq ft"
}
]


window.onload = function whenLoaded(){
    for(let i = 0; i < content.length; i++){
    if( currentTargetValue == content[i].id){
       corouselImage[0].src = content[currentTargetValue].img1;
       corouselImage[1].src = content[currentTargetValue].img2;
       corouselImage[2].src = content[currentTargetValue].img3;
       price.textContent = content[currentTargetValue].price;
       title.textContent = content[currentTargetValue].title;
       bed.textContent = content[currentTargetValue].beds;
       bath.textContent = content[currentTargetValue].baths;
       desc.textContent = content[currentTargetValue].desc;
       sqft.textContent = content[currentTargetValue].sqft;
   }
}
}

