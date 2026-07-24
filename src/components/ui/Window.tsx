type WindowProps = {
  src: string
  alt: string
  /** Étiquette discrète en coin, ex. « Page réelle — faites défiler ». */
  tag?: string
  eager?: boolean
}

/**
 * Une page complète du site projet, dans un cadre qui se fait défiler.
 * C'est la preuve la plus honnête possible : la page telle qu'elle existe.
 */
export function Window({ src, alt, tag, eager = false }: WindowProps) {
  const { isEnglish } = useLanguage()
  const visibleTag = tag ?? (isEnglish ? 'Live page — scroll' : 'Page réelle — faites défiler')

  return (
    <div className="window">
      <div className="window-scroll" tabIndex={0} role="group" aria-label={alt}>
        <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      </div>
      <span className="window-tag" aria-hidden="true">{visibleTag}</span>
    </div>
  )
}
import { useLanguage } from '../../i18n/LanguageContext'
