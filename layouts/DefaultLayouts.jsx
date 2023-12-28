import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


export const DefaultLayouts = ({ children }) => {
  return (
    <>
      <Navbar />      
      <main className="site-main">
        <div className="container mx-auto">{children}</div>
      </main>
      <Footer />
    </>
  );
};