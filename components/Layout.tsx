import Navigation from "./navigation/Navigation";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;

const navigationPages = [{}];
