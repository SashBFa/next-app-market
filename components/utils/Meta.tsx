import Head from "next/head";

interface metaProps {
  title: string;
  description: string;
}

const Meta = (props: metaProps) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "E-commerce pour livre d'occasion",
  description: " Vendez, achetez et retrouver les livres qui vous plaisent",
};

export default Meta;
