export interface Product {
  id: number;
  name: string;
  type: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    type: 'phone',
    price: 799,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 2,
    name: 'Phone Mini',
    type: 'phone',
    price: 699,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 3,
    name: 'Phone Standard',
    type: 'phone',
    price: 299,
    description: '就是標準版沒什麼特別的',
  },
  {
    id: 4,
    name: 'Iphone藍牙耳機',
    type: 'earphone',
    price: 1299,
    description: '尊貴奢華',
  },
  {
    id: 5,
    name: '小米藍牙耳機',
    type: 'earphone',
    price: 399,
    description: '樸實無華',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
