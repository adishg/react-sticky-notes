import { h } from './../utils';
function NavBarItem({prefix, icons,index, color, text, selectItem, deleteItem}){
    return h('span',{
        className:`${prefix}--navbar__item`,
        style:{
            backgroundColor: color
        }
    },[
        h('button',{
            key: `navbar-item__${index}--select`,
            className:`${prefix}--navbar__item--select`,
            type: 'button',
            onClick: ()=>selectItem(index, {selected:true})
        }, text?text:'...'),
        h('button',{
            key: `navbar-item__${index}--delete`,
            type: 'button',
            className:`${prefix}--navbar__item--delete`,
            onClick: ()=>deleteItem(index, {selected:true}),
        }, 'x'),
    ]);
}
export default NavBarItem;