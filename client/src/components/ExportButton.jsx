import JSZip from "jszip";
import { saveAs } from "file-saver";
import ExportPDFButton from "./ExportPDFButton";

const ExportButton = ({ profile, projects }) => {
  const generateHTML = () => {
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${profile.name}'s Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>${profile.name}</h1>
    <p>${profile.bio}</p>
    <div class="links">
      ${profile.github ? `<a href="${profile.github}">GitHub</a>` : ""}
      ${profile.linkedin ? `<a href="${profile.linkedin}">LinkedIn</a>` : ""}
    </div>
    <h2>Projects</h2>
    ${projects
        .map(
          (p) => `
      <div class="project">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <p><strong>Tech:</strong> ${p.techStack}</p>
        <a href="${p.github}">GitHub</a>
        ${p.liveLink ? `<a href="${p.liveLink}">Live</a>` : ""}
      </div>
    `
        )
        .join("")}
  </div>
</body>
</html>
    `;
  };

  const generateCSS = () => {
    return `
body {
  font-family: sans-serif;
  padding: 2rem;
  background: #f9f9f9;
}
.container {
  max-width: 800px;
  margin: auto;
  background: white;
  padding: 2rem;
  border-radius: 8px;
}
.project {
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
}
a {
  margin-right: 1rem;
  color: blue;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
    `;
  };

  const downloadZip = async () => {
    const zip = new JSZip();
    zip.file("index.html", generateHTML());
    zip.file("style.css", generateCSS());

    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "my-portfolio.zip");
  };

  return (
    <div className="flex flex-wrap gap-4 mt-4">
  <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
    Export as ZIP
  </button>

  <button className="px-6 py-2 bg-fuchsia-600 text-white rounded hover:bg-fuchsia-700 transition">
    Preview on Netlify
  </button>
  <ExportPDFButton />
</div>

  );
};

export default ExportButton;
