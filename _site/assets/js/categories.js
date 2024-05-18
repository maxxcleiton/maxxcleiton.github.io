const categories = { fiction: [{ url: `/posts/the-purpose-of-education/`, date: `12 Dec 1948`, title: `The Purpose of Education`},],jekyll: [{ url: `/posts/jekyll-markdown/`, date: `04 Nov 2021`, title: `Jekyll Markdown`},{ url: `/posts/the-purpose-of-education/`, date: `12 Dec 1948`, title: `The Purpose of Education`},],Test_Post: [{ url: `/posts/jekyll-markdown/`, date: `04 Nov 2021`, title: `Jekyll Markdown`},],first_post: [{ url: `/posts/jekyll-markdown/`, date: `04 Nov 2021`, title: `Jekyll Markdown`},],blogging: [{ url: `/posts/ventoy-on-linux/`, date: `02 Oct 2023`, title: `Configurando um pendrive bootável com o Ventoy no linux`},{ url: `/posts/hello-homelab/`, date: `01 Oct 2023`, title: `Hello World! (by Mando's)`},],linux: [{ url: `/posts/ventoy-on-linux/`, date: `02 Oct 2023`, title: `Configurando um pendrive bootável com o Ventoy no linux`},],utilitario: [{ url: `/posts/ventoy-on-linux/`, date: `02 Oct 2023`, title: `Configurando um pendrive bootável com o Ventoy no linux`},], }

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