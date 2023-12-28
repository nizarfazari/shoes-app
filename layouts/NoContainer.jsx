import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


export const NoContainer = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="site-main">
                {children}
            </main>
            <Footer />
        </>
    );
};