export const eventBySlugQuery = `
*[_type == "event" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  startDate,
  endDate,
  location,
  type,
  tags,
  poster,
  description,
  photoAlbum,
  videos,
  driveFolderUrl,
  signupUrl,
}
`
export const upcomingEventsQuery = `
*[_type=="event" && published==true && startDate >= now()]
| order(startDate asc){
  _id,
  title,
  "slug": slug.current,
  startDate,
  endDate,
  location,
  type,
  tags,
  poster,
  signupUrl,
}
`

export const pastEventsQuery = `
*[_type=="event" && published==true && startDate < now()]
| order(startDate desc){
  _id,
  title,
  "slug": slug.current,
  startDate,
  endDate,
  location,
  type,
  tags,
  poster
}
`

export const galleryQuery = `
*[_type=="event" && published==true && defined(photoAlbum) && count(photoAlbum) > 0]
| order(startDate desc){
  _id,
  title,
  "slug": slug.current,
  startDate,
  photoAlbum
}
`

