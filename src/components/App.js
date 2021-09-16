import Dashboard from "./Dashboard/Dashboard";

const data = [
  { socialMedia: "Facebook", followers: "1987", increment: "12", decrement: false },
  { socialMedia: "Twitter", followers: "1044", increment: "99", decrement: false },
  { socialMedia: "Instagram", followers: "11k", increment: "1099" },
  { socialMedia: "Youtube", followers: "8239", increment: false, decrement: "144" },
];

const dailyIncomingData = [
  { socialMedia: "Facebook", pageViews: "87", increment: "3%", decrement: false, likes: { likes: "52", increment: false, decrement: "2%" } },
  {
    socialMedia: "Instagram",
    profileViews: "52k",
    increment: "1375%",
    decrement: false,
    likes: { likes: "5462", increment: "2257%", decrement: false },
  },
  {
    socialMedia: "Twitter",
    retweets: 117,
    increment: "303%",
    decrement: false,
    likes: { likes: "507", increment: "553%", decrement: false },
  },
  {
    socialMedia: "Youtube",
    totalViews: "1407",
    decrement: false,
    likes: { likes: "170", increment: false, decrement: "19%" },
  },
];

function App() {
  return <Dashboard data={data} dailyIncomingData={dailyIncomingData} />;
}

export default App;
