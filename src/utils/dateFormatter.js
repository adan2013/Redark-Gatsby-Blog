const getMonthName = (month) => {
  switch (parseInt(month)) {
    case 1: return 'Sty'
    case 2: return 'Lut'
    case 3: return 'Mar'
    case 4: return 'Kwi'
    case 5: return 'Maj'
    case 6: return 'Cze'
    case 7: return 'Lip'
    case 8: return 'Sie'
    case 9: return 'Wrz'
    case 10: return 'Paź'
    case 11: return 'Lis'
    case 12: return 'Gru'
    default: return ''
  }
}

export default (date) => {
  const elements = date.split('-')
  if(elements.length === 3) {
    return `${elements[2]} ${getMonthName(elements[1])} ${elements[0]}`
  }else{
    return date
  }
}
