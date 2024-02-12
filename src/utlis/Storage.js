export const Token = () => {
  const token = localStorage.getItem("token");
  return token || [];
};
