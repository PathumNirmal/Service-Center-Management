export interface topcard {
    bgcolor: string,
    icon: string,
    title: string,
    subtitle: string
}

export const topcards: topcard[] = [

    {
        bgcolor: 'info',
        icon: 'bi bi-wallet',
        title: '1',
        subtitle: 'Total booking'
    },
    {
        bgcolor: 'success',
        icon: 'bi bi-coin',
        title: '0',
        subtitle: 'Completed'
    },
    {
        bgcolor: 'warning',
        icon: 'bi bi-basket3',
        title: '1',
        subtitle: 'Pending'
    },

] 