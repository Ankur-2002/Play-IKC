// import "../styles/components/PlayNow.css";
import React, { useEffect } from 'react';
import './FreeQuiz.css';
import Play from 'assets/images/play.png';
import PlayDark from 'assets/images/play-dark.png';
import Travel from 'assets/images/travel.png';
import Sports from 'assets/images/sports.png';
import Globe from 'assets/images/globe.png';
import Maps from 'assets/images/map.png';
import Economy from 'assets/images/economy.png';
import Taj from 'assets/images/taj.png';
import { Box } from '@mui/material';
import { Spinner } from 'assets';
import { Link } from 'react-router-dom';
import { fetchAllCategories } from '../../../store/actions/categoryAction';
import { connect } from 'react-redux';
import { useStyle } from './Category.style';
import SinglePlayer from 'assets/images/singleQuizLogo.svg';
import singlePageBackground from 'assets/images/singlePageBackground.svg';
import singlePageBackgroundBlue from 'assets/images/singlePageBackgroundBlue.svg';
import single from 'assets/images/sports.svg';
import chemistry from 'assets/images/chemistry.svg';
import booksAndAuthors from 'assets/images/booksAndAuthors.svg';
import basicGk from 'assets/images/basicGk.svg';
import generalScience from 'assets/images/generalScience.svg';
import indianHistory from 'assets/images/indianHistory.svg';
import inventions from 'assets/images/inventions.svg';
import personality from 'assets/images/personality.svg';
import physics from 'assets/images/physics.svg';
import politics from 'assets/images/politics.svg';
import technologies from 'assets/images/technologies.svg';
import worldGeography from 'assets/images/worldGeography.svg';
import worldOrganizations from 'assets/images/worldOrganizations.svg';
import entertainment from 'assets/images/entertainment.svg';
import SinglePlayerMobile from 'assets/images/mobileSinglePlayer.svg';
import SinglePlayerMobileLogo from 'assets/images/mobileSingleLogo.svg';
import Ball from 'common/ball/Ball';
import Ikc from 'assets/images/trophy.svg';
const data = [
  {
    backgroundColor: '#062A77',
    color: '#FFFFFF',
    name: 'Sports',
    icon: Sports,
  },
  {
    backgroundColor: '#FEFBAA',
    color: '#000000',
    name: 'Famous Places & Personalities',
    icon: Travel,
  },
  {
    backgroundColor: '#EB4D42',
    color: '#FFFFFF',
    name: 'Indian Economy',
    icon: Economy,
  },
  {
    backgroundColor: '#FEE001',
    color: '#000000',
    name: 'General Awareness',
    icon: Globe,
  },
  {
    backgroundColor: '#FA910A',
    color: '#000000',
    name: 'Indian History',
    icon: Taj,
  },
  {
    backgroundColor: '#062A77',
    color: '#FFFFFF',
    name: 'Indian Geography',
    icon: Maps,
  },
];

export const images = {
  Sports: single,
  Chemistry: chemistry,
  'Basic General Knowledge': basicGk,
  'Books and Author': booksAndAuthors,
  'General Science': generalScience,
  'Indian History': indianHistory,
  Inventions: inventions,
  Personalities: personality,
  Physics: physics,
  Politics: politics,
  Technology: technologies,
  'World Geography': worldGeography,
  'World Organizations': worldOrganizations,
  Entertainment: entertainment,
};

function ClassicCategory(props) {
  // const [category, setCategory] = useState([]);
  const classes = useStyle(props);
  useEffect(() => {
    if (!props?.category) props?.dispatch(fetchAllCategories());
  }, []);

  return (
    <div className={classes.container}>
      <img
        src={singlePageBackground}
        className="front"
        alt="singlePageBackground"
      />
      <img
        src={singlePageBackgroundBlue}
        className="back"
        alt="singlePageBackgroundBlue"
      />
      <div className="mobileLogos">
        <img alt="" className="imageMobile1" src={SinglePlayerMobile} />
        <img alt="" className="imageMobile" src={SinglePlayerMobileLogo} />
      </div>
      <div className={classes.wrapper}>
        <Ball left={'-4%'} width={100} />
        <div className={classes.header}>
          <span className="title">
            <img src={Ikc} alt={'Comming'} width={40} />
            Single player
          </span>
          <span>Play single player games to practice and earn points</span>
        </div>
        <div className={classes.imageContainer}>
          <Ball top={'5%'} left={'10%'} width={30} />
          <img alt="" className="image" src={SinglePlayer} />
          <Ball bottom={'5%'} width={60} />
        </div>
      </div>

      <div className={classes.cards}>
        <Ball left={'0.2%'} top={'10%'} width={20} />

        {props?.category?.map(item => {
          return (
            <Link to={`/quiz/levels/${item._id}`} key={item._id}>
              <div className={classes.card}>
                <div className={classes.content}>
                  <img src={images[item.name]} width={100} alt="" />
                  <span>{item.name}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/**
 * 
 * @param {  {props?.category?.length > 0 ? (
            props.category.map((item, ind) => {
              return (
                <Link
                  to={`/quiz/levels/${item._id}`}
                  className="card-category-content"
                  style={{
                    backgroundColor: '#062A77',
                    color: '#FFFFFF',
                  }}
                  key={ind}
                >
                  <div className="image-cont">
                    <div className="play-img">
                      <img src={Play} alt="play" />
                    </div>
                    <div className="card-logo">
                      <img src={item.icon} alt="sports" />
                    </div>
                  </div>
                  <div className="card-text">
                    <div className="card-category-text">{item.name}</div>
                  </div>
                </Link>
              );
            })
          ) : (
            <Box display="flex" justifyContent="center" alignItems="center">
              <Spinner />
            </Box>
          )}} state 
 * @returns 
 */

const mapStateToProps = state => {
  return state?.Categories;
};

export default connect(mapStateToProps)(ClassicCategory);
