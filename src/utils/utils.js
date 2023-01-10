const getMessage = (e) => (e.target.validity.valid ? '' : e.target.validationMessage);
export const getValue = (key) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : undefined;
};
export default getMessage;
