import L from "leaflet";

// Helper: makes a circular emoji marker
const createCustomMarker = (emoji, bg = "#2563eb") =>
  new L.DivIcon({
    html: `
      <div style="
        background: ${bg};
        color: white;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.25);
      ">
        ${emoji}
      </div>
    `,
    className: "",
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -30],
  });

// Category → Emoji mapping
export const getMarkerForCategory = (category) => {
  switch (category.toLowerCase()) {
    case "sports":
      return createCustomMarker("🏀", "#f97316"); // orange
    case "gaming":
      return createCustomMarker("🎮", "#6366f1"); // indigo
    case "street food":
      return createCustomMarker("🍔", "#ef4444"); // red
    case "tourist spot":
      return createCustomMarker("🗼", "#10b981"); // green
    case "hotel":
      return createCustomMarker("🏨", "#14b8a6"); // teal
    case "restaurant":
      return createCustomMarker("🍽️", "#eab308"); // yellow
    case "shopping":
      return createCustomMarker("🛍️", "#db2777"); // pink
    case "park":
    case "nature":
      return createCustomMarker("🌳", "#22c55e"); // green
    case "event":
    case "festival":
      return createCustomMarker("🎉", "#9333ea"); // purple
    case "music":
    case "club":
      return createCustomMarker("🎶", "#2563eb"); // blue
    default:
      return createCustomMarker("📍", "#6b7280"); // gray fallback
  }
};
