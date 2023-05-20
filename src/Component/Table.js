import React from "react";
import "../App.css";
const Table = (props) => {
  if (!props.data) {
    return <div>No data available</div>;
  }

  const items = Object.entries(props.data);

  // console.log(items);
  return (
    <div>
      <h1>table</h1>
      <table className="table">
        <tbody>
          {items.map((item) => {
            const obj = Object.entries(item[1]);
            return (
              <React.Fragment>
                <tr>
                  <td colSpan="2" className="spacer-row"></td>
                </tr>

                {obj.map((key) => {
                  const isImageSource = key[0] === "image";
                  const isId = key[0] === "id";
                  const isRoi = key[0] === "roi";
                  if (isId || isRoi) {
                    return null;
                  } else if (isImageSource) {
                    return (
                      <tr key={key[0]}>
                        <td style={{ width: "100px" }}>{key[0]}</td>
                        <td>
                          {" "}
                          <img
                            style={{ width: "50px" }}
                            src={key[1]}
                            alt="company logo"
                          />
                        </td>
                      </tr>
                    );
                  } else {
                    return (
                      <tr key={key[0]}>
                        <td>{key[0]}</td>
                        <td style={{ width: "100px" }}>
                          {JSON.stringify(key[1])}
                        </td>
                      </tr>
                    );
                  }
                })}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
