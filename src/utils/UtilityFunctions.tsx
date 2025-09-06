export const getDate = (deliverydays: number): string => {
  const daysnum=deliverydays+1
  const today = new Date();
  let start = new Date(today);
  const dow = start.getDay();
  if (dow === 6) start.setDate(start.getDate() + 2);
  else if (dow === 0) start.setDate(start.getDate() + 1);
  if (daysnum <= 1) {
    return `Expected delivery: ${start.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`;
  }
  const sDow = start.getDay();
  const sMonIndex = sDow - 1;
  const remainingBiz = daysnum - 1;
  const fullWeeks = Math.floor(remainingBiz / 5);
  const extraBiz = remainingBiz % 5;
  let addCalendar = fullWeeks * 7 + extraBiz;
  if (sMonIndex + extraBiz >= 5) addCalendar += 2;
  const result = new Date(start);
  result.setDate(start.getDate() + addCalendar);
  return `Expected delivery: ${result.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`;
};
