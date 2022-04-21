import {Reduce} from "./reduce";

/**
 * class FilterMapAddReduce, subclase of reduce
 */
export class FilterMapAddReduce extends Reduce {
  constructor(array:number[]) {
    super(array);
  }

  /**
   * Reduce function to calculate the sum total
   * @returns sum of all values
   */
  public reduce():number {
    let sum = 0;
    this.array.forEach((element) => {
      sum += element;
    });
    return sum;
  }
};
