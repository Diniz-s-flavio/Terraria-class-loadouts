document.addEventListener("DOMContentLoaded", function() {
    // Criação do elemento nav
    var navElement = document.createElement("nav");
    navElement.className = "menuBar";

    // Conteúdo do nav
    navElement.innerHTML = `
    <div>
    <a href="../../../index.html">
        <strong>
            <p class="menuHomeButton">Terra Loadout</p>
        </strong>
    </a>
    </div>
    <button class="menuBarButton">
        <p>&#9776;</p>
    </button>
    <ul class="menuItens">
        <li class="menuItem"><a href="../content/mage-class.html">
            <p>Mago</p>
        </a></li>
        <li class="menuItem"><a href="../content/melee-class.html">
            <p>Guerrero</p>
        </a></li>
        <li class="menuItem"><a href="../content/ranger-class.html">
            <p>Atirador</p>
        </a></li>
        <li class="menuItem"><a href="../content/summoner-class.html">
            <p>Invocador</p>
        </a></li>
        <li class="menuItem"><a href="../content/super-regen.html">
            <p>Super Regen</p>
        </a></li>
    </ul>
    `;

    // Adiciona o elemento nav ao corpo da página
    document.body.appendChild(navElement);

    navElement.style.position = "fixed";
    navElement.style.top = "0";

    var mainContent = document.querySelector(".main-content"); // Selecione a classe ou id do seu conteúdo principal
    if (mainContent) {
        mainContent.style.marginTop = navElement.offsetHeight + "px";
    }
});