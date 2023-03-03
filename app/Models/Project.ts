import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Item from './Item'

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasMany(() => Item)
  public items: HasMany<typeof Item>;
}
