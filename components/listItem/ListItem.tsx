import styles from "./_listItem.module.scss";
import { ListItemLink } from 'components/listItem/ListItemLink';
import { ListItemDate } from 'components/listItem/ListItemDate';
import { IFileProps } from 'types/types';

type listItemType = (arg: { list: IFileProps[] }) => JSX.Element;


const ListItem: listItemType = ({ list }) => (
    <>
        {list.map(({ slug, title, publishedDate, titleType }) => {
            return (
                <div key={slug} className={styles.postCard}>
                    <ListItemLink title={title} titleType={titleType} slug={slug} />
                    <ListItemDate publishedDate={publishedDate} />
                </div>
            );
        })}
    </>
)

export default ListItem
