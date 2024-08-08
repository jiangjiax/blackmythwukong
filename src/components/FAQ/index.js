import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export default function FAQ() {
  return (
    <section className="text-gray-400 body-font" id="faq">
      <div className="container pt-10 pb-10 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full" id="release">
          <div className="md:w-1/2 pr-5 pl-5">
            <div className="flex items-start w-full space-x-2 mb-2">
              <img src="/img/chinaicon.png" alt="BLACK MYTH: WUKONG WIKI" className="w-8 h-8 mt-1" />
              <h2 className="text-2xl font-medium title-font text-white"><Translate>WHEN DID BLACK MYTH: WUKONG RELEASE?</Translate></h2>
            </div>
            <div className='text-gray-100'>
              <Translate>Black Myth: Wukong is set to release on August 20, 2024. The game will launch simultaneously on PlayStation 5 and PC platforms, while the Xbox Series X/S version has been delayed with no specific release date announced yet.</Translate>
            </div>
            <div className="flex items-start w-full space-x-2 mb-2 mt-5">
              <img src="/img/chinaicon.png" alt="BLACK MYTH: WUKONG WIKI" className="w-8 h-8 mt-1" />
              <h2 className="text-2xl font-medium title-font text-white"><Translate>WHAT PLATFORMS IS BLACK MYTH: WUKONG ON?</Translate></h2>
            </div>
            <div className='text-gray-100'>
              <Translate>Black Myth: Wukong will be available on the following platforms:</Translate>
              <ul className='mt-1 mb-1'>
                <li><Translate>PlayStation 5</Translate></li>
                <li><Translate>PC (Windows)</Translate></li>
                <li><Translate>Xbox Series X/S (delayed, release date to be announced)</Translate></li>
              </ul>
              <Translate>The game will launch simultaneously on PS5 and PC on August 20, 2024. However, the Xbox Series X/S version has been delayed, with developers working to optimize it for the platform.</Translate>
            </div>
            <div className="flex items-start w-full space-x-2 mb-2 mt-5">
              <img src="/img/chinaicon.png" alt="BLACK MYTH: WUKONG WIKI" className="w-8 h-8 mt-1" />
              <h2 className="text-2xl font-medium title-font text-white"><Translate>HOW LONG HAVE THEY BEEN WORKING ON BLACK MYTH: WUKONG?</Translate></h2>
            </div>
            <div className='text-gray-100'>
              <Translate>Game Science, the developer of Black Myth: Wukong, began working on the game in 2017. The project was first revealed to the public on August 20, 2020, with a 13-minute pre-alpha gameplay video that quickly went viral, garnering millions of views on YouTube and Bilibili.</Translate>
            </div>
            <div className="flex items-start w-full space-x-2 mb-2 mt-5">
              <img src="/img/chinaicon.png" alt="BLACK MYTH: WUKONG WIKI" className="w-8 h-8 mt-1" />
              <h2 className="text-2xl font-medium title-font text-white"><Translate>BLACK MYTH: WUKONG SYSTEM REQUIREMENTS</Translate></h2>
            </div>
            <div className='text-gray-100'>
              <h3 className='text-xl'><Translate>Minimum Requirements</Translate></h3>
              <ul className='mt-1 mb-1'>
                <li><Translate>OS: Windows 10 64-bit</Translate></li>
                <li><Translate>CPU: Intel Core i5-8400 or AMD Ryzen 5 1600</Translate></li>
                <li><Translate>Memory: 16 GB RAM</Translate></li>
                <li><Translate>Graphics: NVIDIA GeForce GTX 1060 6GB or AMD Radeon RX 580 8GB</Translate></li>
                <li><Translate>DirectX: Version 11</Translate></li>
                <li><Translate>Storage: 130 GB available space (HDD supported, SSD recommended)</Translate></li>
                <li><Translate>Sound Card: Windows compatible audio device</Translate></li>
              </ul>
              <h3 className='text-xl mt-4'><Translate>Recommended Requirements</Translate></h3>
              <ul className='mt-1 mb-1'>
                <li><Translate>OS: Windows 10 64-bit</Translate></li>
                <li><Translate>CPU: Intel Core i7-9700 or AMD Ryzen 5 5500</Translate></li>
                <li><Translate>Memory: 16 GB RAM</Translate></li>
                <li><Translate>Graphics: NVIDIA GeForce RTX 2060 or AMD Radeon RX 5700 XT or INTEL Arc A750</Translate></li>
                <li><Translate>DirectX: Version 12</Translate></li>
                <li><Translate>Storage: 130 GB available space (SSD required)</Translate></li>
                <li><Translate>Sound Card: Windows compatible audio device</Translate></li>
              </ul>
              <h3 className='text-xl mt-4'><Translate>Minimum Ray Tracing Configuration (Medium settings, Low RT, 1080P)</Translate></h3>
              <ul className='mt-1 mb-1'>
                <li><Translate>CPU: Intel Core i5-9400 or AMD Ryzen 5 1600</Translate></li>
                <li><Translate>Graphics: NVIDIA GeForce RTX 3060</Translate></li>
                <li><Translate>VRAM: 8 GB</Translate></li>
              </ul>
              <h3 className='text-xl mt-4'><Translate>Ultra Ray Tracing Configuration (High settings, Ultra RT, 4K)</Translate></h3>
              <ul className='mt-1 mb-4'>
                <li><Translate>CPU: Intel Core i7-9700 or AMD Ryzen 5 5500</Translate></li>
                <li><Translate>Graphics: NVIDIA GeForce RTX 4080 Super</Translate></li>
                <li><Translate>VRAM: 16 GB</Translate></li>
                <li><Translate>RAM: 32 GB</Translate></li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 pr-5 pl-5">
            <div className="flex items-start w-full space-x-2 mb-2">
              <img src="/img/chinaicon.png" alt="BLACK MYTH: WUKONG WIKI" className="w-8 h-8 mt-1" />
              <h2 className="text-2xl font-medium title-font text-white"><Translate>LATEST BLACK MYTH: WUKONG NEWS</Translate></h2>
            </div>
            <div className='text-gray-100'>
              <h3 className='text-xl'><Translate>Black Myth: Wukong Pre-order Editions Detailed</Translate></h3>
              <Translate>Black Myth: Wukong has become the most wishlisted game on Steam. This achievement highlights the immense anticipation for this action RPG based on Chinese mythology. The game offers three pre-order editions:</Translate>
              <ul className='mt-1 mb-1'>
                <li><Translate>Digital Edition ($69.99): Includes various in-game items and a digital soundtrack.</Translate></li>
                <li><Translate>Deluxe Edition ($169): Features a steelbook case, 1:1 scale bronze headband replica, and additional physical and digital content.</Translate></li>
                <li><Translate>Collector's Edition ($399): Contains a 40cm Sun Wukong statue, silk scroll, and numerous premium collectibles.</Translate></li>
              </ul>
              <h3 className='text-xl mt-4'><Translate>Black Myth: Wukong Pre-order Sales Milestone</Translate></h3>
              <Translate>Reports indicate that Black Myth: Wukong received 1.1 million pre-orders within days of opening physical and digital pre-orders on June 8th and 11th, demonstrating the game's massive appeal.</Translate>
              <h3 className='text-xl mt-4'><Translate>Black Myth: Wukong Development Progress</Translate></h3>
              <Translate>Game Science, the developer, has stated that Black Myth: Wukong is being developed using Unreal Engine 5 and is the first game to simultaneously use this engine and NVIDIA's DLSS technology, promising exceptional visual experiences.</Translate>
              <h3 className='text-xl mt-4'><Translate>Sweet Baby Controversy</Translate></h3>
              <h4 className='text-lg mt-4'><Translate>Background</Translate></h4>
              <Translate>Recently, a controversy erupted between Black Myth: Wukong and Sweet Baby studio. Sweet Baby is a consultancy firm that provides political correctness guidance to game developers, ensuring game content meets certain social and cultural standards.</Translate>
              <h4 className='text-lg mt-4'><Translate>Controversy Details</Translate></h4>
              <Translate>According to reports, Sweet Baby demanded a $7 million "guidance fee" from Game Science, the developers of Black Myth: Wukong, to ensure the game adheres to their political correctness standards. Game Science reportedly refused this demand.</Translate>
              <h4 className='text-lg mt-4'><Translate>Media Attacks</Translate></h4>
              <Translate>Following the refusal to pay, Game Science claims they've been subjected to continuous attacks and defamation from Western media. These attacks allegedly include accusations of gender discrimination in the game. Sweet Baby is accused of using its media influence to tarnish Black Myth: Wukong's reputation in retaliation for the refused payment.</Translate>
              <h4 className='text-lg mt-4'><Translate>Community Reaction</Translate></h4>
              <Translate>This controversy has sparked widespread discussion in the gaming community. Some players and industry insiders have expressed outrage at Sweet Baby's alleged actions, considering them unethical and harmful to the gaming industry. They argue that a small number of influential consultancy firms should not control game developers' creative directions through pressure tactics.</Translate>
              <h4 className='text-lg mt-4'><Translate>Official Response</Translate></h4>
              <Translate>As of now, Game Science has not issued an official statement regarding this controversy. However, as the release date approaches, this dispute may impact the game's market performance.</Translate>
              <h4 className='text-lg mt-4'><Translate>Future Outlook</Translate></h4>
              <Translate>Despite the controversy, Black Myth: Wukong remains one of the most anticipated games of 2024. Players are eager to explore its rich Chinese mythological world and experience its unique combat system and transformation abilities. More game details are expected to be revealed as the release date nears.</Translate>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.chineseStyleDivider}></div>
    </section>
  );
}