export const sortOption = [
    {
        id:0, 
        value:0,
        label: 'Latest repositories',
        variable:{
            orderBy: 'CREATED_AT',
            orderDirection: 'DESC',
        }

    },
    {
        id:1, 
        value:1,
        label: 'Highest rated repositories',
        variable:{
            orderBy: 'RATING_AVERAGE',
            orderDirection: 'DESC',
        }
    },
    {
        id:2, 
        value:2,
        label: 'Lowest rated repositories',
        variable:{
            orderBy: 'RATING_AVERAGE',
            orderDirection: 'ASC',
        }
    }
]