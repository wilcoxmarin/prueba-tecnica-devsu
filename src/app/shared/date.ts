import { DateTime } from "luxon";


const dateNow = () => {
  return DateTime.now().setZone("America/Bogota").toJSDate();
}

const formatDate = (date: Date)=>{
  const data = DateTime.fromJSDate(date)
  return data.toFormat("yyyy-LL-dd")
}

const diffDate = (now: Date, date: Date)=>{
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const utc1 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const utc2 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.round((utc2 - utc1) / (_MS_PER_DAY));
}

const addYear = (date: Date)=>{
  const newDate = date.setFullYear(date.getFullYear() + 1);
  return formatDate(new Date(newDate))
}


export {
  dateNow,
  formatDate,
  diffDate,
  addYear
}
