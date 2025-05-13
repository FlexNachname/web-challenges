import { useRouter } from 'next/router';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: product, error } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  if (error) return <div>Fehler beim Laden des Produkts.</div>;
  if (!product) return <div>Lädt...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>
        Preis: {product.price} {product.currency}
      </p>
      <p>Kategorie: {product.category}</p>
    </div>
  );
}
