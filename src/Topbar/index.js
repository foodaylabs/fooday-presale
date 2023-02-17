import React from 'react'
import clsx from 'clsx'
import LogoUrl from '../logo.svg'
import styles from './topbar.module.css'
import config from '../config'
import { useTranslation } from 'react-i18next'

export default function Topbar() {
    const { t } = useTranslation()
  return (
    <nav className={styles.topbar} aria-label="Main">
      <div className={styles.topbarInner}>
        <a className={styles.logo} href={config.LANDING_URL} aria-label="Link to homepage">
          <img src={LogoUrl} aria-label="The logo of FoodDay" />
        </a>

        <div className={styles.links}>
          <a className={styles.link} href={config.DOCS_URL}>
            {t('topbar.links.docs')}
          </a>
          <a className={clsx(styles.link, styles.whitelist)} href={config.LANDING_URL}>
            {t('topbar.links.waitlist')}
          </a>
        </div>
      </div>
    </nav>
  )
}
