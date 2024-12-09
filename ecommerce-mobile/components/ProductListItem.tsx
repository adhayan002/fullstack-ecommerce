import { Text } from 'react-native';
import { ProductItem } from '../lib/interface';
export function ProductListItem({ product }: { product: ProductItem }) {
  return (
    <Text style={{ fontSize: 30 }}>{product.name}</Text>
  )
}