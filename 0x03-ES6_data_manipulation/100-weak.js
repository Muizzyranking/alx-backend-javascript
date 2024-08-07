const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  const currentCount = weakMap.get(endpoint) || 0;

  const newCount = currentCount + 1;

  weakMap.set(endpoint, newCount);

  if (newCount >= 5) {
    throw new Error('Endpoint load is high');
  }
};

export { weakMap, queryAPI };
