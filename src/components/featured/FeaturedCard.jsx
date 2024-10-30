import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function FeaturedCard({ product }) {
  return (
    <Card className="w-100 shadow-sm">
      <Card.Img
        variant="top"
        src={product.image}
        height={200}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="success" className="w-100">
          {product.button}
        </Button>
      </Card.Body>
    </Card>
  );
}
