/*!
 * Copyright 2021 WPPConnect Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { exportModule } from '../exportModule';
import { CatalogModel } from '../models';
import { Collection } from './Collection';

/** @whatsapp 2.2144.11:60028 */
export declare class CatalogCollection extends Collection<CatalogModel> {
  static model: CatalogModel;
  static staleCollection?: any;
  addMsgAsProduct(e?: any): any;
  findProduct(e?: {
    catalogWid: any;
    productId: any;
    productMsgMediaData: any;
  }): any;
  findCarouselCatalog(e?: any): any;
  findNextProductPage(e?: any): any;
  findCollectionMembership(e?: any, t?: any): any;
}
exportModule(
  exports,
  { CatalogCollection: 'CatalogCollection' },
  (m) => m.CatalogCollection
);
