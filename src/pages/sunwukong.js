import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const IndexTitle = translate({
    message: 'SUN WUKONG',
})

const tagline1 = translate({
    id: 'patchnotes.tagline1',
    message: 'Sun Wukong, also known as the Monkey King, is the main character in '
})

const tagline2 = translate({
    id: 'patchnotes.tagline2',
    message: 'Black Myth: Wukong. '
})

const tagline3 = translate({
    id: 'patchnotes.tagline3',
    message: "He is a legendary figure in Chinese mythology and literature, particularly renowned from the novel 'Journey to the West.' In the game, players take on the role of Sun Wukong, experiencing his legendary story and thrilling adventures."
})

function Header() {
    return (
        <section className="body-font">
            <div className="container pt-10 pl-10 pr-10">
                <div className="flex flex-wrap w-full mb-5">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white"><Translate>BLACK MYTH WUKONG WIKI</Translate></h1>
                        <div className="h-1 w-20 bg-yellow-500 rounded"></div>
                        <p className="leading-relaxed text-white text-opacity-90 mt-2"><Translate>CHARACTER INFORMATION</Translate> - {IndexTitle}</p>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-opacity-90">
                        {tagline1}<a href='/'>{tagline2}</a>{tagline3}
                    </p>
                </div>
            </div>
            <div className={styles.chineseStyleDivider}></div>
        </section>
    );
}

