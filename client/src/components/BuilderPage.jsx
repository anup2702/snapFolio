// client/src/components/BuilderPage.jsx
import { useState, useEffect } from "react";
import ProfileForm from "./ProfileForm";
import ProjectForm from "./ProjectForm";
import PreviewPanel from "./PreviewPanel";
import ExportButton from "./ExportButton";
import ExportToGitHub from "./ExportToGitHub";
import LoginButton from "./LoginButton";

import { generateHTML, generateCSS } from "../utils/exportUtils.js";

const BuilderPage = () => {
  const [profile, setProfile] = useState({
    name: "",
    bio: "",
    avatar: "",
    github: "",
    linkedin: "",
    twitter: "",
    skills: [],
  });

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("portfolio_projects");
    return saved ? JSON.parse(saved) : [];
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("github_token");
    setIsLoggedIn(false);
    window.location.href = "/builder"; // or use navigate("/"), if using React Router
  };

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (token) {
      localStorage.setItem("github_token", token);
      window.history.replaceState({}, document.title, "/builder");
    }

    if (localStorage.getItem("github_token")) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio_projects", JSON.stringify(projects));
  }, [projects]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-100 min-h-screen">
      <div className="space-y-6">
        {!isLoggedIn ? (
          <LoginButton />
        ) : (
          <div className="flex items-center justify-between">
            <p className="text-green-700 font-semibold">
              Logged in with GitHub
            </p>
            <button
              onClick={handleLogout}
              className="ml-4 px-4 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        )}

        <ProfileForm profile={profile} setProfile={setProfile} />
        <ProjectForm projects={projects} setProjects={setProjects} />
      </div>

      <div className="space-y-4">
        <PreviewPanel profile={profile} projects={projects} />
        <ExportButton profile={profile} projects={projects} />
        {isLoggedIn && (
          <ExportToGitHub
            html={generateHTML(profile, projects)}
            css={generateCSS()}
          />
        )}
      </div>
    </div>
  );
};

export default BuilderPage;
