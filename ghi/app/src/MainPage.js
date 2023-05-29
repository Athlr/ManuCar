import manuCarImage from "./media/manu-car-background.jpg"

function MainPage() {
  const mainBackground = {
    backgroundImage: `url(${manuCarImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="vh-100 px-4 py-5 text-center overflow-hidden" style={mainBackground}>
      <h1 className="display-5 fw-bold text-light">ManuCar</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4 text-light">
          The premiere solution for automobile dealership
          management!
        </p>
      </div>
    </div>
  );
}

export default MainPage;
