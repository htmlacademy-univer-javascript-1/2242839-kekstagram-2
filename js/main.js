const randomNumber = (startReport, endReport) => startReport + Math.random() * endReport;

const getMaxLengthStr = (text, maxLength) => text.length < maxLength;

export { randomNumber, getMaxLengthStr};
