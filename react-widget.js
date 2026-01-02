// Basic React Component (Resume Level)

function OfferCard(props) {
  return (
    <div style={{
      maxWidth: "300px",
      margin: "0 auto",
      padding: "20px",
      borderRadius: "12px",
      background: "white",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      textAlign: "center"
    }}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <button style={{
        padding: "10px 20px",
        background: "#ffba08",
        border: "none",
        borderRadius: "20px",
        cursor: "pointer"
      }}>
        Order Now
      </button>
    </div>
  );
}

// Render React Component
const root = ReactDOM.createRoot(document.getElementById("react-root"));

root.render(
  <OfferCard
    title="React Special Coffee ☕"
    description="This offer section is built using a basic React component."
  />
);
