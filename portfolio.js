// Array of portfolio items
const portfolio = [
    {
      name: "STANDUP APP",
      src: "/portfolio/portfolio1.png",
      link: "/portfolio/standup-app.html",
    },
    {
      name: "FIRETHORN",
      src: "/portfolio/portfolio2.png",
      link: "/portfolio/firethorn.html",
    },
    {
      name: "WORKMENOW",
      src: "/portfolio/portfolio3.png",
      link: "/portfolio/workmenow.html",
    },
    {
      name: "SHOP ME NOW",
      src: "/portfolio/portfolio4.png",
      link: "/portfolio/shop-me-now.html",
    },
    {
      name: "KRISHNA LUNCH DALLAS",
      src: "/portfolio/portfolio5.png",
      link: "/portfolio/krishna-lunch-dallas.html",
    },
  ];
const renderPortfolioSection = () => {
    const gridItems = document.getElementById("gridItems");
    let portfolioHTML = "";
  
    portfolio.forEach((item) => {
      portfolioHTML += `
        <div class="items">
          <a href="${item.link}">
            <img src="${item.src}" alt="photo">
            <h2>${item.name}</h2>
          </a>
        </div>
      `;
    });
  
    gridItems.innerHTML = portfolioHTML;
  };
  renderPortfolioSection();