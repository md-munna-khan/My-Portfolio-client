
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; 

// CodeDisplay Component
const CodeDisplay = () => {
  const codeSnippet = `
  const profile = {
      name: 'Munna',
      title: 'Frontend Developer | Cloud Enthusiast | Problem Solver',
      skills: [
            'Html', 'Css', 'React', 'Express', 'Tailwind',
          'MongoDB', 'Git', 'Discord Development', 
          'JavaScript', 'Node.js', 'Firebase', 'GitHub',
          'Next.js'  
      ],
      hardWorker: true,
      quickLearner: true,
      problemSolver: true,
      hireable: function() {
          return (
              this.hardWorker &&
              this.problemSolver &&
              this.skills.length >= 1 &&
              this.yearsOfExperience >= 2
          );
      }
  };
  `;

  useEffect(() => {
    Prism.highlightAll(); // Highlights the syntax after rendering
  }, []);

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg max-w-full sm:max-w-2xl lg:max-w-4xl mx-auto mt-10">
      {/* Mock Window Header */}
      <div className="flex items-center justify-between bg-gray-800 p-2 rounded-t-lg">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-white text-sm font-semibold sm:text-base md:text-lg">developer.js</span>
      </div>

      {/* Code Block */}
      <pre className="language-javascript mt-2 overflow-x-auto">
        <code className="language-javascript">{codeSnippet}</code>
      </pre>
    </div>
  );
};

export default CodeDisplay;
