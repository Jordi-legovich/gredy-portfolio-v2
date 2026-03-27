const BASE = `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`

// Images stored in Cloudinary. Public IDs include the Cloudinary-generated suffix.
// To update an image, upload a new file and update the public ID here.
export const IMAGES = {
  background: `${BASE}/background.jpg_dojjaz.jpg`,
  logo:       `${BASE}/logo_qumfi0.png`,
  club:       `${BASE}/Club_pvyfle.jpg`,
  eventi:     `${BASE}/Eventi_gvf80z.jpg`,
  foto:       `${BASE}/foto_ptaok2.jpg`,
  grafica:    `${BASE}/grafica_budflb.jpg`,
}
