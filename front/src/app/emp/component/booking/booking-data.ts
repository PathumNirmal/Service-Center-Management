export interface TableRows {
    date: string,
    time: string,
    v_no: string,
    status: string,
    customer: string,
}

export const Employee : TableRows[] = [
    {
        date: "2022/12/09",
        time: "11.00 a.m.",
        v_no: "NC CAA 4539",
        status: "Finished",
        customer: "Supun Mihiranga",
    },
    {
        date: "2022/12/10",
        time: "10.00 a.m.",
        v_no: "NC CBA 9249",
        status: "Pending",
        customer: "Vimukthi Randika",
    },
    {
        date: "2022/12/10",
        time: "2.00 p.m.",
        v_no: "WP CAB 2301",
        status: "Pending",
        customer: "Lakshitha Viraj",
    }
]