type ImgOpts = {
  w?: number;
  h?: number;
  q?: number;
  crop?: "fill" | "fit" | "pad";
};

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export function cimg(publicId?: string, opts: ImgOpts = {}) {
  if (!cloudName || !publicId) return null;

  const w = opts.w ? `w_${opts.w},` : "";
  const h = opts.h ? `h_${opts.h},` : "";
  const q = `q_${opts.q ?? "auto"},`;
  const f = "f_auto,";
  const c = opts.crop ? `c_${opts.crop},` : "c_fill,";
  const t = `${f}${q}${c}${w}${h}`;

  return `https://res.cloudinary.com/${cloudName}/image/upload/${t}${publicId}`;
}
