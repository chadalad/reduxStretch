const { spookyTypes } = require('./types');

//code actions here

const incrementStep = ({ value }) => ({
  type: spookyTypes.GET_STEPS,
  value,
})

module.exports = {
  incrementStep,
  createNewSpookySound,
};
