
(function(){
    let elements = document.querySelectorAll(".cat");
    let texts = document.getElementById("times");
    let name = document.getElementById("nameCat");
    let layout = document.getElementById("screen_img");
    let address = ["images/cat.jpg","images/cat2.jpg","images/cat3.jpg","images/cat4.jpg","images/cat5.jpg"];
    let Catname = ["Peter","mini", "minino", "player", "ugly"];
    for (let i = 0; i < elements.length ; i++){
        console.log(elements[i]);
        elements[i].addEventListener('click',counter(i,address,Catname));
    }

    function counter(i,address,Catname){
        let count = 0;
        let imagen = address[i];
         
            return function(){
                count++;
                texts.innerHTML = count;
                layout.setAttribute("src",address[i]);  
                name.innerHTML = Catname[i];
            }
        console.log(layout);
        };

})();