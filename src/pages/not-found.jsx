import { Link } from "react-router-dom";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

function NotFound() {
  return (
    <>
      <Header />
      <div className="not-found">
        <h1>404 - Страницата е намерена</h1>
        <p>Съжаляваме, но страницата, която търсите, не съществува.</p>
      </div>
      <Footer />
    </>
  );
}
export default NotFound;
