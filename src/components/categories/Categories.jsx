export default function Categories() {
  return (
    <section id="categories-section" className="py-5">
      <h2 className="text-center">Categories</h2>
      <div id="categories" className="d-grid gap-3 pt-3">
        <div className="border rounded-3 d-flex justify-content-between align-items-center p-3 shadow-sm">
          <span>Web Development</span>
          <button className="btn btn-success btn-sm">Learn More</button>
        </div>
        <div className="border rounded-3 d-flex justify-content-between align-items-center p-3 shadow-sm">
          <span>Web Development</span>
          <button className="btn btn-success btn-sm">Learn More</button>
        </div>
      </div>
    </section>
  );
}
