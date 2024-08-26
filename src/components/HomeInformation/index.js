import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const indexHref = translate({
  id: 'index.href',
  message: ''
})

export default function HomeInformation() {
  const handleClick = (event) => {
    if (!event.target.href) {``
      event.preventDefault();
      showToast('Please look forward to it!');
    }
  };

  return (
    <section className="text-gray-400 body-font">
      <div className={styles.chineseStyleDivider}></div>
      <div className="container pt-10 pb-10 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-6">
          <p className="text-base text-yellow-400 tracking-widest font-medium title-font mb-1"><Translate>Latest Information</Translate></p>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white"><Translate>BLACK MYTH: WUKONG WIKI</Translate></h1>
        </div>
        <div className="flex flex-wrap -m-4 w-full">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-6 flex-col">
              <a className="flex items-center mb-2 justify-center">
                <h2 className="text-yellow-400 text-xl title-font font-medium"><Translate>GENERAL INFORMATION</Translate></h2>
              </a>
              <div className="leading-relaxed text-base flex flex-wrap">
                {/* <a>Patch Notes</a>
                <span className={styles.dividericon}>✿</span> */}
                {/* <a>Controls</a>
                <span className={styles.dividericon}>✿</span> */}
                <a href={indexHref+'/combat'}><Translate>Combat</Translate></a>
                <span className={styles.dividericon}>✿</span>
                <a href="#gameplay"><Translate>Gameplay</Translate></a>
                <span className={styles.dividericon}>✿</span>
                <a href="#faq"><Translate>FAQs & News</Translate></a>
                <span className={styles.dividericon}>✿</span>
                <a href="#wallpapers"><Translate>Wallpapers</Translate></a>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-6 flex-col">
              <a className="flex items-center mb-2 justify-center">
                <h2 className="text-yellow-400 text-xl title-font font-medium"><Translate>CHARACTER INFORMATION</Translate></h2>
              </a>
              <div className="leading-relaxed text-base flex flex-wrap">
                <a href={indexHref+"/sunwukong"}><Translate>Sun WuKong</Translate></a>
                <span className={styles.dividericon}>✿</span>
                <a href={indexHref+"/docs/character"}><Translate>Character</Translate></a>
                <span className={styles.dividericon}>✿</span>
                <a href={indexHref+'/docs/stats'}><Translate>Stats</Translate></a>
                <span className={styles.dividericon}>✿</span>
                {/* <a onClick={handleClick}><Translate>Skills</Translate></a>
                <span className={styles.dividericon}>✿</span> */}
                <a href={indexHref+'/docs/spells'}><Translate>spells</Translate></a>
                <span className={styles.dividericon}>✿</span>
                <a href={indexHref+'/docs/equip'}><Translate>Equip</Translate></a>
                {/* <span className={styles.dividericon}>✿</span>
                <a onClick={handleClick}><Translate>Builds</Translate></a> */}
                {/* <span className={styles.dividericon}>✿</span>
                <a onClick={handleClick}><Translate>Buffs & Debuffs</Translate></a> */}
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-6 flex-col">
              <a className="flex items-center mb-2 justify-center">
                <h2 className="text-yellow-400 text-xl title-font font-medium"><Translate>WORLD INFORMATION</Translate></h2>
              </a>
              <div className="leading-relaxed text-base flex flex-wrap">
                <a href={indexHref+'/docs/maps'}><Translate>Maps</Translate></a>
                <span className={styles.dividericon}>✿</span>
                <a href={indexHref+'/docs/bosses'}><Translate>Bosses</Translate></a>
                {/* <span className={styles.dividericon}>✿</span>
                <a onClick={handleClick}><Translate>NPCs</Translate></a> */}
                {/* <span className={styles.dividericon}>✿</span>
                <a onClick={handleClick}><Translate>Creatures & Enemies</Translate></a> */}
                <span className={styles.dividericon}>✿</span>
                <a href={indexHref+'/docs/back-story'}><Translate>Back Story</Translate></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.chineseStyleDivider}></div>
    </section>
  );
}

function showToast(message) {
  const toastContainer = document.createElement('div');
  toastContainer.className = 'toast-container';
  toastContainer.style.cssText = `
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 1000;
    font-size: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  `;
  toastContainer.textContent = message;
  document.body.appendChild(toastContainer);

  setTimeout(() => {
    toastContainer.remove();
  }, 3000);
}