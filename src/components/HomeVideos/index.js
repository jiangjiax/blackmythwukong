import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export default function HomeVideos() {
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
    <section className="text-gray-400 body-font">
      <div className="container pt-10 pb-10 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-3">
          <p className="text-base text-yellow-400 tracking-widest font-medium title-font mb-1"><Translate>Videos</Translate></p>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white"><Translate>BLACK MYTH: WUKONG WIKI</Translate></h1>
        </div>
        <div className="flex flex-wrap w-full justify-center">
          <div className="md:w-1/2 p-4">
            <div className="flex flex-col text-center w-full mb-1">
              <a className='text-yellow-400'>
                <h2 className="text-xl font-medium title-font"><Translate>REAL MACHINE DEMONSTRATION</Translate></h2>
              </a>
            </div>
            {!iframeLoaded && (
              <div className="w-full h-80 rounded-md flex items-center justify-center">
                <span className="text-gray-300 animate-spin"><Translate>Loading...</Translate></span>
              </div>
            )}
            <iframe
              className={clsx("w-full h-80 rounded-md", { hidden: !iframeLoaded })}
              src="https://www.youtube.com/embed/rPPwsqfoy0w?si=Xz2p4LKDeLrqSzhx"
              title="Black Myth WuKong Wiki"
              onLoad={() => setIframeLoaded(true)}
            ></iframe>
          </div>
          <div className="md:w-1/2 p-4">
            <div className="flex flex-col text-center w-full mb-1">
              <a className='text-yellow-400'>
                <h2 className="text-xl font-medium title-font"><Translate>BLACK MYTH WUKONG REVIEW</Translate></h2>
              </a>
            </div>
            {!iframeLoaded && (
              <div className="w-full h-80 rounded-md flex items-center justify-center">
                <span className="text-gray-300 animate-spin"><Translate>Loading...</Translate></span>
              </div>
            )}
            <iframe
              className={clsx("w-full h-80 rounded-md", { hidden: !iframeLoaded })}
              src="https://www.youtube.com/embed/1xGiPUeevCM?si=19aTFLUiDJ_2NGhB"
              title="Black Myth WuKong Wiki"
              onLoad={() => setIframeLoaded(true)}
            ></iframe>
          </div>
        </div>
      </div>
      <div className={styles.chineseStyleDivider}></div>
    </section>
  );
}