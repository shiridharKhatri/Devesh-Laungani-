// Array of blog posts
const blog = [
  {
    title: "HACKATHONS AND WHY THEY MATTER",
    category: "HACKATHONS",
    image: "/blogs/blog1.png",
    paragraph:
      " Hackathons ~ What are those? You know that place you always dream of with all the candy, chips, cookies, cupcakes, unicorns, and other delicious snacks all at your fingertips. You can get all of that at hackathons, except the unicorn part. I was joking about that, but you get the point. The perfect environment for […]",
    link: "/blogs/hackathons-and-why-they-matter.html",
  },
];

// Function to render blog section
const renderBlogSection = () => {
  const blogContainer = document.getElementById("blogContainer");
  let blogHTML = "";

  blog.forEach((post) => {
    const postHTML = `
    <h1>BLOG</h1>
          <div class="blogsCard">
            <a href="${post.link}">
              <h2>${post.title}</h2>
            </a>
            <h3><a href="/category/${post.category.toLowerCase()}.html">${
      post.category
    } ·</a></h3>
            <a href="${post.link}"><img src="${post.image}" alt="blogs" /></a>
            <p>${post.paragraph}</p>
          </div>
        `;
    blogHTML += postHTML;
  });

  blogContainer.innerHTML = blogHTML;
};

// Function to render hackathons section
const renderHackathonsSection = () => {
  const hackathonsContainer = document.getElementById("hackathonsId");
  let hackathonsHTML = "";

  blog.forEach((post) => {
    if (post.category === "HACKATHONS") {
      const postHTML = `
          <div class="blogsCard">
            <a href="${post.link}">
              <h2>${post.title}</h2>
            </a>
            <h3><a href="/category/${post.category.toLowerCase()}.html">${
        post.category
      } ·</a></h3>
            <a href="${post.link}"><img src="${post.image}" alt="blogs" /></a>
            <p>${post.paragraph}</p>
          </div>
        `;
      hackathonsHTML += postHTML;
    }
  });

  hackathonsContainer.innerHTML = hackathonsHTML;
  console.log(hackathonsContainer);
};

// Function to render recent section
const renderRecentSection = () => {
  const recentList = document.getElementById("recent");
  let recentHTML = "";

  blog.forEach((post) => {
    recentHTML += `<li><a href="${post.link}">${post.title}</a></li>`;
  });

  recentList.innerHTML = recentHTML;
};

document.addEventListener("DOMContentLoaded", function () {
  renderRecentSection();
  renderBlogSection();
});
renderHackathonsSection();
