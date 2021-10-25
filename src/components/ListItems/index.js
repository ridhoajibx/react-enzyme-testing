import propTypes from 'prop-types';

const ListItem = (props) => {
    const { title, desc } = props;
    if (!title) {
        return null
    }
    return (
        <div data-test="listItemsComponent">
            <h1 data-test="titleComponent">{title}</h1>
            <div data-test="descComponent">
                {desc}
            </div>
        </div>
    )
}

ListItem.propTypes = {
    title: propTypes.string,
    desc: propTypes.string,
}

export default ListItem;