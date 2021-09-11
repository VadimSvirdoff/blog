import { SlagProps } from 'modules/home/HomePage';
import styles from "./_listItem.module.scss";
import { ListItemLink } from 'components/listItem/ListItemLink';
import { ListItemDate } from 'components/listItem/ListItemDate';

interface ListItem {
    list: SlagProps[]
}

const ListItem = ({ list }: ListItem) => (
    <>
        {list.map(({ slug, title, publishedDate, titleType }) => {
            return (
                <div key={slug} className={styles.postCard}>
                    <ListItemLink title={title} titleType={titleType} slug={slug} />
                    <ListItemDate publishedDate={publishedDate}/>
                </div>
            );
        })}
    </>
)

export default ListItem
