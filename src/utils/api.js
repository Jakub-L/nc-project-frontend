import axios from 'axios';

export const getPins = async () => {
  const { data } = await axios.get('https://site-seeing.herokuapp.com/api/pins');
  return data.pins;
};
