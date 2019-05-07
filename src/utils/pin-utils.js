const convertIsoDate = (isoDate) => {
  const pattern = /(.*)T(.*)Z/;
  const [, date, time] = pattern.exec(isoDate) || [];
  return `${date} at ${time}`;
};

export { convertIsoDate };
