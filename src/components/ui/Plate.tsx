import { Screen } from '../../data/projects'

type PlateProps = {
  screen: Screen
  /** Référence type dossier de conception, ex. « SAINT-JULES · PL.02 ». */
  reference: string
  eager?: boolean
}

/**
 * Une « planche » : capture réelle d'un projet, présentée comme une pièce
 * du dossier de conception — référence en cartouche, annotation manuscrite
 * lorsqu'un détail mérite d'être pointé. C'est la signature visuelle du site :
 * la preuve d'abord, la décoration jamais.
 */
export function Plate({ screen, reference, eager = false }: PlateProps) {
  return (
    <figure className={`plate plate-${screen.kind}`}>
      <div className="plate-frame">
        <img
          src={screen.src}
          alt={screen.alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
        <span className="plate-marks" aria-hidden="true" />
      </div>
      <figcaption>
        <span className="plate-ref">{reference}</span>
        <span className="plate-caption">{screen.caption}</span>
        {screen.note && <em className="plate-note">— {screen.note}</em>}
      </figcaption>
    </figure>
  )
}
