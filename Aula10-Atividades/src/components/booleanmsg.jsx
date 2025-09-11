function BooleanMsg({ status }) {
  if (status === true) {
    return (
      <div
        style={{
          padding: "5px 10px",
          borderRadius: "100px",
          border: "3px solid black",
          backgroundColor: "lightgreen",
          color: "black"
        }}
      >
        <b>Bem-vindo de volta!</b>
      </div>
    );
  }

  if (status === false) {
    return (
      <div
        style={{
          padding: "5px 10px",
          borderRadius: "100px",
          border: "3px solid black",
          backgroundColor: "lightcoral",
          color: "black"
        }}
      >
        <b>Por favor, faça login.</b>
      </div>
    );
  }

  return (
      <div
        style={{
          padding: "5px 10px",
          borderRadius: "100px",
          border: "3px solid black",
          backgroundColor: "orange",
          color: "black"
        }}
      >
        <b>ERROR 404</b>
      </div>
    );
}

export default BooleanMsg;
