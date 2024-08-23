import React, { useEffect, useRef }  from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import Unlisted from '@theme/Unlisted';
import styles from './styles.module.css';
/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const {frontMatter, toc} = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;
  return {
    hidden,
    mobile,
    desktop,
  };
}
export default function DocItemLayout({children}) {
  const docTOC = useDocTOC();
  const {
    metadata: {unlisted},
  } = useDoc();


  const commentElement = useRef(null);

  useEffect(() => {
    // Update the document title using the browser API
    let s = document.createElement("script");
    s.src = "https://giscus.app/client.js";
    s.setAttribute("data-repo", "jiangjiax/blackmythwukong");
    s.setAttribute("data-repo-id", "R_kgDOMd9iSw");
    s.setAttribute("data-category", "General");
    s.setAttribute("data-category-id", "DIC_kwDOMd9iS84Ch3me");
    s.setAttribute("data-mapping", "pathname");
    s.setAttribute("data-reactions-enabled", "1");
    s.setAttribute("data-emit-metadata", "0");
    s.setAttribute("data-input-position", "bottom");
    s.setAttribute("data-theme", "preferred_color_scheme");
    s.setAttribute("data-lang", "en");
    s.setAttribute("data-loading", "lazy");
    s.setAttribute("crossorigin", "anonymous");
    s.async = true;
    commentElement.current.appendChild(s);
  }, []);

  return (
    <div className="row">
      <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
        {unlisted && <Unlisted />}
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs/>
            <DocVersionBadge/>
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <div style={{marginTop: '20px'}} ref={commentElement}></div>
            <DocItemFooter/>
          </article>
          <DocItemPaginator/>
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}
