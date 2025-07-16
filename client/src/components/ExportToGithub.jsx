import { Octokit } from "@octokit/rest";

const ExportToGitHub = ({ html, css }) => {
  const createRepoAndPush = async () => {
    const token = localStorage.getItem("github_token");
    if (!token) return alert("Please log in first.");

    const octokit = new Octokit({ auth: token });

    const username = (await octokit.rest.users.getAuthenticated()).data.login;
    const repoName = `portfolio-${Date.now()}`;

    // Create new repo
    await octokit.rest.repos.createForAuthenticatedUser({
      name: repoName,
      private: false,
      auto_init: true,
    });

    // Push files to the default branch (main)
    await octokit.rest.repos.createOrUpdateFileContents({
      owner: username,
      repo: repoName,
      path: "index.html",
      message: "Add index.html",
      content: btoa(unescape(encodeURIComponent(html))),
    });

    await octokit.rest.repos.createOrUpdateFileContents({
      owner: username,
      repo: repoName,
      path: "style.css",
      message: "Add style.css",
      content: btoa(unescape(encodeURIComponent(css))),
    });

    const repoUrl = `https://github.com/${username}/${repoName}`;
    alert(`Portfolio pushed to GitHub!\n🔗 Repo: ${repoUrl}`);
  };

  return (
    <div className="text-center mt-6">
      <button
        onClick={createRepoAndPush}
        className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        Push to GitHub
      </button>
    </div>
  );
};

export default ExportToGitHub;
