import { Octokit } from "https://esm.sh/@octokit/core";
const octokit = new Octokit({ auth: API_KEY });

const languagesUrl = "https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json";

const repository = document.querySelector(".repository");
const info = repository.querySelector("p");

const refreshBtn = document.getElementById("refresh");
refreshBtn.addEventListener("click", () => {
  getRepositoryInfo.apply(label);
});

async function getLanguages() {
  const response = await fetch(languagesUrl);
  const data = await response.json();

  return data;
}

async function renderLanguages() {
  const ul = document.createElement("ul");
  dropdownList.appendChild(ul);

  const languages = await getLanguages();
  languages.forEach((lang) => {
    const li = document.createElement("li");
    li.textContent = lang.title;
    li.addEventListener("click", () => {
      hideDropdown.call(li); // import from dropdown.js
      getRepositoryInfo.call(li);
      showRefreshBtn();
    });

    dropdownList.querySelector("ul").append(li);
  });
}

async function fetchRepository() {
  const targetLanguage = this.innerHTML.toLowerCase();
  const query = `?q=language%3A${targetLanguage}&type=Repositories`;
  
  try {
    const response = await octokit.request(`GET /search/repositories${query}`, {
      headers: { 'X-GitHub-Api-Version': '2022-11-28' }
    });
    return response.data.items;
  } catch {
    showError();
  }
}

async function getRepositoryInfo() {
  if (label.textContent === "All Languages") {
    alert("Choose language!");
    return;
  }
  
  const MAX_REPOSITORIES = 30;
  const randomIndex = Math.round(Math.random() * (MAX_REPOSITORIES - 1));

  repository.querySelectorAll("div").forEach((elem) => {
    elem.remove();
  });
  renderLoadingScreen();

  const data = await fetchRepository.call(this);
  const { name, description, language, stargazers_count, forks, open_issues, svn_url } = data[randomIndex];
  renderRepository(name, description, language, stargazers_count, forks, open_issues, svn_url);
}

function renderRepository(name, description, language, starsCount, forksCount, issuesCount, url) {
  if (!repository.classList.contains("got-repo")) {
    repository.classList.add("got-repo");
  }
  document.querySelector("p").style.display = "none";

  // every element is div
  const [repoName, repoDescription, repoStats,
          lang, stars, forks, issues, repoLink] = Array(8).fill(0).map(() => document.createElement("div"));
  // repo
  repoName.className = "repo-name";
  repoName.textContent = name;

  repoDescription.className = "repo-description";
  repoDescription.textContent = description;

  repoStats.className = "repo-stats";

  // repo stats
  lang.classList.add("language", "stat");
  lang.textContent = language;

  stars.classList.add("stars", "stat");
  stars.textContent = starsCount;

  forks.classList.add("forks", "stat");
  forks.textContent = forksCount;

  issues.classList.add("issues", "stat");
  issues.textContent = issuesCount;

  repoLink.classList.add("issues", "stat");
  repoLink.innerHTML = `<a href="${url}" target="_blank">${githubIcon}</a>`;

  // appending children
  stars.innerHTML += starIcon; // import from "icons.js"
  forks.innerHTML += forkIcon; // import from "icons.js"
  issues.innerHTML += issueIcon; // import from "icons.js"
  
  repoStats.append(lang, stars, forks, issues, repoLink);
  repository.append(repoName, repoDescription, repoStats);
}

function renderLoadingScreen() {
  repository.style.backgroundColor = "var(--repo-background-clr)";
  repository.classList.remove("got-repo");
  info.textContent = "Loading, please wait...";
  info.style.display = "flex";
  
  refreshBtn.style.setProperty("--refresh-background-clr", "black");
  refreshBtn.style.setProperty("--refresh-background-hover-clr", "rgb(27, 27, 27)");
}

function showError() {
  repository.style.backgroundColor = "var(--error-repo-background-clr)";
  repository.classList.remove("got-repo");
  info.textContent = "Error fetching repositories";

  refreshBtn.style.setProperty("--refresh-background-clr", "red");
  refreshBtn.style.setProperty("--refresh-background-hover-clr", "rgb(228, 0, 0)");
}

function showRefreshBtn() {
  if (!refreshBtn.style.display) {
    refreshBtn.style.display = "block";
  }
}

renderLanguages();
