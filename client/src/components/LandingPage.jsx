// client/src/components/LandingPage.jsx
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-indigo-200 flex flex-col items-center justify-center text-center p-8">
      <div className="mb-8">
        <a
          href="https://github.com/anup2702/snapFolio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 mt-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-black transition"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.01c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.26 1.87 1.26 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.25-3.25-.13-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.69.25 2.94.12 3.25.78.85 1.25 1.93 1.25 3.25 0 4.63-2.81 5.66-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.83.57A12 12 0 0012 0z" />
          </svg>
          Open Source on GitHub
        </a>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
        Quick Profile Portfolio Builder
      </h1>

      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
        Instantly generate your developer portfolio by just filling in your
        profile & project details. Live preview, zero coding.
      </p>

      {/* Get Started Button */}
      <Link to="/builder">
        <button className="px-6 py-3 text-white font-semibold bg-blue-600 rounded-lg shadow hover:scale-105 hover:bg-blue-700 transition-all duration-300">
          Get Started
        </button>
      </Link>

      {/* Feature Highlights */}
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-6xl w-full px-4">
        {[
          {
            title: "Live Preview",
            desc: "Your portfolio updates in real-time as you type. What you see is what you get.",
          },
          {
            title: "Export as ZIP",
            desc: "Download a ready-to-deploy static site (HTML + CSS) with a single click.",
          },
          {
            title: "No Coding Needed",
            desc: "Just fill in your info. We generate the code and the live preview for you.",
          },
          {
            title: "Push to GitHub",
            desc: "Login with GitHub to push your portfolio as a repo and optionally deploy manually.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all hover:scale-[1.02] duration-300"
          >
            <h2 className="font-bold text-lg mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* How to Use */}
      <div className="mt-16 bg-white rounded-xl shadow-lg max-w-3xl w-full px-6 py-8 text-left">
        <h3 className="text-2xl font-bold mb-4 text-blue-800">How to Use</h3>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>
            Click <strong>“Get Started”</strong> to open the builder.
          </li>
          <li>
            Fill in your <strong>Profile</strong> and <strong>Project</strong>{" "}
            details.
          </li>
          <li>
            Watch the <strong>Live Preview</strong> update instantly.
          </li>
          <li>
            Click <strong>“Export as ZIP”</strong> to download your site.
          </li>
          <li>
            Login if want to push your code on <em>Github</em>
          </li>
          <li>
            Optionally deploy to <em>Netlify Drop</em> or GitHub Pages manually.
          </li>
        </ol>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-sm text-gray-500">
        Built with 💙 by{" "}
        <a
          className="underline hover:text-blue-600 transition"
          href="https://www.linkedin.com/in/anup001/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anup Kumar
        </a>
      </footer>
    </div>
  );
};

export default LandingPage;
