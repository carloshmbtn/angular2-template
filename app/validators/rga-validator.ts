import {Control} from 'angular2/common';

export class RGAValidator{
    static validate(control: Control): {[key: string]: boolean}{
        if(!isNaN(control.value)){
            return null;
        }
        return {'RGA': true}
    }
}
