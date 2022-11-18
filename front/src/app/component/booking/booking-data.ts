export interface TableRows {
    date: string,
    time: string,
    v_no: string,
    status: string,
    customer: string,
}

export const Employee : TableRows[] = [
    {
        date: "2022/03/20",
        time: "11.00 a.m.",
        v_no: "NC CAA 4539",
        status: "Finished",
        customer: "Achala Anupama",
    },
    {
        date: "2022/03/20",
        time: "12.10 p.m.",
        v_no: "NP CAB 4009",
        status: "Finished",
        customer: "Milan Pramod",
    },
    {
        date: "2022/03/21",
        time: "09.00 a.m.",
        v_no: "NC CBA 9249",
        status: "Not Arrived",
        customer: "Vimukthi Silva",
    }
]