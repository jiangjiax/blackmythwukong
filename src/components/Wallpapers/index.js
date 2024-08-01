import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import Translate from '@docusaurus/Translate';

export default function Wallpapers() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      iframe.addEventListener('load', () => setIframeLoaded(true));
    });
    return () => {
      iframes.forEach(iframe => {
        iframe.removeEventListener('load', () => setIframeLoaded(true));
      });
    };
  }, []);

  return (
    <section className="text-gray-400 body-font" id="wallpapers">
      <div className="container pt-10 pb-10 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-3">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white"><Translate>BLACK MYTH: WUKONG WALLPAPERS</Translate></h1>
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img src="/img/w1.jpg" alt="Black Myth: Wukong wallpaper" class="w-full object-cover h-full object-center block" />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img src="/img/w2.jpg" alt="Black Myth: Wukong wallpaper" class="w-full object-cover h-full object-center block" />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img src="/img/w3.jpg" alt="Black Myth: Wukong wallpaper" class="w-full h-full object-cover object-center block"/>
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img src="/img/w4.jpg" alt="Black Myth: Wukong wallpaper" class="w-full h-full object-cover object-center block"/>
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img src="/img/w5.jpg" alt="Black Myth: Wukong wallpaper" class="w-full object-cover h-full object-center block"/>
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img src="/img/w6.jpg" alt="Black Myth: Wukong wallpaper" class="w-full object-cover h-full object-center block"/>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -m-1 mt-2">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img src="/img/w7.jpg" alt="Black Myth: Wukong wallpaper" class="w-full object-cover h-full object-center block" />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img src="/img/w8.jpg" alt="Black Myth: Wukong wallpaper" class="w-full object-cover h-full object-center block" />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img src="/img/w9.jpg" alt="Black Myth: Wukong wallpaper" class="w-full h-full object-cover object-center block"/>
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img src="/img/w10.jpg" alt="Black Myth: Wukong wallpaper" class="w-full h-full object-cover object-center block"/>
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img src="/img/w11.jpg" alt="Black Myth: Wukong wallpaper" class="w-full object-cover h-full object-center block"/>
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img src="/img/w12.jpg" alt="Black Myth: Wukong wallpaper" class="w-full object-cover h-full object-center block"/>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -m-1 mt-2">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img src="/img/w13.jpg" alt="Black Myth: Wukong wallpaper" class="w-full object-cover h-full object-center block" />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img src="/img/w14.jpg" alt="Black Myth: Wukong wallpaper" class="w-full object-cover h-full object-center block" />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img src="/img/w15.jpg" alt="Black Myth: Wukong wallpaper" class="w-full h-full object-cover object-center block"/>
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img src="/img/w16.jpg" alt="Black Myth: Wukong wallpaper" class="w-full h-full object-cover object-center block"/>
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img src="/img/w17.jpg" alt="Black Myth: Wukong wallpaper" class="w-full object-cover h-full object-center block"/>
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img src="/img/w18.jpg" alt="Black Myth: Wukong wallpaper" class="w-full object-cover h-full object-center block"/>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -m-1 mt-2">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img src="/img/w19.jpg" alt="Black Myth: Wukong wallpaper" class="w-full object-cover h-full object-center block" />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img src="/img/w20.jpg" alt="Black Myth: Wukong wallpaper" class="w-full object-cover h-full object-center block" />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img src="/img/w21.jpg" alt="Black Myth: Wukong wallpaper" class="w-full h-full object-cover object-center block"/>
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img src="/img/w22.jpg" alt="Black Myth: Wukong wallpaper" class="w-full h-full object-cover object-center block"/>
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img src="/img/w23.jpg" alt="Black Myth: Wukong wallpaper" class="w-full object-cover h-full object-center block"/>
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img src="/img/w24.jpg" alt="Black Myth: Wukong wallpaper" class="w-full object-cover h-full object-center block"/>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.chineseStyleDivider}></div> */}
    </section>
  );
}