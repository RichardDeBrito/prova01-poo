type atmosphere = 'none' | 'oxygen-rich' | 'toxic' | 'dense';
type viability = 'high' | 'moderate' | 'low' | 'impossible';

export abstract class Planets {
    protected readonly name: string;
    // Uma unidade representa um milhão
    protected distanceFromEarth: number;
    protected atmosphereType: atmosphere;
    protected viability: viability;
    protected cargoRestrictions: string[];

    constructor(name: string, distanceFromEarth: number, atmosphereType: atmosphere, viability: viability) {
        this.name = name;
        this.distanceFromEarth = distanceFromEarth;
        this.atmosphereType = atmosphereType;
        this.viability = viability;
        this.cargoRestrictions = []
    }

    public getDistanceFromEarth() :number {
        return this.distanceFromEarth;
    }

    public getViability() :viability {
        return this.viability;
    }
}

export class IcePlanet extends Planets {
    private static initialAtmosphereType: atmosphere = 'dense';
    private static initialViability: viability = 'moderate';

    constructor(name: string, distanceFromEarth: number) {
        super(name, distanceFromEarth, IcePlanet.initialAtmosphereType, IcePlanet.initialViability)
    }
}

export class RockyPlanet extends Planets {
    private static initialAtmosphereType: atmosphere = 'none';
    private static initialViability: viability = 'high';

    constructor(name: string, distanceFromEarth: number) {
        super(name, distanceFromEarth, RockyPlanet.initialAtmosphereType, RockyPlanet.initialViability)
    }
}

export class GasPlanet extends Planets {
    private static initialAtmosphereType: atmosphere = 'toxic';
    private static initialViability: viability = 'low';

    constructor(name: string, distanceFromEarth: number) {
        super(name, distanceFromEarth, GasPlanet.initialAtmosphereType, GasPlanet.initialViability)
    }
}