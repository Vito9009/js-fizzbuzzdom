const container = document.getElementById("container"); //richiamo il container (dove inserirò i vari box) nel file HTML

for(let i = 1; i <= 100; i++){ // creazione ciclo For

    console.log('numeroStampa', i); //stampa numeri da 1 a 100 in console.log

    if((i % 3 == 0) && (i % 5 == 0)){ //numeri divisibili per 3 e per 5 che mostreranno la scritta FizzBuzz
        container.innerHTML += '<div class="box fizzbuzz">' + 'FizzBuzz' + '</div>';
    } 
     else if(i % 5 == 0){ //numeri divisibili per per 5 che mostreranno la scritta Buzz
        container.innerHTML += '<div class="box buzz">' + 'Buzz' + '</div>';
    }
     else if(i % 3 == 0){ //numeri divisibili per 3 che mostreranno la scritta Fizz
        container.innerHTML += '<div class="box fizz">' + 'Fizz' + '</div>';
    }
     else{ //box che mostreranno solo i numeri corrispondenti alla singola casella
        container.innerHTML += '<div class="box">' + i + '</div>';
    }
}