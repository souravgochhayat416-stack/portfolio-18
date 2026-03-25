import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science and Engineering</h4>
                <h5>Kalam Institute of Technology (BPUT) | SGPA: 8.2</h5>
              </div>
              <h3>2028</h3>
            </div>
            <p>
              Pursuing undergraduate degree with a focus on Artificial Intelligence and Machine Learning. Expected Graduation: 2028.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IBM SkillsBuild AI Certification</h4>
                <h5>IBM</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Earned certification in AI concepts, emphasizing practical applications, machine learning workflows, and data processing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Prime 2.0</h4>
                <h5>Apna College</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Completed comprehensive training in Machine Learning, Deep Learning, and building intelligent AI applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
