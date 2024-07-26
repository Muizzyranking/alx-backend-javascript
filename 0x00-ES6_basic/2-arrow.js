const getNeighborhoodsList = () => {
  const neighborhoods = {
    sanFranciscoNeighborhoods: ['SOMA', 'Union Square'],

    addNeighborhood: (newNeighborhood) => {
      neighborhoods.sanFranciscoNeighborhoods.push(newNeighborhood);
      return neighborhoods.sanFranciscoNeighborhoods;
    },
  };

  return neighborhoods;
};

export default getNeighborhoodsList;
