export const getLocalStorage = name => {
    let response = 'Name is not found';
    if (name) {
      if (
        localStorage.getItem(name) &&
        localStorage.getItem(name) !== 'undefined' &&
        localStorage.getItem(name) !== 'false'
      ) {
        const storage = localStorage.getItem(name);
        const result = JSON.parse(storage);
  
        if (result && result.timestamp) {
          const currentTime = new Date().getTime();
          const expireTime = 200000;
  
          if (currentTime - result.timestamp > expireTime) {
            response = false;
            localStorage.setItem(name, JSON.stringify(false));
          } else {
            response = result;
          }
        } else {
          response = result;
        }
      } else {
        response = false;
      }
    }
  
    return response;
  };
  
  export function getInputProps(name, nestedName) {
    if (nestedName && !this.state[nestedName]) {
      return {};
    }
    return {
      value: nestedName ? this.state[nestedName][name] : this.state[name],
      onChange: this.handleChange(name, nestedName)
    };
  }