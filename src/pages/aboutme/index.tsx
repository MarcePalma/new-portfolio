import { motion } from "framer-motion"
import ProfileCard from "../../components/aboutme/profilecard"

const AboutMePage = () => {
    return (

        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
        >
            <ProfileCard />
        </motion.div>
    );
};

export default AboutMePage;