export default function PhotoGrid() {
  return (
    <section className="photos">
      {/* Row A: cinematic full-width */}
      <div className="photos-row-a">
        <div className="photo-cell photo-cell--hero reveal">
          <img
            src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_1400/v1771879034/1A7A2258_lpbzr1.jpg"
            alt="JUUN grupo en pista"
            loading="eager"
            style={{objectPosition:'center 55%'}}
          />
        </div>
      </div>

      {/* Row B: portrait · landscape · portrait */}
      <div className="photos-row-b">
        <div className="photo-cell photo-cell--port reveal reveal-d1">
          <img
            src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_800/v1771879163/1A7A1317_mvd47a.jpg"
            alt="JUUN mujer con lata"
            loading="eager"
            style={{objectPosition:'center 55%'}}
          />
        </div>
        <div className="photo-cell photo-cell--mid reveal reveal-d2">
          <img
            src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_1000/v1771879321/1A7A1920_w4e5fq.jpg"
            alt="JUUN grupo"
            loading="eager"
            style={{objectPosition:'center 80%'}}
          />
        </div>
        <div className="photo-cell photo-cell--port reveal reveal-d3">
          <img
            src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_800/v1771879148/1A7A2447_pcwzk5.jpg"
            alt="JUUN atleta"
            loading="eager"
            style={{objectPosition:'center top'}}
          />
        </div>
      </div>

      {/* Row C: wide pair */}
      <div className="photos-row-c">
        <div className="photo-cell photo-cell--wide reveal reveal-d1">
          <img
            src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_1000/v1771879236/1A7A1501_gl2s01.jpg"
            alt="JUUN bebiendo"
            loading="eager"
            style={{objectPosition:'center 55%'}}
          />
        </div>
        <div className="photo-cell photo-cell--wide reveal reveal-d2">
          <img
            src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_1000/v1771879033/1A7A2184_bm4koh.jpg"
            alt="JUUN lentes lata"
            loading="eager"
            style={{objectPosition:'center 20%'}}
          />
        </div>
      </div>
    </section>
  )
}
