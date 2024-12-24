// Register each file as a corresponding Vuex module
import camelCase from 'lodash/camelCase'
import isEmpty from 'lodash/isEmpty'

const modulesCache = {}
const storeData = { modules: {} }

;(function updateModules() {
  const requireModule = require.context(
    '../../packages',
    true,
    /store\/index.js$/
  )

  // For every Vuex module...
  requireModule.keys().forEach((fileName) => {
    const moduleDefinition = requireModule(fileName)

    // Skip the module during hot reload if it refers to the
    // same module definition as the one we have cached.
    if (
      isEmpty(moduleDefinition) ||
      modulesCache[fileName] === moduleDefinition
    ) {
      return
    }

    modulesCache[fileName] = fileName
      .replace(/^\.\//, '')
      .replace(/\.\w+$/, '')
      .split(/\//)
      .map(camelCase)

    // Get the module path as an array.
    const modulePath = fileName
      .replace(/^\.\//, '')
      .replace(/\.\w+$/, '')
      .split(/\//)
      .map(camelCase)

    const namespace = modulePath.shift()

    // Add the module to our modules object.
    storeData.modules[namespace] = {
      // Modules are namespaced by default.
      namespaced: true,
      ...moduleDefinition,
    }
  })
})()

export default storeData.modules
