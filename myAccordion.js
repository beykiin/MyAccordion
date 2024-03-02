// Bir web sitesi tanımlıyoruz başlangıçta sitenin adı olsun alt kısımda açılır pencere olsun ve siteye sık sorulan sorular ve site tanıtım videosu ve footer site sayfanoın ortasında gölgelendirme kullanılsın

let accordions=document.getElementsByClassName("accordion")

for(let i=0;i<accordions.length;i++){
    accordions[i].addEventListener("click",function(){
        this.classList.toggle("active")
        let panel=this.nextElementSibling
        if(panel.style.maxHeight){
            panel.style.maxHeight=null
        }
        else{
            panel.style.maxHeight=panel.scrollHeight+"px"
        }
    })
}