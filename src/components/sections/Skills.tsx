import { useState } from 'react';
import { skillsData } from '../../data/skills';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'frontend', 'backend', 'languages', 'tools'];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical expertise and professional skillset
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 md:gap-4 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md capitalize transition-all ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
              <h3 className="font-medium text-center">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 mt-3 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-emerald-500 h-full rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;