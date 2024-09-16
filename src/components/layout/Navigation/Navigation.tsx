import classes from './Navigation.module.scss';
import { YoutubeLogo, TwitchLogo } from "../../other/Assets/Assets";
import { NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import Login from "../../other/Login/Login";
import React from 'react';
import { Context } from '../../../store/context';
import { useHistory } from "react-router-dom";

interface NavigationProps {
    className?: string
}

const Navigation: React.FC<NavigationProps> = props => {
    const isMobile = useMediaQuery({query: '(max-width: 900px)'});
    const className = classes.Navigation + " " + props.className;
    const context = useContext(Context);
    const history = useHistory();
    const [isMobileNavigationShown, setIsMobileNavigationShown] = useState(false);
    useEffect(() => {
        setIsMobileNavigationShown(false);
    }, [isMobile])
    
    history.listen(()=>{
        setIsMobileNavigationShown(false);
    });

    return <nav className={className}>
            {(!isMobile ||  isMobileNavigationShown) && <motion.ul key="navigation" initial={{x: '100%'}} animate={{x: 0}} exit={{x: '100%'}} className={classes.Navigation__list}>
                <li className={classes.Navigation__item}>
                    <NavLink exact activeClassName={classes.active} className={classes.Navigation__link} to="/">Domů</NavLink>
                </li>
                {context.state.discordId !== "notLoggedIn" && context.state.discordId !== "" && <li className={[classes.Navigation__item, classes.Navigation__item_teams].join(' ')}>
                    <NavLink activeClassName={classes.active} className={[classes.Navigation__link, classes.Navigation__link_registration].join(' ')} to="/teams">Moje týmy</NavLink>
                </li>}
                <li className={classes.Navigation__item}>
                    <NavLink activeClassName={classes.active} className={classes.Navigation__link} to="/contestants">Účastníci</NavLink>
                </li>
                <li className={classes.Navigation__item}>
                    <NavLink activeClassName={classes.active} className={classes.Navigation__link} to="/winners">Vítězové</NavLink>
                </li>
                <li className={classes.Navigation__item}>
                    <NavLink activeClassName={classes.active} className={classes.Navigation__link} to="/sponsors">Partneři</NavLink>
                </li>
                <li className={classes.Navigation__item}>
                    <NavLink activeClassName={classes.active} className={classes.Navigation__link} to="/rules">Pravidla</NavLink>
                </li>
                <li className={classes.Navigation__item}>
                    <NavLink activeClassName={classes.active} className={classes.Navigation__link} to="/schools">Pozvané školy</NavLink>
                </li> 
                <li className={classes.Navigation__item}>
                    <NavLink activeClassName={classes.active} className={classes.Navigation__link} to="/documents">Dokumenty</NavLink>
                </li>
                <li className={classes.Navigation__item}>
                    <NavLink activeClassName={classes.active} className={classes.Navigation__link} to="/about">O nás</NavLink>
                </li>
                <li className={classes.Navigation__item} onClick={() => {window.open("https://www.youtube.com/@gttournament/videos")}}>
                    <div className={classes.Navigation__youtubeLogo}><YoutubeLogo></YoutubeLogo></div>
                </li>
                <li className={classes.Navigation__item} onClick={() => {window.open("https://www.twitch.tv/gttournament_a")}}>
                    <div className={classes.Navigation__twitchLogo}><TwitchLogo></TwitchLogo></div>
                </li>
                <li className={classes.Navigation__item}>
                    <div className={classes.Navigation__login}><Login></Login></div>
                </li>
            </motion.ul>}
        {isMobile && <div onClick={() => {
            setIsMobileNavigationShown(!isMobileNavigationShown);
        }}className={classes.Navigation__hamburger}>
            <div className={classes.Navigation__hamburger__line}></div>
            <div className={classes.Navigation__hamburger__line}></div>
            <div className={classes.Navigation__hamburger__line}></div>
        </div>}
    </nav>
};

export default Navigation;
