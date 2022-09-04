//var x = [1, 2, 3, 4, 5, 6];
//var y = x;
//document.write(x + "<br>");
//1,2,3,4,5,6
//x.shift();
//2,3,4,5,6
//x.unshift(7, 8);
//7,8,2,3,4,5,6
//y.splice(2, 2, "A")
//1,2,A,5,6
//document.write(y + "<br>");
//var pets = ["dog", "cat", "ox", "duck", "frog"];
//pets.splice(1, 3, "a", "b");
//dog,a,b,frog
//pets.splice(1, 2);
//dog,duck,frog
//var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
//pets = pets.slice(3,5);
//duck,frog
//document.write(pets + "<br>");
//var sizes = ["S", "M", "XL", "XXL", "XXXL"];
//sizes.splice(2, 0, "L");
//document.write(sizes);
//var x = ["A"];
//x.unshift("B");
//document.write(x);
//alert(x[0]);
//let x = 1
//for (let i = 0; i < 5; i++) {
//    let x = 2
//	document.write("Inside the loop:", x * i, "we<br>");
//}
//document.write("Outside the loop:", x);
//function x(a) {
//    return [a, Number(a) + 1];
//}
//f = x(5);
//alert(f[1]);
//alert(f[0]);
//let x = 5;
//function a() {
//    let x = 9;
//    return x
//}
//console.log(x);
//console.log(a());
let dayOfWk = "Fri"; 
switch(dayOfWk) {
    case "Sat" :
    case "Sun" :
    alert("Whoopee");
    break;
    case "Fri" :
    alert("TGIF!");
    break;
    default :
    alert("Shoot me now!");
    }