function Content() {
    return (
        <section className="text-gray-400 body-font" id="faq">
            <div className="container pt-10 pb-10 mx-auto flex flex-wrap">
                <div className="flex flex-wrap w-full">
                    <div className="md:w-1/2 pr-5 pl-5">
                        <div className="flex items-start w-full space-x-2 mb-2">
                            <img src="/img/chinaicon.png" alt="BLACK MYTH: WUKONG WIKI" className="w-8 h-8 mt-1" />
                            <h2 className="text-2xl font-medium title-font text-white">
                                <Translate>CHARACTER BACKGROUND</Translate>
                            </h2>
                        </div>
                        <div className='text-gray-100'>
                            <Translate>Sun Wukong is portrayed as a powerful and rebellious warrior with extraordinary abilities. He possesses immense strength, agility, and a variety of magical powers, including shape-shifting and the ability to summon clones of himself. His iconic weapon is the Ruyi Jingu Bang, a magical staff that can change its size at will. Sun Wukong's character is deeply rooted in Chinese culture, symbolizing rebellion, freedom, and the quest for enlightenment.</Translate>
                            <img src="/img/wukongrole.jpg" alt="Black Myth: Wukong wiki" className="mt-3" />
                        </div>
                        <div className="flex items-start w-full space-x-2 mb-2 mt-5">
                            <img src="/img/chinaicon.png" alt="BLACK MYTH: WUKONG WIKI" className="w-8 h-8 mt-1" />
                            <h2 className="text-2xl font-medium title-font text-white">
                                <Translate>CULTURAL SIGNIFICANCE IN BLACK MYTH: WUKONG</Translate>
                            </h2>
                        </div>
                        <div className='text-gray-100'>
                            <Translate>Black Myth: Wukong holds significant cultural importance as it draws from the rich Chinese literary tradition and mythology, particularly the classic novel "Journey to the West" and its iconic character Sun Wukong. </Translate>
                            <h3 className='text-xl mt-4'>Adaptation of a classic tale</h3>
                            <Translate>While based on 'Journey to the West,' the game offers a fresh perspective on the story, potentially exploring themes of rebellion, free will, and the complex relationships between gods, humans, and demons (Yaoguai).</Translate>
                            <h3 className='text-xl mt-4'>Cultural exchange through gaming</h3>
                            <Translate>The game serves as a vehicle for introducing elements of Chinese culture, mythology, and storytelling to a wider international audience. It has the potential to spark interest in Chinese literature and folklore among players unfamiliar with these traditions.</Translate>
                            <h3 className='text-xl mt-4'>Reinterpretation of Sun Wukong</h3>
                            <Translate>The game emphasizes Sun Wukong's role as a powerful warrior deity (Fighting and Warring Deity), focusing on his combat prowess and legendary battles. This interpretation aligns with his portrayal in Chinese folklore as a symbol of rebellion and a hero of justice.</Translate>
                            <img src="/img/strategy.jpg" alt="Black Myth: Wukong wiki" className="mt-3" />
                        </div>
                        <div className="flex items-start w-full space-x-2 mb-2 mt-5">
                            <img src="/img/chinaicon.png" alt="BLACK MYTH: WUKONG WIKI" className="w-8 h-8 mt-1" />
                            <h2 className="text-2xl font-medium title-font text-white">
                                <Translate>GAMEPLAY AND FEATURES IN BLACK MYTH: WUKONG</Translate>
                            </h2>
                        </div>
                        <div className='text-gray-100'>
                            <Translate>Black Myth: Wukong aims to provide an immersive experience with top-notch graphics, detailed environments, and engaging combat mechanics. The game features:</Translate>
                            <ul className='mt-1 mb-1'>
                                <li><Translate>Stunning Visuals: Utilizing Unreal Engine 5, the game boasts high-quality graphics and realistic animations.</Translate></li>
                                <li><Translate>Rich Storyline: The narrative is inspired by 'Journey to the West,' offering a deep and engaging story that explores the lore and mythology of ancient China.</Translate></li>
                                <li><Translate>Dynamic Combat: Players can engage in fast-paced combat, utilizing Sun Wukong's martial arts skills and magical abilities to defeat enemies.</Translate></li>
                                <li><Translate>Exploration: The game world is expansive, filled with hidden secrets, diverse landscapes, and formidable bosses.</Translate></li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/2 pr-5 pl-5">
                        <div className="flex items-start w-full space-x-2 mb-2">
                            <img src="/img/chinaicon.png" alt="BLACK MYTH: WUKONG WIKI" className="w-8 h-8 mt-1" />
                            <h2 className="text-2xl font-medium title-font text-white">
                                <Translate>SUN WUKONG SKILLS IN BLACK MYTH: WUKONG</Translate>
                            </h2>
                        </div>
                        <div className='text-gray-100'>
                            <Translate>In Black Myth: Wukong, Sun Wukong possesses a range of powerful abilities that not only faithfully recreate his capabilities from the original story but also enhance gameplay and challenge:</Translate>
                            <ul className='mt-1 mb-1'>
                                <li><Translate>Ruyi Jingu Bang: Sun Wukong's iconic weapon can change size at will. In the game, players can use it for both melee attacks and long-range strikes, and even solve puzzles and overcome obstacles through its transformation.</Translate></li>
                                <li><Translate>Cloud Somersault: Sun Wukong can summon a magical cloud for rapid movement, increasing the game's mobility and exploration aspects.</Translate></li>
                                <li><Translate>72 Transformations: The ability to transform into various animals and objects to adapt to different combat situations and environmental needs. This skill provides multiple strategic options and tactical variations in the game.</Translate></li>
                                <li><Translate>Clone Technique: Sun Wukong can summon clones of himself to confuse enemies or perform coordinated attacks.</Translate></li>
                                <li><Translate>Fiery Eyes: Features skill trees for ability enhancement.</Translate></li>
                            </ul>
                            <img src="/img/wukong.jpg" alt="Black Myth: Wukong wiki" className="mt-3" />
                            <img src="/img/weapon2.jpg" alt="Black Myth: Wukong wiki" className="mt-3" />
                            <img src="/img/special1.jpg" alt="Black Myth: Wukong wiki" className="mt-3" />
                            <img src="/img/special2.jpg" alt="Black Myth: Wukong wiki" className="mt-3" />
                        </div>
                    </div>
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
            <Header />
            <main>
                <Content />
            </main>
        </Layout>
    );
}
