import React from "react";
import { Container } from "react-bootstrap";

function RecentNews() {
  return (
    <div className="recent-news-container">
      <Container>
        <div className="recent-news-wrapper">
          <div className="react-news-heading">
            <span className="recent-news-header">Recent news</span>
            <div className="heading-line"></div>
          </div>
          <div className="recent-news-content-wrapper">
            <div className="recent-news-content-left">
              <p>Where To Traval</p>
              <h3>Motao Where To Traval ? YogyaKatra</h3>
              <button>Discover</button>
            </div>
          </div>
        </div>
      </Container>
      <div className="recent-news-contrent-right">
        <img src="../assets/recentnews.jpg" alt="" />
      </div>
    </div>
  );
}

export default RecentNews;
