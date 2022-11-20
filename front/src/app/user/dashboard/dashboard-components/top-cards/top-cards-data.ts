export interface topcard {
    bgcolor: string,
    icon: string,
    title: string,
    subtitle: string,
    milage: string
}

export const topcards: topcard[] = [

    {
        bgcolor: 'info',
        icon: 'bi bi-wallet',
        title: 'Last Service',
        subtitle: '2022/03/15',
        milage: '12000KM'
    },
    {
        bgcolor: 'success',
        icon: 'bi bi-coin',
        title: '15',
        subtitle: 'Completed',
        milage: '12000KM'
    },
    {
        bgcolor: 'warning',
        icon: 'bi bi-basket3',
        title: '5',
        subtitle: 'Pending',
        milage: '12000KM'
    },

] 