const randomNumber = (startReport, endReport) => Math.round(startReport + Math.random() * (endReport - 1));

const getMaxLengthStr = (text, maxLength) => text.length <= maxLength;

export {randomNumber, getMaxLengthStr};
