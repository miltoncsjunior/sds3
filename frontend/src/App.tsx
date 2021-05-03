import DataTable from "assets/components/DataTable/DataTable";
import Footer from "assets/components/Footer/Footer";
import NavBar from "assets/components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá mundo!</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
