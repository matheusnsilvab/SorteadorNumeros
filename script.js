var numeroSorteado = document.querySelector("div.box h1");
var botaoSortear = document.querySelector("div.box button");
var roleta = []
for(i = 0; 1<=50; i++) {
   roleta.push(i)
}

botaoSortear.addEventListener("click", () => {
    numeroSorteado.innerHTML = "O número sorteado é " + roleta[Math.floor(Math.random() * roleta.length)]
});