$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var word = $("#palindrome").val().split('');
    if (word.toString() === word.reverse().toString()){
      $("p").text("Yes, this works");
    }else{
      $("p").text("This does not work");
    }

    event.preventDefault();
  });
  console.log(factor(5));
  console.log(factorRec(5));
  console.log(primeSifting(99));
});

function factor(x){
  for(var i = x; i > 1;i--)
  {
    x*=i-1;
  }
  return x;
}

function factorRec(x){
  if(x > 1){
  return x*(factorRec(x-1));
  }else{
  return 1;
  }
}

function primeSifting(x){
  var primes = [];
  for(var i = 2;i<=x;i++){
    primes.push(i);
  }
  for(var i = 0;i<primes.length;i++)
  {
    primes = primes.filter(function(prime){
      return(prime % primes[i] !== 0 || primes.indexOf(prime)<=i);
    })
  }
  return primes;
}
