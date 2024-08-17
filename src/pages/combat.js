import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const IndexTitle = translate({
    message: 'COMBAT',
})

const tagline1 = translate({
    id: 'patchnotes.tagline1',
    message: 'Mastering the combat system in '
})

const tagline2 = translate({
    id: 'patchnotes.tagline2',
    message: 'Black Myth: Wukong '
})

const tagline3 = translate({
    id: 'patchnotes.tagline3',
    message: "involves a comprehensive guide that compiles strategies and techniques to enhance players' proficiency in engaging with adversaries and overcoming challenges within the game. Success in vanquishing foes, including formidable bosses, hinges on understanding their unique vulnerabilities and attack patterns."
})

function Header() {
    return (
        <section className="body-font">
            <div className="container pt-10 pl-10 pr-10">
                <div className="flex flex-wrap w-full mb-5">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white"><Translate>BLACK MYTH WUKONG WIKI</Translate></h1>
                        <div className="h-1 w-20 bg-yellow-500 rounded"></div>
                        <p className="leading-relaxed text-white text-opacity-90 mt-2"><Translate>GENERAL INFORMATION</Translate> - {IndexTitle}</p>
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
                                <Translate>DODGING IN BLACK MYTH: WUKONG</Translate>
                            </h2>
                        </div>
                        <div className='text-gray-100'>
                            <Translate>Dodging is a crucial defensive maneuver in Black Myth: Wukong. The game allows for near-instantaneous dodges, giving players the ability to quickly evade enemy attacks. However, it's important to manage your stamina, as excessive dodging can leave you vulnerable. As you progress, you can unlock a skill that creates a phantom copy when performing a perfect dodge, automatically counterattacking enemies.</Translate>
                            <img src="/img/combat1.jpg" alt="Black Myth: Wukong" className="mt-3" />
                        </div>
                        <div className="flex items-start w-full space-x-2 mb-2 mt-5">
                            <img src="/img/chinaicon.png" alt="BLACK MYTH: WUKONG WIKI" className="w-8 h-8 mt-1" />
                            <h2 className="text-2xl font-medium title-font text-white">
                                <Translate>STANCES AND WEAPON SKILLS IN BLACK MYTH: WUKONG</Translate>
                            </h2>
                        </div>
                        <div className='text-gray-100'>
                            <Translate>Combat revolves around Sun Wukong's spellsal staff, the Ruyi Jingu Bang. Players can switch between three different stances:</Translate>
                            <ul className='mt-1 mb-1'>
                                <li><Translate>Smash Form</Translate></li>
                                <li><Translate>Pillar Form</Translate></li>
                                <li><Translate>Thrust Form</Translate></li>
                            </ul>
                            <Translate>Each stance offers unique attack patterns and combos. The Pillar Form, for example, allows Wukong to perch atop the staff and slam down on enemies or perform spinning attacks. Switching between stances mid-combat allows for diverse and fluid combos.</Translate>
                            <img src="/img/weapon1.jpg" alt="Black Myth: Wukong" className="mt-3" />
                            <img src="/img/weapon2.jpg" alt="Black Myth: Wukong" className="mt-3" />
                        </div>
                        <div className="flex items-start w-full space-x-2 mb-2 mt-5">
                            <img src="/img/chinaicon.png" alt="BLACK MYTH: WUKONG WIKI" className="w-8 h-8 mt-1" />
                            <h2 className="text-2xl font-medium title-font text-white">
                                <Translate>COMBAT STRATEGY IN BLACK MYTH: WUKONG</Translate>
                            </h2>
                        </div>
                        <div className='text-gray-100'>
                            <Translate>Unlike slower-paced Souls-like games, Black Myth: Wukong emphasizes speed and relentless offense. Players should:</Translate>
                            <ul className='mt-1 mb-1'>
                                <li><Translate>Utilize Sun Wukong's agility to maintain pressure on enemies</Translate></li>
                                <li><Translate>Learn enemy attack patterns to time dodges effectively</Translate></li>
                                <li><Translate>Manage stamina to avoid exhaustion during crucial moments</Translate></li>
                                <li><Translate>Combine different stances and abilities for varied attack strategies</Translate></li>
                            </ul>
                            <img src="/img/strategy.jpg" alt="Black Myth: Wukong" className="mt-3" />
                        </div>
                    </div>
                    <div className="md:w-1/2 pr-5 pl-5">
                        <div className="flex items-start w-full space-x-2 mb-2">
                            <img src="/img/chinaicon.png" alt="BLACK MYTH: WUKONG WIKI" className="w-8 h-8 mt-1" />
                            <h2 className="text-2xl font-medium title-font text-white">
                                <Translate>TRANSFORMATIONS IN BLACK MYTH: WUKONG</Translate>
                            </h2>
                        </div>
                        <div className='text-gray-100'>
                            <Translate>Sun Wukong can shapeshift into different forms, adding variety to combat encounters. Known transformations include:</Translate>
                            <ul className='mt-1 mb-1'>
                                <li><Translate>A flying insect for evasion and exploration</Translate></li>
                                <li><Translate>A giant monster for powerful attacks</Translate></li>
                            </ul>
                            <img src="/img/guangzhi.jpg" alt="Black Myth: Wukong" className="mt-3" />
                        </div>
                        <div className="flex items-start w-full space-x-2 mb-2 mt-5">
                            <img src="/img/chinaicon.png" alt="BLACK MYTH: WUKONG WIKI" className="w-8 h-8 mt-1" />
                            <h2 className="text-2xl font-medium title-font text-white">
                                <Translate>SPECIAL ABILITIES IN BLACK MYTH: WUKONG</Translate>
                            </h2>
                        </div>
                        <div className='text-gray-100'>
                            <Translate>The game features various special abilities, including:</Translate>
                            <ul className='mt-1 mb-1'>
                                <li><Translate>Monkey Fur Duplication: Summon clones to distract enemies or absorb damage</Translate></li>
                                <li><Translate>Stone Form: An unlockable ability that allows Wukong to absorb hits and counterattack, similar to mechanics in Mortal Shell</Translate></li>
                            </ul>
                            <img src="/img/special1.jpg" alt="Black Myth: Wukong" className="mt-3" />
                            <img src="/img/special2.jpg" alt="Black Myth: Wukong" className="mt-3" />
                        </div>
                        <div className="flex items-start w-full space-x-2 mb-2 mt-5">
                            <img src="/img/chinaicon.png" alt="BLACK MYTH: WUKONG WIKI" className="w-8 h-8 mt-1" />
                            <h2 className="text-2xl font-medium title-font text-white">
                                <Translate>RESTING AND CHECKPOINTS IN BLACK MYTH: WUKONG</Translate>
                            </h2>
                        </div>
                        <div className='text-gray-100'>
                            <Translate>The game features incense altars that serve as checkpoints, similar to Elden Ring's Sites of Grace. At these altars, players can:</Translate>
                            <ul className='mt-1 mb-1'>
                                <li><Translate>Restore health, mana, and status effects</Translate></li>
                                <li><Translate>Replenish healing items</Translate></li>
                                <li><Translate>Consider strategy before continuing</Translate></li>
                            </ul>
                            <img src="/img/rests.jpg" alt="Black Myth: Wukong" className="mt-3" />
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
