import React from "react";

class TodoMenu extends React.Component{
 render(){
     return (
         <div className='todo_item-menu'>
             <ul>
                 <li><a href="#">Edit</a></li>
                 <li><a href="#">Remove</a></li>
             </ul>
         </div>
     )
 }
}

export default TodoMenu;