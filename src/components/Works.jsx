export default function Works() {
  return (
    <section id="works" className="works" data-aos="flip-left">
      <h2>My Works</h2>
      <div className="work-list">
        <div className="work-item" data-aos="zoom-in">
          <h3>Portfolio Website</h3>
          <p>A personal portfolio built with React.</p>
        </div>
        <div className="work-item" data-aos="zoom-in" data-aos-delay="200">
          <h3>E-commerce Demo</h3>
          <p>Sample shopping app with modern UI.</p>
        </div>
      </div>
    </section>
  );
}
