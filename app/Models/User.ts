import { BaseModel, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Project from "./Project";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @hasMany(() => Project, { foreignKey: "ownerId" })
  public projects: HasMany<typeof Project>;
}
