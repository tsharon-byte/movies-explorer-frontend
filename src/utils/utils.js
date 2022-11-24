const getMessage = (e) => (e.target.validity.valid ? '' : e.target.validationMessage);
export default getMessage;
