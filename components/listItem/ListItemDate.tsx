import React from 'react'
import { formatDate } from 'utils/time'

interface ListItemDate {
    publishedDate: string;
}

export const ListItemDate = ({ publishedDate }: ListItemDate) => (
    <p>
        {formatDate({ publishedDate })}
    </p>
)