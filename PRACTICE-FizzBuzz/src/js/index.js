var uls = document.querySelector("ul");
for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz"), uls.innerHTML += "<li style='background:red;'>FizzBuzz</li>";
    else if (i % 3 == 0)console.log("Fizz"), uls.innerHTML += "<li style='background:blue;'>Fizz</li>";
    else if (i % 5 == 0)console.log("Buzz"), uls.innerHTML += "<li style='background:green;'>Buzz</li>";
    else console.log(i),uls.innerHTML  += "<li style='background:black;'>" + i + "</li>";
}