
var limit=slice.filter((e,i)=>i<=7)

var arr = [1,2,3,4,5]

limit.map((e,i)=>{
    var value=e.rating;
    var arr=[];
    for (let index = 0; index < value; index++) {
        arr.push(i)
    }
   limit[i]["rating"]=arr;
})

var render=`
${limit.map(e=>(`
  <div class="col-4" id= "whatever_${e}">
 <a href="products/product1.html"  onclick="_event(${e.isbn})">
  <img src="${e.image}">
  <h4 class="price">${e.name}</h4>
  <div class="rating">
    <div id= "emptystars">
    ${arr.map(e =>(`<i class="fa fa-star-o"></i>`)).join(" ")}
    </div>
     
    <div id= "fullstars">
    ${e.rating.map(e =>(`<i class="fa fa-star"></i>`)).join(" ")}
    </div>
  </div>
  <p class="price">R${e.price}</p>
  </a>
  </div>
  `)).join(" ")}
`;


