import classNames from 'classnames';
import styles from './portofolio.module.scss';

import website_1 from '../../assets/website-1.jpg';
import website_2 from '../../assets/website-2.jpg';
import website_3 from '../../assets/website-3.jpg';
import website_4 from '../../assets/website-4.png';

import { motion, useMotionValue, useTransform } from 'framer-motion';

export interface PortofolioProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Portofolio = ({ className }: PortofolioProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['portfolio-wrapper']}>
                <h3 className={styles.h3}>Things I&apos;ve worked on...</h3>
                <motion.svg
                    height="4"
                    viewBox="0 0 204 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={classNames(styles.line, styles.path)}
                >
                    <motion.path
                        d="M2 2L202 1.99998"
                        stroke="url(#paint0_linear_6_519)"
                        stroke-width="3"
                        stroke-linecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        className={styles['path-line']}
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_6_519"
                            x1="202.5"
                            y1="2"
                            x2="0.999995"
                            y2="2"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#DC3284" />
                            <stop offset="1" stop-color="#DC3232" />
                        </linearGradient>
                    </defs>
                </motion.svg>
            </div>
            <div className={styles.description}>
                <p className={styles.p}>
                    I am developer with an interest in making new products be it games or just a
                    normal software that is able to simplify mundane work and make things easier.{' '}
                    <span className={styles.span}>C/C++, C#, </span> and a little bit of python. I
                    am proficient in Unity Engine and dabbled a bit with the Unreal Editor. I am
                    also a <span className={styles.span}>creative thinker</span> and I am always
                    looking for new ways to solve problems.
                </p>
            </div>
            <p className={styles.p}></p>
            <div className={styles.grid}>
                <motion.div className={styles['grid-item']}>
                    <img src={website_1} className={styles['grid-img']} />
                    <div className={styles['visit-portofolio']}>
                        <h4 className={styles.h4}>Buzz - Full Stack Next 13</h4>
                        <a href="https://buzz-next-nine.vercel.app/">Visit </a>
                    </div>
                </motion.div>

                <motion.div className={styles['grid-item']}>
                    <img src={website_2} className={styles['grid-img']} />
                    <div className={styles['visit-portofolio']}>
                        <h4 className={styles.h4}>E-commerce with Stripe</h4>
                        <a href="https://next-ecommerce-puce-five.vercel.app/">Visit </a>
                    </div>
                </motion.div>
                <motion.div className={styles['grid-item']}>
                    <img src={website_3} className={styles['grid-img']} />
                    <div className={styles['visit-portofolio']}>
                        <h4 className={styles.h4}>3d Animations with Blender</h4>
                        <a href="https://3d-scroll-ball.vercel.app/">Visit </a>
                    </div>
                </motion.div>
                <motion.div className={styles['grid-item']}>
                    <img src={website_4} className={styles['grid-img']} />
                    <div className={styles['visit-portofolio']}>
                        <h4 className={styles.h4}>Hua Portofolio</h4>
                        <a href="https://wretched-wind-gold.vercel.app/">Visit </a>
                    </div>
                </motion.div>
            </div>
            <div className={styles.socials}>
                <a href="https://www.linkedin.com/in/junxiang-leong/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={styles['social-svg']}
                    >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                </a>
            </div>
        </div>
    );
};
