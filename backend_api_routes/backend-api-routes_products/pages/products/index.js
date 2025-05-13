import useSWR from 'swr';
import Link from 'next/link';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductsPage() {
  const { data, error } = useSWR('/api/products', fetcher);

  if (error) return <div>Fehler beim Laden der Produkte.</div>;
  if (!data) return <div>Lädt...</div>;

  return (
    <div>
      <h1>Alle Produkte</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <strong>{product.name}</strong>
            </Link>
            <p>{product.description}</p>
            <p>
              Preis: {product.price} {product.currency}
            </p>
            <p>Kategorie: {product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
