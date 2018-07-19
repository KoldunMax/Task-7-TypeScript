type Experience = 'low' | 'middle' | 'hight';

export interface IDriver {
    name: string;
    speed: number;
    move: (el: HTMLElement, distance: number) => void;
    experience?: Experience;
}

export default class Driver implements IDriver{
    name: string;
    speed: number;
    experience: Experience;

    move($vehicle: HTMLElement, distance: number){
        $vehicle.style.left = distance + '%';
    }
}