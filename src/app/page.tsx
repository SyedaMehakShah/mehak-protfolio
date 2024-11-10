
import Header from "./components/heroSection";
import Navbar from "./components/Navbar";
import About from "./components/aboutSection";

export default function Home() {
  return (
         <main className="flex min-h-screen flex-col bg-[#121212]">
          <Navbar />
          <div className="container mt-24 mx-auto px-12 py-4">
             <Header/>
             <About/>
            
             </div>
      </main>
  
  );
}
