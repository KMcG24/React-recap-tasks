import React from "react";

// refactor this component so that the list is rendered without hard coding
// bonus: use a variable so that it renders an arbitrary number of list items
// const List = () => (
//     <ul class="list">
//         <li class="item">Item 1</li>
//         <li class="item">Item 2</li>
//         <li class="item">Item 3</li>
//         <li class="item">Item 4</li>
//         <li class="item">Item 5</li>
//         <li class="item">Item 6</li>
//         <li class="item">Item 7</li>
//         <li class="item">Item 8</li>
//         <li class="item">Item 9</li>
//         <li class="item">Item 10</li>
//         <li class="item">Item 11</li>
//         <li class="item">Item 12</li>
//         <li class="item">Item 13</li>
//         <li class="item">Item 14</li>
//         <li class="item">Item 15</li>
//     </ul>
// );

class ListItem extends React.Component {
  render() {
    return <li>{this.props.title}</li>;
  }
}

export default ListItem;
