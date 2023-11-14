export const datePrettify = (dt: Date | string) => {
  const date = new Date(dt);
  const days = date.getDate().toString().padStart(2, "0");
  const months = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${days}/${months}/${year} ${hours}:${minutes}`;
};
