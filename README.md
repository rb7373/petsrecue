# petsrescue
PetsRescue sitio de rescate animal sin fines de lucro.

gulp --tasks-simple // View the list of tasks in a simple way
gulp --tasks // View the list of tasks in a tree way

gulp test // Not implemented

gulp serve-dev // Build the development application
gulp serve-build // Build the production application

gulp vet --verbose // Validates the code
gulp serve-dev --nosync // Build the development application, no file synchronization
gulp serve-dev --verbose // Build the development application, show current file
gulp optimize // Optimizes the code (including external libraries), styles, images and fonts.

/**
 * Bump the version
 * --type=pre will bump the prerelease version *.*.*-x
 * --type=patch or no flag will bump the patch version *.*.x
 * --type=minor will bump the minor version *.x.*
 * --type=major will bump the major version x.*.*
 * --version=1.2.3 will bump to a specific version and ignore other flags
 */

gulp bump // increasing the current version 0.0.1 --> 0.0.2
gulp bump --type=minor // increasing the current version 0.0.1 --> 0.1.0
gulp bump --version=2.1.2 // increase the current version to a particular version. Sample: 0.1.0 --> 2.1.2