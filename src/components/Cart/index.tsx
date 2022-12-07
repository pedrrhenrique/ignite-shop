import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import Image from "next/image";
import { X } from "phosphor-react";
import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { CartButton } from "../CartButton";
import {
  CartClose,
  CartContent,
  CartProduct,
  CartProductImage,
  CartProductDetails,
  CartFinalization,
  FinalizationDetails,
} from "./styles";

export function Cart() {
  const { cartItems, cartTotal, removeCartItem } = useCart();
  const cartQuantity = cartItems.length;

  const formattedCardTotal = new Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: 'BRL',
  }).format(cartTotal);

  const [isCreatingCheckoutSession, setCreatingCheckoutSession] = useState(false)

  async function handleCheckout() {
    try {
      setCreatingCheckoutSession(true);

      const response = await axios.post('/api/checkout', {
        products: cartItems,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;

    } catch (err) {
      setCreatingCheckoutSession(false);
      alert('Falha ao redirecionar ao checkout');
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>

          <h2>Carrinho de compras</h2>

          <section>
            {cartQuantity <= 0 && <p className="cartEmpty">Seu carrinho está vazio! :(</p>}

            {cartItems.map((cartItem) => {
              return (
                <CartProduct key={cartItem.id}>
                  <CartProductImage>
                    <Image
                      src={cartItem.imageUrl}
                      width={100}
                      height={93}
                      alt=""
                    />
                  </CartProductImage>
                  <CartProductDetails>
                    <p>{cartItem.name}</p>
                    <strong>{cartItem.price}</strong>
                    <button onClick={() => removeCartItem(cartItem.id)}>Remover</button>
                  </CartProductDetails>
                </CartProduct>
              );
            })}
          </section>

          <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>
                  {cartQuantity} {cartQuantity === 1 ? "item" : "itens"}
                </p>
              </div>
              <div>
                <span>Valor total:</span>
                <p>{formattedCardTotal}</p>
              </div>
            </FinalizationDetails>
            <button onClick={handleCheckout} disabled={isCreatingCheckoutSession || cartQuantity <= 0}>Finalizar compra</button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
