

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ImageFallback from "@/components/ui/ImageFallback"
import { useCart } from "@/context/CartContext";
import ImageFallbackUrl from "@/public/next.svg"
import { useToast } from "./use-toast";

export default function CardComponent({ item, addToCart }:any) {
  const { dispatch } = useCart();
  const { toast } = useToast()

  const handleAddToCart = () => {
    toast({
      variant: "default",
      title: "Added to cart",
      description: `${item.name} added to cart`,
    })
    dispatch({ type: "ADD_TO_CART", item });
  };

  return (
    <Card className="w-full max-w-xs rounded-xl border width ">
      <div className="grid gap-4 p-4">
        <div className="aspect-[4/5] w-full overflow-hidden rounded-xl">
          <ImageFallback
            fallback={ImageFallbackUrl}
            alt="Product image "
            className="aspect-[3/4] object-cover border w-full bg-white"
            height={500}
            src={ImageFallbackUrl}
            width={400}
          />
        </div>
        <div className="grid gap-1.5">
          <h3 className="font-semibold text-sm md:text-base">{item.name}</h3>
          <p className="font-semibold text-sm md:text-base">${item.price}</p>
          <p className="text-sm md:text-base text-muted">{item.description}</p>
        </div>
        <Button size="sm" variant={'outline'} onClick={handleAddToCart}>Add to cart</Button>
      </div>
    </Card>
  )
}