
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Riverus Technology Solutions",
      position: "Software Quality Engineer",
      period: "March 2023 - May 2024",
      location: "Pune, India",
      responsibilities: [
        "Led test plan development, test case development, and user acceptance testing (UAT) for a contract lifecycle management SaaS platform, reducing post-release defects and improving test accuracy.",
        "Automated UI and API test suites using Selenium-Python-Behave, cutting manual testing efforts and improving test execution speed.",
        "Established validation procedures for the cloud platform via AWS S3, EC2, and CloudWatch, supplemented by API testing via Postman/Swagger: personally authored test cases to ensure comprehensive coverage.",
        "Collaborated with DevOps to integrate testing into CI/CD pipelines using Jenkins and Docker, reducing deployment failures and improving release efficiency.",
        "Spearheaded exploratory manual software testing for web applications, identifying and documenting critical edge cases; leveraged SQL and debugging skills to expedite defect resolution, resulting in faster software releases."
      ]
    },
    {
      company: "KPOINT Technologies",
      position: "Senior Software Engineer",
      period: "July 2021 - January 2023",
      location: "Pune, India",
      responsibilities: [
        "Revamped the test automation framework for the audio/video streaming platform, conducting thorough manual tests during the development phase, mentored junior engineers, and personally automated test cases within the first month.",
        "Led the test automation team, developing a Selenium-Ruby-Cucumber BDD framework with Page Object Model (POM) for an enterprise video platform, streamlining test maintenance, promoting reusability, and reducing regression testing time.",
        "Enhanced CI/CD pipeline testing with Jenkins, Docker and Kibana, reducing deployment time and improving system stability and developed shell scripts and XML configurations to automate the build/deployment process.",
        "Drove performance and load testing using JMeter to elevate system scalability, identifying bottlenecks and presenting findings to fix the biggest causes of crashes.",
        "Implemented Agile Scrum methodologies, including active participation in Sprint Planning and Jira issue tracking, facilitating cross-functional collaboration between business analysts, developers, and DevOps teams, accelerated issue resolution times and improved software delivery cycles."
      ]
    },
    {
      company: "Riverus Technology Solutions",
      position: "Software Quality Engineer",
      period: "January 2018 - July 2021",
      location: "Pune, India",
      responsibilities: [
        "Engineered test automation for legal tech platform, crafting a Selenium-Java-TestNG framework, covering regression and smoke tests, also developed manual test scripts for acceptance testing improving execution speed and accuracy.",
        "Piloted API testing strategies using Postman, and SQL data validation strategies, which increased data pipeline robustness and report accuracy, while collaborating with cross-functional teams to increase test coverage.",
        "Conducted comprehensive integration, regression, and functional testing, and resolved critical defects before launch, improving product stability and enhancing stakeholder confidence.",
        "Designed and implemented cloud testing strategies for AWS Web Services (AWS S3, EC2, CloudWatch, Route 53, and Docker), improving system performance and scalability, while providing detailed Defect reporting that reduced the resolution time."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="portfolio-card">
              <div className="flex flex-wrap items-start gap-4 mb-4">
                <div className="p-3 bg-portfolio-purple/20 rounded-full">
                  <Briefcase className="h-6 w-6 text-portfolio-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                    <span className="font-medium text-portfolio-purple">{exp.company}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3 pl-4">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-300 relative pl-6">
                    <span className="absolute left-0 top-2 w-2 h-2 bg-portfolio-purple rounded-full"></span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
