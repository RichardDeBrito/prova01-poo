import { IcePlanet, RockyPlanet, GasPlanet, Planets } from "./Planets";
import { HeavyCargo, LightCargo, FragileCargo, Cargos } from "./Cargos";
import { CargoShip, MiningShip, ExplorationShip, Spacecraft } from "./Spacecraft";

const namePlanets = ['Elarion', 'Nythera', 'Zairon', 'Velquor', 'Aurelya', 'Thalmyra', 'Noctyra', 'Khaldor']

export function random(n:number) {
    return Math.floor(Math.random() * n);
}

export function generateNamePlanets() :string {
    return namePlanets[random(namePlanets.length)];
}

export function generatePlanets(quant_planets: number) :Planets[] {
    const PlanetsArray: Planets[] = [];
    const names: String[] = [];
    for(let i = 0; i < quant_planets; i++) { 
        let namePlanet = generateNamePlanets();
        while (namePlanet in names) {
            namePlanet = generateNamePlanets();
            
            if (namePlanet in names === false) {
                break;
            }
        }

        let aleatory = random(3);

        if (aleatory === 0) {
            let a = new IcePlanet(namePlanet, random(900));
            PlanetsArray.push(a);
        } 
        if (aleatory === 1) {
            let a = new RockyPlanet(namePlanet, random(900));
            PlanetsArray.push(a);
        }
        if (aleatory === 2) {
            let a = new GasPlanet(namePlanet, random(900));
            PlanetsArray.push(a);
        }
    }
    
    return PlanetsArray;
}
