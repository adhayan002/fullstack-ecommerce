import { ShoppingCart } from 'lucide-react-native';
import { Text, View } from 'react-native';
import { ProductItem } from '../lib/interface';
import { Button, ButtonIcon, ButtonText } from './ui/button';

export function ProductListItem({ product }: { product: ProductItem }) {
  return (
    <View className='flex items-center'>
      <Text style={{ fontSize: 20 }}>{product.name}</Text>
      <Button size="md" className='w-32'>
        <ButtonIcon as={ShoppingCart}/>
        <ButtonText className='text-sm'>${product.price}</ButtonText>
      </Button>
    </View>
  )
}