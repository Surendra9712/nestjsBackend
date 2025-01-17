import { BaseFilter } from '@snapSystem/flters/Base.filter';
import { SelectQueryBuilder } from 'typeorm';
import {OrderEntity} from "@models/order/order.entity";

export class CartFilter extends BaseFilter<OrderEntity> {
  public constructor(builder: SelectQueryBuilder<OrderEntity>) {
    super(builder);
  }
}
