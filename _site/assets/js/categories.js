const categories = { jekyll: [{ url: `/posts/jekyll-markdown/`, date: `04 Nov 2021`, title: `Markdown do Jekyll`},],blogging: [{ url: `/posts/criar-atalhos-scrcpy/`, date: `20 May 2024`, title: `Como criar atalhos scrcpy com fio/sem fio`},{ url: `/posts/instalar-arquivos-deb/`, date: `19 May 2024`, title: `Como instalar arquivos .deb via terminal no linux`},{ url: `/posts/ventoy-on-linux/`, date: `02 Oct 2023`, title: `Configurando um pendrive bootável com o Ventoy no linux`},{ url: `/posts/hello-homelab/`, date: `01 Oct 2023`, title: `Hello World! (by Max)`},],linux: [{ url: `/posts/instalar-postgres-debian-12/`, date: `25 May 2024`, title: `Como instalar o PostgreSQL e o pgadmin4 (web/desktop) no linux (Debian 12)`},{ url: `/posts/bypass-senha-windows-11/`, date: `20 May 2024`, title: `Como não conectar ao Wifi durante a instalação do Windows 11`},{ url: `/posts/criar-atalhos-scrcpy/`, date: `20 May 2024`, title: `Como criar atalhos scrcpy com fio/sem fio`},{ url: `/posts/free-download-manager/`, date: `19 May 2024`, title: `O melhor gerenciador de downloads do linux`},{ url: `/posts/instalar-arquivos-deb/`, date: `19 May 2024`, title: `Como instalar arquivos .deb via terminal no linux`},{ url: `/posts/ventoy-on-linux/`, date: `02 Oct 2023`, title: `Configurando um pendrive bootável com o Ventoy no linux`},],utilitario: [{ url: `/posts/criar-atalhos-scrcpy/`, date: `20 May 2024`, title: `Como criar atalhos scrcpy com fio/sem fio`},{ url: `/posts/instalar-arquivos-deb/`, date: `19 May 2024`, title: `Como instalar arquivos .deb via terminal no linux`},{ url: `/posts/ventoy-on-linux/`, date: `02 Oct 2023`, title: `Configurando um pendrive bootável com o Ventoy no linux`},],utilitarios: [{ url: `/posts/instalar-postgres-debian-12/`, date: `25 May 2024`, title: `Como instalar o PostgreSQL e o pgadmin4 (web/desktop) no linux (Debian 12)`},{ url: `/posts/bypass-senha-windows-11/`, date: `20 May 2024`, title: `Como não conectar ao Wifi durante a instalação do Windows 11`},{ url: `/posts/free-download-manager/`, date: `19 May 2024`, title: `O melhor gerenciador de downloads do linux`},],postgres: [{ url: `/posts/instalar-postgres-debian-12/`, date: `25 May 2024`, title: `Como instalar o PostgreSQL e o pgadmin4 (web/desktop) no linux (Debian 12)`},],pgsql: [{ url: `/posts/instalar-postgres-debian-12/`, date: `25 May 2024`, title: `Como instalar o PostgreSQL e o pgadmin4 (web/desktop) no linux (Debian 12)`},],debian12: [{ url: `/posts/instalar-postgres-debian-12/`, date: `25 May 2024`, title: `Como instalar o PostgreSQL e o pgadmin4 (web/desktop) no linux (Debian 12)`},], }

console.log(categories)

window.onload = function () {
  document.querySelectorAll(".category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText.replace(" ","_")];
      let html = ``
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};