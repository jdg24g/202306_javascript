const tarjetas = document.querySelectorAll(".tarjeta");
const conteosLikes = [];

for (let i = 0; i < tarjetas.length; i++) {
  const storedLikes = localStorage.getItem(`likes_${i}`);
  conteosLikes[i] = storedLikes ? parseInt(storedLikes) : 0;
}

tarjetas.forEach((tarjeta, numero) => {
  const btnLike = tarjeta.querySelector(".btn");
  const contadorLike = tarjeta.querySelector(".like");

  contadorLike.textContent = `${conteosLikes[numero]} Like(s)`;

  btnLike.addEventListener("click", () => {
    conteosLikes[numero]++;
    contadorLike.textContent = `${conteosLikes[numero]} Like(s)`;
    localStorage.setItem(`likes_${numero}`, conteosLikes[numero]);

    if (conteosLikes[numero] === 50) {
      conteosLikes[numero] = 0;
      localStorage.setItem(`likes_${numero}`, 0);
    }
  });
});
