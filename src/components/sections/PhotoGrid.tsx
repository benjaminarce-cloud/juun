/*
  Slot guide — add Cloudinary URLs when ready:
  01 hero wide  : runner / group shot, cinematic crop (1A7A1849 or 1A7A1554-3)
  02 portrait L : woman sitting with can (1A7A1317)
  03 landscape  : group on track, color (1A7A1849 color)
  04 portrait R : guy stretching / athletic (1A7A2447)
  05 wide L     : woman drinking on track (1A7A1501)
  06 wide R     : guy with can + sunglasses (1A7A2184)

  To add a photo uncomment the <img> and remove the placeholder div.
*/

function Placeholder({ num, hint }: { num: string; hint: string }) {
  return (
    <div className="photo-cell-placeholder">
      <span className="photo-cell-placeholder-num">{num}</span>
      <span className="photo-cell-placeholder-hint">{hint}</span>
    </div>
  )
}

export default function PhotoGrid() {
  return (
    <section className="photos">

      {/* Row A: cinematic full-width */}
      <div className="photos-row-a">
        <div className="photo-cell photo-cell--hero reveal">
          {/* <img src="CLOUDINARY_URL" alt="" /> */}
          <Placeholder num="01" hint="Hero · grupo en pista / corredor solo" />
        </div>
      </div>

      {/* Row B: portrait · landscape · portrait */}
      <div className="photos-row-b">
        <div className="photo-cell photo-cell--port reveal reveal-d1">
          {/* <img src="CLOUDINARY_URL" alt="" /> */}
          <Placeholder num="02" hint="Retrato · mujer con lata" />
        </div>
        <div className="photo-cell photo-cell--mid reveal reveal-d2">
          {/* <img src="CLOUDINARY_URL" alt="" /> */}
          <Placeholder num="03" hint="Grupo en color" />
        </div>
        <div className="photo-cell photo-cell--port reveal reveal-d3">
          {/* <img src="CLOUDINARY_URL" alt="" /> */}
          <Placeholder num="04" hint="Retrato · atlético" />
        </div>
      </div>

      {/* Row C: wide pair */}
      <div className="photos-row-c">
        <div className="photo-cell photo-cell--wide reveal reveal-d1">
          {/* <img src="CLOUDINARY_URL" alt="" /> */}
          <Placeholder num="05" hint="Acción · bebiendo en pista" />
        </div>
        <div className="photo-cell photo-cell--wide reveal reveal-d2">
          {/* <img src="CLOUDINARY_URL" alt="" /> */}
          <Placeholder num="06" hint="Retrato · lente de sol, lata" />
        </div>
      </div>

    </section>
  )
}
