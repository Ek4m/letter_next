export const bodyMapper = (body: Record<string, any>) => {
  Object.keys(body).forEach((key) => {
    if (!body[key]) delete body[key];
  });
  return body;
};
