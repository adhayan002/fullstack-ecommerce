import { useBreakpointValue } from '@/components/ui/utils/use-break-point-value';
import { FlatList, useWindowDimensions } from 'react-native';
import products from "../assets/products.json";
import { ProductListItem } from '../components/ProductListItem';

export default function HomeScreen() {
  const { width } = useWindowDimensions()
  const numColumns = useBreakpointValue({
    default: 2,
    sm: 3,
    l:4
  })
  return (
    <FlatList
      key={numColumns}
      data={products}
      numColumns={numColumns}
      contentContainerClassName='gap-2 max-w-[960px] lg:mx-auto lg:w-full'
      columnWrapperClassName='gap-2'
      renderItem={({ item }) => (
        <ProductListItem product={item}/>
      )}
    />
  );
}