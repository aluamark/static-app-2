import FeaturedCard from "./FeaturedCard";
import { products } from "./products";

export default function Featured() {
  return (
    <section id="featured" className="py-5">
      <h2 className="text-center">Featured Resources</h2>
      <div className="d-lg-flex justify-content-between gap-3 pt-3">
        {products.map((product, index) => (
          <div
            key={index}
            className={`w-100 ${
              index === products.length - 1 ? "mb-0" : "mb-3 mb-lg-0"
            }`}
          >
            <FeaturedCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
