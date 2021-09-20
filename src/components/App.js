import Dashboard from "./Dashboard/Dashboard";

import fbLogo from "./Dashboard/assets/images/icon-facebook.svg";
import twitterLogo from "./Dashboard/assets/images/icon-twitter.svg";
import instaLogo from "./Dashboard/assets/images/icon-instagram.svg";
import ytlogo from "./Dashboard/assets/images/icon-youtube.svg";

const logos = [{ logo: fbLogo }, { logo: twitterLogo }, { logo: instaLogo }, { logo: ytlogo }];

const data = [
  { socialMedia: "Facebook", type: "Followers", acountName: "@nathanf", followers: "1987", increment: "12", decrement: false },
  { socialMedia: "Twitter", type: "Followers", acountName: "@nathanf", followers: "1044", increment: "99", decrement: false },
  { socialMedia: "Instagram", type: "Followers", acountName: "@realnathanf", followers: "11k", increment: "1099" },
  { socialMedia: "Youtube", type: "Subscribers", acountName: "Nathan F.", followers: "8239", increment: false, decrement: "144" },
];

const dailyIncomingData = [
  {
    socialMedia: "Facebook",
    total: "87",
    type: "Page Views",
    increment: "3%",
    decrement: false,
    likes: { type: "Likes", likes: "52", increment: false, decrement: "2%" },
  },
  {
    socialMedia: "Instagram",
    total: "52k",
    type: "Profile Views",
    increment: "1375%",
    decrement: false,
    likes: { type: "Likes", likes: "5462", increment: "2257%", decrement: false },
  },
  {
    socialMedia: "Twitter",
    total: 117,
    type: "Retweets",
    increment: "303%",
    decrement: false,
    likes: { type: "Likes", likes: "507", increment: "553%", decrement: false },
  },
  {
    socialMedia: "Youtube",
    total: "1407",
    type: "Total Views",
    increment: false,
    decrement: "12%",
    likes: { type: "Likes", likes: "107", increment: false, decrement: "19%" },
  },
];

function App() {
  return <Dashboard data={data} dailyIncomingData={dailyIncomingData} logos={logos} />;
}

export default App;
