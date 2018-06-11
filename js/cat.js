
(function(){
    let elements = document.querySelectorAll(".cat");
    let texts = document.querySelectorAll(".times")
    for (let i = 0; i < elements.length ; i++){
        console.log(elements[i]);
        elements[i].addEventListener('click',counter(i));
    }

    function counter(i){
        let count = 0;   
            return function(){
                count++;
                texts[i].innerHTML = count;
            }
        
        };

})();