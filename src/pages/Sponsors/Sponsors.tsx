import classes from './Sponsors.module.scss';
import Heading from '../../components/typography/Heading';
import { headingTypes } from '../../types/types';
import { routeTransition, routeVariants } from "../../animations/animations";
import Section from '../../components/layout/Section/Section';
import { motion } from 'framer-motion';

import SponsorsMarkdownPage from '../../components/MarkdownPage/MarkdownPage';

const Sponsors = () => {
    return <motion.div key="sponsors" className={classes.Sponsors} variants={routeVariants} transition={routeTransition} exit="hidden" animate="visible" initial="initial">
        <Section className={''}>
            <Heading className={''} type={headingTypes.main}>Partneři</Heading>
            <SponsorsMarkdownPage pageName='sponsors' className={classes.Sponsors__sponsorsMarkdownPage}></SponsorsMarkdownPage>
        </Section>
    </motion.div>
};

export default Sponsors;
