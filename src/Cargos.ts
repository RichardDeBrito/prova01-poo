export type size = 'big' | 'averange' | 'small'
export type typeCargo = 'equipment' | 'supplies' | 'scientific capsules'

export abstract class Cargos {
    protected sizeCargo: size;
    protected weight: number;
    protected typeCargo: typeCargo;

    constructor(sizeCargo: size, weight: number, typeCargo: typeCargo) {
        this.sizeCargo = sizeCargo;
        this.weight = weight;
        this.typeCargo = typeCargo;
    }

    public getSizeCargo() :size {
        return this.sizeCargo;
    }
}

export class HeavyCargo extends Cargos {
    private static initialSizeCargo: size = 'big';
    private static initialWeight = 27;
    private static initialTypeCargo: typeCargo = 'equipment'

    constructor(){
        super(HeavyCargo.initialSizeCargo, HeavyCargo.initialWeight, HeavyCargo.initialTypeCargo);
    }
}

export class LightCargo extends Cargos {
    private static initialSizeCargo: size = 'small';
    private static initialWeight = 16;
    private static initialTypeCargo: typeCargo = 'supplies'

    constructor(){
        super(LightCargo.initialSizeCargo, LightCargo.initialWeight, LightCargo.initialTypeCargo);
    }
}

export class FragileCargo extends Cargos {
    private static initialSizeCargo: size = 'averange';
    private static initialWeight = 20;
    private static initialTypeCargo: typeCargo = 'scientific capsules'

    constructor(){
        super(FragileCargo.initialSizeCargo, FragileCargo.initialWeight, FragileCargo.initialTypeCargo);
    }
}

