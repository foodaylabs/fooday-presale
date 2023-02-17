import clsx from 'clsx'
import React from 'react'
import { useTranslation } from 'react-i18next'
import config from '../config'
import styles from './footer.module.css'
import TokensImageUrl from './tokens.svg'
import LogoImageUrl from './logo-without-icon.svg'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <div className={styles.about}>
          <span className={styles.title}>
            {t('footer.about.title')}
          </span>
          <div>
            <img alt="tokens" src={TokensImageUrl} />
            <p>
              {t('footer.about.content')}
            </p>
          </div>
        </div>
        <div className={styles.media}>
          <span className={styles.title}>
            {t('footer.media.title')}
          </span>
          <ul>
            <li>
              <a href={config.TWITTER_URL}>Twitter</a>
            </li>
            <li>
              <a href={config.IG_URL}>Instagram</a>
            </li>
            <li>
              <a href={config.DISCORD_URL}>Discord</a>
            </li>
            <li>
              <a href={config.MEDIUM_URL}>Medium</a>
            </li>
          </ul>
        </div>
        <div className={styles.support}>
          <span className={styles.title}>
            {t('footer.support.title')}
          </span>
          <ul>
            <li>
              <a href={config.DOCS_URL}>{t('footer.support.docs')}</a>
            </li>
            <li>
              <a href={`mailto:${config.CONTACT_EMAIL}`}>{t('footer.support.email')}</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles.copyright}>
        <img alt="logo" src={LogoImageUrl} />
        <span>@ 2023. All rights reserved</span>
      </div>
    </footer>
  )
}
