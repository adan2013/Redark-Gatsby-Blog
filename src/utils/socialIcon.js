import { faFacebookSquare, faInstagram, faTwitterSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons"

export default type => {
  switch (type) {
    case 'fb': return faFacebookSquare
    case 'tt': return faTwitterSquare
    case 'ig': return faInstagram
    case 'yt': return faYoutubeSquare
    case 'feedback': return faClipboardCheck
    default: return null
  }
}
