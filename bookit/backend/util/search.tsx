export module search {
    export class Filter {
        queryer: any;
        text: any;

        constructor(queryer: any, text: any) {
            this.queryer = queryer;
            this.text = text;
        }

        search(): Filter {
            const location = this.text?.location
                ? {
                      where: {
                          address: {
                              contains: this.text.location,
                          },
                      },
                  }
                : {};
            this.queryer = this.queryer.findMany({ ...location });
            return this;
        }
    }
}
