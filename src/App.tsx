import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Header from './components/organisms/Header/index';
import Footer from './components/organisms/Footer/index';
import Image from './components/atoms/Image/index';
import Text, {TextTheme, TextType} from './components/atoms/Text/index';
import {navbarData, footerData} from './data';
import Navber from './components/molecules/Navbar/index';
import SearchInput from './components/molecules/SearchInput/index';
import FooterNav from './components/molecules/FooterNav/index';

import New from './components/pages/New/index';
import Home from './components/pages/Home/index';
import Ask from './components/pages/Home/index';
import Show from './components/pages/show/index';
import Jobs from './components/pages/Jobs/index';

function App() {
  return (
    <div className="App">
      <Router>

        <Header>
          <div className='HeaderLeft'>
            <Link to='/top'>
              <Image className='logo' source='logo.gif' alt='Logo' width='20' height='20'/>
            </Link>
            <Link to='/news'>
              <Text className={`${TextTheme.PRIMARY} ${TextType.LARGE} margin-left-5 bold`}>Hacker News</Text>
            </Link>
            <Navber navbarData={navbarData} className='margin-left-5'/>
          </div>
          <Text className={`${TextTheme.PRIMARY} ${TextType.LARGE}`}>
            login
          </Text>
        </Header>

        <div className='Body'>
          <Switch>
            <Route path='/new' component={New}/>
            <Route path='/ask' component={Ask}/>
            <Route path='/show' component={Show}/>
            <Route path='/jobs' component={Jobs}/>
            <Route path='/' component={Home}/>
          </Switch>
          <div className='Line'></div>
          <Footer className='margin-top-10'>
            <FooterNav footerData={footerData}/>
            <SearchInput className='margin-top-15'/>
          </Footer>
        </div>

      </Router>
    </div>
  );
}

export default App;
