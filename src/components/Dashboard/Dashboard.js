import React from "react";

import "./assets/styles/normalize.css";
import "./assets/styles/Dashboard.css";

const Dashboard = (props) => {
  return (
    <>
      <header>
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
        <div className="darkModeContainer">
          <p>Dark Mode</p>
        </div>
      </header>
      <main>
        <article>
          <section>
            <FollowerBoxes logos={props.logos} data={props.data} />
          </section>
          <section>
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
            <p className="socialMediaName"> {data.followers}</p>
            <p>{data.type}</p>
            {data.increment ? <p> {data.increment}</p> : <p>{data.decrement}</p>}
            <p></p>
          </div>
        );
      })}
    </div>
  );
};

const DailyData = (props) => {
  return (
    <div className="boxesDailyDataContainer">
      {props.dailyData.map((data) => {
        return (
          <div key={data.type} className="boxDataContainer">
            <div className="firsBox">
              <p className="type">{data.type}</p>
              <p className="total">{data.total}</p>
              {data.increment ? <p className="totalIncrement">{data.increment}</p> : <p className="totalDecrement">{data.decrement}</p>}
            </div>
            <div className="secondBox">
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
