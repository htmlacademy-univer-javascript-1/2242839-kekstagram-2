const randomNumber = (startReport, endReport) => Math.round(startReport + Math.random() * endReport);

const getMaxLengthStr = (text, maxLength) => text.length <= maxLength;

export { randomNumber, getMaxLengthStr};
