export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    reporters: [['github-actions', { silent: false }], 'summary'],
};
