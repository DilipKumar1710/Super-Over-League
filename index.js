const element = (
  <div className="bg-color">
    <h1 className="heading"> Super Over League</h1>
    <div className="team-flags-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
        className="image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
        className="image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
