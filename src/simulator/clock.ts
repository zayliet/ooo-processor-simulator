export class Clock {
    cycle: number = 0;
    step(): void {
        this.cycle++;
    }
    reset(): void {
        this.cycle = 0;
    }
}