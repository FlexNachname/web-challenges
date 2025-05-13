import { getAllProducts } from '@/services/productServices'; // Pfad ggf. anpassen

export default function handler(req, res) {
  const products = getAllProducts();
  res.status(200).json(products);
}