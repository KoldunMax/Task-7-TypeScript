import { User, IUser } from "./user";

export interface IRace{
    user: IUser;
    isDriving: boolean;
    initializeRace: () => void;
}

export class Race implements IRace {
    user: IUser;
    isDriving = false;

    constructor(){
        this.user = new User();
        this.initializeRace();
    }

    initializeRace() {
        const startButton = document.getElementById('start') as HTMLButtonElement;
        const setInfoButton = document.getElementById('challenge') as HTMLButtonElement;
        const resetButton = document.getElementById('reset') as HTMLButtonElement;

        startButton.addEventListener('click', () => { 
            this.isDriving = this.isDriving ? false : true; 
            this._startRace()
        });
        resetButton.addEventListener('click', () => this._resetRase());
        setInfoButton.addEventListener('click', () => this.user.setInfo());
    }

    private _startRace(distance?: number){
        if(!!this.user) {
            let newDistance = distance ? distance: 0;
            const { speed, move } = this.user;
            const $motorcycle = document.getElementById('motorcycle');

            if(newDistance !== 100 && this.isDriving){
                move($motorcycle, newDistance);
                newDistance++;
                setTimeout(() => {this._startRace(newDistance)}, 1000 / speed);
            }
        }
    }

    private _resetRase(){
        const $motorcycle = document.getElementById('motorcycle');
        $motorcycle.style.left = '0px';
        this.isDriving = false;
    }
}