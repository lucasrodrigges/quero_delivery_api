export default (length = 6) => {
  const caracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return [...Array(length)].map(() => caracters[Math.floor(Math.random() * caracters.length)]).join('');
};
