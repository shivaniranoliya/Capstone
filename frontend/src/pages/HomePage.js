import React from 'react';
import '../stylesheet/HomePage.css';
import musicFestivalImage from '../Images/event1.png';
import artExhibitImage from '../Images/event2.png';
import comedyShowImage from '../Images/event3.png';
import cookingClassImage from '../Images/event4.png';
import outdoorAdventureImage from '../Images/event5.png';
import wineTastingImage from '../Images/event6.png';

import { ReactComponent as MusicIcon } from '../Icons/music.svg';
import { ReactComponent as FoodDrinkIcon } from '../Icons/food.svg';
import { ReactComponent as SportsIcon } from '../Icons/sports.svg';
import { ReactComponent as ArtsCultureIcon } from '../Icons/art.svg';
import { ReactComponent as ComedyIcon } from '../Icons/comedy.svg';
import { ReactComponent as EducationIcon } from '../Icons/education.svg';
const HomePage = () => {
  return (
    <div className="homepage">
      <div className='home-banner'>
        <header className="hero-section">
          <div className="header-content">
            <div className="header-text">
              <h1>Discover Exciting Events Near You</h1>
              <p>Find the perfect event for any occasion and book with ease.</p>
              {/* <div className="search-bar">
                <input type="text" placeholder="Search events..." />
                <button>Search</button>
              </div> */}
            </div>
            <div className="header-image">
              <img src="event-banner.png" alt="Header Image" />
            </div>
          </div>
        </header>
      </div>
     
      <section className="featured-events">
        <h2>Featured Events</h2>
        <div className="event-cards">
          <div className="event-card">
            <div className="event-card-image">
              <img src={musicFestivalImage} alt="Music Festival" />
            </div>
            <div className="event-card-content">
              <h3>Music Festival</h3>
              <div className="paraDiv">
                <p>Join us for a weekend of live music, food, and fun, with exciting performances and activities.</p>
                <p>June 10-12</p>
              </div>
              <a href="#">Learn More</a>
            </div>
          </div>
          <div className="event-card">
            <div className="event-card-image">
              <img src={artExhibitImage} alt="Art Exhibit" />
            </div>
            <div className="event-card-content">
              <h3>Art Exhibit</h3>
              <div className="paraDiv">
                <p>Explore the latest works from local and international artists.</p>
                <p>July 1-31</p>
              </div>
              <a href="#">Learn More</a>
            </div>
          </div>
          <div className="event-card">
            <div className="event-card-image">
              <img src={comedyShowImage} alt="Comedy Show" />
            </div>
            <div className="event-card-content">
              <h3>Comedy Show</h3>
              <div className="paraDiv"> 
                <p>Laugh the night away with some of the best comedians in town.</p>
                <p>August 20</p>
              </div>
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <div className="event-cards">
          <div className="event-card">
            <div className="event-card-image">
              <img src={cookingClassImage} alt="Cooking Class" />
            </div>
            <div className="event-card-content">
              <h3>Cooking Class</h3>
              <div className="paraDiv">
                <p>"Learn to cook delicious meals from expert chefs, using innovative techniques."</p>
                <p>September 15</p>
              </div>
              <a href="#">Learn More</a>
            </div>
          </div>
          <div className="event-card">
            <div className="event-card-image">
              <img src={outdoorAdventureImage} alt="Outdoor Adventure" />
            </div>
            <div className="event-card-content">
              <h3>Outdoor Adventure</h3>
              <div className="paraDiv">
                <p>Explore the great outdoors with guided hiking and camping trips.</p>
                <p>October 1-3</p>
              </div>
              <a href="#">Learn More</a>
            </div>
          </div>
          <div className="event-card">
            <div className="event-card-image">
              <img src={wineTastingImage} alt="Wine Tasting" />
            </div>
            <div className="event-card-content">
              <h3>Wine Tasting</h3>
              <div className="paraDiv">
                <p>Sample a variety of fine wines from local and regional vineyards.</p>
                <p>November 12</p>
              </div>
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <section className="event-categories">
        <h2>Popular Event Categories</h2>
        <div className="categories">
          <div className="category-card">
            <MusicIcon />
            <div className='category-text'>
            <h3>Music</h3>
            <p>Concerts and festivals</p>
            </div>
          </div>
          <div className="category-card">
            <FoodDrinkIcon />
            <div className='category-text'>

            <h3>Food & Drink</h3>
            <p>Tastings, classes, and more</p>
            </div>

          </div>
          <div className="category-card">
            <SportsIcon />
            <div className='category-text'>

            <h3>Sports</h3>
            <p>Tournaments and competitions</p>
            </div>

          </div>
          <div className="category-card">
            <ArtsCultureIcon />
            <div className='category-text'>

            <h3>Arts & Culture</h3>
            <p>Exhibits, shows, and more</p>
            </div>

          </div>
          <div className="category-card">
            <ComedyIcon />
            <div className='category-text'>

            <h3>Comedy</h3>
            <p>Standup, improv, and more</p>
            </div>

          </div>
          <div className="category-card">
            <EducationIcon />
            <div className='category-text'>

            <h3>Education</h3>
            <p>Workshops, classes, and more</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
