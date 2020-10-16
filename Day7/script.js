const api_url="https://api.pexels.com/v1/curated/",api_token="563492ad6f91700001000001aa56e0052a264057a017e25df1531e2c";
const $=document.querySelector.bind(document);
let loadMore=$('#loadMore');
let searchInput=$('#search');
let container=$('.img-container');
let resultsFound= $('#resultsFound');
let pageIndex=1,perPage=15;
searchInput.addEventListener('keyup',searchFunc);
loadMore.addEventListener('click',loadMorePhotos);
let searchValue="",fetchResult,fetchSearch;
const searchApiURL="https://api.pexels.com/v1/search";

const init = async(index)=>{
 loadMore.setAttribute('data-val','curated');
   
let fetchData= await fetch(`${api_url}?page=${index}&per_page=${perPage}`,{
 method:'GET',
 headers:{
  Accept:"application/json",
  Authorization:api_token,
 }
}).then();
let dataFetched=await fetchData.json();
getData(dataFetched);
console.log(dataFetched)
}
const getData=(data)=>{
   for(let photo of data.photos){
  container.innerHTML+=`<div class="imgbox"><a href="${photo.src.original}" target="_blank"><img src="${photo.src.large}"></a><a class="photographer-link" href="${photo.photographer_url}" target="_blank"><span class="photographer-name">Photo by ${photo.photographer}</span></a></div>`;
 }
 
}
init();
async function searchFunc(e){
  loadMore.setAttribute('data-val','search');
 let pageIndex=1;
 searchValue=e.target.value;
 container.innerHTML="";
 fetchSearch= await fetch(`${searchApiURL}/?query=${searchValue}&page=${pageIndex}&per_page=${perPage}`,{
  method:"GET",
  headers:{
   Accept:"application/json",
   Authorization:api_token
  }
 }).then();
fetchResult= await fetchSearch.json();
resultFunc(fetchResult);
 if(searchValue==""){
  resultsFound.style.visibility="hidden";
  init()
 }
 else{
   resultsFound.style.visibility="visible"
 }
}
async function searchFuncTwo(index){
  
  fetchSearch= await fetch(`${searchApiURL}/?query=${searchValue}&page=${index}&per_page=${perPage}`,{
  method:"GET",
  headers:{
   Accept:"application/json",
   Authorization:api_token
  }
 }).then();
fetchResult= await fetchSearch.json();
resultFunc(fetchResult);
}
const resultFunc=async (result)=>{
resultsFound.innerHTML=`${result.total_results} results`;
 if(result.total_results==0){
  container.innerHTML="<h4>No results</h4>"
 }
 else{
   for(let photo of result.photos){
    container.innerHTML+=`<div class="imgbox"><a href="${photo.src.original}" target="_blank"><img src="${photo.src.large}"></a><a class="photographer-link" href="${photo.photographer_url}" target="_blank"><span class="photographer-name">Photo by ${photo.photographer}</span></a></div>`;
 }
 }
}

async function loadMorePhotos(e){
 let loadMoreResults=e.target.getAttribute('data-val');
 let index=++pageIndex;
 if(loadMoreResults==="curated"){
  init(index);
 }
 else{
  searchFuncTwo(index);
 }

}

