module.exports = {
  mergeStrategy: { toSameBranch: ["master"] },
  testCommandBeforeRelease: () => null,
  buildCommand: () => null
};
