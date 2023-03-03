import {
  BelongsTo,
  belongsTo,
  column,
  LucidModel,
} from '@ioc:Adonis/Lucid/Orm'
import { NormalizeConstructor } from '@ioc:Adonis/Core/Helpers'
import User from './User'

export function ShareableModel<T extends NormalizeConstructor<LucidModel>>(
  superclass: T
) {
  class SModel extends superclass {
    @column({ isPrimary: true })
    public id: number;

    @column()
    public ownerId: number;

    @belongsTo(() => User)
    public owner: BelongsTo<typeof User>;
  }

  return SModel;
}
