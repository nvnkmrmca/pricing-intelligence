import Api from '../api/api';
import { isNNObject, isNN } from '../../util/index';
import { IUser } from '../../models/user';

let controller: string = 'product';

export const loadWebsites = (callback: (result: Array<any>, message: string) => void) => {
  new Api().get(controller + '/websites', (result: any, message: string) => {
    if(isNNObject(result) && isNN(result.data))
    {
      callback(result.data, '');
    }else{
      callback([], message);
    }
  });
};

export const loadTypes = (website: string, isBrand: boolean, callback: (result: Array<any>, message: string) => void) => {
  new Api().get(controller + '/' + (isBrand ? 'brands' : 'categories') + '/' + website, (result: any, message: string) => {
    if(isNNObject(result) && isNN(result.data))
    {
      callback(result.data, '');
    }else{
      callback([], message);
    }
  });
};

export const loadProducts = (website: string, isBrand: boolean, type: string, callback: (result: Array<any>, message: string) => void) => {
  console.log(isBrand)
  new Api().post(controller + 's', (result: any, message: string) => {
    if(isNNObject(result) && isNN(result.data))
    {
      callback(result.data, '');
    }else{
      callback([], message);
    }
  }, {
    website: website,
    productType: (isBrand ? 'brand' : 'category'),
    type: type
  });
};