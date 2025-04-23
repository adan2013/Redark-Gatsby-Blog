import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
  faYoutubeSquare,
  faThreads,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons"

export default type => {
  switch (type) {
    case "fb":
      return faFacebookSquare
    case "tt":
      return faXTwitter
    case "ig":
      return faInstagram
    case "yt":
      return faYoutubeSquare
    case "th":
      return faThreads
    case "feedback":
      return faClipboardCheck
    default:
      return null
  }
}
