interface CartItemInfoProps {
    product: Record<string, any>;
  }
  
  const CartItemInfo: React.FC<CartItemInfoProps> = ({
    product
  }) => {
    return ( 
      <div>
        <div className="flex justify-between">
          <p className=" text-sm font-semibold text-black">
            {product.name}
          </p>

          <p className=" text-sm text-black">
            {product.desc}
          </p>
        </div>
  
        <div className="mt-1 flex text-sm">
          <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{product.type}</p>
        </div>
        <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
      </div>
    );
}
   
export default CartItemInfo;