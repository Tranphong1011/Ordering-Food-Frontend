import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = { 
  //type alias
  children: React.ReactNode;
  showHero?: boolean; //option
};

const Layout = ({ children, showHero }: Props) => {
  return ( 
    <div className="flex flex-col min-h-screen"> 
      <Header /> 
      {showHero && <Hero />}

      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
