import React from "react";

import "./assets/styles/normalize.css";
import "./assets/styles/Dashboard.css";

const Dashboard = (props) => {
  return (
    <>
      <header className="headerContainer">
        <h1 className="title">Social Media Dashboard</h1>
        <p className="followersTitle">Total Followers: 23,004</p>
        <div className="darkModeContainer">
          <p className="darkMode">Dark Mode</p>
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
            {data.increment ? <p> {data.increment}</p> : <p>{data.decrement}</p>}
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
              <p className="type">{data.type}</p>
              <p className="total">{data.total}</p>
              {data.increment ? <p className="totalIncrement">{data.increment}</p> : <p className="totalDecrement">{data.decrement}</p>}
            </div>
            <div className={data.socialMedia + "SecondBox"}>
              <p className="type">{data.likes.type}</p>
              <p className="likes">{data.likes.likes}</p>
              {data.likes.increment ? <p className="likesIncrement">{data.likes.increment}</p> : <p className="likesDecrement">{data.likes.decrement}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
