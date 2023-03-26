import SingleItem from './SingleItem';

const Items = ({ items, removeItem, editItem }) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            removeItem={removeItem}
            item={item}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};
export default Items;
