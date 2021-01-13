import React from 'react';
import Rating from '../rating/Rating';
import Crew from './crew/Crew';

import './Details.scss';
import Media from './media/Media';
import Overview from './overview/Overview';
import Reviews from './reviews/Reviews';
import Tabs from './tabs/Tabs';

const Details = () => {
  return (
    <>
      <div className="movie-container">
        <div className="movie-bg" style={{ backgroundImage: 'url(https://www.geeklawblog.com/wp-content/uploads/sites/528/2018/12/liprofile-656x369.png)' }}></div>
        <div className="movie-overlay"></div>
        <div className="movie-details">
          <div className="movie-image">
            <img src="https://www.geeklawblog.com/wp-content/uploads/sites/528/2018/12/liprofile-656x369.png" alt="" />
          </div>
          <div className="movie-body">
            <div className="movie-overview">
              <div className="movie-title">
                Avengers <span>2020-12-03</span>
              </div>
              <div className="movie-genres">
                <ul className="genres">
                  <li>Action</li>
                  <li>Comedy</li>
                  <li>Sci-Fi</li>
                </ul>
              </div>
              <div className="movie-ratings">
                <Rating className="rating-stars" rating={6.5} totalStars={10} />
                &nbsp;
                <span>6.5</span> <p>(200) reviews</p>
              </div>
              <Tabs>
                <div label="Overview">
                  <Overview />
                </div>
                <div label="Crew">
                  <Crew />
                </div>
                <div label="Media">
                  <Media />
                </div>
                <div label="Reviews">
                  <Reviews />
                </div>
              </Tabs>
            </div>
          </div>
        </div>
        <div className></div>
      </div>
    </>
  );
};

export default Details;
