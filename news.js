const newsData = [
  {
    id: null,
    image: "pic/nan.png",
    text: "更多消息敬請期待。",
    date: "????/??/??",
    link: ""
  },
  {
    id: null,
    image: "pic/nan.png",
    text: "更多消息敬請期待。",
    date: "????/??/??",
    link: ""
  },
  {
    id: null,
    image: "pic/nan.png",
    text: "更多消息敬請期待。",
    date: "????/??/??",
    link: ""
  },
  {
    id: "001",
    image: "pic/apple.png",
    text: "月藍傳奇Remake絕無城DLC火熱製作中！",
    date: "2025/5/12",
    link: "news-detail.html?id=001"
  },
  {
    id: "002",
    image: "pic/apple.png",
    text: "月藍傳奇Remake於Steam參與RM遊戲節，進行半價促銷。",
    date: "2025/5/12",
    link: "news-detail.html?id=002"
  },
  {
    id: "003",
    image: "pic/apple.png",
    text: "月藍傳奇Remake外傳─百草的願望，進行Steam上架審核中。",
    date: "2025/5/12",
    link: "news-detail.html?id=003"
  },
  {
    id: "004",
    image: "pic/apple.png",
    text: "期間限定，《謳歌的聖女》現在進行遊戲，即可獲得【世界樹的樹枝】。",
    date: "2025/5/12",
    link: "news-detail.html?id=004"
  },
  {
    id: "005",
    image: "pic/apple.png",
    text: "為了感謝玩家們的喜愛，《謳歌的聖女》將變更為免費遊戲。",
    date: "2025/5/12",
    link: "news-detail.html?id=005"
  }
];

let newsPage = 1;
const newsPerPage = 4;

function renderNewsCards(containerId) {
  const wrapper = document.getElementById(containerId);
  wrapper.innerHTML = "";

  const reversedData = [...newsData].reverse();
  const start = (newsPage - 1) * newsPerPage;
  const end = start + newsPerPage;
  const pageData = reversedData.slice(start, end);

  pageData.forEach(news => {
    const isPlaceholder = news.text.includes("更多消息敬請期待。");

    const card = document.createElement(isPlaceholder ? "div" : "a");
    card.className = "news-card" + (isPlaceholder ? " no-hover" : "");
    if (!isPlaceholder) card.href = `news-detail.html?id=${news.id}&fromPage=${newsPage}`;

    card.innerHTML = `
      <img src="${news.image}" alt="消息圖">
      <div class="news-text">
        <p>${news.text}</p>
      </div>
      <span class="news-date">${news.date}</span>
    `;
    wrapper.appendChild(card);
  });

  renderNewsPagination();
}

function renderNewsPagination() {
const pagination = document.getElementById("news-pagination");
  pagination.innerHTML = "";

  const totalPages = Math.ceil(newsData.length / newsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.className = "page-btn" + (i === newsPage ? " active" : "");
    btn.textContent = i;
    btn.addEventListener("click", () => {
      newsPage = i;
      renderNewsCards("news-wrapper");
    });
    pagination.appendChild(btn);
  }
}

renderNewsCards("news-wrapper");