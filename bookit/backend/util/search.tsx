import { IRecordRoom } from "@/config/interfaces";

export module search {
    export class Filter {
        query: any;
        text: any;

        constructor(query: any, text: any) {
            this.query = query;
            this.text = text;
        }

        exec(pagination: number): Filter {
            // Manually create a filter context.
            let query = {};
            if (this.text?.location) {
                query = {
                    ...query,
                    address: { contains: this.text.location },
                };
            }

            if (this.text?.numOfBeds) {
                query = {
                    ...query,
                    numOfBeds: Number(this.text.numOfBeds),
                };
            }

            if (this.text?.roomCleaning) {
                query = {
                    ...query,
                    roomCleaning: Boolean(this.text.roomCleaning === "1"),
                };
            }

            query = { where: { ...query } };

            const curPage = Number(this.text?.page) || 1;
            const skip = pagination * (curPage - 1);

            if (pagination > 0) {
                //query = { ...query, skip: skip, take: pagination };
                query = { ...query, skip: skip };
            }

            this.query = this.query.findMany(query);
            return this;
        }

        filter(): Filter {
            // TODO: Not working due to type mismatch
            // Some of the fields expects number or other type.
            // Passing this fails.
            // @see exec() function for solution.
            const text = { ...this.text };

            const rmFields = ["location"];
            rmFields.forEach((itr) => delete text[itr]);

            this.query = this.query.findMany({
                where: {
                    ...text,
                },
            });
            return this;
        }

        pagination(perPage: number): Filter {
            const curPage = Number(this.text?.page) || 1;
            const skip = perPage * (curPage - 1);
            return this;
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
            this.query = this.query.findMany({ ...location });

            return this;
        }
    }
}
