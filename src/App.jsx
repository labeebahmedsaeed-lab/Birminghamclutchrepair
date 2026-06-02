import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
        </Routes>
      </main>
      <FloatingButtons />
      <Footer />
    </BrowserRouter>
  );
}
