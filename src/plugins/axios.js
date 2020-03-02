
import axios from 'axios';

import { apiBaseURL } from '../utils/constants';

export default axios.create({
  baseURL: apiBaseURL,
});