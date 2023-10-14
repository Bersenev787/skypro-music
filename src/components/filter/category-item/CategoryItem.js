import "./CategoryItem.css";

export default function CategoryItem({ items }) {
  return (
    <div className="category-items">
      <div className="category-items__box">
        {items?.map((item) => (
          <a key={item} href="/" className="category-item">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
