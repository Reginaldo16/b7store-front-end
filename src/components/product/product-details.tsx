'use client'
import Image from "next/image";
import { ProductComplete } from "types/product"

type Props = {
  product: ProductComplete;
}
export const ProductDetails = ({ product }: Props) => {

  const addToCart = async () => {
    // TODO: Create cart to buy

  }
  return (
    <div className="flex-1">
      <div className="text-xs text-gray-500 mb-2">Cod {product.id}</div>
      <div className="font-bold text-3xl mb-6">{product.label}</div>
      <div className="font-bold text-4xl text-blue-600 mb-2"> {product.price.toFixed(2)}MZN</div>
      <div className="text-sm text-gray-500 mb-6">Em até 12x no cartão</div>
      <div className="flex gap-4">
        <button
          onClick={addToCart}
          className="flex-1 max-x-xs py-4 px-8 bg-blue-600 text-white border-0 rounded-sm cursor-pointer hover:opacity-90">
          Adicionar ao carrinho
        </button>
        <div className="cursor-pointer size-14 border border-gray-200 flex justify-center items-center rounded-sm">
          <Image
            src={'/assets/ui/heart-3-line.png'}
            width={24}
            height={24}
            alt=''
          />
        </div>
        <div className="cursor-pointer size-14 border border-gray-200 flex justify-center items-center rounded-sm">
          <Image
            src={'/assets/ui/share-line.png'}
            width={24}
            height={24}
            alt=''
          />
        </div>
        <div className="cursor-pointer size-14 border border-gray-200 flex justify-center items-center rounded-sm">
          <Image
            src={'/assets/ui/heart-3-line.png'}
            width={24}
            height={24}
            alt=''
          />
        </div>
      </div>

    </div>
  )
}