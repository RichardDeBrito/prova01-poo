import { IcePlanet, RockyPlanet, GasPlanet } from "./Planets";
import { CargoShip, ExplorationShip, MiningShip } from "./Spacecraft";
import { HeavyCargo, LightCargo, FragileCargo } from "./Cargos";
import { generatePlanets } from "./utils";
import { random } from "./utils";

console.log(generatePlanets(5));