function getAge(str) {
  if (!str) return;
  const dd = str.split(".").map(d => Number(d));
  const ageEnter = new Date(dd[2], dd[1] - 1, dd[0], 0, 0, 0, 0);
  const dateNow = new Date();
  const age = dateNow.getFullYear() - ageEnter.getFullYear();
  return age;
}

export default getAge;