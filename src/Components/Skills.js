const Skills = () => {

  const skills = [
    "JavaScript", "Python", "Flask", "ReactJS", "React Native",
    "Django", "MongoDB", "Machine Learning",
    "MySQL", "NodeJS", "Next.js", "Jitsi",
  ]
  return (
    <section id="skills" class="skills section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Skills</h2>
        </div>
        <div>
          <ul>
              {
                skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))
              }
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;