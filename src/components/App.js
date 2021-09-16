import Dashboard from "./Dashboard/Dashboard";

const data = [
  { socialMedia: "Facebook", followers: 1987, increment: 12, decrement: false },
  { socialMedia: "Twitter", followers: 1044, increment: 99, decrement: false },
  { socialMedia: "Instagram", followers: "11k", increment: 1099 },
  { socialMedia: "Youtube", followers: 8239, increment: false, decrement: 144 },
];

function App() {
  return <Dashboard />;
}

export default App;
