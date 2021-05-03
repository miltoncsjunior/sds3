import BarChart from "assets/components/BarChart/BarChart";
import DataTable from "assets/components/DataTable/DataTable";
import DonutChart from "assets/components/DonutChart/DonutChart";
import Footer from "assets/components/Footer/Footer";
import NavBar from "assets/components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <div className="container">

        <h1 className="text-primary py-3">Dashboard de vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <BarChart />
          </div>

          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas vendas</h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Todas as vendas</h2>
        </div>
        <DataTable />

      </div>

      <Footer />
    </>
  );
}

export default App;
