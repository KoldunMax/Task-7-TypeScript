import Driver, { IDriver } from './driver';

export interface IUser extends IDriver{
    setInfo: () => void;
}

export class User extends Driver implements IUser{
    constructor() {
        super();
    }

    setInfo(): void{
        const nameInput = document.getElementById('name') as HTMLInputElement;
        const speedInput = document.getElementById('speed') as HTMLInputElement;

        this.name = nameInput.value;
        this.speed = Number(speedInput.value);
        
        this._showInfo(this.name, this.speed);
    }

    private _showInfo(name: string, speed: number){
        const $user = document.getElementById('user-info');
        $user.innerText = `Name: ${name}, speed - ${speed}mph`;
    }
}
