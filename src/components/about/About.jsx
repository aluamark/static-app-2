export default function About() {
  return (
    <section id="about" className="py-5">
      <h2 className="text-center">About Us</h2>
      <p className="text-center">
        Accessible, high-quality education on the palm of your hands.
      </p>

      <div className="d-lg-flex justify-content-between gap-3 align-items-stretch">
        <section id="contact" className="w-100 mb-3 mb-lg-0">
          <h3>Contact Us</h3>
          <div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
              ></textarea>
            </div>
            <button className="btn btn-success">Send</button>
          </div>
        </section>

        <section
          id="mission"
          className="w-100 d-flex flex-column justify-content-center"
        >
          <h3>Mission</h3>
          <div className="d-flex justify-content-center align-items-center flex-grow-1">
            <em className="text-center p-5">
              'To empower lifelong learners and educators by providing easy
              access to high-quality, curated educational resources. Our mission
              is to foster a community that supports and inspires
              knowledge-sharing, enabling users to discover, create, and engage
              with materials that enrich personal and professional growth. We
              believe in the power of accessible education and strive to make
              learning resources available to everyone, everywhere.'
            </em>
          </div>
        </section>
      </div>
    </section>
  );
}
