import axios from 'axios';
import {BASE_URL} from '../../constants';
export default async (method: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      return resolve(await postApiCall(method));
    }, 100);
  });
};

export async function postApiCall(method: any) {
  try {
    let URL = `${method.type}?id=${method.payload.scanCode}`;
    let response = axios.get(URL);
    let responseJson = await (await response).data;
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}
