import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomeInformation from '@site/src/components/HomeInformation';
import HomeVideos from '@site/src/components/HomeVideos';
import HomeContent from '@site/src/components/HomeContent';
import FAQ from '@site/src/components/FAQ';
import Wallpapers from '@site/src/components/Wallpapers';
import Translate, {translate} from '@docusaurus/Translate';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const IndexTitle = translate({
  message: 'HomePage',
})

const tagline1 = translate({
  id: 'homepage.tagline1',
  message: 'Black Myth WuKong Wiki Guide: Assist all destined players in delving into every detail of the game '
})

const tagline2 = translate({
  id: 'homepage.tagline2',
  message: 'Black Myth: WuKong'
})

const tagline3 = translate({
  id: 'homepage.tagline3',
  message: ', encompassing its skills, weapons, background, characters, and more! '
})

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className="text-gray-300 body-font">
      <div className="container mx-auto flex pt-16 pb-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-10 md:pr-10 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
          <img alt="hero" src={require('@site/static/img/wukongwiki.png').default}/>
          <p className="leading-relaxed text-lg mt-2">{tagline1}<span className={styles.descriptionTitle}> {tagline2} </span>{tagline3}</p>
          <p className="leading-relaxed text-lg">
            <Translate>Black Myth: WuKong is an action-adventure game inspired by the iconic character Sun Wukong from the classic Chinese literary masterpiece 'Journey to the West.'</Translate>
          </p>
          <p className="leading-relaxed text-lg">
            <Translate>The game has garnered significant anticipation due to its stunning visual effects, fluid combat mechanics, and rich cultural heritage. Players will take on the role of Sun Wukong, venturing into a mystical and perilous fantasy world, utilizing a diverse array of unique skills and weapons to combat enemies.</Translate>
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2">
          <img className="object-cover object-center rounded-md" alt="hero" src={require('@site/static/img/zhizhujing.jpeg').default}/>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={IndexTitle}
      description={tagline1+tagline2+tagline3}>
      <HomepageHeader />
      <main>
        <HomeInformation />
        <HomeVideos />
        <FAQ />
        <HomeContent />
        <Wallpapers />
      </main>
    </Layout>
  );
}
