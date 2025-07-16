import { useState } from "react";

const ProjectForm = ({ projects, setProjects }) => {
  const handleChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  const handleAddProject = () => {
    setProjects([
      ...projects,
      {
        title: "",
        description: "",
        github: "",
        liveLink: "",
        techStack: "",
      },
    ]);
  };

  const handleRemoveProject = (index) => {
    const updated = [...projects];
    updated.splice(index, 1);
    setProjects(updated);
  };

  const handleClearAll = () => {
    localStorage.removeItem("portfolio_projects");
    setProjects([]);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Projects</h2>

      {projects.map((project, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          <input
            type="text"
            placeholder="Title"
            value={project.title}
            onChange={(e) => handleChange(index, "title", e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />

          <textarea
            placeholder="Description"
            value={project.description}
            onChange={(e) => handleChange(index, "description", e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />

          <input
            type="text"
            placeholder="GitHub Link"
            value={project.github}
            onChange={(e) => handleChange(index, "github", e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />

          <input
            type="text"
            placeholder="Live Link (optional)"
            value={project.liveLink}
            onChange={(e) => handleChange(index, "liveLink", e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />

          <input
            type="text"
            placeholder="Tech Stack"
            value={project.techStack}
            onChange={(e) => handleChange(index, "techStack", e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />

          <button
            onClick={() => handleRemoveProject(index)}
            className="text-sm text-red-500 underline"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="flex gap-4 mt-4">
        <button
          onClick={handleAddProject}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Project
        </button>

        <button
          onClick={handleClearAll}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Clear All Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectForm;
