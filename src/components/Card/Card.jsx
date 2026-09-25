import "./Card.css";

// Card.jsx
function Card({
  variant = "default",
  interactive = false,
  className,
  children,
}) {
  const variants = {
    default: "",
    elevated: "card--elevated",
    outlined: "card--outlined",
  };

  return (
    <article
      className={`card ${variants[variant]} ${interactive ? "card--interactive" : ""} ${className ?? ""}`}
    >
      {children}
    </article>
  );
}

function CardMedia({ src, alt, aspectRatio = "16/9" }) {
  return (
    <div className="card__media" style={{ aspectRatio }}>
      <img src={src} alt={alt} width="100%" />
    </div>
  );
}

function CardBody({ children }) {
  return <div className="card__body">{children}</div>;
}

function CardTitle({ children, clamp = false }) {
  return (
    <h3 className={`card__title ${clamp ? "card__title--clamp" : ""}`}>
      {children}
    </h3>
  );
}

function CardDescription({ children, clamp = false }) {
  return (
    <p
      className={`card__description ${clamp ? "card__description--clamp" : ""}`}
    >
      {children}
    </p>
  );
}

function CardActions({ children }) {
  return <div className="card__actions">{children}</div>;
}

export { Card, CardMedia, CardBody, CardTitle, CardDescription, CardActions };

// Basic product card
function ProductCard({ product }) {
  return (
    <Card variant="elevated">
      <CardMedia src={product.image} alt={product.name} />
      <CardBody>
        <CardTitle clamp>{product.name}</CardTitle>
        <CardDescription clamp>{product.description}</CardDescription>
        <p className="card__price">£{product.price}</p>
      </CardBody>
      <CardActions>
        <Button variant="primary">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}

// Horizontal article card
function ArticleCard({ article }) {
  return (
    <Card variant="outlined" className="card--horizontal">
      <CardMedia src={article.coverImage} alt="" aspectRatio="1/1" />
      <CardBody>
        <CardTitle>{article.title}</CardTitle>
        <CardDescription clamp>{article.excerpt}</CardDescription>
        <div className="card__meta">
          <span>{article.author}</span>
          <span>{article.readTime} min read</span>
        </div>
      </CardBody>
    </Card>
  );
}

// Grid of cards
function ProductGrid({ products }) {
  return (
    <div className="card-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
