const tarjetas = document.querySelectorAll(".tarjeta");
const conteosLikes = [];

tarjetas.forEach((tarjeta, numero) => {
  const btnLike = tarjeta.querySelector(".btn");

  conteosLikes[numero] = 0;

  btnLike.addEventListener("click", () => {
    conteosLikes[numero]++;
    const contadorLike = tarjeta.querySelector(".like");
    contadorLike.textContent = `${conteosLikes[numero]} Like(s)`;
    //esto es para que no se pueda dar mas de 50 likes a la misma tarjeta
    if (conteosLikes[numero] === 50) {
      conteosLikes[numero] = 0;
    }
  });
});
