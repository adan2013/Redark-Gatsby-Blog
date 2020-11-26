import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import siteConfig from '../site-config.json'

const DetectorMessage = styled.div`
  position: relative;
  background-color: #d40000;
  margin: 14px 0 4px;
  padding: 15px 40px 15px 15px;
  border-radius: 4px;
  line-height: 1.4;
  color: #fff;
`

const CloseButton = styled.div`
  position: absolute;
  top: 8px;
  right: 10px;
  cursor: pointer;
  padding: 2px 6px 2px 5px;
  border-radius: 4px;
  &:hover { background-color: #ad0000; }
`

const AdBlockDetector = () => {
  const [ADBdetected, setADBdetected] = useState(false)
  const [messageVisible, setMessageVisible] = useState(true)

  let fakeAdBanner
  useEffect(() => {
    if(fakeAdBanner) setADBdetected(fakeAdBanner.offsetHeight === 0)
  }, [fakeAdBanner])

  if(!siteConfig.adBlockDetector) return <></>

  if(ADBdetected) {
    return (
      messageVisible
      &&
      <DetectorMessage>
        <CloseButton onClick={() => setMessageVisible(false)}>X</CloseButton>
        <b>Wykryto oprogramowanie blokujące reklamy!</b><br/>
        Nie stosuję tutaj nachalnych reklam. Są one moim drobnym przychodem, który pomaga mi pokryć choć częściowo koszty utrzymania serwera. Jeśli chcesz mnie w tym wspomóc, dodaj proszę Redarka do wyjątków swojego AdBlocka.
      </DetectorMessage>
    )
  }else{
    return (
      <div ref={ref => { fakeAdBanner = ref }}
           style={{height: '1px', width: '1px', visiblity: 'none', pointerEvents: 'none'}}
           className="adBanner" />
    )
  }
}

export default AdBlockDetector
