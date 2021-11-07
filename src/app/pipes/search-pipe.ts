import { Pipe, PipeTransform } from '@angular/core';
import { Repository } from '../interfaces/repositories';

@Pipe({
    name: 'searchFilter'
})

export class SearchFilterPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (!value) { return null; }
        if (!args) { return value; }

        args = args.toLowerCase();

        // tslint:disable-next-line: typedef
        return value.filter((data: any) => {
            return JSON.stringify(data).toLowerCase().includes(args);
        });
    }

}
