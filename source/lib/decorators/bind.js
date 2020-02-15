// global function
// webpack provide plugin

function bind(target, propertyKey) {
  const fn = target[propertyKey];
  if (typeof fn !== 'function') {
    throw new TypeError(
      `Only methods can be decorated with @bind. <${propertyKey}> is not a method!`
    );
  }

  return {
    configurable: true,
    get() {
      return fn.bind(this);
    }
  };
}

module.exports = bind;
