const century = year =>
  year % 100 === 0 ? parseInt(year / 100) : parseInt(year / 100) + 1
