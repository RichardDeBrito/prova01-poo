import { Planets } from "./Planets";
import { Cargos, size } from "./Cargos";

export abstract class Spacecraft {
    protected readonly name: string;
    protected cargo_capacity: size;
    //Representa quantos milhões de kilometros a nave percorre com 1 milhão de litros de combustível
    protected distancePerLiter: number;
    //Unidade representa um milhão de litros
    protected fuel: number;
    //Em mil kilometros por hora
    protected speed: number;
    public autonomy: number;
    protected terrain_compatibility: string[]
    protected cargoForTransport: Cargos[];

    constructor(name: string, cargo_capacity: size, distancePerLiter: number, speed: number, fuel: number) {
        this.name = name;
        this.cargo_capacity = cargo_capacity;
        this.distancePerLiter = distancePerLiter;
        this.speed = speed;
        this.autonomy = distancePerLiter * fuel;
        this.fuel = fuel;
        this.terrain_compatibility = []
        this.cargoForTransport = [];
    }

    public pickUpCargo(cargo: Cargos) :void {
        if(this.cargo_capacity === 'big') {
            this.cargoForTransport.push(cargo);
        } else if (this.cargo_capacity === "averange") {
            if(cargo.getSizeCargo() ==='big') {
                throw new Error('Carrying capacity exceeded');
            }
            this.cargoForTransport.push(cargo);
        } else if (this.cargo_capacity === 'small') {
            if (cargo.getSizeCargo() != 'small') {
                throw new Error('Carrying capacity exceeded');
            }
            this.cargoForTransport.push(cargo);
        }
    }

    public travel(destination: Planets) :string {
        // Avaliando se tem carga, pois só é possível viajar com carga
        if (this.cargoForTransport.length == 0) {
            return 'ship without cargo.';
        }
        // Avaliando a viabilidade da viagem baseado na nave e no planeta de destino
        if (this.autonomy < destination.getDistanceFromEarth() && destination.getViability() != 'impossible') {
            return 'The ship does not have the autonomy to travel to that planet.'
        }

        // Verificação do combustível
        if (this.autonomy < destination.getDistanceFromEarth()) {
            return 'The spacecraft autonomy is not sufficient to travel to that planet.'
        }

        if (destination.getViability() == 'impossible') {
            return 'It is not possible to deliver the cargo, the location is not viable.'
        }
        
        return 'Successful trip!';
    }
}

export class CargoShip extends Spacecraft {
    private static initialCargoCapacity: size = 'big';
    private static initialDistancePerLiter = 22.5;
    private static initialSpeed = 100;
    private static initialFuel = 10

    constructor(name: string) {
        super(name, CargoShip.initialCargoCapacity, CargoShip.initialDistancePerLiter, CargoShip.initialSpeed, CargoShip.initialFuel)
    }
}

export class ExplorationShip extends Spacecraft {
    private static initialCargoCapacity: size = 'small';
    private static initialDistancePerLiter = 30;
    private static initialSpeed = 300;
    private static initialFuel = 20;

    constructor(name: string) {
        super(name, ExplorationShip.initialCargoCapacity, ExplorationShip.initialDistancePerLiter, ExplorationShip.initialSpeed, ExplorationShip.initialFuel)
    }
}

export class MiningShip extends Spacecraft {
    private static initialCargoCapacity: size = 'averange';
    private static initialDistancePerLiter = 26;
    private static initialSpeed = 75;
    private static initialFuel = 15;

    constructor(name: string) {
        super(name, MiningShip.initialCargoCapacity, MiningShip.initialDistancePerLiter, MiningShip.initialSpeed, MiningShip.initialFuel)
    }
}