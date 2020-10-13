import React from 'react';
import { IconContext } from 'react-icons';
import { FaFacebookF, FaGithub, FaInstagram, FaYoutube, FaLinkedin} from 'react-icons/fa';

export const Home = () => {
  
  return (
    <IconContext.Provider value={{
       size: "35px",
    }}>
      <div className='text-wrapper'>
        <div className='swipe-title'>
          <h1>Christopher Celimen</h1>
        </div>
      <div className='swipe-subtitle'>
        <h3>Front-end Developer</h3>
          </div>
        <div className='social-menu' >
          <ul>
            <li className='social-menu-item'><FaFacebookF /></li>
            <li className='social-menu-item'><FaGithub /></li>
            <li className='social-menu-item'><FaInstagram /></li>
            <li className='social-menu-item'><FaYoutube /></li>
            <li className='social-menu-item'><FaLinkedin /></li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
};
