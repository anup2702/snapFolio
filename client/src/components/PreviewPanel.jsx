const PreviewPanel = ({ profile, projects }) => {
  return (
    <div
      id="preview"
      className="bg-white p-6 rounded shadow text-black font-sans max-w-3xl mx-auto"
      style={{  backgroundColor: "#fff", fontFamily: "Arial, sans-serif" }}
    >
      {/* Profile Section */}
      <div className="text-center mb-6">
        {profile.avatar && (
          <img
            src={profile.avatar}
            alt="avatar"
            className="w-24 h-24 rounded-full mx-auto mb-2"
            crossOrigin="anonymous"
          />
        )}
        <h1 className="text-3xl font-bold">{profile.name}</h1>
        <p className="text-gray-700">{profile.bio}</p>

        <div className="flex justify-center space-x-6 mt-3 text-sm text-blue-600">
          {profile.github && <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>}
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          {profile.twitter && <a href={profile.twitter} target="_blank" rel="noreferrer">Twitter</a>}
        </div>
      </div>

      <hr className="my-6" />

      {/* Projects Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Projects</h2>
        {projects.length === 0 ? (
          <p className="text-gray-500 italic">No projects added yet.</p>
        ) : (
          projects.map((p, i) => (
            <div key={i} className="mb-6 border-b pb-4">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-gray-800">{p.description}</p>
              <p className="text-sm text-gray-600 mt-1">Tech Stack: {p.techStack}</p>
              <div className="flex space-x-4 mt-2 text-sm">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                    GitHub
                  </a>
                )}
                {p.liveLink && (
                  <a href={p.liveLink} target="_blank" rel="noreferrer" className="text-green-600 underline">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PreviewPanel;
