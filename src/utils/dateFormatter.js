const getMonthName = (month, long) => {
  switch (parseInt(month)) {
    case 1: return long ? 'stycznia': 'Sty'
    case 2: return long ? 'lutego': 'Lut'
    case 3: return long ? 'marca': 'Mar'
    case 4: return long ? 'kwietnia': 'Kwi'
    case 5: return long ? 'maja': 'Maj'
    case 6: return long ? 'czerwca': 'Cze'
    case 7: return long ? 'lipca': 'Lip'
    case 8: return long ? 'sierpnia': 'Sie'
    case 9: return long ? 'września': 'Wrz'
    case 10: return long ? 'października': 'Paź'
    case 11: return long ? 'listopada': 'Lis'
    case 12: return long ? 'grudnia': 'Gru'
    default: return ''
  }
}

export default (date, longFormat = false) => {
  const elements = date.split('-')
  if(elements.length === 3) {
    return `${elements[2]} ${getMonthName(elements[1], longFormat)} ${elements[0]}`
  }else{
    return date
  }
}
