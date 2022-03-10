import {get,post} from '@/config/config.js'
const randomImage = (params) => get('/sys/randomImage/'+params, null);
const extractRandom = (params)=>post("/iwrs/random/generate",params);
export {
  randomImage,
  extractRandom
}
