import React from "react";

function HostVans() {
  const [hostVans, setHostVans] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans));
  }, []);

  const hostVanElemets = hostVans?.map((van) => {
    return (
      <div className="host-van-container">
        <div className="host-van-container-main">
          <img src={van.imageUrl} />
          <div className="host-van-details">
            <p>{van.name}</p>
            <p>
              <span> $</span> {van.price}
              <span>/ day</span>
            </p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <h2>Your listed vans</h2>
      {hostVanElemets}
    </>
  );
}

export default HostVans;
