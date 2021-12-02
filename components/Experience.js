export default ({ role, description, location }) => (
  <div className="col mb-4" key={description}>
    <div className="card border-light">
      <div className="card-header">{ role }</div>
      <div className="card-body">
        <h5 className="card-title">{ description }</h5>
        <p className="card-text">{ location }</p>
      </div>
    </div>
  </div>
);
