
const About = () => {
  return (
    <section id="about" className="py-20 bg-black/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-3">
            <div className="portfolio-card mb-6">
              <p className="text-gray-300 mb-4">
                Hey there! I'm a passionate Software Quality Assurance Engineer with over six years of experience making sure software doesn't just function—but functions flawlessly. My work spans the full QA lifecycle: from test planning and scenario design to execution and automation, all focused on ensuring consistent, high-quality releases.
              </p>
              <p className="text-gray-300 mb-4">
                I specialize in both functional and non-functional testing, and I'm deeply involved in CI/CD pipeline integrations, building efficient automated workflows that reduce manual overhead and boost reliability. To me, quality assurance isn't just a checkbox at the end—it's a strategic discipline embedded throughout the development cycle.
              </p>
              <p className="text-gray-300 mb-4">
                What sets me apart is how I approach QA: not as an isolated task, but as a full-stack responsibility. I dig deep into requirements, architecture, and edge cases, and bring that insight into every test I design. I'm hands-on with test automation, contribute to DevOps workflows, and am often the go-to person when something goes wrong in production.
              </p>
              <p className="text-gray-300 mb-6">
                Beyond tools and test cases, I see QA as the glue that holds cross-functional teams together. It's about understanding the product, anticipating risks, and helping everyone—from developers to stakeholders—work smarter and ship with confidence. That's the kind of leadership I bring to every project.
              </p>
              <p className="text-gray-300 mb-4">
                It's also about understanding the data behind the product as much as the product itself. Over the years, I’ve worked extensively with SQL for data validation and debugging, and supported data integrity efforts across complex pipelines. I’ve built internal reports and maintained dashboards using Tableau and Power BI, and collaborated closely with data teams to ensure clean, accurate, and actionable data. My familiarity with Snowflake and cloud platforms helps me bridge the gap between quality assurance and data analysis, making me a valuable asset in both QA and data-focused roles.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-white">What I Do</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                <div className="flex items-start gap-2">
                  <span className="text-portfolio-purple">✅</span>
                  <span className="text-gray-300">Test planning & strategy creation aligned with business goals</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-portfolio-purple">✅</span>
                  <span className="text-gray-300">Designing high-impact test cases and scenarios that catch edge cases early</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-portfolio-purple">✅</span>
                  <span className="text-gray-300">Executing and managing functional, non-functional, regression, and exploratory testing cycles</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-portfolio-purple">✅</span>
                  <span className="text-gray-300">Deciding what to automate and what not to—based on stability, repeatability, and cost-benefit analysis</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-portfolio-purple">✅</span>
                  <span className="text-gray-300">Performance testing using tools like JMeter, identifying bottlenecks before users do</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-portfolio-purple">✅</span>
                  <span className="text-gray-300">Collaborating cross-functionally to embed quality into the entire SDLC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-4 mt-8 text-white">Education</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="portfolio-card">
            <h4 className="font-medium text-white">THE STATE UNIVERSITY OF NEW YORK AT BUFFALO</h4>
            <p className="text-gray-400">Master of Science, Management Information Systems</p>
            <p className="text-sm text-portfolio-purple">May 2025</p>
          </div>
          <div className="portfolio-card">
            <h4 className="font-medium text-white">MODERN COLLEGE, PUNE UNIVERSITY</h4>
            <p className="text-gray-400">Master of Science, Computer Science</p>
            <p className="text-sm text-portfolio-purple">May 2018</p>
          </div>
          <div className="portfolio-card">
            <h4 className="font-medium text-white">MODERN COLLEGE, PUNE UNIVERSITY</h4>
            <p className="text-gray-400">Bachelor of Science, Computer Science</p>
            <p className="text-sm text-portfolio-purple">May 2016</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
