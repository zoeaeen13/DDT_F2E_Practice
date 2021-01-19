// Date converter to TimeStamp
export function transferDate(taiwanDate) {
  let dateArr = taiwanDate.split('/');
  let year = Number(dateArr[0]);
  let month = Number(dateArr[1]);
  let date = Number(dateArr[2]);

  if (month <= 9) month = '0' + month;
  if (date <= 9) date = '0' + date;
  dateArr[0] = year + 1911;
  dateArr[1] = month
  dateArr[2] = date

  return Date.parse(dateArr.join('-'));
}