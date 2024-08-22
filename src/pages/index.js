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

const heroImgSrc = translate({
  id: 'heroImgSrc',
  message: 'https://image.informedainews.com/wukongwiki.png',
})

function HomepageHeader() {
  return (
    <section className="text-gray-300 body-font">
      <div className="container mx-auto flex pt-16 pb-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-10 md:pr-10 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
          <img alt="hero" src={heroImgSrc}/>
          <p className="leading-relaxed text-lg mt-2">{tagline1}<span className={styles.descriptionTitle}> {tagline2} </span>{tagline3}</p>
          <h1 className="text-xl"><Translate>Welcome to the Black Myth Wukong Wiki</Translate></h1>
          <p className="leading-relaxed text-lg">
            <Translate>"Black Myth: Wukong" is a single-player action role-playing game meticulously crafted by the Chinese game development company Game Science. The game is based on the classic tale "Journey to the West," focusing on the legendary story of Sun Wukong, but infused with the developers' unique creativity and the essence of modern game design.</Translate>
          </p>
          <h1 className="text-xl"><Translate>Black Myth Wukong Wiki: Your Knowledge Repository</Translate></h1>
          <p className="leading-relaxed text-lg">
            <Translate>Our Black Myth Wukong Wiki is an open-source initiative aimed at harnessing the collective power of gamers worldwide to create the most comprehensive and authoritative game guide. We cordially invite every enthusiast of "Black Myth: Wukong" to join us, contributing your insights and suggestions to enrich this treasure trove of knowledge. Visit our </Translate><a href="https://github.com/jiangjiax/blackmythwukong">GitHub</a> <Translate> to participate in the contributions, making our community thrive.</Translate>
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
