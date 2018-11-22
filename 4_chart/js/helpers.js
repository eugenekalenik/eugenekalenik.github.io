function getDates() {
  const currentDate = new Date();
  const startDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate() - 10}`;
  const endDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate() - 1}`;

  return { startDate, endDate };
}