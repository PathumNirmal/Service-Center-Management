export interface TableRows {
    type: string,
    brand: string,
    id_no: string,
    quantity_type: string,
    quantity: string,
    unit_price: string,
}

export const Employee : TableRows[] = [
    {
	    type: "Engine Oil",
	    brand: "Mobile1",
	    id_no: "ENG30WMOB1",
	    quantity_type: "Can",
	    quantity: "38",
	    unit_price: "9500",
    },
    {
        type: "Oil Filter",
	    brand: "Toyota Genuine",
	    id_no: "OFTG201834",
	    quantity_type: "Pcs",
	    quantity: "56",
	    unit_price: "2200",
    },
    {
        type: "Air Filter",
	    brand: "Honda Genuine",
	    id_no: "AFHG201854",
	    quantity_type: "Pcs",
	    quantity: "44",
	    unit_price: "3500",
    }
]