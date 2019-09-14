var vec = new Array(10), mayor, menor;
vec = [4,5,3,6,2,8,7,1,9];
mayor = vec[0];
menor = vec[0];
for (var i=0;i < 10; i++) {
  if (vec[i] > mayor) {
    mayor = vec[i];
    
  }
  if (vec[1]< menor) {
    menor = vec[i];
  }
 
}
document.write("El numero mayor es:"+mayor, "\nEl numero menor es:"+menor);