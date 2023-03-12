import styles from "./_listItem.module.scss";
import { ListItemLink } from '@/components/listItem/ListItemLink';
import { File } from '@/types/types';

type listItemType = (arg: { list: File[] }) => JSX.Element;


const ListItem: listItemType = ({ list }) => (
    <>
        {list.map(({ slug, title, publishedDate, titleType }) => {
            return (
                <div key={slug} className={styles.postCard}>
                    <ListItemLink title={title} titleType={titleType} slug={slug} />
                    <p>
                        {publishedDate}
                    </p>
                </div>
            );
        })}
    </>
)

export default ListItem
