import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static archetypeInstances = 0;
  energyType: EnergyType;

  constructor(
    name: string,
  ) {
    super(name);
    this.energyType = 'stamina';
    Warrior.archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.archetypeInstances;
  }
}
