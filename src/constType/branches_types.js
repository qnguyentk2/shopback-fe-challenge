const createRequest = (base, act) => 
  ['REQUEST', 'SUCCESS', 'FAILURE'].reduce((acc, type) => {
    const key = `${act}_${type}`;
    acc[key] = `${base}_${act}_${type}`;
    return acc;
  }, {});


export default {
  ...createRequest('BRANCHES', 'FETCH'),
}