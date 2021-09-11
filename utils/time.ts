interface IformatDate {
    publishedDate: string;
}

export const formatDate = ({ publishedDate }: IformatDate) => {
    return new Intl.DateTimeFormat("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(publishedDate))}