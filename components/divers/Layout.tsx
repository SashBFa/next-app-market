import Navigation from "./Navigation";

interface layoutProps {
  children: React.ReactNode;
}

const Layout = (props: layoutProps) => {
  return (
    <>
      <Navigation />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
