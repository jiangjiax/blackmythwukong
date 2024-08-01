import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export default function HomeContent() {
  return (
    <section className="text-gray-400 body-font" id="gameplay">
      <div className="container pt-10 pb-10 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="md:w-1/2 pr-5 pl-5">
            <div className="flex items-start w-full space-x-2 mb-2">
              <img src="/img/chinaicon.png" alt="BLACK MYTH: WUKONG WIKI" className="w-8 h-8 mt-1" />
              <h2 className="text-2xl font-medium title-font text-white"><Translate>BLACK MYTH: WUKONG GAMEPLAY</Translate></h2>
            </div>
            <div className='text-gray-100 sm:mb-5'>
              <Translate>Black Myth: Wukong, developed by Game Science, is a highly anticipated action role-playing game set to release on August 20, 2024. Based on the classic Chinese novel 'Journey to the West,' the game promises to deliver an immersive experience rich in Chinese mythology.</Translate>
              <h3 className='text-xl mt-4'><Translate>Dynamic Combat System</Translate></h3>
              <Translate>Black Myth: Wukong boasts a sophisticated combat system that combines fast-paced action with fluid movements. Players will wield the legendary Ruyi Jingu Bang staff, executing diverse attacks and combos. The combat encourages players to utilize agile movements and tactical thinking, leveraging the environment to gain advantages. This creates a unique and engaging fighting style that promises to keep players on their toes.</Translate>
              <img src="/img/combat1.jpg" alt="Black Myth: Wukong Gameplay" className="mt-3" />
              <h3 className='text-xl mt-4'><Translate>Transformation Abilities</Translate></h3>
              <Translate>A standout feature of the game is the protagonist's ability to transform. Players can morph into various creatures, each with its own distinct abilities and combat style. For instance, transforming into the wolfman Guangzhi allows players to wield a fire glaive for powerful melee attacks. This transformation mechanic not only adds variety to combat but also encourages strategic thinking, as players must choose the most suitable form for different enemies and battle situations.</Translate>
              <img src="/img/guangzhi.jpg" alt="Black Myth: Wukong Gameplay" className="mt-3" />
              <h3 className='text-xl mt-4'><Translate>Comprehensive Character Progression</Translate></h3>
              <Translate>Black Myth: Wukong implements a rich skill tree system, allowing players to continuously upgrade their character and unlock new abilities throughout the game. This progression mechanism enables players to customize their gameplay style, choosing skill combinations that suit their preferences. As characters grow stronger, players will experience more powerful abilities and increasingly complex combat strategies, enhancing the game's replay value.</Translate>
              <img src="/img/wukong.jpg" alt="Black Myth: Wukong Gameplay" className="mt-3" />
              <h3 className='text-xl mt-4'><Translate>Impressive Boss Battles</Translate></h3>
              <Translate>Boss fights are a core highlight of the game. Each boss is uniquely designed with its own fighting style, challenging players to adapt and find weaknesses. These encounters not only test players' reflexes and tactical thinking but also provide a great sense of accomplishment. Defeating powerful bosses rewards players with valuable items and achievements, adding to the game's appeal.</Translate>
              <img src="/img/world.jpg" alt="Black Myth: Wukong Gameplay" className="mt-3" />
              <h3 className='text-xl mt-4'><Translate>Rich Exploration Elements</Translate></h3>
              <Translate>While the main storyline follows a linear progression, Black Myth: Wukong features vast areas for exploration. Players are encouraged to investigate every corner, discovering hidden items, facing elite enemies, and uncovering more about the game's mythological world. This exploration element enhances the game's immersion and ensures that each playthrough is filled with surprises.</Translate>
              <img src="/img/exp.jpg" alt="Black Myth: Wukong Gameplay" className="mt-3" />
              <h3 className='text-xl mt-4'><Translate>Stunning Visual Effects</Translate></h3>
              <Translate>Developed using Unreal Engine 5, Black Myth: Wukong delivers breathtaking visual effects and smooth animations. The game's scenery draws inspiration from traditional Chinese culture, taking players through majestic mountains, dense forests, and mysterious ancient ruins, all imbued with a strong mythological atmosphere. Detailed character modeling and fluid action animations make every frame of the game look like a work of art.</Translate>
              <img src="/img/visual.jpg" alt="Black Myth: Wukong Gameplay" className="mt-3" />
              <h3 className='text-xl mt-4'><Translate>Rich Cultural Depth</Translate></h3>
              <Translate>The game's storyline is deeply rooted in Chinese mythology, allowing players to interact with classic characters like Sun Wukong and Tang Sanzang. This cultural depth not only enriches the game's backstory but also allows players to experience the charm of traditional Chinese culture while enjoying the game.</Translate>
              <img src="/img/w9.jpg" alt="Black Myth: Wukong Gameplay" className="mt-3" />
            </div>
          </div>
          <div className="md:w-1/2 pr-5 pl-5">
            <div className="flex items-start w-full space-x-2 mb-2">
              <img src="/img/chinaicon.png" alt="BLACK MYTH: WUKONG WIKI" className="w-8 h-8 mt-1" />
              <h2 className="text-2xl font-medium title-font text-white"><Translate>BLACK MYTH: WUKONG STORY OVERVIEW</Translate></h2>
            </div>
            <div className='text-gray-100'>
              <Translate>Set in a mythical version of ancient China, Black Myth: Wukong draws its inspiration from the classic Chinese novel 'Journey to the West.' However, the game presents a unique interpretation of this well-known tale, blending familiar elements with new narrative twists.</Translate>
              <h3 className='text-xl mt-4'><Translate>Central Character</Translate></h3>
              <Translate>The player takes on the role of the "Destined One," a character based on Sun Wukong, the legendary Monkey King. While sharing similarities with the novel is protagonist, this version of Wukong is shrouded in mystery, with his true identity and purpose gradually revealed throughout the game.</Translate>
              <img src="/img/boss2.jpg" alt="Black Myth: Wukong Gameplay" className="mt-3" />
              <h3 className='text-xl mt-4'><Translate>Setting and World</Translate></h3>
              <Translate>The game world is a vast, perilous landscape filled with mythical creatures, ancient ruins, and supernatural phenomena. Players will journey through diverse environments, from misty mountains and dense forests to hidden temples and celestial realms. Each area is steeped in Chinese mythology, offering a rich tapestry of lore and history to uncover.</Translate>
              <img src="/img/combat2.jpg" alt="Black Myth: Wukong Gameplay" className="mt-3" />
              <h3 className='text-xl mt-4'><Translate>Main Quest</Translate></h3>
              <Translate>The Destined One embarks on a dangerous journey to uncover the truth behind ancient legends. This quest is not just about reaching the West, as in the original story, but about uncovering hidden truths that could reshape the understanding of the world and the protagonist's place in it.</Translate>
              <img src="/img/transformation.jpg" alt="Black Myth: Wukong Gameplay" className="mt-3" />
              <h3 className='text-xl mt-4'><Translate>Antagonists</Translate></h3>
              <Translate>The game features a variety of antagonists, from rival demon kings and jealous deities to corrupted heroes and cosmic entities. Each adversary presents unique challenges and contributes to the overall narrative.</Translate>
              <img src="/img/bosss.jpg" alt="Black Myth: Wukong Gameplay" className="mt-3" />
              <h3 className='text-xl mt-4'><Translate>Conclusion</Translate></h3>
              <Translate>As players progress through the story, they'll unravel a complex narrative that questions the nature of destiny, power, and the responsibility that comes with great abilities. The journey of the Destined One is not just a physical one to the West, but a spiritual and philosophical exploration that challenges players to think about the consequences of their actions in a world where myths come to life.</Translate>
              <img src="/img/conclusion.jpg" alt="Black Myth: Wukong Gameplay" className="mt-3" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.chineseStyleDivider}></div>
    </section>
  );
}