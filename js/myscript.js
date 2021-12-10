const container = document.getElementById("container"); //richiamo il container (dove inserirò i vari box) nel file HTML

for(let i = 1; i <= 100; i++){ // creazione ciclo For

    if((i % 3 == 0) && (i % 5 == 0)){
        container.innerHTML += '<div class="box fizzbuzz">' + 'dfsf' + '</div>';
    } else if(i % 5 == 0){
        container.innerHTML += '<div class="box buzz">' + i + '</div>';
    } else if(i % 3 == 0){
        container.innerHTML += '<div class="box fizz">' + i + '</div>';
    } else{
        container.innerHTML += '<div class="box">' + i + '</div>';
    }
}