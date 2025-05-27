
const Skills = () => {
  const skillCategories = [
    {
      title: "QA Expertise",
      skills: [
        "Test Planning", 
        "Test Case Design", 
        "Test Execution", 
        "Functional & Non-functional Testing", 
        "Regression Testing", 
        "Smoke Testing", 
        "UAT", 
        "Exploratory Testing", 
        "Defect Tracking using Atlassian Jira",
        "Agile and Scrum Practices",
        "SDLC (Software Development Lifecycle)"
      ]
    },
    {
      title: "Test Automation Engineering",
      skills: [
        "Selenium WebDriver", 
        "TestNG", 
        "Cucumber", 
        "Cypress", 
        "Playwright", 
        "Junit"
      ]
    },
    {
      title: "Programming Languages & Databases",
      skills: [
        "Python", 
        "Ruby", 
        "Java", 
        "JavaScript", 
        "C#", 
        "SQL", 
        "MySQL", 
        "RDBMS", 
        "Oracle", 
        "ER Modeling", 
        "Data Validation", 
        "ETL Testing",
        "Object-oriented Programming"
      ]
    },
    {
      title: "API Testing",
      skills: [
        "Postman", 
        "Swagger", 
        "REST API Testing", 
        "Django", 
        "SoapUI"
      ]
    },
    {
      title: "Other Technical Skills",
      skills: [
        "JMeter", 
        "Jenkins", 
        "CI/CD Pipelines", 
        "Automated Build & Deployment", 
        "SOAP and REST Web Services", 
        "GITHUB",
        "Power BI",
        "Tableau"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="portfolio-card h-full">
              <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 bg-portfolio-purple/10 border border-portfolio-purple/20 text-gray-300 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <div className="portfolio-card">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Key Proficiencies</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    skill: "Test Automation",
                    percentage: 95,
                    color: "from-portfolio-purple to-portfolio-blue"
                  },
                  {
                    skill: "CI/CD Integration",
                    percentage: 90,
                    color: "from-portfolio-blue to-green-500"
                  },
                  {
                    skill: "Functional Testing",
                    percentage: 98,
                    color: "from-green-500 to-portfolio-purple"
                  },
                  {
                    skill: "Performance Testing",
                    percentage: 85,
                    color: "from-yellow-500 to-portfolio-blue"
                  },
                ].map((item, idx) => (
                  <div key={idx} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{item.skill}</span>
                      <span className="text-portfolio-purple">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full bg-gradient-to-r ${item.color}`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
