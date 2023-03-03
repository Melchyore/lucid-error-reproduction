import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { ShareableModel } from './Shareable'

export default class Item extends compose(BaseModel, ShareableModel) {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;
}
