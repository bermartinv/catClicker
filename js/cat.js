
(function(){
    let elements = document.querySelectorAll(".cat");
    let count = 0;
    for (let i = 0; i < elements.length ; i++){
        elements[i].addEventListener('click',counter());
    }

    function counter(){
            
            return function(){
                count++;
                console.log(count);
            }
        };

})();