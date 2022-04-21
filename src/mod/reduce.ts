/**
 * abstract class Reduce
 */
export abstract class Reduce {
  constructor(protected array:number[]) {
    this.array = array;
  }

  /**
     * get Arrya
     * @returns array
     */
  getArray():number[] {
    return this.array;
  }
  /**
     * Function to run map() and filter()
     */
  public run() {
    this.map((x) => {
      return x*2;
    });

    this.filter((x) => {
      if (x > 10 == false) {
      }
      return x;
    });
  }

  /**
     * map to do some operation
     * @param funcion Function as parameter
     * @returns return a new array
     */
  protected map(funcion: (arg0: number) => number):number[] {
    const arrayNuevo: number[] = [];
    this.array.forEach((element) => {
      arrayNuevo.push(funcion(element));
    });
    return arrayNuevo;
  }

  /**
     * filter to filter values of array
     * @param funcion Function as parameter
     * @returns return a new array
     */
  protected filter(funcion:(arg0:number) => number) {
    const arrayNuevo: number[] = [];
    this.array.forEach((element) => {
      arrayNuevo.push(funcion(element));
    });
    return arrayNuevo;
  }

    /**
     * function abstract reduce
     */
    protected abstract reduce(): number;
};
