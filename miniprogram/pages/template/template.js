function getTime() {
  const hour = new Date().getHours()
  const timeStr = hour < 12 ? '早上' : hour < 18 ? '下午' : '晚上'
  const timing = hour >= 6 && hour < 10 ? '早饭' : hour >= 12 && hour < 14 ? '午饭' : hour >= 5 && hour < 8 ? '晚饭' : ''
  return {timeStr, timing}
}

const template = {
  time: getTime()
}

export default template
