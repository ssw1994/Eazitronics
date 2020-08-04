import { Pipe, PipeTransform } from "@angular/core";
import { EventData } from "./models";

@Pipe({ name: "filter" })
export class FilterPipe implements PipeTransform {
  transform(data: Array<EventData>, id: number) {
    return data.filter((x: EventData) => x.MasterControllerId == id);
  }
}
