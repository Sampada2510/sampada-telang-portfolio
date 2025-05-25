
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Riverus Technology Solutions",
      position: "Software Quality Engineer",
      period: "March 2023 - May 2024",
      location: "Pune, India",
      responsibilities: [
        "Worked on an AI/NLP-powered Contract Lifecycle Management SaaS platform focused on contract clause extraction and editing.",
        "Led test planning, UAT, and end-to-end QA for intelligent legal-tech features to ensure functionality, risk coverage, and data integrity.",
        "Built a test automation framework using Selenium, Python, and Behave to streamline regression testing.",
        "Worked alongside DevOps and QA teams on CI/CD pipelines for test execution and release coordination.",
        "On the data side, supported data quality efforts by writing SQL validation queries, monitoring pipeline outputs, and creating structured checklists to ensure accuracy during clause processing.",
        "Maintained internal dashboards and collaborated with cross-functional teams to surface insights related to product performance, clause accuracy, and user workflows.",
        "Closely collaborated with engineering and data teams to troubleshoot issues in AI/NLP data models and assist with schema updates and production transitions."
      ]
    },
    {
      company: "KPOINT Technologies",
      position: "Senior Software Engineer",
      period: "July 2021 - January 2023",
      location: "Pune, India",
      responsibilities: [
        "Worked on a video-based SaaS platform focused on live event streaming, taking ownership of testing and support for mission-critical features.",
        "Led automation efforts by developing a Selenium–Ruby–Cucumber BDD framework using the Page Object Model (POM), improving test reusability and reducing maintenance overhead.",
        "Mentored junior QA engineers and guided test case development to improve functional coverage and streamline regression cycles.",
        "Acted as the primary QA point of contact for the Live Event feature, collaborating with DevOps and engineering teams to support smooth deployments and resolve critical production issues.",
        "Worked with CI/CD pipelines using Jenkins and Docker, and regularly used AWS CloudWatch to debug runtime issues, monitor EC2 instances, and ensure infrastructure stability during live sessions.",
        "Used SQL extensively for backend validation, root cause analysis, and ensuring data consistency across usage logs and event processing flows.",
        "Collaborated with cross-functional teams to define and track issue resolution through Agile ceremonies, Jira workflows, and stakeholder reviews.",
        "Gained exposure to system behavior under varying loads and contributed to readiness testing for high-traffic live events."
      ]

    },
    {
      company: "Riverus Technology Solutions",
      position: "Software Quality Engineer",
      period: "January 2018 - July 2021",
      location: "Pune, India",
      responsibilities: [
        "Worked on an AI/NLP-driven legal tech platform that processed court case documents to extract key legal data points and provide structured insights to end users.",
        "Took full ownership of QA across web and mobile applications, covering manual, automated, backend, and data-centric testing.",
        "Built and maintained a Selenium–Java–TestNG automation framework to support regression and smoke testing.",
        "Designed and executed cloud testing strategies using AWS services to ensure scalability and performance.",
        "Defined and implemented API testing strategies using Postman and SQL for AI-powered features that handled complex legal document processing.",
        "Conducted integration, functional, and regression testing to maintain system stability across continuous deployments.",
        "Participated in Agile workflows and served as the primary QA contact for production support and issue resolution.",
        "Worked closely with structured and unstructured legal datasets, developing and maintaining SQL scripts for data extraction, validation, and reporting.",
        "Produced automated reports and internal dashboards to track system uptime, user engagement, and classification accuracy.",
        "Identified and resolved data pipeline issues by monitoring schema changes, cleaning datasets, and performing root cause analysis of inconsistencies.",
        "Early in the role, contributed to annotation and labeling for training data models and later supported model validation through testing and data analysis."
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
