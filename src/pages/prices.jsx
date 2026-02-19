import PriceTable from "../components/priceTable.jsx";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

function Prices() {
  return (
    <>
      <section className="prices-page-section">
        <Header />
        <div className="prices-page">
          <h1>Цени</h1>
          <div className="wrapper">
            <PriceTable />
          </div>

          <br />
          <span>*Цената за паркинг е 7€ на ден</span>
          <br />
          <span>**Цената за домашен любимец е 8€ на ден</span>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Prices;
