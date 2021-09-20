import React from "react";

import "./assets/styles/normalize.css";
import "./assets/styles/Dashboard.css";

// Increment and decrement icons
import incrementIcon from "./assets/images/icon-up.svg";
import decrementIcon from "./assets/images/icon-down.svg";

const Dashboard = (props) => {
  const handleCheckboxClick = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      document.documentElement.setAttribute("dark", "true");
    } else {
      document.documentElement.setAttribute(" ", " ");
    }
  };

  return (
    <>
      <header className="headerContainer">
        <div className="heading">
          <h1 className="title">Social Media Dashboard</h1>
          <p className="followersTitle">Total Followers: 23,004</p>
        </div>
        <div className="darkModeContainer">
          <p className="darkMode">Dark Mode</p>
          <label className="switch">
            <input type="checkbox" onClick={handleCheckboxClick} />
            <span className="slider round"></span>
          </label>
        </div>
      </header>
      <main className="mainContainer">
        <article className="articleContainer">
          <section className="sectionFollowerBoxes">
            <FollowerBoxes logos={props.logos} data={props.data} />
          </section>
          <section className="sectionBoxesDailyData">
            <DailyData dailyData={props.dailyIncomingData} />
          </section>
        </article>
      </main>
    </>
  );
};

const FollowerBoxes = (props) => {
  return (
    <div className="boxesContainer">
      {props.data.map((data) => {
        return (
          <div key={data.socialMedia} className={"box" + data.socialMedia + "Container"}>
            <p className={"icon" + data.socialMedia}>{data.acountName}</p>
            <p className="numberFollowers"> {data.followers}</p>
            <p className="followers">{data.type}</p>
            {data.increment ? (
              <p className="likesIncrement">
                <img className="iconUp" src={incrementIcon} alt="icon up" />
                {data.increment} Today
              </p>
            ) : (
              <p className="likesDecrement">
                <img className="iconDown" src={decrementIcon} alt="icon down" />
                {data.decrement} Today
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

const DailyData = (props) => {
  return (
    <div className="boxesDailyDataContainer">
      <h2 className="overviewTitle">Overview - Today</h2>
      {props.dailyData.map((data) => {
        return (
          <div key={data.type} className={"box" + data.socialMedia + "DailyDataContainer"}>
            <div className={data.socialMedia + "FirstBox"}>
              <p className={data.socialMedia + "Type"}>{data.type}</p>
              <p className="total">{data.total}</p>
              {data.increment ? (
                <p className="totalIncrement">
                  <img className="iconUp" src={incrementIcon} alt="icon up" />
                  {data.increment}
                </p>
              ) : (
                <>
                  <p className="totalDecrement">
                    <img className="iconDown" src={decrementIcon} alt="icon down" />
                    {data.decrement}
                  </p>
                </>
              )}
            </div>
            <div className={data.socialMedia + "SecondBox"}>
              <p className={data.socialMedia + "Type"}>{data.likes.type}</p>
              <p className="likes">{data.likes.likes}</p>
              {data.likes.increment ? (
                <p className="likesIncrement">
                  <img className="iconUp" src={incrementIcon} alt="icon up" />
                  {data.likes.increment}
                </p>
              ) : (
                <p className="likesDecrement">
                  <img className="iconDown" src={decrementIcon} alt="icon down" />
                  {data.likes.decrement}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
