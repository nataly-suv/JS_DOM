const articlesData = [
  {
    title: "Заголовок статьи 1",
    content: "Содержание статьи 1",
  },
  {
    title: "Заголовок статьи 2",
    content: "Содержание статьи 2",
  },
];

const listGroupElem = document.querySelector(".list-group");
const addArticleButtonElem = document.getElementById("addArticle");

for (const article of articlesData) {
  const divElem = document.createElement("div");
  divElem.classList.add("box");
  listGroupElem.appendChild(divElem);

  const h2Elem = document.createElement("h2");
  h2Elem.textContent = article.title;
  const pElem = document.createElement("p");
  pElem.textContent = article.content;

  const btnDeletElem = document.createElement('button');
  btnDeletElem.textContent = 'удалить статью';

  divElem.appendChild(h2Elem);
  divElem.appendChild(pElem);
  divElem.appendChild(btnDeletElem);
}

addArticleButtonElem.addEventListener("click", () => {
  const nameArticle = prompt("Название статьи");
//   console.log(nameArticle);
  const contentArticle = prompt("Содержание статьи");
//   console.log(contentArticle);
  articlesData.push({title: nameArticle, content: contentArticle})
  console.log(articlesData);
  
  const divElem = document.createElement("div");
  divElem.classList.add("box");
  listGroupElem.appendChild(divElem);

  const h2Elem = document.createElement("h2");
  h2Elem.textContent = nameArticle;
  const pElem = document.createElement("p");
  pElem.textContent = contentArticle;

  divElem.appendChild(h2Elem);
  divElem.appendChild(pElem);

});
