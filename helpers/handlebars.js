const moment = require("moment");

const formatDate = function (date, targetFormat) {
  return moment(date).format(targetFormat);
};

const replaceCommas = function (value) {
  return value ? value.replace(/,/g, " | ") : "None";
};

const pricing = function (value) {
  return value.toFixed(2);
};

const status = function (startDate, endDate) {
  let today = moment();
  let startdate = moment(startDate);
  let enddate = moment(endDate);
  if (today < startdate) {
    return "Upcoming";
  } else if (today > enddate) {
    return "Expired";
  } else {
    return "Ongoing";
  }
};

const checkboxCheck = function (value, checkboxValue) {
  return value.search(checkboxValue) >= 0 ? "checked" : "";
};

// const checkboxCheck = function (value, checkboxValue) {
//   console.log(value);
//   console.log(checkboxValue);
//   return value.includes(checkboxValue) == true ? "checked" : "";
// };

const radioCheck = function (value, radioValue) {
  return value == radioValue ? "checked" : "";
};

const section = function (name, options) {
  if (!this._sections) {
    this._sections = {};
  }
  this._sections[name] = options.fn(this);
  return null;
};

const ifType = function (discountType, options) {
  if (discountType == "fixedAmt") {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

const calDiscountPrice = function (value, discount) {
  return (value * (1 - discount / 100)).toFixed(2);
};

module.exports = {
  formatDate,
  replaceCommas,
  pricing,
  status,
  checkboxCheck,
  radioCheck,
  section,
  ifType,
  calDiscountPrice,
};
