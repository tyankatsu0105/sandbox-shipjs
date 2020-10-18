module.exports = {
  publishCommand: () => '',
  afterPublish: ({ exec, dir, version, releaseTag }) => {
    exec(`git config --local user.email "action@github.com"`);
    exec(`git config --local user.name "GitHub Action"`);
    
    exec(`git tag -d ${releaseTag}`);
    exec(`git tag ${releaseTag}`);
    exec(`git push origin ${releaseTag} -f`);
  };
};