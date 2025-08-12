const { axe, toHaveNoViolations } = require("jest-axe");
expect.extend(toHaveNoViolations);

global.axe = axe;
