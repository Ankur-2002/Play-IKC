import MyAccount from 'components/Account/MyAccount';
import MyAccountStatement from 'components/Account/pages/MyAccountStatement';
import LogIn from 'components/Auth/Login';
import Home from 'components/Home/Home';
import MyQuizess from 'components/myquizzes/MyQuizess';
import CreateQuiz from 'components/Quiz/CreateQuiz';
import FreeQuiz from 'components/Quiz/FreeQuiz';
import Category from 'components/Quiz/FreeQuiz/Category';
import Levels from 'components/Quiz/FreeQuiz/Levels';
import LimitExceeded from 'components/Quiz/LimitExceeded';
// import Live from 'components/Quiz/Live';
// import LiveQuiz from 'components/Quiz/LiveQuiz';
import PlayQuiz from 'components/Quiz/playQuiz';
import OtpVerification from 'components/Quiz/private/otpverification/OtpVerification';

import PrivateQuiz from 'components/Quiz/private/PrivateQuiz';

import StartQuiz from 'components/Quiz/StartQuiz';
import RegisterQuiz from 'components/registerQuiz';
import PlayWithFriend from 'components/Quiz/PlayWithFriend';
import Categories from 'components/Quiz/PlayWithFriend/components/Categories';

import GamePage from 'components/Quiz/PlayWithFriend/components/GamePage';

import PaytmModal from 'components/Wallet/PaytmModal';
import MultiPlayer from 'components/Quiz/MultiPlayer/MultiPlayer';
import Detail from 'components/Quiz/MultiPlayer/Detail/Detail';
import LeaderboardResult from 'components/Quiz/MultiPlayer/Result/LeaderboardResult';

import AccountSetting from 'components/AccountSetting/Account';
import HowToPlay from 'components/Home/HowToPlay';
export const ROUTES = [
  {
    name: 'How to Play',
    component: HowToPlay,
    path: '/howtoplay',
    isPrivate: false,
  },
  {
    name: 'AccountSetting',
    path: '/account',
    component: AccountSetting,
    isPrivate: true,
  },
  {
    name: 'Home',
    path: '/',
    component: Home,
    isPrivate: false,
  },
  {
    name: 'LogIn',
    path: '/login',
    component: LogIn,
    isPrivate: false,
  },
  {
    name: 'PrivateQuiz',
    path: '/quiz/fetch/private',
    component: PrivateQuiz,
    isPrivate: false,
  },
  {
    name: 'FreeQuiz',
    path: '/quiz/fetch/:quizId',
    component: FreeQuiz,
    isPrivate: false,
  },
  {
    name: 'Category',
    path: '/quiz/category',
    component: Category,
    isPrivate: false,
  },
  {
    name: 'Levels',
    path: '/quiz/levels/:categoryId',
    component: Levels,
    isPrivate: false,
  },
  {
    name: 'StartQuiz',
    path: '/start/live/:quizId',
    component: StartQuiz,
    isPrivate: false,
  },
  {
    name: 'StartQuiz',
    path: '/start/free/:quizId',
    component: StartQuiz,
    isPrivate: false,
  },
  {
    name: 'StartQuiz',
    path: '/start/classic/:quizId',
    component: StartQuiz,
    isPrivate: false,
  },
  {
    name: 'PlayQuiz',
    path: '/playQuiz/free/:quizId',
    component: PlayQuiz,
    isPrivate: true,
  },
  {
    name: 'RegisterQuiz',
    path: '/playQuiz/classic/confirm/:quizId',
    component: RegisterQuiz,
    isPrivate: true,
  },

  {
    name: 'PlayQuiz',
    path: '/playQuiz/classic/:quizId',
    component: PlayQuiz,
    isPrivate: true,
  },
  {
    name: 'LimitExceeded',
    path: '/:quizId/limitexceeded',
    component: LimitExceeded,
    isPrivate: true,
  },
  {
    name: 'CreateQuiz',
    path: '/createquiz',
    component: CreateQuiz,
    isPrivate: true,
  },
  {
    name: 'MyAccountStatement',
    path: '/myaccountstatement',
    component: MyAccountStatement,
    isPrivate: true,
  },
  {
    name: 'MyAccount',
    path: '/myaccount',
    component: MyAccount,
    isPrivate: true,
  },
  {
    name: 'MyQuizess',
    path: '/myq',
    component: MyQuizess,
    isPrivate: true,
  },
  {
    name: 'StartQuiz',
    path: '/start/free/:quizId',
    component: StartQuiz,
    isPrivate: true,
  },
  {
    name: 'StartQuiz',
    path: '/start/classic/:quizId',
    component: StartQuiz,
    isPrivate: true,
  },
  {
    name: 'Otp verification',
    path: '/otp',
    component: OtpVerification,
    isPrivate: true,
  },
  {
    name: 'Play With Friend',
    path: '/play-with-friend',
    component: PlayWithFriend,
    isPrivate: false,
  },
  {
    name: 'Categories',
    path: '/play-with-friend/categories',
    component: Categories,
    isPrivate: true,
  },
  {
    name: 'Game Page',
    path: '/play-with-friend/gamepage',
    component: GamePage,
    isPrivate: true,
  },
  {
    name: 'Paytm',
    path: '/paytm',
    component: PaytmModal,
    isPrivate: true,
  },

  {
    name: 'MultiPlayer',
    path: '/multiplayer',
    component: MultiPlayer,
    isPrivate: false,
  },
  {
    name: 'MultiplayerDetails',
    path: '/multiplayer/details/:id',
    component: Detail,
    isPrivate: false,
  },
  {
    name: 'MultiplayerDetails',
    path: '/multiplayer/leaderboard/:id',
    component: LeaderboardResult,
    isPrivate: false,
  },
];
