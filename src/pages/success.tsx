import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import {
  ImageContainer,
  ImagesContainer,
  SuccessContainer,
} from "../styles/pages/success";

interface SucessProps {
  customerName: string;
  productsImages: string[];
}

export default function Success({ customerName, productsImages }: SucessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada com sucesso!</h1>

        <ImagesContainer>
          {productsImages.map((image, i) => {
            return (
              <ImageContainer key={i}>
                <Image src={image} alt="" width={120} height={110} />
              </ImageContainer>
            );
          })}
        </ImagesContainer>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{" "}
          <strong>{productsImages.length}</strong>{" "}
          {productsImages.length === 1 ? "camiseta" : "camisetas"} já está a
          caminho da sua casa. Muito obrigado!{" "}
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id);

  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details!.name;
  const productsImages = session.line_items!.data.map((item) => {
    const product = item.price!.product as Stripe.Product;
    return product.images[0];
  });

  return {
    props: {
      customerName,
      productsImages,
    },
  };
};
