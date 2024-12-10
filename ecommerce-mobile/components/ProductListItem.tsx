import { Link } from 'expo-router';
import { Pressable } from 'react-native';
import { ProductItem } from '../lib/interface';
import { Card } from './ui/card';
import { Heading } from './ui/heading';
import { Image } from './ui/image';
import { Text } from './ui/text';
import { VStack } from './ui/vstack';

export function ProductListItem({ product }: { product: ProductItem }) {
  return (
    <Link href={`/product/${product.id}`} asChild>
      <Pressable className='flex-1'>
        <Card className="px-5 py-2 rounded-lg m-3 flex-1 ">
          <Image
            source={{
              uri: product.image,
            }}
            resizeMode='contain'
            className="mb-6 h-[200px] w-full rounded-md"
            alt={`${product.name} image`}
          />
          <Text className="text-sm font-normal mb-2 text-typography-700">
            {product.name}
          </Text>
          <VStack className="mb-6">
            <Heading size="md" className="mb-4">
              ${product.price}
            </Heading>
          </VStack>
        </Card>
      </Pressable>
    </Link>
  )
}